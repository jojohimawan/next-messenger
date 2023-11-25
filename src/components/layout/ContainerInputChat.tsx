'use client';

import React from 'react';

export default function ContainerInputChat({children} : {children: React.ReactNode}) {
    return(
        <>
            <div className="w-full px-10 py-5 flex flex-row gap-x-5 items-center">
                {children}
            </div>
        </>
    )
}