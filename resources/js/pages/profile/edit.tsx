import {DeleteUserForm} from './partials/delete-user-form';
import {UpdatePasswordForm} from './partials/update-password-form';
import {UpdateProfileInformationForm} from './partials/update-profile-information-form';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { AppLayout } from '@/layouts/app-layout';
import { Container } from '@/components/container';

export default function Edit({
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    return (
        <>
            <Head title="Profile" />
            <Container>
            <div className="py-12 space-y-12">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                        <UpdatePasswordForm className="max-w-xl" />
                        <DeleteUserForm className="max-w-xl" />
            </div>
            </Container>
        </>
    );
}

Edit.layout = (page:any) => <AppLayout children={page}/>