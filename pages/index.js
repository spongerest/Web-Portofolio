import React from 'react';
import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
    return (
        <>
        <Head>
            <title>Restu - FullStack Software Engineer</title>
            <meta name="description" content="Restu's Portfolio" />
        </Head>
        <main className="container mx-auto flex flex-row items-center justify-center min-h-screen p-4 space-x-12">
            <div>
                <h1 className="text-6xl font-bold">
                Hi, 👋
                </h1>

                <p className="mt-3 text-4xl font-bold">
                My Name is <span className="text-blue-500">Restu W.P</span>
                </p>

                <p className="mt-2 text-2xl font-bold">
                I am a fullstack software engineer
                </p>
                
                <a href="https://drive.google.com/uc?export=download&id=1M2FLDvLE-kyyKpzwOVWFTKMKTjRyk5Dy" className="mt-5 btn-download inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                    Download CV
                </a>
            </div>
            <div className="flex-shrink-0">
                <Image
                    src="/images/coba.jpg"
                    alt="Restu"
                    width={200}
                    height={200}
                    className="rounded-full"
                />
            </div>
        </main>
        </>
    );
}

