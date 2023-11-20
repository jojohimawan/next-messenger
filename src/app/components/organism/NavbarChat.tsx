'use client';

import { Avatar } from "@nextui-org/react";
import IconCamera from "../atom/IconCamera";
import IconMagnifier from "../atom/IconMagnifier";
import IconAdjuster from "../atom/IconAdjuster";

interface NavbarChatProps {
    name: string;

}

const NavbarChat: React.FC<NavbarChatProps> = ({name}) => {
    return(
        <>
        <nav className="bg-black w-full flex flex-row border-b-1 border-white/50 py-3 px-5 items-center justify-between">
            <div className="flex flex-row gap-x-5 items-center">
                <Avatar name="A" size="lg"/>
                <p className="text-white font-medium">{name}</p>
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