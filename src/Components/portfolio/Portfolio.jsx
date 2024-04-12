import React from 'react'
import "./Portfolio.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion"
import { useRef } from 'react'


const items = [{
    id:1,
    title:"About Me",
    img:"https://img.freepik.com/free-photo/classic-chess-board-still-life_23-2150314914.jpg?t=st=1712856933~exp=1712860533~hmac=e04d0c535ae3d2f1f8baf31836198c832770cd8480a7331e32d95c71c12d285a&w=1380",
    desc : "I'm Denis, a 20-year-old with a deep passion for all things tech, sports, nature, and cars. I live for the thrill of exploring new technologies, whether it's diving into coding projects or experimenting with the latest gadgets. But my love for adventure doesn't stop there—I'm equally at home hitting the trails or immersing myself in the great outdoors. And when I'm not geeking out over tech or soaking up nature's beauty, you'll find me indulging my fascination with cars, from classic models to cutting-edge designs. As a dedicated team player, I thrive on collaboration and always bring my energy and enthusiasm to any project I'm a part of."

    
},
{
id:2,
title:"My Education",
img:"https://img.freepik.com/free-photo/close-up-graduation-certificate-with-mortar-board-table_1252-728.jpg?t=st=1712857211~exp=1712860811~hmac=440b9d5873cab97dce5aaa0f78838d5274d04f3db74f555bbdd3a4826ea39471&w=1380",
desc:"I live in Suceava, Romania, where I completed all my studies. I attended high school at Colegiul Economic Dimitrie Cantemir, which had an emphasis on economics. After high school, I enrolled in Colegiul Stefan Cel Mare Suceava for my college education. Here, I began studying Computer Science. Currently, I am in the third year of college, continuing my studies in this field.",
},
{
    id:3,
    title:"Experience",
    img:"https://img.freepik.com/free-photo/closeup-programer-hands-typing-machine-learning-code-laptop-keyboard-front-computer-screens-with-programming-interface-system-engineer-writing-algorithm-online-cloud-computing_482257-41853.jpg?t=st=1712857314~exp=1712860914~hmac=0b7b711eadea55a03fd6c46dbd27b6b5b12426b6d5f49d8cff6196396856d216&w=1380",
    desc:"Most of my programming experience stems from projects and coursework during my time at college. Throughout my college education, we were exposed to a wide range of technologies and fields of work, including various programming languages such as C, C++, Java, JavaScript, C#, and Python. While I have varying levels of proficiency in each, I personally gravitate towards JavaScript and the web development aspect.One notable experience was participating in a web contest with my team. This provided me with valuable hands-on experience and strengthened my skills in web development.",
    
},
]

const Single = ({item}) => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({target:ref})

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return <section ref={ref} >
       <div className="container">
        <div className="wrapper">
            <div className="imageContainer">
        <img src={item.img} alt=""/>
        </div>
        <div className="textContainer " style={{y}}>
            <h2  >{item.title}</h2>
            <p>{item.desc}</p>
            {/* <button>See Demo</button> */}
        </div>
        </div>
        </div> 
    </section>
        
};

export const Portfolio = () => {

    const ref = useRef()

    

    const {scrollYProgress} = useScroll({target:ref, offset:["end end", "start start"]})

    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    })

  return (
    <div className='portfolio' ref={ref} >
       <div className="progress">
        <h1>Meet Me</h1>
        <motion.div style={{scaleX}} className="progressBar">

        </motion.div>
        </div> 

        {items.map(item => (
            <Single item={item} key={item.id} />
        ))}
    </div>
    
  )
}
