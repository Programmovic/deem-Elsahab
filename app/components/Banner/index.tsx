import Image from "next/image";
import WhatsApp from "../Navbar/whatsapp";
import Link from "next/link";

const Banner = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center relative flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: "url('/images/banner/banner.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-transparent"></div>
      <div className="relative text-center text-white max-w-3xl px-6">
        <div className="mb-4">
          <button className="text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black">
            مؤسسة
          </button>
        </div>

        <h1 className="text-5xl lg:text-7xl font-bold leading-snug">
          ديم السحاب <br />
          <span className="text-2xl lg:text-2xl font-normal">
            للنقل والتخزين
          </span>
        </h1>

        <p className="mt-4 text-base lg:text-lg text-gray-300 leading-relaxed">
          شريكك الموثوق لتخزين منتجاتك بأعلى معايير الأمان والجودة، مع دعمٍ كامل
          يُسهّل نمو أعمالك.
        </p>

        {/* Fixing visibility and flex properties for mobile */}
        <div className="mt-7 flex flex-col sm:flex-row justify-center items-center gap-4 w-full px-4">
          <div style={{textAlign:"center"}} className="w-full sm:w-auto">
            <WhatsApp text="احجز مساحتك الآن" />
          </div>
          <div className="w-full sm:w-auto">
            <WhatsApp text="اطلب عرض سعر" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
