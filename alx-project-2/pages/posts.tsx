import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { PostProps } from '@/interfaces';

const PostsPage: React.FC = () => {
    const [posts, setPosts] = useState<PostProps[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
            const data = await res.json();
            const formattedPosts = data.map((post: any) => ({
                title: post.title,
                content: post.body,
                userId: post.userId,
            }));
            setPosts(formattedPosts);
        };

        fetchPosts();
    }, []);

    return (
        <>
            <Head>
                <title>Posts | My Next.js App</title>
            </Head>
            <Header />
            <main className="min-h-screen bg-gray-100 p-8">
                <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post, index) => (
                        <PostCard
                            key={index}
                            title={post.title}
                            content={post.content}
                            userId={post.userId}
                        />
                    ))}
                </div>
            </main>
        </>
    );
};

export default PostsPage;