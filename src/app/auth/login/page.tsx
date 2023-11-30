'use client';

import React,{ useState } from "react";
import {Input, Button} from "@nextui-org/react";
import {auth} from '@/app/utils';
import { useRouter } from "next/navigation";
import { setCookie } from 'cookies-next';
import { useUser } from "@/app/context/userContext";

export default function Page() {
    const {login} = auth();
    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [userCtx, setUserCtx] = useUser();
    const router = useRouter();

    const handleRegister = async () => {
        setIsLoading(true);
        try {
            const res = await login({
                name: name,
                password: password,
            });

            if(res) {
                console.log(res);
                setCookie('isLogin', res.data.isLogin);
                setUserCtx({id: res.data.id, name: res.data.nama});
                window.localStorage.setItem('id', res.data.id);
                window.localStorage.setItem('name', res.data.nama);
                
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setTimeout(() => {
                setName('');
                setPassword('');
                setIsLoading(false);
                router.push(`/chats`);
            }, 2000);
        }
    }

    return (
    <>
        <div className="w-screen h-screen flex items-center">
            <div className="flex flex-col gap-y-8 w-1/3 mx-auto items-center text-white">
                <h1 className="font-medium text-5xl text-white max-w-full lg:max-w-3xl text-start">Login</h1>
                <Input type="text" label="Name" placeholder="Enter your name" onChange={(e) => setName(e.currentTarget.value)}/>
                <Input type="password" label="Password" placeholder="Enter your password" onChange={(e) => setPassword(e.currentTarget.value)}/>
                <Button color="primary" size="lg" isLoading={isLoading} onClick={handleRegister}>
                    Login
                </Button>
            </div>
        </div>
    </>
    );
}