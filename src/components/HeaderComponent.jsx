'use client'
import Link from 'next/link'
import { RxHamburgerMenu } from "react-icons/rx";
import React, { useState } from 'react'

const HeaderComponent = () => {
    const [toggleMobileNav, setToggleMobileNav] = useState(false);

    const handleToggleMobileNav = () => {
        setToggleMobileNav(!toggleMobileNav)
    }

    return (
        <header className='w-full max-w-[1000px] mx-auto flex items-center justify-end h-[86px] px-6 sm:px-10'>
            
            <div className='w-full flex items-center justify-start'>
                <Link className='text-[#21243D] text-xl font-bold cursor-pointer hover:text-[#6366F1] transition-colors duration-200' href='/'>KHA<span className='text-[purple] hover:text-[#6366F1] transition-colors duration-200'>DIJAH</span></Link>
            </div>

            <div className='w-full flex sm:hidden items-center justify-end px-2.5 relative'>
                <button 
                    type='button' 
                    onClick={handleToggleMobileNav}
                    className={`transition-colors duration-200 ${toggleMobileNav ? 'text-[#6366F1]' : 'text-[#21243D]'}`}
                >
                    <RxHamburgerMenu size='30px' />
                </button>
                
                {
                    toggleMobileNav && (
                        <div className='w-[280px] p-6 absolute top-12 right-0 z-50 bg-white rounded-lg shadow-xl border border-purple-50/50'>
                            <nav className='w-full flex flex-col items-center justify-center gap-6'>
                                {/* Swapped hover:text-[red] for theme purple across all routing endpoints */}
                                {/* <Link onClick={() => setToggleMobileNav(false)} className='text-[#21243D] text-lg font-semibold cursor-pointer hover:text-[#6366F1] transition-colors duration-200' href='/'>Home</Link> */}
                                <Link onClick={() => setToggleMobileNav(false)} className='text-[#21243D] text-lg font-semibold cursor-pointer hover:text-[#6366F1] transition-colors duration-200' href='works'>Works</Link>
                                <Link onClick={() => setToggleMobileNav(false)} className='text-[#21243D] text-lg font-semibold cursor-pointer hover:text-[#6366F1] transition-colors duration-200' href='blog'>Blog</Link>
                                <Link onClick={() => setToggleMobileNav(false)} className='text-[#21243D] text-lg font-semibold cursor-pointer hover:text-[#6366F1] transition-colors duration-200' href='contact'>Contact</Link>
                            </nav>
                        </div>
                    )
                }
            </div>

            <nav className='w-[280px] hidden sm:flex items-center justify-between gap-2'>
                {/* Replaced old text color and red hover configurations with premium purple framework styles */}
                {/* <Link className='text-[#21243D] text-xl font-medium cursor-pointer hover:text-[#6366F1] transition-colors duration-200' href='/'>Home</Link> */}
                <Link className='text-[#21243D] text-xl font-medium cursor-pointer hover:text-[#6366F1] transition-colors duration-200' href='works'>Works</Link>
                <Link className='text-[#21243D] text-xl font-medium cursor-pointer hover:text-[#6366F1] transition-colors duration-200' href='blog'>Blog</Link>
                <Link className='text-[#21243D] text-xl font-medium cursor-pointer hover:text-[#6366F1] transition-colors duration-200' href='contact'>Contact</Link>
            </nav>

        </header>
    )
}

export default HeaderComponent