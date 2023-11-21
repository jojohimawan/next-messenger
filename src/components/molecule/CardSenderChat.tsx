'use client';

import {Card, CardHeader, CardBody} from "@nextui-org/react";

type CardSenderChatProps = {
    message: string;
}

const CardSenderChat = (props: CardSenderChatProps) => {

    return(
        <>
            <div className="w-full flex justify-end px-10 pt-5">
                <Card className="p-4">
                    <CardHeader className="justify-between">
                    <div className="flex gap-5">
                        <div className="flex flex-col gap-1 items-start justify-center">
                            <h4 className="text-small font-semibold leading-none text-default-600">You</h4>
                        </div>
                    </div>
                    </CardHeader>
                    <CardBody className="px-3 py-0 text-small text-default-400">
                        <p>{props.message}</p>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

export default CardSenderChat;