import { useRef } from "react";
import "./services.css"
import { color, motion,useInView } from "framer-motion";


const variants ={
    initial:{
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        y:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
};

const Services = () => {
const ref= useRef()

const isinView= useInView(ref,{margin:"-100px"})

  return (
    <motion.div className="services" variants={variants} initial="initial" 
    // whileInView="animate"
    ref={ref}
    animate={isinView && "animate"}
     >
      <motion.div className="textContainer" variants={variants}>
        <p> Navigating the Digital Realm: <br />Unveiling My Proficiency in Web Development, <br />Programming, Databases, and More</p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
            <img src="/people.webp" alt="" />
            <h1><motion.b whileHover={{color:"rebeccapurple"}}>MyTech</motion.b> Skills</h1>
        </div>
        <div className="title">
            <h1><motion.b  whileHover={{color:"rebeccapurple"}}>My current</motion.b> Specific</h1>
            <button> SKILLS</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{ background:"lightgray" , color:"black"}}>
            <h2>Web Development</h2>
            <p>Frontend and backend development using HTML, CSS, JavaScript, Node.js, React, and more. Experienced in creating responsive and user-friendly web applications.</p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background:"lightgray" , color:"black"}}>
            <h2>Programming</h2>
            <p>Proficient in multiple programming languages such as Python, JavaScript, and Java. Strong problem-solving and algorithmic skills with a deep understanding of data structures.</p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background:"lightgray" , color:"black"}}>
            <h2>Database Management</h2>
            <p>Skilled in managing databases using  MongoDB Server. Designing, implementing, and optimizing databases for efficient data storage and retrieval.</p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background:"lightgray" , color:"black"}}>
            <h2>Data Structures and Algorithms</h2>
            <p>Advanced knowledge in data structures and algorithms, essential for efficient problem-solving and algorithm development in software development.</p>
            <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Services
