import {PROJECTS} from "../constants"
import { motion } from "framer-motion"
const Projects = () => {
  return (
    <div className='border-b border-neutral-800 pb-4'>
      <motion.h2 
      initial={{y:-100,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.5}}
      className="my-20 text-center text-4xl">Projects</motion.h2>
      <div>
        {PROJECTS.map((project,index)=>(
            <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
                <motion.div 
                initial={{x:-100,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{duration:1}}
                className="w-full lg:w-1/4">
                    <img src={project.image} alt="project-image" height={150} width={150} className="mb-6 rounded"/>
                </motion.div>
                <motion.div 
                initial={{x:100,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{duration:1}}
                className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold">{project.title}</h6>
                    <p className="mb-4 text-neutral-400">{project.description}</p>
                    <div className="flex flex-wrap">{project.technologies.map((tech,index)=>(
                        <span key={index} className="mr-2  mb-2 px-2 py-1 text-sm font-medium text-purple-700 rounded bg-neutral-900">{tech}</span>
                    ))}</div>
                </motion.div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
