"use client";
import { cn } from "@/lib/utils";
import React, { useState, createContext, useContext } from "react";
import { motion } from "motion/react";
import Link from "next/link";

interface Links {
  label: string;
  href: string;
  icon: React.JSX.Element | React.ReactNode;
}

interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animate: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  const [openState, setOpenState] = useState(false);

  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate: animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({
  children,
  open,
  setOpen,
  animate,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  );
};

export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...(props as React.ComponentProps<"div">)} />
    </>
  );
};

export const DesktopSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof motion.div>) => {
  const { open, setOpen, animate } = useSidebar();
  return (
    <>
      <motion.div
        className={cn(
          "h-full px-3 py-4 hidden sm:flex sm:flex-col bg-neutral-100 dark:bg-neutral-800 w-[340px] shrink-0",
          className
        )}
        animate={{
          width: animate ? (open ? "340px" : "88px") : "340px",
        }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        {...props}
      >
        {children}
      </motion.div>
    </>
  );
};

export const MobileSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "flex shrink-0 sm:hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const SidebarLink = ({
  link,
  className,
  ...props
}: {
  link: Links;
  className?: string;
}) => {
  const { open, animate } = useSidebar();
  const showExpanded = open && animate;
  return (
    <Link
      href={link.href}
      className={cn(
        "group/sidebar flex w-full items-center py-2 transition-colors duration-200 justify-start gap-4 px-4",
        className
      )}
      {...props}
    >
      {link.icon}

      <motion.span
        animate={{
          display: showExpanded ? "inline-block" : "none",
          opacity: showExpanded ? 1 : 0,
        }}
        className="text-neutral-700 dark:text-neutral-200 group-hover/sidebar:text-white group-hover/sidebar:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] text-sm group-hover/sidebar:translate-x-1 transition-all duration-150 whitespace-pre !p-0 !m-0 hidden sm:inline-block"
      >
        {link.label}
      </motion.span>
    </Link>
  );
};
