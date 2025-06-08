import React from 'react';
import Head from 'next/head';
import Button from '@/components/common/Button';
import Header from '@/components/layout/Header';

const AboutPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>About | My Next.js App</title>
            </Head>
            <Header />
            <main className="flex flex-col gap-3 min-h-screen items-center justify-start m-3 bg-white">
                <h1 className="text-4xl font-bold text-green-600">About This App</h1>

                <div className="flex gap-4 flex-wrap">
                    <Button size="small" shape="rounded-sm">Small Button</Button>
                    <Button size="medium" shape="rounded-md">Medium Button</Button>
                    <Button size="large" shape="rounded-full">Large Button</Button>
                </div>
            </main>
        </>
    );
};

export default AboutPage;
