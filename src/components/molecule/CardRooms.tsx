'use client';

import {Card, CardHeader, CardBody, Avatar} from "@nextui-org/react";

type CardRoomsProps = {
    lastMessageSender: string;
    lastMessage: string;
    initial: string;
    name: string;
}

const CardRooms: React.FC<CardRoomsProps> = ({lastMessageSender, lastMessage, initial, name}) => {

    return(
        <>
            <Card isBlurred isPressable className="border-b-1 border-white/50  w-full rounded-none px-3 pt-1">
                <CardHeader className="flex gap-2">
                    <Avatar name={initial} size="lg"/>
                    <div className="flex flex-col items-start">
                        <p className="font-medium text-md">{name}</p>
                        <p className="text-sm text-default-500">nextui.org</p>
                    </div>
                </CardHeader>
                <CardBody>
                    <div className="flex flex-row gap-x-2">
                        <p className="text-sm font-bold">{lastMessageSender}:</p>
                        <p className="text-sm">{lastMessage}</p>
                    </div>
                </CardBody>
            </Card>
        </>
    )
}

export default CardRooms