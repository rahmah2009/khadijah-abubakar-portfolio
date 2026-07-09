import Link from 'next/link'
import React from 'react'
import TitleComp from '../common/TitleComp'

const RecentPostsComp = () => {
    return (
        <section className='bg-[#F8F7FF] w-full lg:w-[1000px] mx-auto h-auto lg:h-[396px] px-4 sm:px-6 lg:px-0 py-10 lg:py-0 flex items-center justify-center'>
            <div className='w-full lg:w-[856px] mx-auto flex flex-col gap-6'>
                <div className='w-full flex items-center justify-between'>
                    <TitleComp title='Recent posts' />
                    <Link href='/blog' className='text-[#7C3AED] hover:text-[#6D28D9] text-base transition-colors duration-200 font-medium hidden md:block'>View all</Link>
                </div>

                <div className='w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0'>

                    <article className='w-full max-w-xl lg:w-[418px] h-auto lg:h-[295px] rounded-[4px] bg-white p-[26px] flex flex-col items-start gap-4 transition-transform duration-200 hover:-translate-y-1' style={{
                        boxShadow: '0px 4px 20px 0px rgba(124, 58, 237, 0.10)'
                    }}>
                        <h3 className='text-[#21243D] text-[22px] sm:text-[26px] font-bold leading-snug hover:text-[#7C3AED] transition-colors'>
                            Building a Heart Disease Prediction API from Scratch
                        </h3>
                        <div className='w-full flex items-center justify-between text-sm text-gray-600 font-medium'>
                            <div className='w-[35%] border-r border-grey-400 flex items-center justify-start'>
                                <span>12 Feb 2023</span>
                            </div>
                            <div className='w-[60%] flex items-center justify-start pl-2 text-[#7C3AED]'>
                                <span>Machine Learning, Healthcare</span>
                            </div>
                        </div>
                        <p className='text-[#21243D] text-base font-normal leading-relaxed line-clamp-4'>
                            Engineered an end-to-end classification pipeline using Python and Scikit-Learn to achieve 98% prediction accuracy. Optimized the model’s recall metrics using GridSearchCV to minimize false negatives and deployed the result via a Streamlit web interface.
                        </p>
                    </article>

                    <article className='w-full max-w-xl lg:w-[418px] h-auto lg:h-[295px] rounded-[4px] bg-white p-[26px] flex flex-col items-start gap-4 transition-transform duration-200 hover:-translate-y-1' style={{
                        boxShadow: '0px 4px 20px 0px rgba(124, 58, 237, 0.10)'
                    }}>
                        <h3 className='text-[#21243D] text-[22px] sm:text-[26px] font-bold leading-snug hover:text-[#7C3AED] transition-colors'>
                            Building a Crop Recommendation Engine
                        </h3>
                        <div className='w-full flex items-center justify-between text-sm text-gray-600 font-medium'>
                            <div className='w-[35%] border-r border-grey-400 flex items-center justify-start'> <span>28 Jan 2024</span></div>
                            <div className='w-[60%] flex items-center justify-start pl-2 text-[#7C3AED]'> <span>Predictive Modeling, IoT</span></div>
                        </div>
                        <p className='text-[#21243D] text-base font-normal leading-relaxed line-clamp-4'>
                            Engineered an agricultural crop recommendation engine achieving 99% accuracy by analyzing soil metrics and environmental factors. Built a dual-input ingestion layer that seamlessly processes automated IoT sensor streams alongside manual inputs for low-resource environments.
                        </p>
                    </article>
                </div>
            </div >
        </section >
    )
}

export default RecentPostsComp