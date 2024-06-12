import {motion} from "framer-motion";

const variants =  {
open:{
  transition:{
    staggerChildren:0.1,
  },
},
closed:{
  transition:{
    staggerChildren:0.5,
    staggerDirection: -1,
  },
},
};
const itenvariants =  {
  open:{
    y:0,
    opacity:1,
  },
  closed:{
   y:50,
   opacity:0,
  },
  };
const Links = () => {
  const items = [
    "Homepage",
    "Services",
    "Portfolio",
    "Contact",
    "About"
  ]
  return (
    <motion.div className="links" variants={variants}>
      {items.map(item=>(
      <motion.a href={`#${item}`} key={item}
       variants={itenvariants} whileHover={{scale:1.1}} whileTap={{scale:0.85}}>
        {item}
      </motion.a>

    ))}</motion.div>
  );
};

export default Links