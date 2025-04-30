import { useRef } from "react";
import "./contact.scss"
import { motion,useInView } from "framer-motion";

const variants={
    initial:{
        y:500,
        opacity:0,
    },
    animate:{
        y:0,
        opacity:1,
        transition: {
            duration:0.5,
            staggerChildren:0.1,
        },
    },
};






const Contact = () => {
const ref = useRef()

const isInView = useInView(ref, {margin:"-100px"});
  return (
    <motion.div
    ref={ref}
    className="contact" variants={variants} initial="initial" whileInView="animate">
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's work together</motion.h1>
        <motion.div variants={variants} className="item">
            <h2>Mail</h2>
            <span>ishankkumar786@gmail.com</span>
        </motion.div>
        <motion.div variants={variants} className="item">
            <h2>Address</h2>
            <span>185/166 Gadiwantola khuldabad prayagraj</span>
        </motion.div>
        <motion.div variants={variants} className="item">
            <h2>Phone</h2>
            <span>7408410682</span>
        </motion.div>
      </motion.div>
      <motion.div className="formContainer">
        
        <motion.form
         initial={{opacity:0}}
         whileInView={{opacity:1}}
        transition={{ delay:1,duration:1,}}
        >
            <input type="text" required placeholder="Name" />
            <input type="email" required placeholder="Email" />
            <textarea rows={8} placeholder="Message" />
            <button>Sumbit</button>
        </motion.form>
      </motion.div>
    </motion.div>
  )
}

export default Contact
