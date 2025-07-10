"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { RxLinkedinLogo } from "react-icons/rx";
import { SiGithub } from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";
import AvatarStanding from "../special/avatar-standing";
import AvatarDance from "../special/avatar-dance";
import { smoothScrollToId } from "@/lib/utils";
import { socialLinks } from "@/lib/about_vish";
import { AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import { DotPattern } from "../special/dot-pattern";
import { WarpBackground } from "../special/warp-background";

export default function FooterSection() {
  return (
    <div className="relative h-dvh w-full overflow-hidden mt-20">
      <DotPattern />
      <footer className=" relative mx-auto container border-t">
        <div className="absolute left-0 top-0 right-0 rounded-md p-6 flex lg:flex-row flex-col gap-10 justify-between z-50">
          <div className=" flex flex-col gap-2">
            <Image
              src="/assets/signature.png"
              width={300}
              className=""
              height={300}
              alt="signature"
            />
            {/* <div className="flex items-center gap-3">
              <MdPhone className="text-xl " />
              <Link href={socialLinks?.phone?.link}>
                <span className="text-xl">{socialLinks?.phone?.name}</span>
              </Link>
            </div> */}
            {/* <div className="flex items-center gap-3">
              <MdEmail className="text-xl " />
              <Link href={socialLinks?.email?.link} target="_noblank">
                <span className="text-xl">{socialLinks?.email?.name}</span>
              </Link>
            </div> */}
            {/* <div className="flex items-center gap-3">
              <SiGithub className="text-xl " />
              <Link href={socialLinks?.github?.link} target="_noblank">
                <span className="text-xl">{socialLinks?.github?.name}</span>
              </Link>
            </div> */}
            {/* <div className="flex items-center gap-3">
              <AiFillLinkedin className="text-xl text-[#0077B5] " />
              <Link href={socialLinks?.linkedin?.link} target="_noblank">
                <span className="text-xl">{socialLinks?.linkedin?.name}</span>
              </Link>
            </div> */}
          </div>
          <div className=" flex flex-col gap-2 cursor-pointer">
            <a onClick={() => smoothScrollToId("tech-stack")}>Tech Stack</a>
            <a onClick={() => smoothScrollToId("projects")}>My Projects</a>
            {/* <a href="/VISHWANATH-RESUME.pdf" download>
              Download Resume
            </a> */}
          </div>
        </div>
        <div className="w-full flex justify-center">
          <AvatarDance />
        </div>
      </footer>
    </div>
  );
}
