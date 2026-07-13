'use client';

import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';

const HeaderComponent = () => {
    const [toggleMobileNav, setToggleMobileNav] = useState(false);
    const menuRef = useRef(null);

    const handleToggleMobileNav = () => {
        setToggleMobileNav((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setToggleMobileNav(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, []);

    return (
        <header className="relative z-50 w-full max-w-[1000px] mx-auto flex items-center justify-end h-[86px] px-6 sm:px-10">
            {/* Logo */}
            <div className="w-full flex items-center justify-start">
                <Link
                    href="/"
                    className="text-[#21243D] text-xl font-bold hover:text-[#6366F1] transition-colors duration-200"
                >
                    KHA
                    <span className="text-purple-600 hover:text-[#6366F1] transition-colors duration-200">
                        DIJAH
                    </span>
                </Link>
            </div>

            {/* Mobile Menu */}
            <div
                ref={menuRef}
                className="flex-1 sm:hidden flex justify-end relative"
            >
                <button
                    type="button"
                    onClick={handleToggleMobileNav}
                    className="relative z-50 p-2"
                >
                    <span className="text-3xl font-bold">☰</span>
                </button>

                {toggleMobileNav && (
                    <div className="absolute top-12 right-0 w-[280px] p-6 bg-white rounded-lg shadow-xl border border-purple-100 z-50">
                        <nav className="flex flex-col items-center gap-6">
                            <Link
                                href="/works"
                                onClick={() => setToggleMobileNav(false)}
                                className="text-[#21243D] text-lg font-semibold hover:text-[#6366F1] transition-colors duration-200"
                            >
                                Works
                            </Link>

                            <Link
                                href="/blog"
                                onClick={() => setToggleMobileNav(false)}
                                className="text-[#21243D] text-lg font-semibold hover:text-[#6366F1] transition-colors duration-200"
                            >
                                Blog
                            </Link>

                            <Link
                                href="/contact"
                                onClick={() => setToggleMobileNav(false)}
                                className="text-[#21243D] text-lg font-semibold hover:text-[#6366F1] transition-colors duration-200"
                            >
                                Contact
                            </Link>
                        </nav>
                    </div>
                )}
            </div>

            {/* Desktop Menu */}
            <nav className="hidden sm:flex w-[280px] items-center justify-between gap-2">
                <Link
                    href="/works"
                    className="text-[#21243D] text-xl font-medium hover:text-[#6366F1] transition-colors duration-200"
                >
                    Works
                </Link>

                <Link
                    href="/blog"
                    className="text-[#21243D] text-xl font-medium hover:text-[#6366F1] transition-colors duration-200"
                >
                    Blog
                </Link>

                <Link
                    href="/contact"
                    className="text-[#21243D] text-xl font-medium hover:text-[#6366F1] transition-colors duration-200"
                >
                    Contact
                </Link>
            </nav>
        </header>
    );
};

export default HeaderComponent;