import { Navbar } from '@/components/navbar';
import React from 'react';

interface Props {
    header?: React.ReactNode;
    children: React.ReactNode;
}
export function AppLayout({ children }: Props) {
    return (
        <div className="min-h-svh bg-muted/40">
            <Navbar />
            {children}
        </div>
    );
}