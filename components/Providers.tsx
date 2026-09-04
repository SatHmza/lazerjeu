"use client";

import LenisProvider from "@/components/LenisProvider";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LenisProvider>
      <Preloader />
      {/* The mix-blend-mode ring cursor runs site-wide. The WebGL tubes
          effect (TubesCursor) is mounted separately, scoped to the landing
          page's hero section only — see app/page.tsx — since it clears to
          opaque black and would blank out the rest of the page if it ever
          covered the full viewport. */}
      <CustomCursor />
      <div className="grain-overlay bg-grain" />
      {children}
    </LenisProvider>
  );
}
