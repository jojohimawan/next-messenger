'use client';
import React from 'react';

export default function WrapperGlobal({children} : {children: React.ReactNode}) {
    return(
        <>
            <div className="flex flex-row">
                {children}
            </div>
        </>
    )
}