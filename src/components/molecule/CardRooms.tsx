'use client';

import {Card, CardBody, Avatar} from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type CardRoomsProps = {
    initial: string;
    name: string;
    room_id: number;
}

const CardRooms: React.FC<CardRoomsProps> = ({initial, name, room_id}) => {
    const router = useRouter();
    const pathname = usePathname();

    const handleSetQuery = (room_id: number) => {
        const value = room_id.toString();
        const query = value ? `?room_id=${value}` : '';

        router.replace(`${pathname}${query}`);
    }

    return(
        <>
            <Card 
                isBlurred 
                isPressable 
                className="border-b-1 border-white/50 w-full rounded-none px-3 pt-1" 
                onClick={() => handleSetQuery(room_id)}
            >
                <CardBody className="flex flex-row gap-x-5 items-center">
                    <Avatar name={initial} size="lg"/>
                    <div className="flex flex-col items-start gap-y-2">
                        <p className="font-bold text-md">{name}</p>
                        <p className="text-sm text-default-500">{`Room ID: ${room_id}`}</p>
                    </div>
                </CardBody>
            </Card>
        </>
    )
}

export default CardRooms