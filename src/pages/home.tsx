import React from 'react'
import img from '../assets/hero/hero-img.png'
import bg from '../assets/gradient.png'
import Button from '../componennts/button';


function HomePage() {
  return (
    <div className=" text-white p-8  md:h-[90vh] grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center overflow-x-hidden">

     <div className='mx-auto col-span-2 mb-5'>
        <h1 className='font-extrabold text-5xl leading-relaxed tracking-wide'>
          Buy, Create & <br />Sell
          {/* <span
            className='font-light italic ml-4 bg-gradient-to-tr from-pink-600 via-fuchsia-700 to-pink-600 bg-clip-text text-transparent'>
            Unique NFTs </span> */}
          <span
            className='font-light italic ml-4 bg-gradient-to-tr from-blue-400 via-blue-500 to-indigo-900 bg-clip-text text-transparent animate-pulse'>
            Unique NFTs </span>
          File.
        </h1>
        <div className="mt-3">
          <p className='leading-7 tracking-wide font-light font-mono'>NFTs are used for digital art and collectibles, GameFi <br /> projects, metaverses, and more.</p>
        </div>

        <div className="mt-20">
          <div className='animate-bounce '>
            <Button href='' title='Explore NFTs' />
          </div>
        </div>
      </div>

      <div className='lg:items-start  flex items-center justify-center my-3 md:my-0 py-3 relative rounded-full'>
        <img loading='lazy' src={ bg} alt="bg" className='h-full w-full top-0 right-0 bottom-0 left-0 absolute' />
        <img loading='lazy' src={img} alt='img' className='h-56 w-56 scale-150 lg:scale-[2.1] rounded-full hover:animate-pulse' />
      </div>

    </div>
  );
}

export default HomePage