


import Image from "next/image";

const Dedicated = () => {
    return (
        <div className="relative">

            <Image src="/images/dedicated/spiral.svg" height={272} width={686} alt="تصميم حلزوني" className="absolute left-0 hidden lg:block -z-10" />

            <div className='mx-auto max-w-7xl px-4 my-40 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-1 my-16'>
 
             

                    {/* العمود الثاني - النص */}
                    <div className="relative">
                        
                        <Image src="images/dedicated/comma.svg" alt="comma" width={200} height={106} className="absolute comma-pos hidden lg:block" />
                        <h2 className="text-4xl lg:text-65xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start">
                            ملتزمون بتقديم حلول لوجستية مبتكرة وموثوقة.
                        </h2>
                        <p className="font-medium text-lightblack text-2xl mt-5 text-center lg:text-start">
                            نعمل بجد لضمان أعلى مستويات الجودة والكفاءة في عملياتنا، لنكون الخيار الأول في عالم الخدمات اللوجستية.
                        </p>
                        
                        <Image src="/images/dedicated/spiral.svg" height={272} width={686} alt="تصميم حلزوني" className="absolute left-0 hidden lg:block -z-10" />

                        {/* <p className="text-2xl font-semibold mt-12 lg:ml-32 preline text-center lg:text-start">
                            محمد العتيبي، الرئيس التنفيذي
                        </p> */}
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Dedicated;
