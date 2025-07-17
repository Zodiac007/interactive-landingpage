import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [showShareIcons, setShowShareIcons] = useState<boolean>(false);

  return (
    <nav className="sticky w-full flex justify-between bg-black/30 sm:bg-transparent items-center top-0 z-50 p-3">
      {/* Desktop Logo */}
      <div className="hidden sm:block">
        <Image
          src="https://akm-img-a-in.tosshub.com/sites/interactive/immersive/joshimath/assest/img/logo.png"
          alt="logo"
          height={90}
          width={90}
        />
      </div>

      {/* Mobile Logo */}
      <div className="block sm:hidden">
        <Image
          src="https://akm-img-a-in.tosshub.com/sites/interactive/immersive/joshimath/assest/img/logo.png"
          alt="logo"
          height={70}
          width={70}
        />
      </div>

      {/* Share */}
      <div>
        <button
          className="cursor-pointer"
          onClick={() => setShowShareIcons(!showShareIcons)}
        >
          <Image
            src="https://akm-img-a-in.tosshub.com/sites/interactive/immersive/ride-on-the-moon/assest/img/share-white.png"
            alt="share-icon"
            height={30}
            width={30}
          />
        </button>
        {showShareIcons && (
          <div className="absolute right-2 text-xl text-white flex flex-col gap-4">
            <Image
              src="https://akm-img-a-in.tosshub.com/sites/interactive/immersive/ride-on-the-moon/assest/img/FB.png"
              alt="wh-icon"
              height={35}
              width={35}
            />
            <Image
              src="https://akm-img-a-in.tosshub.com/sites/interactive/immersive/ride-on-the-moon/assest/img/wh.png"
              alt="wh-icon"
              height={35}
              width={35}
            />
            <Image
              src="https://akm-img-a-in.tosshub.com/sites/interactive/immersive/ride-on-the-moon/assest/img/Twitter.png"
              alt="wh-icon"
              height={35}
              width={35}
            />
          </div>
        )}
      </div>
    </nav>
  );
}
