import Link from "next/link";
const Beliefs = () => {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 rounded-3xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 my-16 mx-5 gap-5">
        <div className="bg-build pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
          <h2 className="text-lg font-normal text-blue tracking-widest mb-5 text-center sm:text-start">
            التطوير
          </h2>
          <h3 className="text-4xl sm:text-65xl font-bold text-black leading-snug mb-5 text-center sm:text-start">
            <span className="text-blue">نحن</span> نبني شراكات ناجحة لنجاح
            أعمالكم.
          </h3>
          <h5 className="bluish pt-2 mb-5 text-center sm:text-start">
            نسعى لتقديم حلول لوجستية متكاملة تدعم تطلعات عملائنا وتحقق أعلى
            مستويات الكفاءة.
          </h5>
          <div className="text-center sm:text-start z-10">
            <Link href="/services" passHref>
              <span className="inline-block text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue cursor-pointer">
                المزيد عن خدماتنا
              </span>
            </Link>
          </div>
        </div>

        {/* العمود الأول - القيم */}
        <div className="bg-darkblue bg-beliefs pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
          <h2 className="text-lg font-normal text-white tracking-widest mb-5 text-center sm:text-start">
            الجودة
          </h2>
          <h3 className="text-4xl sm:text-65xl font-bold text-white leading-snug mb-5 text-center sm:text-start">
            <span className="text-grey">نلتزم</span> بأعلى معايير الجودة في
            خدماتنا.
          </h3>
          <h5 className="text-offwhite pt-2 mb-5 text-center sm:text-start">
            نحرص على تقديم خدمات موثوقة وآمنة وفق المعايير الدولية لضمان رضا
            عملائنا وشركائنا.
          </h5>
          <div className="text-center sm:text-start">
            <Link href="/about" passHref>
              <span className="inline-block text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue cursor-pointer">
                اكتشف معاييرنا
              </span>
            </Link>
          </div>
        </div>

        {/* العمود الرابع - الابتكار */}
        <div className="bg-build pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
          <h2 className="text-lg font-normal text-blue tracking-widest mb-5 text-center sm:text-start">
            الابتكار
          </h2>
          <h3 className="text-4xl sm:text-65xl font-bold text-black leading-snug mb-5 text-center sm:text-start">
            <span className="text-blue">نبتكر</span> حلولاً حديثة لخدمات لوجستية
            أكثر كفاءة.
          </h3>
          <h5 className="bluish pt-2 mb-5 text-center sm:text-start">
            نستخدم أحدث التقنيات والتطبيقات الذكية لتطوير عملياتنا وتحسين تجربة
            العملاء.
          </h5>
          <div className="text-center sm:text-start">
            <Link href="/services" passHref>
              <span className="inline-block text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue cursor-pointer">
                تعرّف على حلولنا
              </span>
            </Link>
          </div>
        </div>

        {/* العمود الأول - القيم */}
        <div className="bg-darkblue bg-beliefs pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
          <h2 className="text-lg font-normal text-white tracking-widest mb-5 text-center sm:text-start">
            قيمنا
          </h2>
          <h3 className="text-4xl sm:text-65xl font-bold text-white leading-snug mb-5 text-center sm:text-start">
            <span className="text-grey">الاحترافية</span> والثقة هما أساس عملنا.
          </h3>
          <h5 className="text-offwhite pt-2 mb-5 text-center sm:text-start">
            نؤمن بأهمية تقديم خدمات ذات جودة عالية مبنية على النزاهة والعمل
            الجاد لضمان رضا عملائنا.
          </h5>
          <div className="text-center sm:text-start">
            <Link href="/start" passHref>
              <span className="inline-block text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue cursor-pointer">
                ابدأ الآن
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beliefs;
