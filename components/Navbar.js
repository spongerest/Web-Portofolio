import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between bg-red-200 text-teal-800 p-4">
            <div className="flex items-center space-x-4">
                <span className="text-xl font-semibold">My Portfolio</span>
            </div>
            <div className="flex items-center space-x-4">
                <div className="flex justify-end space-x-4">
                    <Link href="/" passHref>
                        <span className="cursor-pointer font-semibold hover:text-black transition duration-300">Home</span>
                    </Link>
                    <Link href="/about" passHref>
                        <span className="cursor-pointer font-semibold text-teal-800 hover:text-black transition duration-300">About</span>
                    </Link>
                    <Link href="/technologies" passHref>
                        <span className="cursor-pointer font-semibold text-teal-800 hover:text-black transition duration-300">Technologies</span>
                    </Link>
                    <Link href="/projects" passHref>
                        <span className="cursor-pointer font-semibold text-teal-800 hover:text-black transition duration-300">Projects</span>
                    </Link>
                    <Link href="/contact" passHref>
                        <span className="cursor-pointer font-semibold hover:text-black transition duration-300">Contact</span>
                    </Link>
                    <a href="https://www.linkedin.com/in/restu-windri-pangestu" target="_blank" rel="noopener noreferrer">
                        <Image src="/images/linkedin-removebg-preview.png" alt="LinkedIn" width="30" height="20" className="hover:opacity-80 transition duration-300" />
                    </a>
                    <a href="https://github.com/spongerest" target="_blank" rel="noopener noreferrer">
                        <Image src="/images/github-removebg-preview.png" alt="GitHub" width="50" height="20" className="hover:opacity-80 transition duration-300" />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
