'use client';

import {Card, CardHeader, CardBody, Avatar} from "@nextui-org/react";

interface CardSReceiverChatProps {
    name: string;
    message: string;
}

const CardReceiverChat: React.FC<CardSReceiverChatProps> = ({name, message}) => {

    return(
        <>
            <div className="w-full flex justify-start px-10 pt-5">
                <Card className="p-4">
                    <CardHeader className="justify-between">
                        <div className="flex gap-5">
                            <Avatar isBordered radius="full" size="md" name="A" />
                            <div className="flex flex-col gap-1 items-start justify-center">
                                <h4 className="text-small font-semibold leading-none text-default-600">{name}</h4>
                                <h5 className="text-small tracking-tight text-default-400">@{name}</h5>
                            </div>
                        </div>
                    </CardHeader>
                    <CardBody className="px-3 py-0 text-small text-default-400">
                        <p>{message}</p>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

export default CardReceiverChat;