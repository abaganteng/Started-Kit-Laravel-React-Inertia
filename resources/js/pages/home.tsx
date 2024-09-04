import { Header } from "@/components/header";
import { AppLayout } from "@/layouts/app-layout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function Home({ auth }: PageProps) {
    return (
        <>
            <Head title="Home" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                    </div>
                </div>
            </div>
        </>
    );
}

Home.layout = (page: any) => <AppLayout>
    <Header title="Home"/>
</AppLayout>