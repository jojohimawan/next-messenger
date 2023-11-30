import React, { useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input} from "@nextui-org/react";
import IconAdd from "../atom/IconAdd";
import { create } from "@/app/utils";

export default function ModalCreateRoom() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [roomName, setRoomName] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const {createRoom} = create();

    const handleCreateRoom = async (onClose: any) => {
        setIsLoading(true);
        try {
            const res = await createRoom({
                host_id: +window.localStorage.getItem('id')!,
                room_name: roomName,
            });

            if(res) {
                console.log(res.data);
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setTimeout(() => {
                setRoomName('');
                setIsLoading(false);
                onClose();
            }, 2000);
        }
    };

    return (
    <>
        <Button onPress={onOpen} color="primary" isIconOnly><IconAdd/></Button>
        <Modal 
            isOpen={isOpen} 
            onOpenChange={onOpenChange}
            placement="top-center"
            backdrop="blur"
        >
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1 text-white">Create Room</ModalHeader>
                <ModalBody>
                    <Input
                    autoFocus
                    label="Room Name"
                    placeholder="Enter your room name"
                    variant="bordered"
                    className="text-white"
                    onChange={(e) => setRoomName(e.currentTarget.value)}
                    value={roomName}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="flat" onPress={onClose}>
                    Cancel
                    </Button>
                    <Button color="primary" isLoading={isLoading} onClick={() => handleCreateRoom(onClose)}>
                    Create
                    </Button>
                </ModalFooter>
                </>
            )}
            </ModalContent>
        </Modal>
    </>
    );
}