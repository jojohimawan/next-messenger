'use client';

import React from 'react';

type userContext = {
    id: string;
    name: string;
}

const UserContext = React.createContext<
[userContext, React.Dispatch<React.SetStateAction<userContext>>] | undefined
>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [userCtx, setUserCtx] = React.useState({id: '', name: ''});
    return (
    <UserContext.Provider value={[userCtx, setUserCtx]}>
        {children}
    </UserContext.Provider>
    );
}

export function useUser() {
    const context = React.useContext(UserContext);
    if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}