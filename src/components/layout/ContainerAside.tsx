'use client';
import React from 'react';

export default function ContainerAside({children} : {children: React.ReactNode}) {
    return(
        <>
            <aside className="left-0  w-1/3 border-r-1 border-white/50 h-screen" aria-label="Sidebar">
                {children}
            </aside>
        </>
    )
}