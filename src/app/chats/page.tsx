'use client';

import React, {useEffect, useState, useRef} from "react";
import { useRouter, useSearchParams } from "next/navigation";

import CardRooms from "@/components/molecule/CardRooms";
import CardSenderChat from "@/components/molecule/CardSenderChat";
import CardReceiverChat from "@/components/molecule/CardReceiverChat";
import CardRoomType from "@/components/molecule/CardRoomType";
import InputChat from "@/components/molecule/InputChat";
import NavbarChat from "@/components/organism/NavbarChat";
import NavbarRoom from "@/components/organism/NavbarRoom";
import SectionChatNull from "@/components/organism/SectionChatNull";
import WrapperMainChat from "@/components/layout/WrapperMainChat";
import ContainerOuterChat from "@/components/layout/ContainerOuterChat";
import ContainerInnerChat from "@/components/layout/ContainerInnerChat";
import ContainerInputChat from "@/components/layout/ContainerInputChat";
import WrapperGlobal from "@/components/layout/WrapperGlobal";
import ContainerAside from "@/components/layout/ContainerAside";
import ContainerRoom from "@/components/layout/ContainerRoom";

import { getUsers } from "@/app/utils/get-users";
import {get, create} from "@/app/utils";
import { io, Socket } from "socket.io-client";
import { getCookie } from "cookies-next";

type UsersData = {
  id: number;
  nama: string;
}

type MessagesData = {
  id: number;
  room_id: string;
  sender_id: number;
  pesan: string;
  is_deleted: boolean;
}

type EnrolledRooms = {
  room_name: string;
  room_id: number;
}

type HostedRooms = {
  id: number;
  host_id: number;
  room_name: string;
}

const socket: Socket = io('http://localhost:3000', { path: "/api/socket", addTrailingSlash: false });

export default function Chats() {
    const [users, setUsers] = useState<UsersData[]>([]);
    const [user, setUser] = useState<UsersData>({id: 0, nama: 'loading...'});
    const [enrolledRooms, setEnrolledRooms] = useState<EnrolledRooms[]>();
    const [hostedRooms, setHostedRooms] = useState<HostedRooms[]>();
    const [messages, setMessages] = useState<MessagesData[]>([]);
    const [savedMessages, setSavedMessages] = useState<MessagesData[]>([]);
    // const socket = useRef<Socket>();
    const router = useRouter();
    const searchParams = useSearchParams();

    const {createRoom} = create();
    const {getEnrolledRooms, getHostedRooms, getMessages} = get();
    
    // const socket: Socket = io('http://localhost:3000', { path: "/api/socket", addTrailingSlash: false });
    
    useEffect(() => {
    // socket = io('http://localhost:3000', { path: "/api/socket", addTrailingSlash: false });

      socket.on("connect", () => {
        console.log("Connected " + socket.id)
      })
    
      socket.on("disconnect", () => {
        console.log("Disconnected")
      })
    
      socket.on("connect_error", async (err:any) => {
        console.log(`connect_error due to ${err.message}`)
        await fetch("/api/socket")
      })

      socket.on("joinedRoom", (data: string) => {
        console.log(data);
      })
    }, []);

    useEffect(() => {
      const usersData = {
        id: +getCookie('id')!,
        nama: getCookie('name')!,
      }

      setUser(usersData);

      async function fetchUsers() {
        try {
          const users = await getUsers();
          setUsers(users.data);
        } catch (error) {
          console.log('error: ' + error);
        }
      }

      async function fetchEnrolledRooms() {
        try {
          const rooms = await getEnrolledRooms(user.id);
          console.log(rooms);
          setEnrolledRooms(rooms.data);
        } catch (error) {
          console.log('error: ' + error);
        }

      }

      async function fetchHostedRooms() {
        try {
          const rooms = await getHostedRooms(+getCookie('id')!);
          console.log(rooms);
          setHostedRooms(rooms.data);
        } catch (error) {
          console.log('error: ' + error);
        }
      }
      fetchUsers();
      fetchEnrolledRooms();
      fetchHostedRooms();
    }, [])

    useEffect(() => {
      console.log(messages);
    }, [messages]);

    useEffect(() => {
      socket.emit('joinRoom', searchParams?.get('room_id'));
      // console.log(searchParams?.get('room_id'));
      setMessages([]);

      async function fetchMessages() {
        try {
          const messages = await getMessages(Number(searchParams?.get('room_id')));
          console.log(messages);
          setSavedMessages(messages.data);
        } catch (error) {
          console.log('error: ' + error);
        }
      }
      fetchMessages();

      return () => {
        socket.emit('leaveRoom', searchParams?.get('room_id'));
        socket.off("joinRoom");
      }
    }, [searchParams])

    const findName = (id: number) => {
      const user = users.find((user) => user.id === id);
      if(!user) {
        return "unknown";
      }

      return user.nama;
    }

    return (
        <>
        <WrapperGlobal>
          <ContainerAside>
            <NavbarRoom name={user.nama} />
              <ContainerRoom>
                <CardRoomType type="hosted" />
                {!hostedRooms ? <p className="text-white mx-auto">fetching...</p> : 
                  hostedRooms.length === 0 ? <p className="text-white text-center p-5">You haven't hosted any room.</p> :
                  hostedRooms.map((hostedRooms: HostedRooms, i:any) => {
                      return(
                        <CardRooms 
                          key={i}
                          initial={hostedRooms.room_name.charAt(0)}
                          name={hostedRooms.room_name}
                          room_id={hostedRooms.id}
                        />
                      )
                  })}
                <CardRoomType type="enrolled" />
                {!enrolledRooms ? <p className="text-white mx-auto">fetching...</p> : 
                enrolledRooms.length === 0 ? <p className="text-white text-center p-5">You haven't enrolled in any room.</p> :
                enrolledRooms.map((enrolledRoom: EnrolledRooms, i:any) => {
                  return(
                    <CardRooms 
                      key={i}
                      initial={enrolledRoom.room_name.charAt(0)}
                      name={enrolledRoom.room_name}
                      room_id={enrolledRoom.room_id}
                    />
                  )
              })}
              </ContainerRoom>
          </ContainerAside>

          {!searchParams || !searchParams.has('room_id') ? <SectionChatNull /> :
          <WrapperMainChat>
            <NavbarChat roomName={'Info Ngopi'}/>
            <ContainerOuterChat>
              <ContainerInnerChat>
                {savedMessages.map((msg: MessagesData, i: any) => (
                  msg.id === 1 ? (
                    <CardSenderChat key={i} message={msg.is_deleted ? "This message was deleted" : msg.pesan} />
                  ) :
                  (
                    <CardReceiverChat key={i} name={findName(msg.sender_id)} message={msg.is_deleted ? "This message was deleted" : msg.pesan} />
                  )
                ))}

                {messages.map((msg: MessagesData, i: any) => (
                  msg.id === 1 ? (
                    <CardSenderChat key={i} message={msg.pesan} />
                  ) :
                  (
                    <CardReceiverChat key={i} name={findName(msg.sender_id)} message={msg.pesan}/>
                  )
                ))}
              </ContainerInnerChat>
            </ContainerOuterChat>
            <ContainerInputChat>
              <InputChat messages={messages} setMessages={setMessages} socket={socket} room_id={searchParams?.get('room_id')}/>
            </ContainerInputChat>
          </WrapperMainChat>}
        </WrapperGlobal>
        </>
    );
}