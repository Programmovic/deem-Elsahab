import Image from "next/image";
import Link from "next/link";

// MIDDLE LINKS DATA
interface ProductType {
    id: number;
    section: string;
    link: string[];
}

// const products: ProductType[] = [
//     {
//         id: 1,
//         section: "Menu",
//         link: ['Home', 'Popular', 'About', 'Contact'],
//     },
//     {
//         id: 2,
//         section: "Category",
//         link: ['Design', 'Mockup', 'View all', 'Log In']
//     },
//     {
//         id: 3,
//         section: "Pages",
//         link: ['404', 'Instructions', 'License']
//     },
//     {
//         id: 4,
//         section: "Others",
//         link: ['Styleguide', 'Changelog']
//     }
// ]

const products: ProductType[] = [
    {
        id: 1,
        section: "القائمة",
        link: ['الرئيسية', 'الأكثر شهرة', 'معلومات عنا', 'اتصل بنا'],
    },
]


const footer = () => {
    return (
        <div className="bg-black" id="first-section">
            <div className="mx-auto max-w-2xl pt-16 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

                    {/* COLUMN-1 */}

                    <div className='col-span-4'>
                        <h3 className='text-white text-4xl font-semibold leading-9 mb-4 lg:mb-20'> ديم السحاب</h3>
                        <div className='flex gap-4'>
                            <div className='footer-icons'>
                                <Link href="https://www.facebook.com/daim.alsahab/"><Image src={'/images/footer/vec.svg'} alt="facebook" width={15} height={20} /></Link>
                            </div>
                            <div className='footer-icons'>
                                <Link href="https://www.snapchat.com/add/daim.alsahab"><Image src={'/images/footer/snapchat.svg'} alt="snapchat" width={20} height={20} /></Link>
                            </div>
                            <div className='footer-icons'>
                                <Link href="https://www.instagram.com/daim.alsahab/"><Image src={'/images/footer/instagram.svg'} alt="instagram" width={20} height={20} /></Link>
                            </div>
                        </div>
                    </div>


                    {products.map((product) => (
                        <div key={product.id} className="group relative col-span-2">
                            <p className="text-white text-xl font-extrabold mb-9">{product.section}</p>
                            <ul>
                                {product.link.map((link: string, index: number) => (
                                    <li key={index} className='mb-5'>
                                        <Link href="/" className="text-white text-lg font-normal mb-6 space-links">{link}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>
            </div>

            {/* All Rights Reserved */}

            <div className="mx-auto max-w-2xl lg:max-w-7xl">
                <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-solid border-t border-footer">
                    <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8">
                        <div>
                            <h3 className='text-center md:text-start text-offwhite text-lg'>
                                @2025 - جميع الحقوق محفوظة بواسطة
                                <Link href="https://b-circles.co/" target="_blank"> بي سيركلز</Link>
                            </h3>
                        </div>
                        <div className="flex justify-center md:justify-end space-x-8 rtl:space-x-reverse">
                            <Link href="/">
                                <h3 className="text-offwhite">سياسة الخصوصية</h3>
                            </Link>
                            <Link href="/">
                                <h3 className="text-offwhite border-solid border-l border-footer pl-8">الشروط والأحكام</h3>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>


        </div>

    )
}

export default footer;
