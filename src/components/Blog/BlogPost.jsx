import React from 'react'

const BlogPost = ({ title, date, tags, description }) => {
  return (
    <div className="w-full h-auto p-6 my-4 rounded-xl bg-[#F8F7FF] border border-purple-100/50 shadow-sm transition-all duration-200 hover:shadow-md hover:border-[#7C3AED]/20">
      
      <h2 className="text-[20px] sm:text-[24px] font-bold text-[#21243D] leading-tight hover:text-[#7C3AED] transition-colors duration-200 cursor-pointer">
        {title}
      </h2>
      
      <div className="flex items-center gap-3 text-sm font-medium text-gray-500 mt-2 py-0.5">
        <span>{date}</span>
        <span className="text-gray-300">|</span>
        <span className="text-[#7C3AED]">{tags}</span>
      </div>
      
      <p className="w-full text-[#21243D] text-base font-normal leading-relaxed mt-3">
        {description}
      </p>

    </div>
  )
}

export default BlogPost