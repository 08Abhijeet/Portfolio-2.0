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
        className="justify-between gap-6 border-r border-white/10 !bg-neutral-950/20 backdrop-blur-md h-screen py-4 sm:py-6"
      >
        <div className="flex flex-1 flex-col items-start w-full overflow-x-hidden overflow-y-hidden">
          <div className="w-full sm:hidden">
            <LogoIcon />
          </div>
          <div className="hidden w-full sm:block">{open ? <Logo /> : <LogoIcon />}</div>
          <div className="mt-8 flex w-full flex-col items-start gap-4 sm:mt-10">
            {links.map((link) => (
              <SidebarLink
                key={link.label}
                link={link}
                className="rounded-xl hover:bg-white/5 w-full"
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

