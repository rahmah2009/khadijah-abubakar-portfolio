import React from 'react'

const TitleComp = ({ title }) => {
    return (
        <div className='w-auto flex items-center gap-3 pl-3 border-l-4 border-[#6366F1] my-4'>
            <h2 className='text-[#21243D] text-[22px] sm:text-[24px] font-bold tracking-wide uppercase text-sm sm:text-base text-gray-500'>
                {title}
            </h2>
        </div>
    )
}

export default TitleComp