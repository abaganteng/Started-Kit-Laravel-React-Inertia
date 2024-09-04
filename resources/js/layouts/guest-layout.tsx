import { Logo } from '@/components/logo';
import { Card } from '@/components/ui/card';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export function GuestLayout({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-svh items-center justify-center bg-muted/40">
            <div className="w-full sm:max-w-md">
                <div className="grid place-content-center">
                    <Link href="/">
                        <Logo className="size-16 fill-red-500" />
                    </Link>
                </div>

                <Card className="mt-6 p-6">{children}</Card>
            </div>
        </div>
    );
}