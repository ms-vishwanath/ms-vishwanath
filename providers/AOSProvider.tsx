"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export function AOSProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        AOS.init({
            offset: 100,
            delay: 30,
        });
        AOS.refresh();
    }, []);
    return <>{children}</>;
}