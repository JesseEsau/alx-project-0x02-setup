import React from 'react';
import Head from 'next/head';

const AboutPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>About | My Next.js App</title>
            </Head>
            <main className="flex min-h-screen items-center justify-center bg-white">
                <h1 className="text-4xl font-bold text-green-600">About This App</h1>
            </main>
        </>
    );
};

export default AboutPage;
