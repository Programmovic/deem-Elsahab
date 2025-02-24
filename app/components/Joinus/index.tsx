const Join = () => {
    return (
        <div style={{ maxWidth: '100vw', width: '100%' }} className="bg-joinus my-32 flex justify-center items-center min-h-screen">
            <div className="w-full px-4 sm:px-8 lg:px-12">

                <div className="text-center">
                    <h3 className="text-blue text-lg font-normal tracking-widest">انضم إلينا</h3>
                    <h2 className="text-4xl sm:text-6xl font-bold my-6 leading-10">
                        ارتقِ بأعمالك <br /> إلى مستوى جديد.
                    </h2>
                    <p className="text-lightblack text-base font-normal">
                        انضم إلى فريقنا واستفد من حلولنا المبتكرة لتطوير أعمالك وتحقيق النجاح في عالم الخدمات اللوجستية.
                    </p>
                </div>

                <div className="flex justify-center items-center mx-auto max-w-lg pt-5">
                    <div className="w-full bg-lightgrey p-6 rounded-3xl shadow-md">
                        <input
                            type="text"
                            className="w-full mb-3 py-3 px-5 text-black text-lg rounded-full bg-emailbg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
                            placeholder="الاسم"
                            autoComplete="off"
                        />
                        <input
                            type="email"
                            className="w-full mb-4 py-3 px-5 text-black text-lg rounded-full bg-emailbg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
                            placeholder="بريدك الإلكتروني"
                            autoComplete="off"
                        />
                        <button
                            type="submit"
                            className="w-full py-3 text-white text-lg font-semibold rounded-full bg-blue hover:bg-btnblue transition-all shadow-sm"
                        >
                            انضم الآن!
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Join;
