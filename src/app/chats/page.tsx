'use client';

import React from "react";

import CardRooms from "@/components/molecule/CardRooms";
import CardSenderChat from "@/components/molecule/CardSenderChat";
import CardReceiverChat from "@/components/molecule/CardReceiverChat";
import InputChat from "@/components/molecule/InputChat";
import NavbarChat from "@/components/organism/NavbarChat";

export default function App() {
    const message = [
        {
          "name": "Alice",
          "message": "Hello, how are you?"
        },
        {
          "name": "Bob",
          "message": "I'm doing great, thanks!"
        },
        {
          "name": "Charlie",
          "message": "What's up?"
        },
        {
          "name": "Diana",
          "message": "Have you seen the latest movie?"
        },
        {
          "name": "Eve",
          "message": "Yes, it was fantastic!"
        }
      ];

    return (
        <>
        <div className="flex flex-row">
          <aside className="left-0 h-screen w-80" aria-label="Sidebar">
              <div className="h-full overflow-y-auto bg-black">
                  {message.map((message, i) => {
                      return(
                        <CardRooms 
                          key={i}
                          lastMessage={message.message}
                          initial={message.name.charAt(0)}
                          name={message.name}
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
