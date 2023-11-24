'use client';

import { Avatar, Modal } from "@nextui-org/react";
import IconAdd from "../atom/IconAdd";
import ModalCreateRoom from "./ModalCreateRoom";

interface NavbarRoomProps {
    name: string;

}

const NavbarRoom: React.FC<NavbarRoomProps> = ({name}) => {
    return(
        <>
        <nav className="bg-black w-full flex flex-row border-b-1 border-r-1 border-white/50 py-5 px-5 items-center justify-between">
            <Avatar name="A" size="md"/>
            <p className="text-white font-medium text-lg">{name}</p>
            <ModalCreateRoom />
        </nav>
        </>
    )
}

export default NavbarRoom;