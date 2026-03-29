import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import avatarImg from '../assets/avatar.png';

const Profile = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const blur = useTransform(scrollYProgress, [0, 1], ["0px", "10px"]);

    return (
        <section ref={containerRef} className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-6 pt-20 bg-slate-900">
            <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

            <motion.div
                style={{ scale, opacity, filter: `blur(${blur})` }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10 text-center max-w-4xl flex flex-col items-center"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="mb-8 relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full blur-lg opacity-50"></div>
                    <img
                        src={avatarImg}
                        alt="Bairagoni Abhi Charan"
                        className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-slate-900 shadow-2xl relative z-10 hover:scale-105 transition-transform duration-300"
                    />
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-sm ">
                    Bairagoni Abhi Charan
                </h1>

                <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
                    Full Stack Developer
                </h2>

                <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Passionate about building seamless web experiences.
                    With a strong foundation in <span className="text-blue-400 font-semibold">Java</span>, <span className="text-yellow-400 font-semibold">Python</span>, and <span className="text-blue-300 font-semibold">C</span>,
                    and expertise in <span className="text-cyan-400 font-semibold">React</span> & Modern Web Tech.
                    Currently pursuing 3rd year B.Tech in CSE.
                </p>

                <div className="flex gap-6 justify-center">
                    <motion.button
                        whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(36, 127, 157, 1)" }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="px-12 py-3 bg-gradient-to-r from-blue-600 to-green-600 rounded-full font-bold text-white shadow-lg"
                        onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}
                    >
                        Skills
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgb(59, 130, 246)" }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-bold text-white shadow-lg"
                        onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                    >
                        View Projects
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(31, 41, 55, 0.8)" }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="px-8 py-3 border-2 border-gray-600 rounded-full font-bold text-gray-300 hover:text-white hover:border-white transition-colors"
                        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    >
                        Contact Me
                    </motion.button>
                </div>
            </motion.div>
        </section>
    );
};

export default Profile;
