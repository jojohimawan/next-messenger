'use client';

import React from 'react';

export default function ContainerInnerChat({children} : {children: React.ReactNode}) {
    return(
        <>
            <div className="flex flex-col max-h-full overflow-y-auto">
                {children}
            </div>
        </>
    )
}