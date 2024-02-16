// pages/contact.js
import React from 'react';

const ContactPage = () => {
    const whatsappNumber = "6287779977022";
    const whatsappMessage = encodeURIComponent("Halo, saya tertarik untuk berdiskusi lebih lanjut.");
    const emailAddress = "restuwindripangestu@example.com";

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-4">
                <h2 className="text-xl font-semibold">Jam Kerja Kami</h2>
                <p>Senin - Jumat: 09.00 - 17.00</p>
                <p>Sabtu: 10.00 - 14.00</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
            <div className="flex flex-col items-center space-y-4">
                <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} 
                    className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-700 transition duration-300"
                    target="_blank" rel="noopener noreferrer">
                    Chat via WhatsApp
                </a>
                <a href={`mailto:${emailAddress}`} 
                    className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
                    Send an Email
                </a>
            </div>
            <div className="flex justify-center mt-8">
                <div className="map-container w-full max-w-2xl">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.964129618037!2d107.656099!3d-6.8948941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e79abb6912cd%3A0xb07366987887e622!2sJl.%20Padasuka%20No.129%2C%20Pasirlayung%2C%20Kec.%20Cibeunying%20Kidul%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040192!5e0!3m2!1sid!2sid!4v1708099404031!5m2!1sid!2sid" 
                        width="600" 
                        height="450" 
                        style={{border:0}} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
