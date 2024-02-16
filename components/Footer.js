// components/Footer.js
import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between items-center">
            {/* Media Sosial */}
            <div className="flex flex-wrap mt-4 lg:mt-0">
                <a href="https://github.com/spongerest" target="_blank" rel="noopener noreferrer" className="mr-4">GitHub</a>
                <a href="https://www.linkedin.com/in/restu-windri-pangestu" target="_blank" rel="noopener noreferrer" className="mr-4">LinkedIn</a>
                {/* Tambahkan lebih banyak tautan media sosial jika diperlukan */}
            </div>
            </div>
            {/* Hak Cipta */}
            <div className="text-center text-sm mt-8 md:mt-16">
            © {new Date().getFullYear()} Restu W.P. All rights reserved.
            </div>
        </div>
        </footer>
    );
};

export default Footer;
