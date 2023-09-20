import React from 'react';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className='flex h-full items-baseline'>
      <div className=''>
        <Image
          className=''
          src="/frostlogo1.png"
          width={200}
          height={100}
          alt='Frost Logo'
          layout="fixed"
        />
      </div>
      <p className='text-xs font-hairline'>LLP</p>
    </div>
  );
}

export default Logo;
