import Sidebar from "../sidebar/Sidebar";
import "./navbar.css"
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
        {/* {Sidebar} */}
        <Sidebar/>
        <div className="wrapper">
            <motion.span initial={{opacity:0,scale:0.5}}
            animate={{opacity:1,scale:1}}
            transition={{duration:0.5}}
            ><div className="ishank">Ishank</div></motion.span>
            <div className="social">
                <a href="https://www.linkedin.com/in/ishank-kumar-1b9aa4266"><img src="/linkedin.png" alt="" /></a>
                <a href="https://github.com/ishank-kumar"><img src="/GitHub.png" alt="" /></a>
                <a href="https://www.instagram.com/ll._.ishank._.ll/"><img src="/instagram.png" alt="" /></a>
                <a href="https://www.facebook.com/ishank.kumar.338"><img src="/facebook.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
};

export default Navbar;
