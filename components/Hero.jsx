import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background image with parallax effect */}
      <div
        className="absolute inset-0 z-[-2] overflow-hidden"
        style={{
          backgroundImage: "url('/hero-image/color-group.webp')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // filter: "brightness(90%)", // Adjust opacity if needed
        }}
      ></div>

      {/* Content */}
      <div className="relative z-[2]">
        <div className="flex flex-col justify-center min-h-screen text-center">
          <h1 className="text-6xl font-extrabold text-white">
            Biglaw is over. We&apos;re what&apos;s next.
          </h1>
          <p className="font-light text-3xl text-white mt-5">
            Frost LLP civil litigation attorneys.
          </p>

          <Link href="">
            <button className="btn hover:btn-primary mt-10">Contact Us</button>
          </Link>
        </div>
        <div className="container mx-auto p-4 text-white">
        <p className="md:p-20 lg:text-2xl text-xl text-left relative ">
  Frost LLP&apos;s litigators serve our clients fiercely at all times. We are
  BigLaw veterans who believe the test of a law firm shouldn&apos;t be
  whether the firm is large or the shoes are white. Our litigation-only
  firm is built for efficiency, melding legal strategy, discipline, and
  cogent business advice to achieve the best outcome for our clients. We
  are unapologetically aggressive and profoundly successful. Our business
  litigation lawyers have a record of winning outstanding settlements,
  awards, judgments, and complete defense verdicts for individual and
  major corporate clients.
  <br />
  <br />
  Based in Los Angeles, California, Frost LLP represents clients
  worldwide on antitrust litigation, general commercial, partnership,
  entertainment, fraud, business tort, bankruptcy, and construction
  disputes. Our in-house experts, from BigLaw expats and former big media
  CEOs to senior military veterans, change outcomes with advice on
  executive compensation, employment law, and litigation-avoidance
  strategies.
  <br />
  <br />
  We don&apos;t wear white shoes. We don&apos;t settle. We fight to win.
</p>

        </div>
      </div>
    </div>
  );
};

export default Hero;
