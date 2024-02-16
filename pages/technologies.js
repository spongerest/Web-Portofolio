import React from 'react';
import Slider from 'react-slick';

const Technologies = () => {
    const settingsLeftToRight = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        cssEase: "linear",
        rtl: false
    };

const settingsRightToLeft = {
        ...settingsLeftToRight,
        rtl: true
};

        return (
            <div className="container mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800">Tech Stack</h1>
                    <p className="text-xl text-gray-600">Technologies I've been working with recently</p>
                </div>
                <div className="mb-8">
                    <Slider {...settingsLeftToRight}>
                        <div className="px-4"><img src="/images/python.png" alt="Python Logo" className="h-60 mx-auto" /></div>
                        <div className="px-4"><img src="/images/js.png" alt="JavaScript Logo" className="h-60 mx-auto" /></div>
                        <div className="px-4"><img src="/images/typescript.png" alt="Typescript Logo" className="h-60 mx-auto" /></div>
                        <div className="px-4"><img src="/images/nodejs.png" alt="NodeJs Logo" className="h-60 mx-auto" /></div>
                        <div className="px-4"><img src="/images/html-5.png" alt="HTML5 Logo" className="h-60 mx-auto" /></div>
                        <div className="px-4"><img src="/images/css-3.png" alt="CSS Logo" className="h-60 mx-auto" /></div>
                    </Slider>
                </div>
                <div className="mt-8">
                    <Slider {...settingsRightToLeft}>
                        <div className="px-4"><img src="/images/library.png" alt="Library Logo" className="h-60 mx-auto" /></div>
                        <div className="px-4"><img src="/images/bootstrap.png" alt="Bootstrap Logo" className="h-60 mx-auto" /></div>
                        <div className="px-4"><img src="/images/tailwind-css-icon.png" alt="Tailwind CSS Logo" className="h-60 mx-auto" /></div>
                        <div className="px-4"><img src="/images/logo-mysql-170x115.png" alt="MySQL Logo" className="h-60 mx-auto" /></div>
                        <div className="px-4"><img src="/images/pngegg.png" alt="Egg Logo" className="h-60 mx-auto" /></div>
                        <div className="px-4"><img src="/images/584815fdcef1014c0b5e497a.png" alt="Progress Logo" className="h-60 mx-auto" /></div>
                        <div className="px-4"><img src="/images/icons8-nextjs-48.png" alt="NextJs Logo" className="h-24 mx-auto" /></div>
                    </Slider>
                </div>
                <div className="text-center mt-12">
                    <h1 className="text-4xl font-bold text-gray-800">TOOLS</h1>
                </div>
                <div className="mt-8">
                    <Slider {...settingsLeftToRight}>
                        <div className="px-4"><img src="/images/github-removebg-preview.png" alt="Github Logo" className="h-48 mx-auto" /></div>
                        <div className="px-4"><img src="/images/vscode.png" alt="vscode Logo" className="h-48 mx-auto" /></div>
                        <div className="px-4"><img src="/images/Git-Icon-1788C.png" alt="Git Logo" className="h-48 mx-auto" /></div>
                        <div className="px-4"><img src="/images/icons8-docker-48.png" alt="Docker Logo" className="h-24 mx-auto" /></div>
                        <div className="px-4"><img src="/images/icons8-postman-api-64.png" alt="PostMan Logo" className="h-24 mx-auto" /></div>
                        <div className="px-4"><img src="/images/icons8-npm-a-package-manager-for-the-javascript-programming-language-28.png" alt="NPM Logo" className="h-24 mx-auto" /></div>
                    </Slider>
                </div>
            </div>
        );
        };
    

export default Technologies;
