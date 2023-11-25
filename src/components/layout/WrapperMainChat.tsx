'use client';
import React from 'react';

export default function WrapperMainChat({children} : {children: React.ReactNode}) {
    return(
        <>
            <div className="w-full h-screen flex flex-col justify-between overflow-y-auto">
                {children}
            </div>
        </>
    )
}