'use client';

import {Card, CardHeader, CardBody, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import IconArrowDown from "@/components/atom/IconArrowDown";
import { deleteDb } from "@/app/utils";

type CardSenderChatProps = {
    message: string;
    id: number;
}

const CardSenderChat = (props: CardSenderChatProps) => {
    const {deleteChat} = deleteDb();

    const handleDeleteMessage = async () => {
        const id = props.id!;
        try {
            const res = await deleteChat({id: id});
            if(res) { 
                console.log(res);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return(
        <>
            <div className="w-full flex justify-end p-5">
                <Card className="p-4 bg-primary min-w-[200px]">
                    <CardHeader className="justify-between">
                    <div className="flex flex-row w-full items-center justify-between">
                        <h4 className="text-small font-semibold leading-none text-default-600">You</h4>
                        <Dropdown>
                            <DropdownTrigger>
                                <Button 
                                isIconOnly
                                size="sm"
                                color="primary"
                                >
                                    <IconArrowDown />
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Dynamic Actions">
                                <DropdownItem
                                    color="danger"
                                    className="text-white"
                                    onClick={handleDeleteMessage}
                                >
                                    Delete Message
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                    </CardHeader>
                    <CardBody className="px-3 py-1">
                        <div className="text-small text-white">
                        {props.message}
                        </div>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

export default CardSenderChat;