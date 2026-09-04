"use client";

import { usePathname } from "next/navigation";
import LenisProvider from "@/components/LenisProvider";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import TubesCursor from "@/components/TubesCursor";

export default function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLanding = pathname === "/";

  return (
    <LenisProvider>
      <Preloader />
      {/* The landing page adds the WebGL tubes trail on top of the normal
          pointer; every other page swaps in the mix-blend-mode ring cursor. */}
      <CustomCursor suppressed={isLanding} />
      {isLanding && <TubesCursor />}
      <div className="grain-overlay bg-grain" />
      {children}
    </LenisProvider>
  );
}
