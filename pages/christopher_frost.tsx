import React from "react";
import Link from "next/link";

const Chris = () => {
  return (
    <div className='md:grid md:grid-cols-5 gap-4 md:px-40 md:p-20 md:pt-20 md:min-h-screen mx-auto justify-center items-center'>
      <div className='col-span-2 flex justify-center md:justify-end md:items-start'>
        <img
          src='/assets-chris/bw-chris.webp'
          alt='Christopher Frost'
          className='w-full h-3/4 md:w-full md:h-auto'
        />
      </div>
      <div className='col-span-3 flex flex-col md:justify-start px-4 md:px-0 py-6 md:py-0'>
        <div className='flex w-full justify-between items-baseline'>
          <div>
            <h2 className='text-6xl font-bold'>Christopher Frost</h2>
            <h2 className='text-xl font-light'>Founding Partner</h2>
          </div>
          <a href='https://www.linkedin.com/in/christopher-frost-750156118/'>
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

        <p className='mt-4'>
        As founding and name partner of FROST LLP, Chris Frost sets the tone for the firm’s approach
to litigation, clients, and culture. He fights to win, seeks the best interests of his clients at all
times, and advocates for the inclusion of new voices in the legal community. Frost is a BigLaw
veteran and law professor who has chaired litigation departments and is known as an
unapologetically aggressive litigator. In Frost’s broad-based litigation practice, through which he
has represented clients from the United States and Canada to China and Lebanon, he has
secured substantial victories–large plaintiff awards and complete defense verdicts. Frost’s
clients–ranging from real estate developers to private equity funds and movie studios– trust him
with their plaintiff and defense-side antitrust, general corporate, partnership and LLC,
employment, entertainment, construction, and bankruptcy disputes. He also represents clients
in internal and governmental investigations.
<br />
<br />
Frost has established FROST LLP with partners who share his belief that law can be done
differently, emphasizing efficiency and the primacy of a client’s business objectives. Frost, who
describes himself as “a lawyer all day every day” in his commitment to his work, prizes the use
of civil procedure in litigation. He has also taught civil procedure at law schools including his
alma mater, Pepperdine University’s Caruso School of Law, and served as a consulting expert
in disputes based in Ireland and Canada. His legal publications have been cited by federal
courts and leading state and federal legal publications.
<br />
<br />
Frost is known for his distinctive aesthetic. In his rare breaks from living and breathing the law,
he collaborates with a trusted tattoo artist on an ongoing 20-year project to ink himself with
internationally-inspired art tattoos.
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

export default Chris;
