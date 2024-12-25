import { useEffect, useRef, useState } from 'react';

import { AiOutlinePlus, AiOutlineMinus, AiOutlineCheck } from 'react-icons/ai';
import { useSelector } from 'react-redux';

const PricingTable = () => {

    const [expandedItem, setExpandedItem] = useState(null);
    const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);


    const toggleAccordion = (index) => {
        setExpandedItem(expandedItem === index ? null : index);
    };

    const accordionItems = [
        { title: "Design should enrich our day", content: "Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people" },
        { title: "Bring their individual experience and creative", content: "We bring unique perspectives and creative solutions to every project" },
        { title: "Human centred design to challenges", content: "We focus on solving real user problems with empathetic design solutions" },
        { title: "Design should enrich our day", content: "Creating meaningful experiences that enhance daily interactions" },
        { title: "Developing core web applications", content: "Building robust and scalable web applications with modern technologies" }
    ];

    return (
        <div

            className={` px-5 md:p-8 lg:p-12 overflow-x-hidden ${isDarkMode ? "bg-[#171717] text-white" : "bg-[#F2E9E9] text-black"}`}
        >
            <div className="max-w-screen-xl mx-auto">
                {/* Header Section */}
                <div className="mb-12">
                    <h2 className="text-sm uppercase tracking-wider mb-4">PRICING TABLE</h2>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">BE KIND TO YOUR<br />MIND</h1>
                </div>

                {/* Pricing Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column - Accordion */}
                    <div className="space-y-4">
                        {accordionItems.map((item, index) => (
                            <div key={index} className="border-t border-gray-700">
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full py-4 flex items-center justify-between text-left hover:text-gray-300 transition-colors"
                                >
                                    <span className="text-lg font-medium">{item.title}</span>
                                    {expandedItem === index ? (
                                        <AiOutlineMinus className="w-6 h-6" />
                                    ) : (
                                        <AiOutlinePlus className="w-6 h-6" />
                                    )}
                                </button>
                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${expandedItem === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <p className="pb-4 text-gray-400">{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column - Pricing Cards */}
                    <div className="space-y-6">
                        {/* Yearly Plan */}
                        <div className="bg-zinc-900 p-6 rounded-lg relative">
                            <div className="bg-orange-400  text-white text-xs font-bold px-3 py-1 rounded absolute -top-3 right-4">
                                BEST VALUE
                            </div>


                            <div className='flex items-center justify-between gap-10'>
                                <div className='bg-orange-400 p-1 rounded-lg'>
                                    <AiOutlineCheck className="text-3xl " />
                                </div>
                                <div >
                                    <div className='flex items-center justify-between'>
                                        <div className="inline-block text-white px-4 py-1 rounded-full border border-gray-700 text-sm mb-4">
                                            YEARLY
                                        </div>
                                        <div className="text-3xl font-bold text-white">$129.<span className='text-sm'>99</span></div>
                                    </div>
                                    <div className="flex items-center gap-2 mb-4 text-white">
                                        <h3 className="text-xl font-bold">14 DAYS FREE</h3>
                                    </div>
                                    <p className="text-gray-400 mb-4 ">
                                        Subscription fee is $129.99 USD and automatically renews each year.
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* Monthly Plan */}
                        <div className="bg-white text-black p-6 rounded-lg">
                            <div className='flex items-center justify-between gap-10'>
                                <div className='border-gray-400 border p-1 rounded-lg'>
                                    <AiOutlineCheck className="text-3xl text-gray-500" />
                                </div>
                                <div >
                                    <div className='flex items-center justify-between'>
                                        <div className="inline-block  px-4 py-1 rounded-full border border-gray-700 text-sm mb-4">
                                            MONTHLY
                                        </div>
                                        <div className="text-3xl font-bold ">$12.<span className='text-sm'>99</span> </div>
                                    </div>
                                    <div className="flex items-center gap-2 mb-4 ">
                                        <h3 className="text-xl font-bold">14 DAYS FREE</h3>
                                    </div>
                                    <p className=" mb-4 ">
                                        Subscription fee is $12.99 USD and automatically renews each year.
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* Try It Button */}
                        <button className="group relative overflow-hidden rounded-full border border-gray-700 p-4 flex items-center gap-2 hover:border-gray-500 transition-colors">
                            <span>Try It Free Now</span>
                            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingTable;