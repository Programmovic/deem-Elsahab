"use client"
import { useState } from 'react';
import { Switch } from '@headlessui/react';
import Image from 'next/image';


const services = [
    {
        heading: "انقُل",
        description: "توصيل سريع وآمن لجميع أنواع البضائع في كافة مدن المملكة.",
        profiles: 'تشكيلة واسعة من المركبات تلبي أي احتياج',
        posts: 'سرعة في التسليم مع الحفاظ على أمان البضائع',
        templates: "نقل المخزون من وإلى المستودع بمرونة عالية",
        view: "خدمات متاحة لجميع أنواع وأحجام الشحنات",
        support: 'دعم مستمر لتتبع وإدارة الشحنات',
        category: 'yearly'
    },
    {
        heading: "خزِن",
        description: "حلول تخزين مرنة وآمنة تلبي مختلف الاحتياجات.",
        profiles: 'مستودعات مرخصة من هيئة الغذاء والدواء',
        posts: 'مساحات تخزينية واسعة تناسب جميع المنتجات',
        templates: "مستودعات متنوعة",
        view: "خدمات متخصصة لتخزين مستحضرات التجميل والأجهزة الطبية",
        support: 'التزام تام بجميع اشتراطات الجهات الرسمية',
        category: 'yearly'
    },
    {
        heading: "خلِّص",
        description: "خدمات تخليص جمركي وإجراءات إدارية مبسطة.",
        profiles: 'تخليص جمركي في جميع منافذ المملكة',
        posts: 'دعم مستمر حتى وصول المخزون إلى المستودع',
        templates: "إصدار التراخيص وتسجيل المنتجات بسهولة",
        view: "تعاون مباشر مع الجهات المختصة لتسهيل الإجراءات",
        support: 'توفير حلول متكاملة لتسريع العمليات',
        category: 'yearly'
    }
];

const Services = () => {
    const [enabled, setEnabled] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('yearly');

    const toggleEnabled = () => {
        setEnabled(!enabled);
        setSelectedCategory(enabled ? 'monthly' : 'yearly');
    };

    const filteredData = services.filter(items => items.category === selectedCategory);

    return (
        <div id="services-section">
            <div className='rtl mx-auto max-w-7xl sm:py-20 lg:px-8 my-16'>
                <h3 className='text-center text-4xl sm:text-65xl font-black'>خدماتنا</h3>
                <p className='text-center text-lg mt-4'>
                    نقدم لكم مجموعة من الحلول التخزينية الحديثة والذكية لتلبية احتياجات أعمالكم.
                </p>

                <div className='mt-6 relative'>
                    <Image src="/images/manage/toggle.svg" alt="toggle-image" width={24} height={24} className="toggleImage" />
                    
                </div>


                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 mx-5 gap-14 manage'>
                    {filteredData.map((items, i) => (
                        <div className='manageTabs text-center p-10' key={i}>
                            <h4 className='text-2xl font-bold mb-3'>{items.heading}</h4>
                            <p className='text-md font-normal  mb-6'>{items.description}</p>
                            <hr style={{ width: "50%", margin: "auto" }} />
                            <h3 className='text-sm font-medium  mb-3 mt-6'>{items.profiles}</h3>
                            <h3 className='text-sm font-medium  mb-3'>{items.posts}</h3>
                            <h3 className='text-sm font-medium  mb-3'>{items.templates}</h3>
                            <h3 className='text-sm font-medium  mb-3'>{items.view}</h3>
                            <h3 className='text-sm font-medium  mb-3'>{items.support}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Services;
