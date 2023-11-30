'use client';

import React, { useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input} from "@nextui-org/react";
import { create } from "@/app/utils";

export default function ModalJoinRoom() {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [roomId, setRoomId] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const {joinRoom} = create();

    const handleJoinRoom = async (onClose: any) => {
        setIsLoading(true);
        try {
            const res = await joinRoom({
                room_id: +roomId,
                member_id: +window.localStorage.getItem('id')!,
            });

            if(res) {
                console.log(res);
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setTimeout(() => {
                setIsLoading(false);
                onClose();
            }, 2000);
        }
    };

    return(
        <>
        <Button onPress={onOpen} color="primary" >Join a Room</Button>
        <Modal 
            isOpen={isOpen} 
            onOpenChange={onOpenChange}
            placement="top-center"
            backdrop="blur"
        >
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1 text-white">Join Room</ModalHeader>
                <ModalBody>
                    <Input
                    autoFocus
                    label="Room ID"
                    placeholder="Enter your Room ID"
                    variant="bordered"
                    className="text-white"
                    onChange={(e) => setRoomId(e.currentTarget.value)}
                    value={roomId}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="flat" onPress={onClose}>
                    Cancel
                    </Button>
                    <Button color="primary" isLoading={isLoading} onClick={() => handleJoinRoom(onClose)}>
                    Join
                    </Button>
                </ModalFooter>
                </>
            )}
            </ModalContent>
        </Modal>
        </>
    )
}