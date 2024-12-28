import React from 'react'
import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaEnvelope} from 'react-icons/fa'
import { motion } from 'framer-motion'
const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <motion.div 
            initial={{x:-100,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:0.5}}
            className='text-white text-4xl tracking-widest'>SV</motion.div>
        </div>
      <motion.div 
      initial={{x:100,opacity:0}}
      whileInView={{x:0,opacity:1}}
      transition={{duration:0.5}}
      className='m-8 flex items-center justify-center gap-6 text-2xl'>
        <FaLinkedin/>
        <FaGithub/>
        <FaEnvelope/>
      </motion.div>
    </nav>
  )
}

export default Navbar
