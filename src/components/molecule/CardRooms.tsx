'use client';

import {Card, CardHeader, CardBody, Avatar} from "@nextui-org/react";

type CardRoomsProps = {
    lastMessage: string;
    initial: string;
    name: string;
}

const CardRooms = (props: CardRoomsProps) => {

    return(
        <>
            <Card isBlurred isPressable className="border-b-1 border-white/50  w-full rounded-none px-3 pt-1">
                <CardHeader className="flex gap-2">
                    <Avatar name={props.initial} size="lg"/>
                    <div className="flex flex-col items-start">
                        <p className="font-medium">{props.name}</p>
                        <span className="text-small text-default-500">nextui.org</span>
                    </div>
                </CardHeader>
                <CardBody>
                    <p>{props.lastMessage}</p>
                </CardBody>
            </Card>
        </>
    )
}

export default CardRooms