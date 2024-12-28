import React from 'react'
import aboutImg from "../assets/about.jpg"
import { motion } from 'framer-motion'
const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1 
        initial={{y:-100,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.5}}
        className='my-20 text-center text-4xl'>
            About
            <span className='text-neutral-500'> Me</span>
        </motion.h1>
        <div className='flex flex-wrap'>
            <motion.div 
            initial={{x:-100,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:1.2}}
            className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <img className='rounded-2xl' src={aboutImg} alt='aboutImage'/>
                </div>
                
            </motion.div>
            <motion.div 
            initial={{x:100,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:1.2}}
            className='w-full lg:w-1/2'>
                <div className='flex justify-center lg:justify-start'>
                    <p className='my-2 max-w-xl py-6 text-justify'>
                        I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including React, Nextjs, Nodejs, MySQL, PostgresSQL, and MongoDB. My journey in web development began with deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adopt to new challenges. I thrive in collaborative environments and enjoy complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.  
                    </p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About
