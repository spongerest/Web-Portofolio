import '../styles/globals.css';
import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Set loading to false after 3 seconds or after your specific loading logic
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // Adjust the timing based on your needs
    
        return () => clearTimeout(timer);
    }, []);
    return (
        <>
        <Navbar />
        {isLoading && <Loading />}
        <Component {...pageProps} />
        <Footer />
        </>
    );
}

export default MyApp;
