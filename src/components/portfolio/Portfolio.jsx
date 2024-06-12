import { useRef } from "react";
import "./portfolio.scss"
import {motion,useScroll,useSpring, useTransform} from "framer-motion";




const items = [
    {
        id:1,
        title:"Login Page",
        img:"https://images.pexels.com/photos/20543264/pexels-photo-20543264/free-photo-of-the-morning-of-chang-jiang-river-wu-han.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc:"A simple login page. ",
    },
    {
        id:2,
        title:"Tour Page Demo",
        img:"https://images.pexels.com/photos/5036663/pexels-photo-5036663.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Tour booking page using HTML CSS. ",
    },
    {
        id:3,
        title:"Nike App",
        img:"https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"React js and Tailwind. ",
    },
    {
        id:4,
        title:"Movie App",
        img:"https://images.pexels.com/photos/19434018/pexels-photo-19434018/free-photo-of-scenic-view-of-rocky-snowcapped-mountains-under-a-cloudy-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc:"Movie app using HTML CSS JS. ",
    },
];

const Single = ({item}) =>{

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target:ref, 
        // offset:["start start","end start"]

    });

    const y = useTransform(scrollYProgress, [0,1] ,[-200,200]);
    return(
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer"ref={ref}>
                <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>
                        <a href="https://tour-pagecanada.netlify.app">See Demo</a></button>
                    </motion.div>
                    </div>
                </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref, 
        offset:["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,

    });




  return <div className="portfolio" ref = {ref}>
    <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{scaleX}} 
        className="progressBar"></motion.div>
    </div>
      {items.map((item)=>(
        <Single item={item} key={item.id} />
      ))}
      </div>;
  
};

export default Portfolio;