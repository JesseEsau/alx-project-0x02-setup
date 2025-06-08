import React from 'react';
import Head from 'next/head';

const HomePage: React.FC = () => {
    return (
        <>
            <Head>
                <title>Home | My Next.js App</title>
            </Head>
            <main className="flex min-h-screen items-center justify-center bg-white">
                <h1 className="text-4xl font-bold text-blue-600">This is the Home Page</h1>
            </main>
        </>
    );
};

export default HomePage;
