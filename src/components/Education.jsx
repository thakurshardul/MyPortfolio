import { EDUCATION } from "../constants"
import { motion } from "framer-motion"
const Education = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2 
      initial={{y:-100,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.5}}
      className='my-20 text-center text-4xl'>Education</motion.h2>
      <div>
        {EDUCATION.map((edu,index)=>(
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div 
                initial={{x:-100,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{duration:1}}
                className="w-full lg:w-1/4">
                    <p className="mb-2 text-sm text-neutral-400">{edu.year}</p>
                </motion.div>
                <motion.div 
                initial={{x:100,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{duration:1}}
                className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold">{edu.title} - <span className="text-sm text-purple-100 font-light">{edu.grade}</span></h6>
                    <p className="mb-4 text-neutral-400">{edu.institute}</p>
                </motion.div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Education
