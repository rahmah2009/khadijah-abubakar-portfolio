import Image from 'next/image'
import React from 'react'
import Button from '../common/Button'

const WorkPage = ({ title, img, content, btnContent, label }) => {
    return (
        <div className='w-full h-auto flex flex-col sm:flex-row gap-6 p-6 my-4 rounded-xl bg-[#F8F7FF] border border-purple-100/50 shadow-sm items-start transition-all duration-200 hover:shadow-md hover:border-[#7C3AED]/20'>
            
            <div className='w-full sm:w-[230px] flex-shrink-0 flex items-center justify-center sm:justify-start'>
               <Image
                  src={img} 
                  width={230} 
                  height={180} 
                  className='rounded-[6px] w-full max-w-[250px] sm:max-w-none h-[180px] object-cover shadow-sm' 
                  alt='works images'
               />
            </div>
            
            <div className='flex-1 flex flex-col gap-3 w-full'>
                <h3 className='text-[#21243D] text-[22px] sm:text-[26px] font-bold leading-tight hover:text-[#7C3AED] transition-colors duration-200 cursor-pointer'>
                    {title}
                </h3>
                
                <div className='flex items-center gap-7 py-0.5'>
                    <div className='font-normal'>
                        <Button text={btnContent} />
                    </div>
                    <span className='text-[#7C3AED] text-base font-medium'>
                        {label}
                    </span>
                </div>
                
                <p className='w-full text-[#21243D] text-base font-normal leading-relaxed'>
                    {content}
                </p>
            </div>
        </div>
    )
}

export default WorkPage