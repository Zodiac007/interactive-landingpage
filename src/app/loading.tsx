import Image from "next/image";

export default function Loading() {
  return (
    <div className="relative h-screen w-full">
      <Image
        src="https://akm-img-a-in.tosshub.com/sites/interactive/immersive/baahubali-nteractive/assest/img/loader-IT.gif"
        alt="loading-gif"
        fill
        objectFit="cover"
      />
    </div>
  );
}
