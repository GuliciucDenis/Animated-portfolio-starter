import React from 'react'
import "./Services.scss"
import {motion} from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faSass } from '@fortawesome/free-brands-svg-icons';
import { faFigma } from '@fortawesome/free-brands-svg-icons';


export const Services = () => {
  return (
    <motion.div className='services'>
        <motion.div className="textContainer">
            <p>"Stay curious, stay humble,<br/> and never stop learning."<br/>Albert Einstein</p>
            
            <hr/>
        </motion.div>
        <motion.div className="titleContainer">
            <div className="title">
                <img src="/people.webp" alt=""/>
                <h1>
                    <b>Technologies </b>
                 i Like</h1>
            </div>
            <div className="title">
                <h1>
                    to
                <b> Use</b>
                </h1>
                {/* <button>Button</button> */}
            </div>
        </motion.div>
        <motion.div className="listContainer">
            <div className="box">
               <h2><FontAwesomeIcon icon={faReact} /></h2> 
               <p>
I'm drawn to React for its ability to streamline the development process of creating dynamic user interfaces. Its modular architecture allows me to break down complex UIs into smaller, reusable components, making my codebase more maintainable and scalable. With React's virtual DOM, updates are efficiently managed, resulting in faster rendering and improved performance. Additionally, the extensive ecosystem of libraries, and tools React ensures that I have access to resources and solutions for any challenge I encounter.</p>
               {/* <button>Go</button> */}
            </div>
            <div className="box">
               <h2><FontAwesomeIcon icon={faJs} /></h2> 
               <p>
JavaScript is my top pick for web development due to its versatility and broad capabilities. It enables me to create interactive and dynamic web experiences effortlessly, manipulating HTML and CSS, handling real-time user interactions, and fetching data asynchronously. Its ubiquity across browsers, easy-to-learn syntax, and extensive library ecosystem make it the ideal choice for building everything from simple websites to complex web applications.</p>
               {/* <button>Go</button> */}
            </div>
            <div className="box">
               <h2><FontAwesomeIcon icon={faSass} /></h2> 
               <p>Sass elevates my CSS game with features like variables and mixins, streamlining my workflow and promoting cleaner, more maintainable stylesheets. Its ability to compile into regular CSS ensures seamless browser compatibility, while its rich ecosystem of extensions and frameworks offers endless possibilities for enhancing web design productivity.</p>
               {/* <button>Go</button> */}
            </div>
            <div className="box">
               <h2><FontAwesomeIcon icon={faFigma} /></h2> 
               <p>Figma is my go-to for designing beautiful interfaces and prototypes. Its collaborative features, real-time editing, and cloud-based accessibility streamline my workflow and foster creativity. With Figma's intuitive interface and rich feature set, I can bring my ideas to life quickly and efficiently, making it an essential tool for any design project.</p>
               {/* <button>Go</button> */}
            </div>
        </motion.div>
    </motion.div>
  )
}
