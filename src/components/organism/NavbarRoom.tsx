'use client';

import { Avatar, Modal, Button } from "@nextui-org/react";
import ModalCreateRoom from "./ModalCreateRoom";
import IconLogout from "../atom/IconLogout";
import { deleteCookie } from "cookies-next";
interface NavbarRoomProps {
    name: string;
}

const NavbarRoom: React.FC<NavbarRoomProps> = ({name}) => {
    return(
        <>
        <nav className="bg-black w-full flex flex-row border-b-1 border-white/50 p-5 items-center justify-between">
            <p className="text-white font-medium text-lg">{name}</p>
            <div className="flex flex-row gap-x-3 items-center">
            <ModalCreateRoom />
            <Button isIconOnly color="danger" aria-label="Like" onClick={() => {
                window.localStorage.clear();
                deleteCookie('isLogin');
                window.location.reload();
            }}>
                <IconLogout />
            </Button>
            </div>
        </nav>
        </>
    )
}

export default NavbarRoom;