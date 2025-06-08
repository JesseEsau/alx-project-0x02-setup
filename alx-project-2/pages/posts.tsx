import React from 'react';
import Head from 'next/head';
import Header from '../components/layout/Header';

const PostsPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>Posts | My Next.js App</title>
            </Head>
            <Header />
            <main className="min-h-screen bg-gray-100 p-8">
                <h1 className="text-3xl font-bold">Posts Page</h1>
                <p className="mt-2 text-gray-600">Post will be here.</p>
            </main>
        </>
    );
};

export default PostsPage;