import "./navbar.scss"
import {motion} from "framer-motion"
import Sidebar from "../sidebar/Sidebar"

const Navbar = () => {
  return (
    <div className="navbar">
        {/* Sidebar */}
        <Sidebar/>
        <div className="wrapper">
            <motion.span initial={{opacity:0,
            scale:0.5}}
             animate={{opacity:1,
            scale:1}} 
            transition={{duration:0.5}}>Rahul R</motion.span>
            <div className="social">
                <a href="#"><img src="images/facebook.png" alt="" /></a>
                <a href="#"><img src="images/instagram.png"  alt="" /></a>
                <a href="#"><img src="images/youtube.png" alt="" /></a>

            </div>

        </div>
    </div>
  )
}

export default Navbar