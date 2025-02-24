// import Image from "next/image";
// import Link from "next/link";
// import { ChevronRightIcon } from '@heroicons/react/20/solid'

// const Aboutdata = [
//     {
//         heading: "انقل",
//         imgSrc: "/images/aboutus/imgOne.png",
//         paragraph: 'تشكيلة واسعة من المركبات تلبي أي احتياج لنقل المخزون من وإلى المستودع في جميع مدن المملكة',
//         link: 'تفاصيل الخدمة '
//     },
//     {
//         heading: "خزن",
//         imgSrc: "/images/aboutus/imgTwo.png",
//         paragraph:" مستودعات جافة، مكيفة، مبردة، ومثلجة للاحتياج الشهري أو طويل المدى، ومرخصة لمختلف الاستعمالات والقطاعات (غذائي، طبي، تجميل، مواد خطرة، إلخ)",
//         link: 'اكتشف المزيد',
//     },
//     {
//         heading: "خلص",
//         imgSrc: "/images/aboutus/imgThree.png",
//         paragraph:"تخليص جمركي في جميع منافذ المملكة مع الدعم الجاري حتى وصول المخزون إلى المستودع",
//         link: 'عرض '
//     },
// ]

// const Aboutus = () => {
//     return (
//         <div id="aboutus-section" className="rtl">
//             <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative'>

//                 {/* Background Dots Decoration */}
//                 <Image 
//                     src="/images/aboutus/dots.svg" 
//                     width={100} 
//                     height={100} 
//                     alt="dots-image" 
//                     className="absolute bottom-4 left-4 opacity-30"
//                 />

//                 <h3 className='text-center text-blue text-lg tracking-widest mb-4'>من نحن</h3>
//                 <h4 className='text-center text-4xl lg:text-5xl font-bold mb-12'>ديم السحاب</h4>

//                 <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16'>
//                     {Aboutdata.map((item, i) => (
//                         <div 
//                             key={i} 
//                             className='hover:bg-navyblue bg-white rounded-3xl p-8 shadow-xl group transition duration-300 ease-in-out'
//                         >
//                             <h4 className='text-3xl font-semibold text-black mb-5 group-hover:text-white'>
//                                 {item.heading}
//                             </h4>
//                             <Image 
//                                 src={item.imgSrc} 
//                                 alt={item.imgSrc} 
//                                 width={100} 
//                                 height={100} 
//                                 className="mb-5"
//                             />
//                             <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5 leading-relaxed'>
//                                 {item.paragraph}
//                             </h4>
//                             <Link 
//                                 href="/faq" 
//                                 className='text-lg font-semibold group-hover:text-white text-blue hover:underline flex items-center space-x-2 rtl:space-x-reverse'
//                             >
//                                 <span>{item.link}</span>
//                                 <ChevronRightIcon width={20} height={20} />
//                             </Link>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Aboutus;


import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'

const Aboutdata = [
    {
        heading: "انقل",
        imgSrc: "/images/aboutus/imgOne.png",
        paragraph: 'تشكيلة واسعة من المركبات تلبي أي احتياج لنقل المخزون من وإلى المستودع في جميع مدن المملكة',
        link: 'تفاصيل الخدمة '
    },
    {
        heading: "خزن",
        imgSrc: "/images/aboutus/imgTwo.png",
        paragraph: " مستودعات مجهزة للاحتياج الشهري أو طويل المدى، و مرخصة لمختلف الاستعمالات والقطاعات (غذائي، طبي، تجميل، مواد خطرة، إلخ))",
        link: 'اكتشف المزيد',
    },
    {
        heading: "خلص",
        imgSrc: "/images/aboutus/imgThree.png",
        paragraph: "تخليص جمركي في جميع منافذ المملكة مع الدعم الجاري حتى وصول المخزون إلى المستودع",
        link: 'عرض '
    },
]

const Aboutus = () => {
    return (
        <div id="aboutus-section" className="rtl">
            <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative'>

                {/* Background Dots Decoration */}
                <Image
                    src="/images/aboutus/dots.svg"
                    width={100}
                    height={100}
                    alt="dots-image"
                    className="absolute bottom-4 left-4 opacity-30"
                />

                <h3 className='text-center text-blue text-lg tracking-widest mb-4'>من نحن</h3>
                <h4 className='text-center text-4xl lg:text-5xl font-bold mb-12'>ديم السحاب</h4>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16'>
                    {Aboutdata.map((item, i) => (
                        <div
                            key={i}
                            className='hover:bg-navyblue bg-white rounded-3xl p-8 shadow-xl group transition duration-300 ease-in-out flex flex-col items-center text-center h-full'
                        >
                            <Image
                                src={item.imgSrc}
                                alt={item.imgSrc}
                                width={100}
                                height={100}
                                className="mb-5"
                            />
                            <h4 className='text-3xl font-semibold text-black mb-4 group-hover:text-white'>
                                {item.heading}
                            </h4>
                            <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5 leading-relaxed text-justify flex-grow'>
                                {item.paragraph}
                            </h4>
                            <div className="mt-auto">
                                {/* <Link
                                    href="https://wa.me/966554222594"
                                    className='text-lg font-semibold group-hover:text-white text-blue hover:underline flex items-center space-x-2 rtl:space-x-reverse'
                                >
                                    <span>{item.link}</span>
                                    <ChevronRightIcon width={20} height={20} />
                                </Link> */}

                                <Link
                                    href="https://wa.me/966554222594"
                                    className="text-lg font-semibold group-hover:text-white text-blue hover:underline flex items-center space-x-2 rtl:space-x-reverse"
                                    target="_blank" // This will open the link in a new tab
                                    rel="noopener noreferrer" // This is for security reasons when using target="_blank"
                                >
                                    <span>{item.link}</span>
                                    <ChevronRightIcon width={20} height={20} />
                                </Link>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Aboutus;
