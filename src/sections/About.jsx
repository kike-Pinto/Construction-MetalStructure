import React from 'react'
import { motion } from 'framer-motion'
import { slideUpVariants, zoomInVariants } from './animations'

const About = () => {
  return (
    <div
      className='lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]'
      id='about'
    >
      <motion.div
        initial='hidden'
        whileInView='visible'
        variants={slideUpVariants}
        className='lg:w-[60%] w-full flex flex-col justify-center items-start gap-6'
      >
        <motion.h1
          variants={slideUpVariants}
          className='text-yellow-500 text-2xl'
        >
          WELCOME TO
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className='text-white uppercase text-[40px] font-bold'
        >
          Prime Construction
        </motion.h1>
        <div className='w-[120px] h-[6px] bg-yellow-500'></div>
        <p className='text-3xl italic text-gray-50 mt-[60px]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quaerat!
        </p>
      </motion.div>

      <motion.div
        initial='hidden'
        whileInView='visible'
        variants={slideUpVariants}
        className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'
      >
        <p className='text-white text-lg text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolore
          tempore quibusdam placeat inventore blanditiis numquam veritatis amet
          aliquam eius dolor eaque atque voluptatum, cum ut, reprehenderit nemo
          possimus aspernatur? Dicta molestias, magni quis officiis itaque
          deserunt quod saepe autem beatae! Quas modi cupiditate tenetur
          molestiae cum ullam illum! Et animi facere voluptatibus illo enim
          fugit dicta omnis officia molestias suscipit similique, quos ab
          dolorum aliquam. Expedita necessitatibus consequuntur numquam eaque
          accusamus dignissimos totam iste, error inventore molestias explicabo
          dolorem qui labore laboriosam tenetur animi commodi adipisci.
          Consequatur, perspiciatis corrupti cumque ullam aliquid distinctio
          dolorem in, non cum nulla ab!
        </p>
        <motion.button
          variants={zoomInVariants}
          className='bg-yellow-500 hover:bg-white hover:text-black px-10 py-3 rounded-lg font-bold text-black'
        >
          READ MORE
        </motion.button>
      </motion.div>
    </div>
  )
}

export default About
