'use client';

import {Card, CardHeader, CardBody, Avatar} from "@nextui-org/react";

type CardSReceiverChatProps = {
    name: string;
    message: string;
}

const CardReceiverChat = (props: CardSReceiverChatProps) => {

    return(
        <>
            <div className="w-full flex justify-start p-5">
                <Card className="p-4">
                    <CardHeader className="justify-between">
                        <div className="flex gap-5">
                            <Avatar isBordered radius="full" size="md" name="A" className="bg-primary"/>
                            <div className="flex flex-col gap-1 items-start justify-center">
                                <h4 className="text-small font-semibold leading-none text-default-600">{props.name}</h4>
                                <h5 className="text-small tracking-tight text-default-400">@{props.name}</h5>
                            </div>
                        </div>
                    </CardHeader>
                    <CardBody className="px-3 py-0 text-small text-white">
                        <p>{props.message}</p>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

export default CardReceiverChat;