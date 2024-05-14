
import TextHeroCard from './text-card'
import Button from './button'


import img from '../assets/hero/hero-img.png'
import bg from '../assets/gradient.png'


function Hero() {
  return (
    <>
      <div className='mx-auto col-span-2 mb-5 mt-10'>
          <h1 className='font-extrabold text-5xl leading-relaxed tracking-wide'>
            Buy, Create & <br />Sell
            <span
              className='font-light italic ml-4 bg-gradient-to-tr from-blue-400 via-blue-500 to-indigo-900 bg-clip-text text-transparent animate-pulse'>
              UNIQUE NFTs </span>
            File.
          </h1>
          <div className="mt-3">
            <p className='leading-7 tracking-wide font-light font-mono'>NFTs are used for digital art and collectibles, GameFi <br /> projects, metaverses, and more.</p>
            <p className='font-light font-mono'>New to NFTs? <span className='text-blue-500 hover:cursor-pointer'>Learn more</span></p>
          </div>

          <div className="mt-20">
            <div className='animate-bounce '>
              <Button href='' title='Explore NFTs' />
            </div>
          </div>

          <div className="mt-20">
            <p className='font-light font-mono'>Already have an account? <span className='text-blue-500 hover:cursor-pointer'>Sign in</span></p>
          </div>
          <div className="mt-6 border-t pt-2 border-gray-500 flex flex-row gap-6"> 
            <TextHeroCard props={{ title: 'World Arts', count: 30000 }} />
            <TextHeroCard props={{ title: 'Digital Artists', count: 15000 }} />
            <TextHeroCard props={{ title: 'Live Auctions', count: 22000 }} />
            <TextHeroCard props={{ title: 'Unique Products', count: 50000 }} />
          </div>
      </div>

      <div className='lg:items-start  flex items-center justify-center my-3 md:my-0 py-3 relative rounded-full'>
        <img loading='lazy' src={bg} alt="bg" className='h-full w-full top-0 right-0 bottom-0 left-0 absolute' />
      
        <img loading='lazy' src={img} alt='img' className='h-56 w-56 scale-150 lg:scale-[2.1] rounded-full hover:animate-pulse' />
      </div>
    </>
  )
}

export default Hero