import Image from "next/image";

const Digital = () => {
    return (
        <div className="mx-2" dir="rtl">
            <div className='mx-auto max-w-7xl px-4 my-40 pb-20 lg:pb-40 lg:px-8 relative rounded-3xl overflow-hidden'>
                {/* Blurred Background Layer */}
                <div className='absolute inset-0 bg-digital bg-blue blur-sm'></div>
                
                {/* Content Layer */}
                <div className="relative z-10">
                    <div className='grid grid-cols-1 lg:grid-cols-2 my-16'>

                        {/* COLUMN-1 */}
                        <div className="pt-24 lg:pr-24 text-right">
                            <h3 className="text-lg font-normal text-white mb-5 tracking-widest text-center lg:text-right">من نحن</h3>
                            <h4 className="text-4xl sm:text-6xl font-bold text-white mb-8 leading-relaxed text-center lg:text-right">
    نحن في <span className="text-btnblue">ديم السحاب</span> <br /> 
    نسعى لتقديم حلول <br /> 
    تخزينية ذكية وفعالة.
</h4>

                            <div className="text-center lg:text-right">
                                <button className="text-xl font-semibold text-white bg-btnblue py-4 px-12 hover:bg-hoblue rounded-full">
                                    تواصل معنا
                                </button>
                            </div>
                        </div>

                        {/* COLUMN-2 */}
                        {/* <div>
                            <div className="lg:absolute top-[12px] -end-[115px]">
                                <Image src="/images/digital/girldoodle.svg" alt="girldoodle" width={815} height={691} />
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Digital;
