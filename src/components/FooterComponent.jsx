import Link from "next/link";
import React from "react";
import {
  GithubIcon,
  LinkedInIcon,
  TwitterIcon,
} from "./common/Icon";

const FooterComponent = () => {
  return (
    <footer className="w-full border-t border-gray-200 mt-16">
      <div className="max-w-[1000px] mx-auto px-6 py-10 flex flex-col gap-8">

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-8 text-[#21243D] font-medium">
          <Link
            href="/"
            className="hover:text-[#6366F1] transition-colors"
          >
            Home
          </Link>

          <Link
            href="/works"
            className="hover:text-[#6366F1] transition-colors"
          >
            Works
          </Link>

          <Link
            href="/blog"
            className="hover:text-[#6366F1] transition-colors"
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className="hover:text-[#6366F1] transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-8 text-[#21243D]">
          <a
            href="https://x.com/OlabidemiK"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 transition"
          >
            <TwitterIcon />
          </a>

          <a
            href="https://www.linkedin.com/in/khadijat-abubakar/"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 transition"
          >
            <LinkedInIcon />
          </a>

          <a
            href="https://github.com/Khadijat-Abubakar"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 transition"
          >
            <GithubIcon />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-500">
          ©2026 Khadijah Abubakar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent;