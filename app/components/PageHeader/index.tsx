"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import WhatsApp from "../Navbar/whatsapp";

const PageHeader = () => {
    const pathname = usePathname();
    const pathArray = pathname.split('/').filter((item) => item);

    // Don't render PageHeader if on the homepage
    if (pathname === '/') return null;

    // Generate Page Title from Last Path Segment
    const pageTitle = pathArray.length > 0
        ? decodeURIComponent(pathArray[pathArray.length - 1])
        : 'الرئيسية';

    return (
        <div className="relative bg-black text-white py-[200px] pb-24 px-6 mb-12">
            {/* Background Image with Stronger Gradient Overlay */}
            <div className="absolute inset-0">
                <img
                    src='/images/banner/banner.jpg'
                    alt="Background"
                    className="w-full h-full object-cover blur-md"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent"></div>
            </div>


            <div className="relative container mx-auto text-center max-w-4xl">
                <h1 className="text-5xl font-extrabold capitalize tracking-wide leading-tight">
                    {pageTitle}
                </h1>

                <nav className="mt-6 text-sm">
                    <ol className="list-reset flex justify-center items-center space-x-2 rtl:space-x-reverse text-gray-300">
                        <li>
                            <Link href="/" className="hover:text-white transition-colors duration-300">
                                الرئيسية
                            </Link>
                        </li>
                        {pathArray.map((path, index) => {
                            const href = '/' + pathArray.slice(0, index + 1).join('/');
                            const isLast = index === pathArray.length - 1;
                            return (
                                <li key={index} className="flex items-center">
                                    <ChevronLeftIcon className="h-4 w-4 mx-2" />
                                    <Link href={href} className={`capitalize ${isLast ? 'text-white' : 'hover:text-white transition-colors duration-300'}`}>
                                        {decodeURIComponent(path)}
                                    </Link>
                                </li>
                            );
                        })}
                    </ol>
                </nav>
     
                {/* Optional Call-to-Action Button */}
                {/* <div className="mt-8"> */}
                {/* <Link href="/contact" 
                    className="inline-block bg-white text-black font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
                        تواصل معنا
                    </Link> */}

                {/* <WhatsApp text=" تواصل معنا" /> */}

                {/* </div> */}

<br />
<br />
                <div className="mt-8 flex justify-center items-center absolute top-3/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <WhatsApp text="أعرف المزيد" />
                </div>

            </div>
        </div>
    );
};

export default PageHeader;
