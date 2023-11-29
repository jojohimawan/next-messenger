'use client';

import { Avatar, Button } from "@nextui-org/react";
import IconCamera from "../atom/IconCamera";
import IconMagnifier from "../atom/IconMagnifier";
import IconAdjuster from "../atom/IconAdjuster";
import IconClose from "../atom/IconClose";
import { useRouter } from "next/navigation";

interface NavbarChatProps {
    roomName: string;
}

const NavbarChat: React.FC<NavbarChatProps> = ({ roomName }) => {
    const router = useRouter();
    const handleClearParams = () => {
        router.replace('/chats');
    };

    return(
        <>
        <nav className="bg-black w-full flex flex-row border-b-1 border-white/50 py-5 px-5 items-center justify-between">
            <div className="flex flex-row gap-x-5 items-center">
            <Button isIconOnly  aria-label="Like" className="bg-black" onClick={handleClearParams}>
                <IconClose />
            </Button>
                <Avatar name="A" size="md"/>
                <p className="text-white font-medium text-lg">{roomName}</p>
            </div>

            <div className="flex flex-row gap-x-5">
                <div>
                    <IconCamera />
                </div>

                <div>
                    <IconMagnifier />
                </div>

                <div>
                    <IconAdjuster />
                </div>
            </div>
        </nav>
        </>
    )
}

export default NavbarChat;