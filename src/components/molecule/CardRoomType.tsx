'use client';

import {Card, CardHeader, CardBody, Avatar} from "@nextui-org/react";
import React, { Children } from "react";
import IconUser from "../atom/IconUser";
import IconUsers from "../atom/IconUsers";

type CardRoomTypeProps = {
    type: string;
}

const CardRoomType: React.FC<CardRoomTypeProps> = ({type}) => {

    return(
        <>
            <Card isPressable className="w-full rounded-none px-5 pt-2 bg-primary">
                <CardBody className="flex flex-row gap-x-5 items-center">
                    {type === 'host' ? <IconUser /> : <IconUsers />}
                    <p className="font-bold text-md">{type === 'host' ? 'Hosted Rooms' : 'Enrolled Rooms'}</p>
                </CardBody>
            </Card>
        </>
    )
}

export default CardRoomType