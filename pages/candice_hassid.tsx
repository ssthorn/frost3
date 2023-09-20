import React from "react";
import Link from "next/link";
import Image from "next/image";

const Candice = () => {
  return (
    <div className='md:grid md:grid-cols-5 gap-4 md:px-40 md:p-20 md:pt-20 md:min-h-screen mx-auto justify-center items-center'>
      <div className='col-span-2 flex justify-center md:justify-end md:items-start'>
        <Image
          src='/assets-candice/bw-candice.webp'
          alt='Candice Hassid'
          height='440'
          width='440'
          className='w-full h-3/4 md:w-full md:h-auto'
        />
      </div>
      <div className='col-span-3 flex flex-col md:justify-start px-6 md:px-0 py-6 md:py-0'>
        <div className='flex w-full justify-between items-baseline'>
          <div>
            <h2 className='text-4xl font-bold'>Candice Hassid</h2>
            <h2 className='text-xl font-light'>Chief Operating Officer</h2>
          </div>
          <a href='https://www.linkedin.com/in/candice-hassid-78123215/'>
            <svg
              role='img'
              width='32'
              height='32'
              viewBox='0 0 24 24'
              className='fill-current'
              fill='white'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>LinkedIn</title>
              <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
            </svg>
          </a>
        </div>

        <p className='mt-4 prose'>
          Candice Hassid is the Chief Operating Officer of FROST LLP. She is a
          dynamic and trusted business operations leader with deep experience
          across the law and finance sectors. Hassid is responsible for direct
          client interface on firm business matters and for overseeing all
          business operations for the firm, including business development,
          internal employee oversight, vendor relations, human resources,
          insurance and benefit matters, accounting, and intake and engagement.
          <br />
          <br />
          Hassid has previously worked with FROST LLP’s founding attorneys, and
          has been instrumental in establishing FROST LLP’s business operations
          and launching the firm. Prior to her time in the legal field, Hassid
          had a rich career in the banking industry where she held roles with
          extensive management and direct client interface responsibilities.
          <br />
          <br />
          Outside of her work life, Hassid prioritizes time with her family and
          showing her love for animals–in particular, a rottweiler named Vegan,
          a German Shepherd named Cash and Ra’s, her Mainecoon kitten.
        </p>
        {/* Add other profile details as needed */}
        <div className='flex gap-6 items-center py-6'>
          <Link href=''>
            <button className='btn btn-primary'>Get in touch</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Candice;
