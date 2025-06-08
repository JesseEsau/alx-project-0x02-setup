import React from 'react';
import Head from 'next/head';
import Card from '@/components/common/Card';

const HomePage: React.FC = () => {
    return (
        <>
            <Head>
                <title>Home | My Next.js App</title>
            </Head>
            <main className="flex flex-col min-h-screen items-center justify-center bg-white">
                <h1 className="text-4xl font-bold text-blue-600">This is the Home Page</h1>
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <Card title="Getting Started" content="Learn how to set up and structure your Next.js project." />
                    <Card title="Routing" content="Understand how to create dynamic and static routes using the Pages Router." />
                    <Card title="Components" content="Build reusable components with props and TypeScript interfaces." />
                </div>
            </main>
        </>
    );
};

export default HomePage;
