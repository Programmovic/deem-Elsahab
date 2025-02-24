import Image from "next/image";

const index = () => {
    return (
        <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 m-32'>
            <h2 className="text-4xl sm:text-65xl font-bold text-center">
                فريقنا يؤمن بأنك تستحق <br /> الأفضل دائمًا.
            </h2>
            <h3 className="text-2xl font-medium text-center pt-10 opacity-50">
                نحن نعمل بجد لضمان حصولك على خدمات موثوقة ومتميزة تلبي احتياجاتك.
            </h3>
            <div className='grid grid-cols-1 my-16'>
    <Image 
        src="/images/team/teamimg.jpg" 
        alt="صورة الفريق" 
        height={684} 
        width={1296} 
        className="rounded-2xl" 
    />
</div>

        </div>
    )
}

export default index;
