"use client";

import Link from "next/link";
import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import AvatarDance from "../special/avatar-dance";
import { smoothScrollToId } from "@/lib/utils";
import { socialLinks, personalInfo } from "@/lib/about_vish";
import { DotPattern } from "../special/dot-pattern";

export default function FooterSection() {
  return (
    <div className="relative min-h-dvh w-full overflow-hidden mt-16 sm:mt-20" id="contact">
      <DotPattern />
      <footer className="relative mx-auto container border-t">
        <div className="relative lg:absolute left-0 top-0 right-0 rounded-md p-5 sm:p-10 flex lg:flex-row flex-col gap-8 sm:gap-10 justify-between z-50 pointer-events-auto">
          {/* Left: Contact Info & Signature */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <Image
              src="/assets/signature.png"
              width={220}
              height={100}
              className="object-contain -ml-3 sm:-ml-4 max-w-[200px] sm:max-w-[260px]"
              alt="M. S. Vishwanath signature"
            />
            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-bold">{personalInfo.name}</h3>
              <p className="text-xs sm:text-sm text-violet-600 font-semibold">
                {personalInfo.title} • {personalInfo.role}
              </p>
            </div>

            <div className="space-y-2.5 pt-2 text-xs sm:text-base">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <MdLocationOn className="text-lg sm:text-xl text-violet-600 shrink-0" />
                <span className="opacity-90">{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <MdPhone className="text-lg sm:text-xl text-violet-600 shrink-0" />
                <Link
                  href={socialLinks?.phone?.link}
                  className="hover:text-violet-600 transition-colors break-all sm:break-normal"
                >
                  <span>{socialLinks?.phone?.name}</span>
                </Link>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <MdEmail className="text-lg sm:text-xl text-violet-600 shrink-0" />
                <Link
                  href={socialLinks?.email?.link}
                  className="hover:text-violet-600 transition-colors break-all sm:break-normal"
                >
                  <span>{socialLinks?.email?.name}</span>
                </Link>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <SiGithub className="text-lg sm:text-xl text-violet-600 shrink-0" />
                <Link
                  href={socialLinks?.github?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-violet-600 transition-colors break-all sm:break-normal"
                >
                  <span>github.com/{socialLinks?.github?.name}</span>
                </Link>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <AiFillLinkedin className="text-lg sm:text-xl text-[#0077B5] shrink-0" />
                <Link
                  href={socialLinks?.linkedin?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-violet-600 transition-colors break-all sm:break-normal"
                >
                  <span>linkedin.com/in/{socialLinks?.linkedin?.name}</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Quick Navigation */}
          <div className="flex flex-col gap-2.5 sm:gap-3 font-semibold text-sm sm:text-base text-slate-800">
            <span className="text-[11px] sm:text-xs uppercase tracking-wider text-slate-500 font-bold mb-1">
              Quick Navigation
            </span>
            <button
              onClick={() => smoothScrollToId("hero")}
              className="text-left hover:text-violet-600 transition-colors cursor-pointer"
            >
              Back to Top
            </button>
            <button
              onClick={() => smoothScrollToId("about")}
              className="text-left hover:text-violet-600 transition-colors cursor-pointer"
            >
              About Me
            </button>
            <button
              onClick={() => smoothScrollToId("experience")}
              className="text-left hover:text-violet-600 transition-colors cursor-pointer"
            >
              Work Experience & Education
            </button>
            <button
              onClick={() => smoothScrollToId("tech-stack")}
              className="text-left hover:text-violet-600 transition-colors cursor-pointer"
            >
              Tech Stacks
            </button>
            <button
              onClick={() => smoothScrollToId("projects")}
              className="text-left hover:text-violet-600 transition-colors cursor-pointer"
            >
              Projects Portfolio
            </button>
            <a
              href="/VISHWANATH-RESUME.pdf"
              download
              className="text-violet-600 hover:text-violet-700 font-semibold transition-colors mt-1 sm:mt-2"
            >
              Download Full Resume &darr;
            </a>
          </div>
        </div>

        {/* 3D Dancing Avatar */}
        <div className="w-full flex justify-center pt-6 lg:pt-0">
          <AvatarDance />
        </div>
      </footer>
    </div>
  );
}
