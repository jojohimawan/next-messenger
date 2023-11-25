'use client';

import React from 'react';

export default function ContainerRoom({children} : {children: React.ReactNode}) {
    return(
        <>
            <div className="max-h-screen overflow-y-auto bg-black">
                {children}
            </div>
        </>
    )
}