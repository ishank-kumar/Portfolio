import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "Beauty Parlor Website",
        img: "mm.png",
        desc: "Created a professional website for a beauty parlour with booking features and elegant UI.",
        link: "https://lnkd.in/dtD4xN9G", // Add the link here
    },
    {
        id: 2,
        title: "Gym Web Application",
        img: "gym.png",
        desc: "Built a React-based gym website integrating RapidAPI for live fitness content.",
        link: "https://github.com/ishank-kumar/gym-web-app", // Add the link here
    },
    {
        id: 3,
        title: "Food Delivery App",
        img: "food.png",
        desc: "A seamless and responsive food delivery application built with the MERN stack, offering real-time order tracking and secure user authentication.",
        link: "https://fooddelivery.com", // Add the link here
    },
    {
        id: 4,
        title: "Community Based Task Management System",
        img: "comm.png",
        desc: "A collaborative task management platform where communities unite, complete tasks, and earn rewards — built for productivity and engagement.",
        link: "https://communitytasks.com", // Add the link here
    },
];

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        {/* Use an <a> tag for the button */}
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <button>See Demo</button>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Portfolio = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio">
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Portfolio;