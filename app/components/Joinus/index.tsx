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

                <div className=" flex justify-center items-center mx-auto max-w-4xl pt-5">
                <div className="flex flex-nowrap max-[945px]:flex-wrap items-center mx-5 p-5 sm:p-0 rounded-xl justify-between bg-lightgrey sm:rounded-full">
                        <div>
                            <input
                                type="name"
                                className="my-2 py-2 sm:px-4 lg:text-lg text-black sm:rounded-full bg-lightgrey pl-1 focus:outline-none bg-emailbg focus:text-black"
                                placeholder="  الاسم   "
                                autoComplete="off"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                className="my-2 py-2 sm:px-4 lg:text-lg text-black sm:border-l border-linegrey bg-lightgrey focus:outline-none bg-emailbg focus:text-black"
                                placeholder="بريدك الإلكتروني"
                                autoComplete="off"
                            />
                        </div>
                        <div className="sm:mr-3">
                            <button
                                type="submit"
                                className="joinButton w-full sm:w-0 text-lg text-white font-semibold text-center rounded-xl sm:rounded-full bg-blue hover:bg-btnblue"
                            >
                                انضم الآن!
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Join;
