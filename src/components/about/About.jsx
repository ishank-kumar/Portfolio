import "./about.scss"
import { useRef } from "react";
import { motion,useScroll,useTransform } from "framer-motion"






const About = () => {

    const ref =useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start","end start"]
    })
    const yBg= useTransform(scrollYProgress, [0,1], ["0%","100%"])


  return (
    <motion.div className='about' 
    ref={ref}
    // style={{x:yBg}}
    >
        <div class="container">
                <h1>About Me</h1>
                <div class="intro">
                    <img src="bg.jpg" alt="Your name" />
                    <p>Hello, I'm Ishank Kumar, a BTech student and web developer passionate about creating meaningful web experiences.</p>
                </div>
                <div class="details">
                    <h2>Background</h2>
                    <p> I completed my studies at Bishop Johnson's School and College, achieving a remarkable 92% in both my 10th and 12th standards.</p>
                    <p>Now, I am currently pursuing a BTech in Computer Science Engineering at IIITDM Kurnool. I have a strong interest in problem solving , mathematics and MERN stack development</p>
                    <h2>Skills</h2>
                    <p>My skill set includes proficiency in languages and technologies like HTML, CSS, JavaScript,C,Python and more. I have hands-on experience with various web development frameworks and tools such as React, Node.js, and Bootstrap. I've also worked on projects including a beauty parlour website, a chatroom ,etc</p>
                    <p>Apart from my technical skills, I am an avid sports enthusiast. I actively play football and cricket, which not only keeps me physically fit but also nurtures my teamwork and leadership skills.</p>
                    <h2>Experience</h2>
                    <p>I've gained practical experience through daily practice, personal projects and freelance work. I have actively contributed to numerous web development projects, enriching my expertise and skills in various aspects of web development, including design, implementation, and problem-solving across diverse technologies and frameworks.</p>
                    <h2>Goals</h2>
                    <p>My goal is to contribute to open-source projects or work on real-world applications. I am always eager to learn and take on new challenges.</p>
                </div>
            </div>
      
    </motion.div>
  )
}

export default About
