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
                <a href="https://www.linkedin.com/in/ishank-kumar-1b9aa4266"><img src="/Portfolio/linkedin.png" alt="Linkedin" /></a>
                <a href="https://github.com/ishank-kumar"><img src="/Portfolio/GitHub.png" alt="GitHub" /></a>
                <a href="https://leetcode.com/u/ishank_kumar123/"><img src="/Portfolio/leetcode.jpeg" alt="Leetcode" /></a>
                <a href="https://www.geeksforgeeks.org/user/ishankku2yp8/"><img src="/Portfolio/gfg.png" alt="GFG" /></a>
            </div>
        </div>
    </div>
  )
};

export default Navbar;
