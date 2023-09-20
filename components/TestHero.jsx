import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const parallax = parallaxRef.current;

    const handleScroll = () => {
      if (parallax) {
        const scrollY = window.scrollY;
        parallax.style.backgroundPositionY = `${scrollY * 0.5}px`; // Adjust the multiplier for the desired parallax effect
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Parallax Background */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 overflow-hidden"
        style={{
          backgroundImage: "url('/hero-image/color-group.webp')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Content */}
      <div className="relative">
        <div className="flex flex-col justify-center min-h-screen text-center">
          <h1 className="text-6xl font-extrabold text-white">
            Biglaw is over. We&apos;re what&apos;s next.
          </h1>
          <p className="font-light text-3xl text-white mt-5">
            Frost LLP civil litigation attorneys.
          </p>

          <Link href="/#contact">
            <button className="btn hover:btn-primary mt-10">Contact Us</button>
          </Link>
        </div>
        <div className="container mx-auto p-6 text-white">
          <p className="lg:text-2xl text-xl text-left relative">
            {/* Your content */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
