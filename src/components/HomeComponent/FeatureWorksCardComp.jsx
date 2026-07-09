import Image from 'next/image'
import React from 'react'
import Button from '../common/Button'

const FeatureWorksCardComp = ({ title, img, content, btnContent, label }) => {
    return (
        <div className='w-full h-auto flex flex-col md:flex-row gap-6 md:gap-8 py-6 border-b-2 border-[#E0E0E0] items-start'>
            
            <div className='w-full md:w-[230px] max-w-sm mx-auto md:mx-0 flex-shrink-0'>
               <Image
                  src={img} 
                  width={230} 
                  height={180} 
                  className='rounded-[6px] mt-7 w-full h-[180px] object-cover' 
                  alt='featured works images'
               />
            </div>
            
            <div className='flex-1 flex flex-col gap-2 ml-0 md:ml-4 w-full'>
                <h3 className='text-[#21243D] text-[24px] sm:text-[30px] font-bold leading-tight hover:text-[#7C3AED] transition-colors cursor-pointer'>
                    {title}
                </h3>
                
                <div className='flex items-center gap-6 py-1'>
                    <div className='font-normal'>
                        <Button text={btnContent} />
                    </div>
                    <span className='text-[#7C3AED] text-base font-medium'>
                        {label}
                    </span>
                </div>
                
                <p className='w-full max-w-[580px] text-[#21243D] text-base font-normal leading-relaxed mt-1'>
                    {content}
                </p>
            </div>
        </div>
    )
}

export default FeatureWorksCardComp