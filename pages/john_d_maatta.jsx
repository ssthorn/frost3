import React from "react";
import Link from "next/link";
import Image from "next/image";

const john_d_maatta = () => {
  return (
      <div className='md:grid md:grid-cols-5 gap-4 md:px-40 md:p-20 md:pt-20 md:min-h-screen mx-auto justify-center items-center'>
        <div className='col-span-2 justify-center md:justify-end md:items-start'>
          <Image
            src='/assets-john/bw-john.webp'
            alt='John D. Maatta'
            width='440'
            height='440'
            className='w-full h-3/4 md:w-full md:h-auto'
          />
        </div>
        <div className='col-span-3 flex flex-col md:justify-start px-6 md:px-0 py-6 md:py-0'>
          <div className='flex w-full justify-between items-baseline'>
            <div>
              <h2 className='md:text-6xl text-4xl font-bold'>John D. Maatta</h2>
              <h2 className='text-xl font-light'>Founding Partner</h2>
            </div>
            <a href='https://www.linkedin.com/in/john-d-maatta-56a4556/'>
              <svg
                role='img'
                width='24'
                height='24'
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
            A founding partner of FROST LLP, John D. Maatta is unique in his
            significant and complementary experience across law, business, and
            media. A highly experienced trial lawyer, Maatta also spent many
            years as a senior business executive and served as co-head of a
            major television network. He is a sought-after expert on the
            business of entertainment, media, and intellectual property. 
            <br />
            <br />
            Having
            tried lengthy and complex jury trials representing clients in both
            state and federal court, Maatta maintains a distinctive practice
            representing individuals, celebrities, and businesses. His deep
            experience as a business executive, trial attorney, and
            transactional attorney combines to provide an unmatched skill set.
            Maatta&apos;s background shapes his judgment and ability as a trial
            lawyer and provides him with a deep understanding and empathy
            concerning the clients that he represents as a trial lawyer. 
            <br />
            <br />
            Prior
            to joining FROST LLP, Maatta spent several years as a senior
            executive at Warner Bros. and The CW Television Network. Notably, he
            was the longtime co-head of the CW Television Network, where he was
            the chief operating officer responsible for departments including
            media sales, finance, technology, business affairs, legal, broadcast
            standards, network distribution, and human resources. Maatta was
            also executive vice president and general counsel at both The CW
            Television Network and the WB Television Network. Today, Maatta
            applies this experience in advising clients as a transactional
            entertainment attorney. 
            <br />
            <br />
            Maatta brings his mastery of multiple
            professional arenas and his earned wisdom to a number of projects
            that interest him, he advises and actively collaborates with
            entrepreneurs and management teams at start-up and growth phase
            companies. He was the CEO and a board member of two public
            companies, and is currently the vice chairman of a private marketing
            and branding enterprise. Maatta currently serves on the board of
            Trader Vic&apos;s Restaurant Corporation where he is the former chairman.
            <br />
            <br />
            Maatta is intellectually curious and seeks out enriching community
            engagements, adventures and experiences around the world. In service
            to his community, he was the president of UNICEF Southern California
            and was a member of the UNICEF Board of Directors for many years.
            Maatta was also a board member of the Asia Society, as well as
            chairman of the UNICEF Chinese Children&apos;s Initiative.
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

export default john_d_maatta;
