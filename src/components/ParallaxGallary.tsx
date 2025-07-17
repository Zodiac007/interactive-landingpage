"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type TextBlock = {
  start: number; // Frame start
  end: number; // Frame end
  content: React.ReactNode;
};

export default function ParallaxGallery({ images }: { images: string[] }) {
  const containerRef = useRef<any>(null);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const scrollY = window.scrollY;
      const offsetTop = containerRef.current.offsetTop;
      const scrollProgress = scrollY - offsetTop;
      const maxScroll = containerRef.current.offsetHeight - window.innerHeight;

      const progress = Math.min(Math.max(scrollProgress / maxScroll, 0), 1);

      const currentFrame = Math.floor(progress * (images.length - 1));
      setIdx(currentFrame);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [images]);

  const textBlocks: TextBlock[] = [
    {
      start: 20,
      end: 50,
      content: (
        <div className="bg-black/80 sm:bg-black/80 h-full flex justify-center items-center p-2 sm:p-8 rounded-lg">
          <p className="text-2xl sm:text-4xl font-medium text-white">
            It was in the wee hours of September 6, 2019, when the dust on the
            Moon's surface began to flicker from its ancient hibernation,
            feeling the rumblings of engines hurtling overhead. Chandrayaan-2
            was on the final stretch. But it all ended in despair. Four years
            later, India is back at it. Chandrayaan-3 is on the final approach
            as it eyes the prize awaiting below. Join this epic journey, and be
            part of history as we take you to the Moon.
          </p>
        </div>
      ),
    },
    {
      start: 40,
      end: 55,
      content: (
        <div className="bg-white/70 p-4 sm:p-8 rounded-lg">
          <p className="text-base sm:text-xl font-medium text-black">
            After burning 348 tonnes of fuel, enduring over 40 days of radiation
            strikes, and traveling around 4 lakh kilometers in the vacuum of
            space, Chandrayaan-3 is on the verge of creating history. The
            spacecraft has reached its destination after completing some of the
            most challenging tasks in front of it, which included raising its
            orbit at Earth five times, covering the vast stretch between Earth
            and the Moon, and then critically lowering its altitude above the
            Moon.
          </p>
        </div>
      ),
    },
    {
      start: 50,
      end: 55,
      content: (
        <div className="bg-white/70 p-4 sm:p-8 rounded-lg">
          <p className="text-base sm:text-xl font-medium text-black">
            It now flies nearly 100 kilometers above the lunar surface. The
            journey begins.
          </p>
        </div>
      ),
    },
    {
      start: 55,
      end: 60,
      content: (
        <div className="bg-white/70 p-4 sm:p-8 rounded-lg">
          <p className="text-base sm:text-xl font-medium text-black">
            Vikram, Chandrayaan-3's lander, is a crucial component equipped with
            four throttle-able engines, enhancing its landing precision. The
            lander is designed with a Laser Doppler Velocimeter (LDV) and
            various subsystems like navigation sensors and propulsion systems to
            ensure a safe and soft landing on the Moon. With advanced
            hazard-detection cameras, stronger landing legs, and the ability to
            withstand a faster landing, it is ready for touchdown.
          </p>
        </div>
      ),
    },
    {
      start: 57,
      end: 63,
      content: (
        <div className="bg-white/70 p-5 rounded-lg">
          <p className="text-base sm:text-xl text-black font-bold uppercase">
            Separation Confirmed
          </p>
        </div>
      ),
    },
    {
      start: 60,
      end: 75,
      content: (
        <div className="bg-white/70 p-4 sm:p-8 rounded-lg">
          <p className="text-base sm:text-xl font-medium text-black">
            The propulsion module plays a crucial role in the spacecraft's
            journey. It carried the lander and rover configuration until the
            spacecraft reached a 100 km lunar orbit. The module functions like a
            communication relay satellite, ensuring smooth transmission of
            information. It was also responsible for raising the spacecraft's
            orbit several times before transferring it into the lunar orbit and
            subsequently lowering it until it reached a circular, 100-kilometer
            orbit. The module also houses the Spectro-polarimetry of Habitable
            Planet Earth (SHAPE) payload, which will now study spectral and
            polarimetric measurements of Earth from the lunar orbit to be used
            for finding life outside the Solar System.
          </p>
        </div>
      ),
    },
    {
      start: 73,
      end: 76,
      content: (
        <div className="bg-white/70 p-4 sm:p-8 rounded-lg">
          <p className="text-base sm:text-xl font-medium text-black">
            Landing a lunar spacecraft from an altitude of 100 kilometers above
            the Moon is a complex process that involves several stages. The
            first step is to separate the lander from the propulsion module,
            which then enters a 100 km x 30 km orbit. This means the farthest it
            will be from the Moon is 100 km, and the closest is 30 km.
          </p>
        </div>
      ),
    },
    {
      start: 75,
      end: 80,
      content: (
        <div className="bg-white/70 p-4 sm:p-8 rounded-lg">
          <p className="text-base sm:text-xl font-medium text-black">
            The final approach to the Moon is set to begin at 5:30 pm on August
            23 when the spacecraft will be about 100 kilometers above the
            surface. Isro will initiate the commands preloaded into the systems
            overboard.
          </p>
        </div>
      ),
    },

    {
      start: 80,
      end: 100,
      content: (
        <div className="bg-white/70 p-4 sm:p-8 rounded-lg">
          <p className="text-base sm:text-xl font-medium text-black">
            For a spacecraft to land on the surface of the Moon, everything has
            to be accurate since it is autonomously performed by onboard
            computers. They take charge of communications, navigations, speed
            braking, engine firing, and site selection for a smooth touchdown.
          </p>
        </div>
      ),
    },

    {
      start: 95,
      end: 105,
      content: (
        <div className="bg-white/70 p-4 sm:p-8 rounded-lg">
          <p className="text-base sm:text-xl font-medium text-black">
            At about an altitute of 30 km above the Moon, the lander begins to
            use its thrusters to navigate down to the surface. The descent is
            guided by sensors on the lander. In the case of Chandrayaan-3, there
            is an impressive package of Position Detection Camera, Altimeter,
            Doppler, Velocity Camera, Inclinometer & Touchdown sensors to guide
            it in this nerve-wracking final moments.
          </p>
        </div>
      ),
    },
    {
      start: 102,
      end: 110,
      content: (
        <div className="bg-white/70 p-4 sm:p-8 rounded-lg">
          <p className="text-base sm:text-xl font-medium text-black">
            The spacecraft will initiate a retrograde burn when it is closest to
            the Moon in orbit to commence the adventurous landing sequence. It
            will use its main engine for one continuous burn from orbit all the
            way down to 4 meters above the surface.
          </p>
        </div>
      ),
    },
    {
      start: 110,
      end: 115,
      content: (
        <div className="bg-white/70 p-4 sm:p-8 rounded-lg">
          <p className="text-base sm:text-xl font-medium text-black">
            The thrusters will be used for attitude control and re-orientation
            maneuvers with quick response times.
          </p>
        </div>
      ),
    },

    {
      start: 112,
      end: 120,
      content: (
        <div className="bg-white/70 p-4 sm:p-8 rounded-lg">
          <p className="text-base sm:text-xl font-medium text-black">
            Once the vehicle reaches an altitude of about 100 meters, it starts
            a hovering segment of up to 100 seconds to acquire imagery of the
            landing site and perform precise avoidance maneuvers ahead of the
            vertical descent. After hovering, the vehicle will start a constant
            low-velocity descent toward the surface, constantly throttling down
            its engine as the vehicle gets lighter. Precise altitude data is
            provided by a laser altimeter that is used to provide the final
            engine cut-off signal.
          </p>
        </div>
      ),
    },

    {
      start: 121,
      end: 125,
      content: (
        <div className="bg-white/70 p-4 sm:p-8 rounded-lg">
          <p className="text-base sm:text-xl font-medium text-black">
            Touchdown.
            <br /> India makes history.
          </p>
        </div>
      ),
    },

    {
      start: 156,
      end: 175,
      content: (
        <div className="bg-white/70 p-4 sm:p-8 rounded-lg">
          <p className="text-base sm:text-xl font-medium text-black">
            The rover will be prepped for deployment and the process begins an
            hour or so later once the lunar dust kicked off by the thrusters
            settle. Isro will perform health checkups on the rover, and ensure
            communication links are working and the batteries are charged.
          </p>
        </div>
      ),
    },

    {
      start: 173,
      end: 180,
      content: (
        <div className="bg-white/70 p-4 sm:p-8 rounded-lg">
          <p className="text-base sm:text-xl font-medium text-black">
            As the ramp opens and fixes on the ground, the rover will roll up by
            using its battery. The solar panels will be activated to absorb the
            energy radiating from the Sun for instruments to come to life.
          </p>
        </div>
      ),
    },

    {
      start: 184,
      end: 195,
      content: (
        <div className="bg-white/70 p-4 sm:p-8 rounded-lg">
          <p className="text-base sm:text-xl font-medium text-black">
            Chandrayaan-3 Mission Accomplished. History Made. Science Begins…
          </p>
        </div>
      ),
    },
  ];

  return (
    <>
      <div
        ref={containerRef}
        className="relative w-full z-40"
        style={{ height: `${images.length * 5}vh` }} // Enough scroll area
      >
        <div className="fixed top-0 left-0 w-full sm:w-screen h-full sm:h-screen bg-black overflow-hidden z-10">
          <div className="imgContainer z-20 overflow-hidden ">
            <div className="imgImg" />
          </div>
          <Image
            src={images[idx]}
            alt={`Frame ${idx + 1}`}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Floating Scrollable Texts */}
        <div className="fixed top-0 left-0 w-full h-screen z-10 flex items-center justify-center">
          {idx < 35 && (
            <div className="">
              <h1 className="text-[5rem] sm:text-[12rem] font-bold text-center uppercase font-bebas leading-20 sm:leading-26 mb-5">
                India's
                <br />
                <span className="text-[5rem] sm:text-[8rem]">Moonshot</span>
              </h1>
              <p className="text-2xl sm:text-4xl text-center font-bold uppercase font-bebas mb-6">
                Chandrayaan-3 on final approach
              </p>

              <div className="text-lg text-center">
                Story By:{" "}
                <a className="underline underline-offset-6">Sibu Tripathi</a> |{" "}
                <a className="underline underline-offset-6">Rahul Gupta</a>
              </div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white">
                <p className="mb-4 -ml-1 text-lg">Scroll</p>
                <div className=" block animate animate-bounce">
                  <svg
                    height="40px"
                    width="40px"
                    version="1.1"
                    fill="#fff"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 330 330"
                  >
                    <path
                      id="XMLID_225_"
                      d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                                            c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                                            s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
        {textBlocks.map((block, i) => {
          const isActive = idx >= block.start && idx <= block.end;

          // Calculate local progress for that block (0 to 1)
          const localProgress = isActive
            ? (idx - block.start) / (block.end - block.start)
            : 0;

          // TranslateY from 100vh (bottom) to -100vh (top)
          const translateY = 100 - localProgress * 200;

          return (
            <>
              <div
                key={i}
                className={`fixed max-w-5xl top-0 w-full left-1/2 transform -translate-x-1/2 h-screen z-10  pointer-events-none transition-transform duration-100`}
                style={{
                  transform: `translateY(${translateY}vh)`,
                  opacity: isActive ? 1 : 0,
                }}
              >
                <div className="text-white text-center px-4">
                  {block.content}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
