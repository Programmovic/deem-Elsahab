"use client"
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const FAQ = () => {
    return (
        <div id="faq-section" className='rtl mx-auto max-w-7xl py-24 lg:px-8 bg-faqblue rounded-2xl my-16 faq-bg'>
            <h3 className='text-xl font-normal text-white text-center mb-6'>الأسئلة الشائعة</h3>
            <h2 className='text-4xl lg:text-6xl font-semibold text-center text-white'>
                أسئلة شائعة حول <br /> ديم السحاب
            </h2>
            
            <div className="w-full px-4 pt-16">
                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5 shadow-lg">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-right text-2xl font-medium">
                                    <span> ما هي أبرز المنتجات التي يمكن تخزينها لديكم؟</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-blue-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-75 leading-relaxed">
                                نستقبل جميع أنواع المنتجات بمختلف أحجامها، مع تخصيص مساحات خاصة للمنتجات التي تتطلب معايير تخزين محددة مثل الأدوية والمستلزمات الطبية.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5 shadow-lg">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-right text-2xl font-medium">
                                    <span>هل يمكن زيارة المستودع ورؤية البضائع؟</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-blue-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-75 leading-relaxed">
                                بالتأكيد، يمكنك زيارة مستودعاتنا في أي وقت بعد التنسيق مع فريقنا، لضمان الشفافية وراحة البال.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 shadow-lg">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-right text-2xl font-medium">
                                    <span>كيف يمكنني استئجار مساحة تخزين؟</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-blue-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-75 leading-relaxed">
                                كل ما عليك فعله هو التواصل معنا وتحديد نوع البضاعة والمساحة المطلوبة، وسنجهّز لك العرض المناسب.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
            </div>
        </div>
    )
}

export default FAQ;
