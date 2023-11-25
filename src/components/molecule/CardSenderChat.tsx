'use client';

import {Card, CardHeader, CardBody} from "@nextui-org/react";

type CardSenderChatProps = {
    message: string;
}

const CardSenderChat = (props: CardSenderChatProps) => {

    return(
        <>
            <div className="w-full flex justify-end p-5">
                <Card className="p-4 bg-primary">
                    <CardHeader className="justify-between">
                    <div className="flex gap-5">
                        <div className="flex flex-col gap-1 items-start justify-center">
                            <h4 className="text-small font-semibold leading-none text-default-600">You</h4>
                        </div>
                    </div>
                    </CardHeader>
                    <CardBody className="px-3 py-1 text-small text-white">
                        <p>{props.message}</p>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

export default CardSenderChat;