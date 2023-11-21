'use client';

import React from "react";

import CardRooms from "@/components/molecule/CardRooms";
import CardSenderChat from "@/components/molecule/CardSenderChat";
import CardReceiverChat from "@/components/molecule/CardReceiverChat";
import InputChat from "@/components/molecule/InputChat";
import NavbarChat from "@/components/organism/NavbarChat";

type Props = {
  id: number;
  nama: string;
}

async function getUsers() {
  const response = await fetch('http:localhost:3001/users/all');
  if(response.ok) {
    const responseBody = await response.json();
    console.log(responseBody);
    return responseBody;
  }
}

export default async function Chats() {
    const users = await getUsers();

    return (
        <>
        <div className="flex flex-row">
          <aside className="left-0 h-screen w-80" aria-label="Sidebar">
              <div className="h-full overflow-y-auto bg-black">
                  {users.data.map((user: Props, i:any) => {
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
            <NavbarChat name="Athena Asamiya" />

            <div className="flex flex-col justify-between h-screen">
              <div className="flex flex-col  overflow-y-auto">
                <CardSenderChat message="Frontend developer and UI/UX enthusiast. Join me on this coding adventure!" />
                <CardReceiverChat name="Dicky Syarif" message="Frontend developer and UI/UX enthusiast. Join me on this coding adventure!" />
                
              </div>
            </div>
              <div className="w-full px-10 py-5 flex flex-row gap-x-5 items-center">
                <InputChat />
              </div>
          </div>
        </div>
        </>
    );
}
