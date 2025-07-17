import { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [showShareIcons, setShowShareIcons] = useState<boolean>(false);

  return (
    <footer className="sticky w-full flex justify-between items-center top-0 z-50 h-screen bg-black">
      <div className="imgContainer z-20 overflow-hidden ">
        <div className="imgImg"></div>

        {/* Footer Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 top-10 mx-auto">
          <div className="hidden sm:block">
            <Image
              src="https://akm-img-a-in.tosshub.com/sites/interactive/immersive/joshimath/assest/img/logo.png"
              alt="logo"
              height={110}
              width={110}
            />
          </div>

          {/* Mobile Logo */}
          <div className="block sm:hidden">
            <Image
              src="https://akm-img-a-in.tosshub.com/sites/interactive/immersive/joshimath/assest/img/logo.png"
              alt="logo"
              height={100}
              width={100}
            />
          </div>
        </div>

        {/* Footer Content */}
        <div className="absolute z-20 top-1/2 -translate-1/2 left-1/2 flex flex-col gap-6 text-center">
          <h1 className="font-oswald text-white font-extrabold text-9xl">0</h1>
          <h2 className="font-oswald tracking-tighter font-extrabold text-[#e0251f] text-6xl sm:text-8xl uppercase leading-14 sm:leading-22">
            Cheers{" "}
            <i className="-ml-1.5 sm:-ml-10 sm:-mb-10 font-normal font-playfair text-white lowercase">
              for
            </i>{" "}
            <br /> <span>Chandrayan</span>
          </h2>

          <a
            href="#"
            className="text-3xl sm:text-5xl pt-12 font-bebas text-white underline uppercase"
          >
            Click to Cheer
          </a>
        </div>

        {/* Footer Moon Image */}
        <div className="absolute top-0 left-0">
          <div className="hidden sm:block">
            <Image
              alt="moon-image"
              src="https://akm-img-a-in.tosshub.com/sites/test/chandrayan-2-cheers/assest/img/moon.png"
              height={180}
              width={250}
            />
          </div>
          <div className="block sm:hidden">
            <Image
              alt="moon-image"
              src="https://akm-img-a-in.tosshub.com/sites/test/chandrayan-2-cheers/assest/img/moon.png"
              height={180}
              width={180}
            />
          </div>
        </div>

        {/* Footer Share Icon */}
        <div className="absolute top-5 sm:top-10 right-5 sm:right-10">
          <div className="bg-white p-1 rounded-full">
            <button
              onClick={() => setShowShareIcons(!showShareIcons)}
              className="bg-blue-600 p-2 rounded-full cursor-pointer"
            >
              <Image
                alt="share-icon"
                src="https://akm-img-a-in.tosshub.com/sites/interactive/immersive/ride-on-the-moon/assest/img/share-white.png"
                height={35}
                width={35}
              />
            </button>
          </div>

          {showShareIcons && (
            <div className="absolute right-0 mt-4 text-xl text-white flex flex-col gap-4">
              <Image
                src="https://akm-img-a-in.tosshub.com/sites/interactive/immersive/ride-on-the-moon/assest/img/FB.png"
                alt="wh-icon"
                height={80}
                width={80}
              />
              <Image
                src="https://akm-img-a-in.tosshub.com/sites/interactive/immersive/ride-on-the-moon/assest/img/wh.png"
                alt="wh-icon"
                height={80}
                width={80}
              />
              <Image
                src="https://akm-img-a-in.tosshub.com/sites/interactive/immersive/ride-on-the-moon/assest/img/Twitter.png"
                alt="wh-icon"
                height={80}
                width={80}
              />
            </div>
          )}
        </div>

        {/* Footer Floating Rocket Image */}
        <div className="hidden sm:block absolute bottom-20 right-20 animate-diagonal-bounce">
          <Image
            alt="rocket-image"
            src="https://akm-img-a-in.tosshub.com/sites/test/chandrayan-2-cheers/assest/img/rocket.png"
            height={350}
            width={350}
          />
        </div>
        <div className="block sm:hidden absolute bottom-10 right-10 animate-diagonal-bounce">
          <Image
            alt="rocket-image"
            src="https://akm-img-a-in.tosshub.com/sites/test/chandrayan-2-cheers/assest/img/rocket.png"
            height={150}
            width={150}
          />
        </div>
        {/* </div> */}
      </div>
    </footer>
  );
}
