import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="flex flex-row justify-around bg-gray-800 p-4 text-white">
            <h1 className="text-xl font-bold">My Next.js App</h1>
            <nav className="space-x-4">
                <Link href="/home" className="text-blue-600 hover:underline">Home</Link>
                <Link href="/about" className="text-blue-600 hover:underline">About</Link>
                <Link href="/posts" className="text-blue-600 hover:underline">Posts</Link>
                <Link href="/users" className='text-blue-600 hover:underline'>Users</Link>
            </nav>
        </header>
    );
};

export default Header;
