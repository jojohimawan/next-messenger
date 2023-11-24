'use client';

import React, {useEffect, useState, useRef} from "react";

import CardRooms from "@/components/molecule/CardRooms";
import CardSenderChat from "@/components/molecule/CardSenderChat";
import CardReceiverChat from "@/components/molecule/CardReceiverChat";
import InputChat from "@/components/molecule/InputChat";
import NavbarChat from "@/components/organism/NavbarChat";

import { getUsers } from "@/app/utils/get-users";
import { io, Socket } from "socket.io-client";

type UsersData = {
  id: number;
  nama: string;
}

type MessagesData = {
  id: number;
  room_id: number;
  sender_id: number;
  pesan: string;
  is_deleted: boolean;
}

export default function Chats() {
    const [users, setUsers] = useState<UsersData[]>([]);
    const [messages, setMessages] = useState<MessagesData[]>([]);
    const socket = useRef<any>();

    useEffect(() => {
      // fetch('/api/socket', { method: 'POST' });
      socket.current = io('http://localhost:3000', { path: "/api/socket", addTrailingSlash: false })
      socket.current.on("connect", () => {
        console.log("Connected " + socket.current.id)
      })
    
      socket.current.on("disconnect", () => {
        console.log("Disconnected")
      })
    
      socket.current.on("connect_error", async (err:any) => {
        console.log(`connect_error due to ${err.message}`)
        await fetch("/api/socket")
      })
      

      async function fetchUsers() {
        try {
          const users = await getUsers();
          setUsers(users.data);
        } catch (error) {
          console.log('error: ' + error);
        }
      }

      fetchUsers();
    }, []);

    useEffect(() => {
      console.log(messages);
    }, [messages]);

    const findName = (id: number) => {
      const user = users.find((user) => user.id === id);
      if(!user) {
        return "unknown";
      }

      return user.nama;
    }

    return (
        <>
        <div className="flex flex-row">
          <aside className="left-0 h-screen w-80" aria-label="Sidebar">
              <div className="h-full overflow-y-auto bg-black">
                  {!users ? <p className="text-white">gaonok</p> : 
                  users.map((user: UsersData, i:any) => {
                      return(
                        <CardRooms 
                          key={i}
                          lastMessage={user.nama}
                          initial={user.nama.charAt(0)}
                          name={user.nama}
                        />
                      )
                  })}
              </div>
          </aside>

          <div className="w-full h-screen flex flex-col justify-between">
            <NavbarChat name={'lorem ipsum renaldi'} />

            <div className="flex flex-col justify-between h-screen">
              <div className="flex flex-col  overflow-y-auto">
                <CardSenderChat message="Frontend developer and UI/UX enthusiast. Join me on this coding adventure!" />
                <CardReceiverChat name="Dicky Syarif" message="Frontend developer and UI/UX enthusiast. Join me on this coding adventure!" />

                {messages.map((msg: MessagesData, i: any) => (
                  msg.id === 1 ? (
                    <CardSenderChat key={i} message={msg.pesan} />
                  ) :
                  (
                    <CardReceiverChat key={i} name={findName(msg.sender_id)} message={msg.pesan} />
                  )
                ))}
              </div>
            </div>
              <div className="w-full px-10 py-5 flex flex-row gap-x-5 items-center">
                <InputChat messages={messages} setMessages={setMessages} socket={socket}/>
              </div>
          </div>
        </div>
        </>
    );
}
