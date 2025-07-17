"use client";
import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

type PageLayoutProps = {
  children: ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000); // fake delay
    return () => clearTimeout(timeout);
  }, [pathname]);
  return (
    <>
      {loading ? (
        <div className="bg-[#211d2e] relative h-screen w-full">
          <Image
            src="https://akm-img-a-in.tosshub.com/sites/interactive/immersive/baahubali-nteractive/assest/img/loader-IT.gif"
            alt="loading-gif"
            fill
            objectFit="contain"
          />
        </div>
      ) : (
        <>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </>
  );
}
