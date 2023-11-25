'use client';

import {Card, CardFooter, Image, Button} from "@nextui-org/react";

export default function SectionChatNull() {
    return(
        <>
            <div className="h-screen w-full flex items-center">
                <div className=" flex flex-col gap-y-8 w-1/2 mx-auto items-center">
                <Card
                isFooterBlurred
                radius="lg"
                className="border-none max-w-[400px]"
                >
                    <Image
                    alt="Person 1"
                    className="object-cover"
                    height={600}
                    src="/chat-banner.jpg"
                    width={400}
                    />
                    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <p className="text-tiny text-white/80">Available soon.</p>
                    <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                        Notify me
                    </Button>
                    </CardFooter>
                </Card>

                <h1 className="font-medium text-5xl text-white max-w-full lg:max-w-3xl text-start">Start Socializing.</h1>
                <p className=" text-white max-w-full lg:max-w-3xl text-start">Chat with your friends, share your thoughts, dont let yourself missed out! ⚡</p>
                </div>
            </div> 
        </>
    )
}