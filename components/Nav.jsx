import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="">
      <div className='drawer'>
        <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content flex flex-col'>
          {/* Navbar */}
          <div className='w-full navbar md:p-0 fixed top-0'>
            <div className='flex-1 lg:hidden'>
              <label htmlFor='my-drawer-3' className='btn btn-square btn-ghost'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  className='inline-block w-6 h-6 stroke-current'
                >
                  <path
                    strokeLinecap=''
                    strokeLinejoin=''
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  ></path>
                </svg>
              </label>
            </div>
            
            <div className='flex-1 hidden lg:block'>
              <ul className='menu menu-horizontal'>
                {/* Navbar menu content here */}
                <li className="">
                  <Link className="" href=''>About Us</Link>
                </li>
                <li>
                  <Link href='/#team'>
                      Team
                  </Link>
                </li>
                <li>
                  <Link href='/#services'>Services</Link>
                </li>
                <li>
                  <Link href='/#success'>Success Stories</Link>
                </li>
                <li>
                  <Link href='/#community'>Community Involvement</Link>
                </li>
                <li>
                  <Link href='/#contact'>Contact</Link>
                </li>
              </ul>
            </div>
            <Link href='/#hero' className='flex-none px-2 mx-2 items-baseline'><span className="text-2xl font-bold tracking-wider">FROST</span> <span className="text-xs font-hairline">LLP</span></Link>
          </div>
          {/* Page content here */}
          {/* <div className='relative z-10 mb-20 w-full h-[110vh] bg-red-700'>
            Content
          </div> */}
        </div>
        <div className='drawer-side'>
          <label htmlFor='my-drawer-3' className='drawer-overlay'></label>
          <ul className='menu p-4 w-80 min-h-full bg-base-200'>
            {/* Sidebar content here */}
            <li>
              <Link href=''>About Us</Link>
            </li>
            <li>
              <Link href='/#team'>Team</Link>
            </li>
            <li>
              <Link href='/#services'>Services</Link>
            </li>
            <li>
              <Link href='/#success'>Success Stories</Link>
            </li>
            <li>
              <Link href='/#community'>Community Involvement</Link>
            </li>
            <li>
              <Link href='/#contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
