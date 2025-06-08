import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 p-4 text-white">
            <nav className="flex space-x-4">
                <Link href="/">
                    <span className="hover:underline cursor-pointer">Home (Root)</span>
                </Link>
                <Link href="/home">
                    <span className="hover:underline cursor-pointer">Home</span>
                </Link>
                <Link href="/about">
                    <span className="hover:underline cursor-pointer">About</span>
                </Link>
            </nav>
        </header>
    );
};

export default Header;
