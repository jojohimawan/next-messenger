'use client';

import {Input, Button} from "@nextui-org/react";
import IconSend from "../atom/IconSend";

const InputChat = () => {
    return(
        <>
        <Input type="text" placeholder="Type a message" className="w-full" />
        <Button radius="full" isIconOnly={true} size="lg">
            <IconSend />
        </Button>
        </>
    )
}

export default InputChat;