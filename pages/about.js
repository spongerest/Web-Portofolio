import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

export default function About() {
    return (
        <>
        <Head>
            <title>About Me - Restu W.P</title>
            <meta name="description" content="Learn more about Restu W.P's professional background and experiences." />
        </Head>
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-start md:items-center">
            <div className="md:w-1/2">
                <h1 className="text-5xl font-bold mb-4">About Me</h1>
                <p className="text-lg mb-4">
                I’m an aspiring Junior Software Engineer, 
                thrive in self-directed work environments and seek roles that offer substantial  financial benefits, 
                aligning with my professional goals and personal values. 
                My experience at PT Sakalaguna Semesta  developed my skills in market research, 
                lead generation, customer service, and communication, alongside technical  proficiency in JavaScript, Node.JS, React, PostgreSQL, MySQL, and MongoDB. 
                I bring a unique combination of technical  expertise and soft skills like teamwork, critical thinking, adaptability, and collaboration, positioning me as a standout  candidate for innovative and challenging roles in software engineering.
                </p>
                <h2 className="text-3xl font-bold mt-8 mb-4">Work Experience</h2>
                <div className="mb-4">
                <h3 className="text-2xl font-semibold">PT. Sakalguna Semesta - Sales Executive</h3>
                <p className="text-md text-gray-600">Jan, 2018 – Feb, 2018</p>
                <ul className="list-disc ml-5 text-md">
                    <li>Conducted a comprehensive market analysis on emerging software trends and technologies, identifying new  software development opportunities and resolving technical inquiries.</li>
                    <li>Resolved technical issues and collaborated in development meetings, increasing customer satisfaction by  25% and enhancing user experience.</li>
                    <li>Collaborated in weekly team meetings and facilitated client consultations, contributing to the successful  completion of 5 projects by strategizing on progress and future development paths.</li>
                    <li>Facilitated the delivery software solutions by conducting detailed consultations with clients to understand and  meet their specific needs, and demonstrating software prototypes.</li>
                    <li>Demonstrated software prototypes to clients, effectively communicating benefits and features, leading to  timely project deliveries and exceeding monthly project targets by 15%.</li>
                </ul>
                <h3 className="text-2xl font-semibold">Podoyo Cell & Baraya Petshop - Business Owner</h3>
                <p className="text-md text-gray-600">Feb,2018- Present</p>
                <ul className="list-disc ml-5 text-md">
                    <li>Managed a dynamic product stock, significantly reducing overstock through strategic purchasing decisions  and careful supplier selection, effectively optimizing inventory levels and minimizing waste.</li>
                </ul>
                </div>
                <h2 className="text-3xl font-bold mt-8 mb-4">Education</h2>
                {/* Repeat this block for each education entry */}
                <div className="mb-4">
                <h3 className="text-2xl font-semibold">RevoU - Fullstack Software Engineer</h3>
                <p className="text-md text-gray-600">June, 2023 – December, 2023</p>
                {/* Add more details if needed */}
                </div>
                {/* End education block */}
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8">
                <Image
                src="/images/profile-picture.jpg" // Replace with your profile image path
                alt="Restu W.P"
                width={400} // Adjust size as needed
                height={400} // Adjust size as needed
                className="rounded-full"
                />
            </div>
            </div>
        </div>
        </>
    );
}
