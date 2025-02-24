"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// بيانات السلايدر

interface DataType {
    profession: string;
    name: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        profession: 'المؤسس المشارك',
        name: 'جون دو',
        imgSrc: '/images/wework/avatar.svg',
    },
    {
        profession: 'المؤسس المشارك',
        name: 'جون دو',
        imgSrc: '/images/wework/avatar3.svg',
    },
    {
        profession: 'المؤسس المشارك',
        name: 'جون دو',
        imgSrc: '/images/wework/avatar4.svg',
    },
    {
        profession: 'المؤسس المشارك',
        name: 'جون دو',
        imgSrc: '/images/wework/avatar.svg',
    },
    {
        profession: 'المؤسس المشارك',
        name: 'جون دو',
        imgSrc: '/images/wework/avatar3.svg',
    },
    {
        profession: 'المؤسس المشارك',
        name: 'جون دو',
        imgSrc: '/images/wework/avatar4.svg',
    },
]

// إعدادات السلايدر

export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (
            <div className="bg-wework py-32 text-right">
                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 '>
                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-2">مؤسسة ديم السحاب للنقل والتخزين</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-50 lg:ml-48 my-2">شركاؤكم لتطوير أعمالكم</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-25 lg:-ml-32 my-2">خدمات لوجستية آمنة وموثوقة</h3>
                    </div>

                </div>
                <Slider {...settings}>
                    {postData.map((items, i) => (
                        <div key={i}>
                            <div className='bg-white m-3 py-14 my-10 text-center shadow-xl rounded-3xl'>
                                <div className='relative'>
                                    <Image src={items.imgSrc} alt="المستخدم" width={182} height={182} className="inline-block m-auto" />
                                    <Image src={'/images/wework/linkedin.svg'} alt="لينكدإن" width={120} height={120} className="absolute inline-block position-linkedin" />
                                </div>
                                <h4 className='text-4xl font-bold pt-14'>{items.name}</h4>
                                <h3 className='text-2xl font-normal pt-4 pb-2 opacity-50'>{items.profession}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}
