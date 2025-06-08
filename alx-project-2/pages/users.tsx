import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '../components/layout/Header';
import UserCard from '../components/common/UserCard';
import { UserProps } from '../interfaces';

const UsersPage: React.FC = () => {
    const [users, setUsers] = useState<UserProps[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await res.json();
                setUsers(data);
            } catch (error) {
                console.error('Failed to fetch users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <>
            <Head>
                <title>Users | My Next.js App</title>
            </Head>
            <Header />
            <main className="min-h-screen bg-gray-100 p-8">
                <h1 className="text-3xl font-bold mb-6">User List</h1>
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {users.map((user) => (
                        <UserCard key={user.id} user={user} />
                    ))}
                </div>
            </main>
        </>
    );
};

export default UsersPage;