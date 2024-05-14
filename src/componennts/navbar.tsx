import React, {  useState } from 'react'
import Button from './button'
import {  MenuIcon, XIcon } from 'lucide-react'
import {AnimatePresence, motion} from 'framer-motion'

function Navbar() {

  const destinations = [
    { name: 'Home', path: '/' },
    { name: 'All NFTS', path: '/all-nfts' },
    { name: 'Team', path: '/team' },
    { name: 'Terms & Co.', path: '/terms' },
    { name: 'Contact', path: '/contact' },
  ]

  const [isOpen, setIsOpen] = React.useState(false)

  const [pathname] = useState(window.location.pathname)

  
  return (
    <>
    <header className=" flex justify-between items-center p-4">
      <span className="text-white text-xl font-bold">KNFT</span>

      <button onClick={()=>setIsOpen(!isOpen)} className="bg-white md:hidden text-purple-700 font-bold py-2 px-4 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
          {
            isOpen ? (
              <motion.div initial={{scale:0.2,}} animate={{scale:1}}>
                <XIcon size={24} />
              </motion.div>
            ) : (
                <motion.div initial={{scale:0.2,}} animate={{scale:1}}>
                  <MenuIcon size={24} />
                </motion.div>
            )
          }
      </button>

      
      
        <AnimatePresence >
          <motion.nav
            exit={{ scale: 0, y:200 }}
            animate={{scale:1,opacity:1}}
            
            className="space-x-5 hidden md:block">
            {
              destinations.map((dest, index) => (
                
                <a href={dest.path} key={index}
                  className={`text-white px-2 hover:font-bold ${pathname===dest.path && "border-b-[2.4px] border-white pb-2 font-bold"}`} >
                  {dest.name}
                </a>
          
              ))
          }
          
        </motion.nav>
      </AnimatePresence>
      <div className='hidden md:block'>
        <Button href='' title='Get in Touch'  />
      </div>
      </header>
      <AnimatePresence>
      {
        isOpen && (
          
            <motion.div
                className='z-40 h-full bg-white fixed top-0 left-0 w-2/3 p-4 shadow-lg md:hidden'
                initial={{ opacity: 0, x: -400 }}
                animate={{ opacity: 1, x: 0 }}
                // transition={{ ease: 'easeInOut', duration: 400 }}
                
                exit={{x:-400,opacity:0}}
                
              >
                <div className="content">
                  <p className="font-semibold text-lg text-black">Menu </p>
                </div>

            </motion.div>
          
        )
        }
      </AnimatePresence>
    </>
  )
}

export default Navbar