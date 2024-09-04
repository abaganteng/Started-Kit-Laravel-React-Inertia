import React from 'react';
import { Container } from './container';

export function Header({title}: {title: string}) {
    return (
        <header className='mb-6 border-b bg-background py-6'>
            <Container>
                <h1 className='text-3xl font-semibold tracking-tight text-foreground'>{title}</h1>
            </Container>
        </header>
    );
}