import { useRef } from "react";
import "./services.scss"
import {animate, motion,useInView} from "framer-motion"


const variants = {
    initial:{
        x:-500,
        y:100,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
};

const Services = () => {

    const ref = useRef()

    const isInView = useInView(ref,{margin:"-100px"})
  return (
    <motion.div className="services" variants={variants}
    initial="initial"
    //  animate="animate"
    // whileInView="animate"
    ref={ref}
    animate={isInView && "animate"}
     >
        <motion.div className="textContainer"variants={variants}>
            <p>
                I focus on helping your brand grow
                <br />and move forward
            </p>
            <hr />

        </motion.div>
        <motion.div className="titleContainer"variants={variants}>
            <div className="title">
                <img src="images/people.webp" alt="" />
                <h1>
                    <motion.b whileHover={{color:"orange"}}>Unique</motion.b>Ideas
                </h1>
            </div>
            <div className="title">
                <h2>
                    I specialize in transforming
                    ideas into captivating digital
                    experience.
                </h2>
                <button>My Services</button>
            </div>
        </motion.div>
        <motion.div className="listContainer"variants={variants}>
            <motion.div className="box" 
            whileHover={{background:"lightgray",color:"black"}}>
                <h2>Frameworks</h2>
                <p>
                    Developer utilize React.js,Angular.js,
                    Tailwind CSS,Framer-motion,Bootstrap to
                    enhance user experience
                </p>
            </motion.div>
            <motion.div className="box"
             whileHover={{background:"lightgray",color:"black"}}>
                <h2>UI Development</h2>
                <p>
                   Designing and implementing the visual
                   elements that users interact with a 
                   website or web application
                </p>
            </motion.div>
            <motion.div className="box" 
            whileHover={{background:"lightgray",color:"black"}}>
                <h2>Responsive</h2>
                <p>
                    UI designers ensure websites and apps
                    adapt to desktops,laptops,tablets and 
                    smartphones
                </p>
            </motion.div>
            <motion.div className="box"
             whileHover={{background:"lightgray",color:"black"}}>
                <h2>Visual Design</h2>
                <p>
                    Designers create UI visual elements
                    like color schemes,icons,buttons
                    ,layout 
                    and typography to create 
                    an engaging 
                    and intuitive digital experience
                </p>
            </motion.div>
        </motion.div>
        </motion.div>
  )
}

export default Services