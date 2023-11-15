'use client';

import React from "react";
import {Card, CardBody, CardFooter, CardHeader, Divider, Link, Image} from "@nextui-org/react";

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
        <aside className="fixed top-0 left-0 z-40 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full overflow-y-auto bg-gray-50 dark:bg-gray-800">
                {message.map(message => {
                    return(
                        <Card isBlurred isPressable className="border-none bg-background/60 dark:bg-default-100/50 w-full rounded-none">
                            <CardHeader className="flex gap-3">
                                <div className="bg-primary text-white rounded-full p-5">
                                    {message.name.charAt(0)}
                                </div>
                            <div className="flex flex-col">
                            <p className="text-md">{message.name}</p>
                            <p className="text-small text-default-500">nextui.org</p>
                            </div>
                            </CardHeader>
                            <CardBody>
                                <p>{message.message}</p>
                            </CardBody>
                        </Card>
                    )
                })}
            </div>
        </aside>
        </>
    );
}
