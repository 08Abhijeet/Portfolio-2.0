"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import { IconCode, IconFolder, IconHome, IconMail } from "@tabler/icons-react";

export default function BottomDockNav() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/#about",
    },
    {
      title: "Projects",
      icon: (
        <IconFolder className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/#projects",
    },
    {
      title: "Skills",
      icon: (
        <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/#skills",
    },
    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/#contact",
    },
  ];

  return (
    <FloatingDock
      items={links}
      desktopClassName="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 border border-white/20 bg-black/60 backdrop-blur-md"
      mobileClassName="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
    />
  );
}

