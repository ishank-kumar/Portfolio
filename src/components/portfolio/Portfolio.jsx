import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "Beauty Parlor Website",
        img: "mm.png",
        desc: "A visually engaging website for a beauty parlour, designed to showcase services, prices, and a gallery of makeup looks. The site features an elegant and modern user interface that highlights the parlour’s offerings, making it easy for visitors to explore styles and pricing. Responsive design ensures a seamless browsing experience across all devices, enhancing customer interest and engagement.",
        link: "https://ishank-kumar.github.io/Moon-Shine/Moonshine%20beautyzone/", // Add the link here
    },
    {
        id: 2,
        title: "Gym Web Application",
        img: "gym.png",
        desc: "A React.js-based gym web application that leverages RapidAPI to provide a comprehensive exercise library. Users can filter exercises by body part, view detailed information for each exercise, watch related YouTube video demonstrations, and discover similar exercise suggestions. The intuitive interface makes it easy to explore and plan effective workout routines.",
        link: "https://ishank-kumar.github.io/gym-web-app/", // Add the link here
    },
    {
        id: 3,
        title: "Personal Finance Visualizer",
        img: "pfv.png",
        desc: "An interactive web application that helps users track, visualize, and manage their personal finances. Features include dynamic charts for income and expenses, budgeting tools, and insightful analytics to empower smarter financial decisions. Built with the MERN stack for a seamless and secure user experience.",
        link: "https://personal-finance-tracker-ten-alpha.vercel.app/", // Add the link here
    },
    {
        id: 4,
        title: "Community Based Task Management System",
        img: "comm.png",
        desc: "A collaborative task management platform that empowers communities to organize, assign, and track tasks collectively. Users can join or create communities, contribute to shared goals, and earn rewards for completing tasks. The intuitive interface promotes teamwork, productivity, and engagement, making it easy to manage group projects and community initiatives.",
        link: "https://github.com/ishank-kumar/Task-Management", // Add the link here
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