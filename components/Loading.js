import React from 'react';
import Image from 'next/image';

const Loading = () => {
    return (
        <div className="fixed inset-0 bg-white flex justify-center items-center z-50">
            <div className="animate-spin">
                <Image
                    src="/images/Screenshot_2024-02-16_231605-removebg-preview.png"
                    alt="Loading"
                    width={150} // Sesuaikan ukuran sesuai keinginan
                    height={150} // Sesuaikan ukuran sesuai keinginan
                    priority // Load image immediately
                />
            </div>
        </div>
    );
};

export default Loading;
