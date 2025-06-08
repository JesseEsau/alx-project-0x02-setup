import { GetStaticProps, NextPage } from 'next';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

interface UsersPageProps {
    users: UserProps[];
}

const UsersPage: NextPage<UsersPageProps> = ({ users }) => {
    return (
        <>
            <Header />
            <main className="p-8 bg-gray-100 min-h-screen">
                <h1 className="text-3xl font-bold mb-6">Users</h1>
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {users.map((user) => (
                        <UserCard key={user.id} user={user} />
                    ))}
                </div>
            </main>
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const users: UserProps[] = await res.json();

        return {
            props: { users },
            revalidate: 60, // Revalidate once per minute
        };
    } catch (error) {
        console.error('Failed to fetch users:', error);
        return {
            props: { users: [] },
        };
    }
};

export default UsersPage;