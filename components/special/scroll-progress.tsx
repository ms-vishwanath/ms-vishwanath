"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps, useScroll } from "motion/react";
import React from "react";
interface ScrollProgressProps
    extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> { }

export const ScrollProgress = React.forwardRef<
    HTMLDivElement,
    ScrollProgressProps
>(({ className, ...props }, ref) => {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            ref={ref}
            className={cn(
                "fixed inset-x-0 top-0 z-50 h-2 origin-left bg-gradient-to-r from-[#e8ddf8] via-[#AE48FF] to-[#6bc7f8]",
                className,
            )}
            style={{
                scaleX: scrollYProgress,
            }}
            {...props}
        />
    );
});

ScrollProgress.displayName = "ScrollProgress";
