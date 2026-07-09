import Image from 'next/image'
import React from 'react'

const HeroComp = () => {
    return (
        <section className='w-full sm:w-[856px] mx-auto flex flex-col-reverse sm:flex-row items-center justify-between py-10 px-6 sm:px-12 my-6 rounded-2xl bg-[#7C3AED]/10 backdrop-blur-xl border border-[#7C3AED]/30 shadow-[0_12px_40px_0_rgba(124,58,237,0.15)]'>
            
            <aside className='w-full sm:w-[60%] flex flex-col justify-start gap-[20px] text-center sm:text-left mt-6 sm:mt-0'>
                <h1 className='text-[#21243D] text-[44px] font-bold leading-[60px]'>
                    Hi, I am Khadijah, <span className='text-[#7C3AED]'>Data Scientist</span>
                </h1>
                <p className='text-[#21243D] text-base font-normal max-w-xl leading-relaxed'>
                    AI and Data Science Professional specializing in Python, SQL, machine learning, and data visualization. Developed high-impact solutions in healthcare (98% accuracy Heart Disease Prediction) and agriculture (99% accuracy Crop Recommendation). Combining technical expertise with experience in peer mentorship and leadership, I focus on solving real-world problems through data-driven insights.</p>
                
                <a href="/resume.pdf"
                    download="Khadijah_Resume.pdf"
                    className='bg-[#7C3AED] hover:bg-[#6D28D9] h-[47px] w-[208px] max-w-[208px] flex items-center justify-center text-[#FFFFFF] text-xl font-medium rounded-[6px] transition-all duration-200 cursor-pointer mx-auto sm:mx-0 shadow-md active:scale-95'
                >
                    Download Resume
                </a>
            </aside>

            <aside className='w-full sm:w-[40%] flex items-center justify-center'>
                <div className='w-[243px] h-[243px] rounded-full bg-[#7C3AED]/20 backdrop-blur-sm relative flex items-center justify-center shadow-md border border-[#7C3AED]/40'>
                    <Image 
                        src='/assets/my-image.jpg' 
                        width={243} 
                        height={243} 
                        className='rounded-full object-cover w-full h-full border-4 border-white/90' 
                        alt='my profile picture' 
                    />
                </div>
            </aside>
        </section>
    )
}

export default HeroComp