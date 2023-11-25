'use client';

import React from 'react';

export default function ContainerOuterChat({children} : {children: React.ReactNode}) {
    return(
        <>
            <div className="flex flex-col justify-between h-full">
                {children}
            </div>
        </>
    )
}