import React from 'react'
import { FaceBookIcon, GithubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from './common/Icon'

const FooterComponent = () => {
  return (
    <footer className='w-full h-[182px] flex items-center justify-center bg-white'>
        <div className='flex flex-col w-[242px] gap-5 items-center'>
            
            <div className='flex items-center justify-between w-full text-[#21243D]'>

                <a 
                    href="https://x.com/OlabidemiK" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="opacity-70 hover:opacity-100 transition-opacity duration-200 ease-in-out cursor-pointer"
                >
                    <TwitterIcon />
                </a>

                <a 
                    href="https://www.linkedin.com/in/khadijat-abubakar/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="opacity-70 hover:opacity-100 transition-opacity duration-200 ease-in-out cursor-pointer"
                >
                    <LinkedInIcon />
                </a>

                <a 
                    href="https://github.com/Khadijat-Abubakar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="opacity-70 hover:opacity-100 transition-opacity duration-200 ease-in-out cursor-pointer"
                >
                    <GithubIcon />
                </a>
                
            </div>
            
            <span className='text-[#21243D] text-sm font-normal tracking-wide'>
                Copyright ©2026 All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default FooterComponent