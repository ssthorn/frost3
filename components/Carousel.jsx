import React from "react";
import Image from "next/image";
import Link from "next/link";

const Carousel = () => {
  return (
    <div id='team' className="my-20 overflow-hidden">
        <div className="w-full text-center">
        <h1 className="px-2 mb-2 mt-0 text-6xl font-extrabold leading-tight">Our Team</h1>

        </div>
      <div className='carousel rounded-box'>
        <div className='carousel-item m-2'>
          <Link className='' href='/christopher_frost'>
            <div className=''>
              <Image
                src='/assets-chris/color-chris copy 2.webp'
                alt='Christopher'
                width='220'
                height='220'
              ></Image>
              <div className=''>
                <div className=''>
                  <h2 className='text-xl font-bold'>Christopher Frost</h2>
                  <h3 className='font-light'>Founding Partner</h3>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className='carousel-item m-2'>
        <Link className='' href='/candice_hassid'>
            <div className=''>
              <Image
                src='/assets-candice/color-candice.webp'
                alt='Candice'
                width='220'
                height='220'
              ></Image>
              <div className=''>
                <div className=''>
                  <h2 className='text-xl font-bold'>Candice Hassid</h2>
                  <h3 className='font-light'>Chief Operating Officer</h3>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className='carousel-item m-2'>
        <Link className='' href=''>
            <div className=''>
              <Image
                src='/assets-john/color-john.webp'
                alt='John'
                width='220'
                height='220'
              ></Image>
              <div className=''>
                <div className=''>
                  <h2 className='text-xl font-bold'>John D. Maatta</h2>
                  <h3 className='font-light'>Founding Partner</h3>
                </div>
              </div>
            </div>
          </Link>
        </div>
        
        <div className='carousel-item m-2'>
        <Link className='' href=''>
            <div className=''>
              <Image
                src='/assets-josh/color-josh.webp'
                alt='Josh'
                width='220'
                height='220'
              ></Image>
              <div className=''>
                <div className=''>
                  <h2 className='text-xl font-bold'>Josh Stambaugh</h2>
                  <h3 className='font-light'>Founding Partner</h3>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className='carousel-item m-2'>
        <Link className='' href=''>
            <div className=''>
              <Image
                src='/assets-sara/bw-sarah.jpg'
                alt='Sara'
                width='220'
                height='220'
              ></Image>
              <div className=''>
                <div className=''>
                  <h2 className='text-xl font-bold'>Sara McDuffie</h2>
                  <h3 className='font-light'>Senior Counsel</h3>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className='carousel-item m-2'>
        <Link className='' href=''>
            <div className=''>
              <Image
                src='/assets-david/bw-david.jpeg'
                alt='David'
                width='220'
                height='220'
              ></Image>
              <div className=''>
                <div className=''>
                  <h2 className='text-xl font-bold'>David T. Shackelford</h2>
                  <h3 className='font-light'>Attourney</h3>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className='carousel-item m-2'>
        <Link className='' href=''>
            <div className=''>
              <Image
                src='/assets-zach/bw-zach.jpg'
                alt='Zachary West'
                width='220'
                height='220'
              ></Image>
              <div className=''>
                <div className=''>
                  <h2 className='text-xl font-bold'>Zachary West</h2>
                  <h3 className='font-light'>Associate</h3>
                </div>
              </div>
            </div>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Carousel;
