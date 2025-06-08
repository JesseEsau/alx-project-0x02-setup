import React, { useState } from 'react';
import Head from 'next/head';
import Card from '@/components/common/Card';
import PostModal from '../components/common/PostModal';
import { Post } from '../interfaces';

const HomePage: React.FC = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [posts, setPosts] = useState<Post[]>([
        { title: 'Getting Started', content: 'Learn how to set up and structure your Next.js project.' },
        { title: 'Routing', content: 'Understand how to create dynamic and static routes using the Pages Router.' },
    ]);

    const handleAddPost = (newPost: Post) => {
        setPosts([newPost, ...posts]);
    };

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

                {/* Post */}
                <div className="mb-6 text-right">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        + Add Post
                    </button>
                </div>

                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post, index) => (
                        <Card key={index} title={post.title} content={post.content} />
                    ))}
                </div>

                <PostModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onSubmit={handleAddPost}
                />

            </main>
        </>
    );
};

export default HomePage;
