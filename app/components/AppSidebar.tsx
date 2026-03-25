"use client";

import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import Image from "next/image";
import { IconBriefcase, IconCode, IconHome, IconMail, IconHistory } from "@tabler/icons-react";
import { motion } from "motion/react";
import Link from "next/link";

export default function AppSidebar() {
  const [open, setOpen] = useState(false);

  const links = [
    {
      label: "Home",
      href: "/#about",
      icon: (
        <IconHome className="h-8 w-8 shrink-0 text-neutral-500 transition-colors duration-200 group-hover/sidebar:text-white" />
      ),
    },
    {
      label: "Experience",
      href: "/#experience",
      icon: (
        <IconHistory className="h-8 w-8 shrink-0 text-neutral-500 transition-colors duration-200 group-hover/sidebar:text-white" />
      ),
    },
    {
      label: "Projects",
      href: "/#projects",
      icon: (
        <IconBriefcase className="h-8 w-8 shrink-0 text-neutral-500 transition-colors duration-200 group-hover/sidebar:text-white" />
      ),
    },
    {
      label: "Skills",
      href: "/#skills",
      icon: (
        <IconCode className="h-8 w-8 shrink-0 text-neutral-500 transition-colors duration-200 group-hover/sidebar:text-white" />
      ),
    },
    {
      label: "Contact",
      href: "/contact",
      icon: (
        <IconMail className="h-8 w-8 shrink-0 text-neutral-500 transition-colors duration-200 group-hover/sidebar:text-white" />
      ),
    },
  ];

  return (
    <Sidebar open={open} setOpen={setOpen} animate>
      <SidebarBody
        className="justify-between sm:gap-6 border sm:border-y-0 sm:border-l-0 sm:border-r border-white/20 !bg-neutral-950/60 backdrop-blur-xl h-auto w-auto sm:h-screen p-2 sm:py-6 relative z-50 rounded-[1.5rem] sm:rounded-none m-3 mt-1 sm:m-0 shadow-[0_10px_40px_rgba(0,0,0,0.4)] sm:shadow-none"
      >
        <div className="flex flex-row sm:flex-col items-center sm:items-start w-full justify-around sm:justify-start overflow-hidden">
          <div className="hidden w-full sm:block mb-0 sm:mb-8">{open ? <Logo /> : <LogoIcon />}</div>
          <div className="flex w-full flex-row sm:flex-col items-center justify-around sm:items-start sm:justify-start gap-1 sm:gap-4">
            {links.map((link) => (
              <SidebarLink
                key={link.label}
                link={link}
                className="rounded-xl hover:bg-white/5 w-auto sm:w-full flex justify-center sm:justify-start items-center p-3 sm:px-4 sm:py-2"
              />
            ))}
          </div>
        </div>
      </SidebarBody>
    </Sidebar>
  );
}

const Logo = () => {
  return (
    <Link
      href="/"
      className="relative z-20 flex w-full items-center justify-start py-1 text-sm font-normal text-white"
    >
      <BrandAvatar className="h-16 w-16 shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-white"
      >
      </motion.span>
    </Link>
  );
};

const LogoIcon = () => {
  return (
    <Link
      href="/"
      className="relative z-20 flex w-full items-center justify-start py-1 text-sm font-normal text-white"
    >
      <BrandAvatar className="h-16 w-16 shrink-0" />
    </Link>
  );
};

const BrandAvatar = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/developer-icon.gif"
      alt="Developer icon"
      width={64}
      height={64}
      className={`${className ?? ""} rounded-2xl object-cover border border-white/20 bg-[#111]`}
      unoptimized
    />
  );
};

