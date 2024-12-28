import { motion } from "framer-motion"
import { FaLinkedin } from "react-icons/fa6"
const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h2 
        initial={{y:-100,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.5}}
        className="my-10 text-center text-4xl">Get in Touch</motion.h2>
        <div className="text-center tracking-tighter">
            <motion.div 
            initial={{x:-100,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:1}}
            >
                <a href="https://www.linkedin.com/in/shardul-vikram-singh" className="flex justify-center items-center gap-1">Reach me out on
                <FaLinkedin className="text-lg"/>
                </a>
            </motion.div>
            
            <motion.p 
            initial={{x:100,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:1}}
            className="my-4">+91-7408754224</motion.p>
            <a 
            href="mailto:thakurshardul1@gmail.com" className="border-b">thakurshardul1@gmail.com</a>
        </div>
    </div>
  )
}

export default Contact
