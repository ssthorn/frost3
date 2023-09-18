import React from "react";
import Image from "next/image";
import Link from "next/link";
import heroImage from "/public/hero-image/heroImage.jsx";

const Hero = () => {
  return (
    
    <section
    id="hero"
      className='flex flex-col bg-center bg-cover bg-blend-overlay bg-fixed bg-black/30'
      style={{ backgroundImage: `url('/hero-image/color-group.webp')` }}
    >
      <div class='flex-1 flex items-center min-h-screen'>
        <div class='text-center mx-auto mt-40'>
          <h1 class='text-6xl font-extrabold'>
            Biglaw is over. We're what's next.
          </h1>
          <p class='font-light text-3xl mt-5'>
            Frost LLP civil litigation attourneys.
          </p>

          <Link className='' href=''>
            <button className='btn hover:btn-primary mt-10'>Contact Us</button>
          </Link>
        </div>
      </div>
      <div className="">
      <p className='md:p-20 p-10 lg:text-2xl text-xl text-left'>
        Frost LLP’s litigators serve our clients fiercely at all times. We are
        BigLaw veterans who believe the test of a law firm shouldn’t be whether
        the firm is large or the shoes are white. Our litigation- only firm is
        built for efficiency–melding legal strategy, discipline, and cogent
        business advice to achieve the best outcome for our clients. We are
        unapologetically aggressive and profoundly successful. Our business
        litigation lawyers have a record of winning outstanding settlements,
        awards, judgments, and complete defense verdicts for individual and
        major corporate clients. 
        <br />
        <br />
        Based in Los Angeles, California, Frost LLP
        represents clients worldwide on antitrust litigation, general
        commercial, partnership, entertainment, fraud, business tort,
        bankruptcy, and construction disputes. Our in-house experts, from BigLaw
        expats and former big media CEOs to senior military veterans, change
        outcomes with advice on executive compensation, employment law, and
        litigation-avoidance strategies. 
        <br />
        <br />
        We don’t wear white shoes. We don’t
        settle. We fight to win.
      </p>
      </div>
      
    </section>
  );
};

export default Hero;
