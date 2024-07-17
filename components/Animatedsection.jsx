import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const AnimatedSection = ({ title, description, imageUrl, imageAlt , link }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const elementPosition =
                document.getElementById("animated-section").offsetTop;
            if (scrollPosition > elementPosition) {
                setIsVisible(true);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div
            id="animated-section"
            className="max-w-7xl min-h-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center align-middle mt-16 items-center"
        >
            <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, x: -50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
            >
                <div className="text-center mb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-20">{title}</h2>
                </div>
            </motion.div>
            <motion.div
                className="flex flex-col lg:flex-row items-center gap-16"
                initial={{ opacity: 0, x: 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <div className="lg:w-1/2 lg:ml-8">
                    <img src={imageUrl} alt={imageAlt} className="rounded-lg shadow-lg w-full" />
                </div>
                <div className="lg:w-1/2 mb-8 lg:mb-0 lg:mr-8">
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">{description}</p>
                </div>
            </motion.div>
            <motion.div className="mt-auto ">
                <div className="text-center mt-16 mb-8 ">
                    <Link href={link} className="inline-block bottom-6  px-6 py-2 text-sm font-medium text-green-800 bg-white border border-gray-300 rounded-full hover:bg-green-500  hover:text-black transition duration-300 ease-in-out">
                        See more
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};
export default AnimatedSection;
