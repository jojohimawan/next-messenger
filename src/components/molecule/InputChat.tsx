'use client';

import React, {useState, useEffect, useRef, Dispatch, SetStateAction} from "react";
import {Input, Button} from "@nextui-org/react";
import IconSend from "../atom/IconSend";
import { Socket } from "socket.io-client";
import { create } from "@/app/utils";

type MessagesData = {
    id: number;
    room_id: string;
    sender_id: number;
    pesan: string;
    is_deleted: boolean;
}

type Props = {
    messages: MessagesData[];
    setMessages: Dispatch<SetStateAction<MessagesData[]>>;
    socket: Socket;
    room_id: string | null;
}

const InputChat: React.FC<Props> = ({messages, setMessages, socket, room_id}) => {
    const [tmp, setTmp] = useState<string>('');
    const { createChat } = create();

    useEffect(() => {
        socket.on('accTyping', (data: any) => {
            setTmp(data);
            console.log(data);
        })

        socket.on('message-received', (data: MessagesData) => {
            setMessages(prevMessages => [...prevMessages, data]);
            console.log(data);
            console.log("message received")
        })

        return () => {
            socket.off('accTyping');
            socket.off('message-received');
        }
    }, [])
    
    const handleSend = async () => {
        const msg: MessagesData = {
            id: 0,
            room_id: room_id!,
            sender_id: 2,
            pesan: tmp,
            is_deleted: false,
        }
        console.log(messages);
        setTmp('');
        socket.emit('message-sent', msg);
        // try {
        //     const res = await createChat(msg);

        //     if(res) {
        //         alert('Message sent');
        //     }
        // } catch (error) {
        //     console.error('Error:', error);
        // }
    }

    const handleTyping = (e: React.FormEvent<HTMLInputElement>): void => {
        setTmp(e.currentTarget.value);
        socket.emit('sendTyping', e.currentTarget.value)
    }

    const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSend();
        }
    }

    return(
        <>
        <Input 
            type="text" 
            placeholder="Type a message" 
            className="w-full text-white" 
            onChange={(e) => handleTyping(e)} 
            onKeyUp={(e) => handleEnter(e)}
            value={tmp}
        />
        <Button 
            radius="full" 
            isIconOnly={true} 
            size="lg" 
            onClick={handleSend}
        >
            <IconSend />
        </Button>
        </>
    )
}

export default InputChat;