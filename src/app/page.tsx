import ParallaxGallery from "@/components/ParallaxGallary";

const headerFrameDesktop = Array.from(
  { length: 46 },
  (_, i) =>
    `https://akm-img-a-in.tosshub.com/sites/intractive/immersive/chandrayan-3/assset/img/header-video/desktop-1/video (${
      i + 1
    }).png`
);

const moonFrameDesktop = Array.from(
  { length: 168 },
  (_, i) =>
    `https://akm-img-a-in.tosshub.com/sites/intractive/immersive/chandrayan-3/assset/img/moon-video/desktop-1/video (${
      i + 1
    }).jpg`
);

const headerFrames = Array.from(
  { length: 46 },
  (_, i) =>
    `https://akm-img-a-in.tosshub.com/sites/intractive/immersive/chandrayan-3/assset/img/header-video/mobile-1/video (${
      i + 1
    }).png`
);

const moonFrames = Array.from(
  { length: 148 },
  (_, i) =>
    `https://akm-img-a-in.tosshub.com/sites/intractive/immersive/chandrayan-3/assset/img/moon-video/mobile-2/video (${
      i + 1
    }).jpg`
);

const images = [...headerFrames, ...moonFrames];
const imagesDesktop = [...headerFrameDesktop, ...moonFrameDesktop];

export default function Home() {
  return (
    <div className=" text-white h-full overflow-auto">
      <div className="block sm:hidden">
        <ParallaxGallery images={images} />
      </div>
      <div className="hidden sm:block">
        <ParallaxGallery images={imagesDesktop} />
      </div>
    </div>
  );
}
