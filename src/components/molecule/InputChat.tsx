'use client';

import React, {useState, useEffect, useRef} from "react";
import {Input, Button} from "@nextui-org/react";
import IconSend from "../atom/IconSend";
import { Socket } from "socket.io-client";

type MessagesData = {
    id: number;
    room_id: number;
    sender_id: number;
    pesan: string;
    is_deleted: boolean;
}

type Props = {
    messages: MessagesData[];
    setMessages: (msg: MessagesData[]) => void;
    socket:React.MutableRefObject<Socket>;
}

const InputChat: React.FC<Props> = ({messages, setMessages, socket}) => {
    const [tmp, setTmp] = useState<string>('');

    useEffect(() => {
        if(socket.current) {
            socket.current.on('accTyping', (data: any) => {
                setTmp(data);
                console.log(data);
            })
        }
    }, [socket])
    

    const handleSend = () => {
        const msg: MessagesData = {
            id: 2,
            room_id: 1,
            sender_id: 2,
            pesan: tmp,
            is_deleted: false,
        }
        setMessages([...messages, msg]);
        console.log(messages);

        setTmp('');
    }

    const handleTyping = (e: React.FormEvent<HTMLInputElement>): void => {
        setTmp(e.currentTarget.value);
        socket.current.emit('sendTyping', e.currentTarget.value)
    }

    return(
        <>
        <Input type="text" placeholder="Type a message" className="w-full text-white" onChange={(e) => handleTyping(e)} value={tmp}/>
        <Button radius="full" isIconOnly={true} size="lg" onClick={handleSend}>
            <IconSend />
        </Button>
        </>
    )
}

export default InputChat;