import React from 'react';
import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Welcome | My Next.js App</title>
        <meta name="description" content="A basic Next.js project with TypeScript and Tailwind CSS" />
      </Head>

      <main className="flex min-h-screen items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to My Next.js App!
        </h1>
      </main>
    </>
  );
};

export default Home;
