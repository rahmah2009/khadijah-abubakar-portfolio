import React from 'react'

const Button = ({ text, bg, onclick }) => {
    return (
        <button
            type="button"
            onClick={onclick}
            className="sm:h-8 h-9 sm:w-[72px] w-[110px] bg-[#7C3AED] text-[#FFFFFF] text-[14px] font-bold border-none rounded-[50px] flex items-center justify-center hover:bg-[#6D28D9] transition-colors duration-200 shadow-sm"  
            style={bg ? { backgroundColor: bg } : {}}
        >
            {text}
        </button>
    )
}

export default Button