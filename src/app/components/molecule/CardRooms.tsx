'use client';

import {Card, CardHeader, CardBody, Avatar} from "@nextui-org/react";

interface CardRoomsProps {
    lastMessage: string;
    initial: string;
    name: string;
}

const CardRooms: React.FC<CardRoomsProps> = ({lastMessage, initial, name}) => {

    return(
        <>
            <Card isBlurred isPressable className="border-b-1 border-white/50  w-full rounded-none px-3 pt-1">
                <CardHeader className="flex gap-2">
                    <Avatar name={initial} size="lg"/>
                    <div className="flex flex-col items-start">
                        <p className="font-medium">{name}</p>
                        <span className="text-small text-default-500">nextui.org</span>
                    </div>
                </CardHeader>
                <CardBody>
                    <p>{lastMessage}</p>
                </CardBody>
            </Card>
        </>
    )
}

export default CardRooms