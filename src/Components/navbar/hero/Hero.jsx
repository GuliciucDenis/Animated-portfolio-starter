import React from 'react'
import "./Hero.scss"
import { motion } from "framer-motion";

const sliderVariants = {
    initial: {
        x:0,
    },
    animate: {
        x: "-220%",
        transition:{
            repeat: Infinity,
            repeatType:"mirror",
            duration:15, 
        },
    },
    
}

const textVariants = {
    initial: {
        x:-500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity
        }
    }
}


export const Hero = () => {
  return (
    <div className='hero' >
        <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate" >
            <motion.h2  variants={textVariants} >Guliciuc Denis</motion.h2>
            <motion.h1  variants={textVariants}>Web Developer</motion.h1>
            <motion.div   variants={textVariants} className="buttons">
                <motion.button  variants={textVariants} ><a href='#About'>About Me</a></motion.button>
                <motion.button  variants={textVariants}><a href='#Contact'>Contact</a></motion.button>
            </motion.div>
            <motion.img  animate="scrollButton"  variants={textVariants} src="scroll.png" ></motion.img>
        </motion.div>
        <motion.div variants={sliderVariants} initial="initial" animate="animate" className="slidingTextContainer">
            Guliciuc Denis
        </motion.div>
        </div>
    </div>
  )
}
