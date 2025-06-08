import { GetStaticProps, NextPage } from 'next';
import PostCard from '@/components/common/PostCard';
import Header from '@/components/layout/Header';
import { PostProps } from '@/interfaces';

interface PostsPageProps {
    posts: PostProps[];
}

const PostsPage: NextPage<PostsPageProps> = ({ posts }) => {
    return (
        <>
            <Header />
            <main className="p-8 bg-gray-100 min-h-screen">
                <h1 className="text-3xl font-bold mb-6">Posts</h1>
                <div className="space-y-4">
                    {posts.map((post) => (
                        <PostCard key={post.id} {...post} />
                    ))}
                </div>
            </main>
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
        const posts: PostProps[] = await res.json();

        return {
            props: { posts },
            revalidate: 60, // re-generate every 60 seconds (ISR)
        };
    } catch (error) {
        console.error('Failed to fetch posts:', error);
        return {
            props: { posts: [] },
        };
    }
};

export default PostsPage;
