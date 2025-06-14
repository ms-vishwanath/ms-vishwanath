"use client";

import React, { useEffect } from "react";
import Loader from "@/components/models/Loader";
import { ScrollProgress } from "@/components/special/scroll-progress";
import { AOSProvider } from "@/providers/AOSProvider";
import { logEvent } from "firebase/analytics";
import { analytics } from "@/config/firebase";
export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (analytics) {
      logEvent(analytics, "page_view", {
        page_path: window.location.pathname,
      });
    }
  }, []);
  return (
    <div>
      <Loader>
        <AOSProvider>{children}</AOSProvider>
      </Loader>
      <ScrollProgress />

    </div>
  );
}
