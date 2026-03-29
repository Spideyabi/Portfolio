import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useRef, useState } from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const Projects = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const blur = useTransform(scrollYProgress, [0, 1], ["0px", "10px"]);

    const projects = [
        {
            title: "Sales Dashboard",
            description: "A comprehensive dashboard for data visualization using React and D3.js. Features real-time updates and dark mode.",
            color: "from-blue-600 to-blue-400",
            image: project1,
            tech: ["React", "D3.js", "Recoil", "Tailwind"],
            code: "https://github.com/Spideyabi/Sales-Dashboard.git",
            live: "https://sales-dashboard-delta-smoky.vercel.app/"
        },
        {
            title: "Project Beta",
            description: "E-commerce platform with secure payment integration and user profile management. Built with Python Django and React.",
            color: "from-purple-600 to-purple-400",
            image: project2,
            tech: ["Django", "React", "PostgreSQL", "Stripe"],
            code: "",
            live: ""
        },
        {
            title: "Project Gamma",
            description: "Automated task manager using simple AI heuristics. Optimized for performance and works offline.",
            color: "from-pink-600 to-pink-400",
            image: project3,
            tech: ["React Native", "TensorFlow.js", "Firebase"],
            code: "",
            live: ""
        },
    ];

    return (
        <section ref={containerRef} className="py-20 px-6 min-h-screen bg-slate-900 flex flex-col justify-center sticky top-0" id="projects">
            <motion.div
                style={{ scale, opacity, filter: `blur(${blur})` }}
                className="max-w-7xl mx-auto w-full"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                        Featured Projects
                    </h2>
                    <p className="text-gray-400">Hover cards to expand details</p>
                </motion.div>

                {/* Desktop Expandable Layout */}
                <div
                    className="hidden lg:flex flex-row h-[400px] gap-4 w-full"
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    {projects.map((project, index) => {
                        const isHovered = hoveredIndex === index;
                        // Default to expanded if none hovered? No, keep all equal or standard. 
                        // Actually, let's keep them equal if none hovered, or default one expanded?
                        // Skills uses equal.

                        return (
                            <motion.div
                                key={index}
                                layout
                                onMouseEnter={() => setHoveredIndex(index)}
                                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out border border-gray-800 bg-gray-900
                                    ${isHovered ? 'flex-[3] border-purple-500 shadow-2xl shadow-purple-900/50' : 'flex-1 hover:border-gray-700'}
                                    ${hoveredIndex !== null && !isHovered ? 'opacity-50 grayscale' : 'opacity-100'}
                                `}
                            >
                                {/* Background Image for Collapsed State */}
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className={`w-full h-full object-cover transition-all duration-500 ${isHovered ? 'opacity-20' : 'opacity-60 hover:scale-110'}`}
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-90' : 'opacity-100'}`} />
                                </div>

                                {/* Content Container */}
                                <div className="absolute inset-0 z-10 flex overflow-hidden">
                                    <AnimatePresence mode="wait">
                                        {isHovered ? (
                                            /* Expanded View */
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="flex w-full h-full"
                                            >
                                                {/* Left Side - Image */}
                                                <div className="w-5/12 h-full p-4 hidden xl:block">
                                                    <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg border border-gray-700 relative group-hover:scale-95 transition-transform duration-500">
                                                        <img src={project.image} alt="Project Preview" className="w-full h-full object-cover" />
                                                    </div>
                                                </div>

                                                {/* Right Side - Details */}
                                                <div className="flex-1 p-8 flex flex-col justify-center">
                                                    <motion.div
                                                        initial={{ y: 20, opacity: 0 }}
                                                        animate={{ y: 0, opacity: 1 }}
                                                        transition={{ delay: 0.1 }}
                                                    >
                                                        <h3 className={`text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${project.color}`}>
                                                            {project.title}
                                                        </h3>
                                                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                                            {project.description}
                                                        </p>

                                                        <div className="flex flex-wrap gap-2 mb-8">
                                                            {project.tech.map((t, i) => (
                                                                <span key={i} className="px-3 py-1 text-sm rounded-full bg-gray-800 text-purple-200 border border-gray-700">
                                                                    {t}
                                                                </span>
                                                            ))}
                                                        </div>

                                                        <div className="flex gap-4">
                                                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors flex items-center gap-2">
                                                                <ExternalLink size={20} /> Live Demo
                                                            </a>
                                                            <a href={project.code} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl bg-gray-800 text-white font-medium hover:bg-gray-700 border border-gray-700 transition-colors flex items-center gap-2">
                                                                <Github size={20} /> Code
                                                            </a>
                                                        </div>
                                                    </motion.div>
                                                </div>
                                            </motion.div>
                                        ) : (
                                            /* Collapsed View */
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="w-full h-full flex flex-col justify-end p-6"
                                            >
                                                <h3 className="text-2xl font-bold text-white mb-2 rotate-0 origin-bottom-left whitespace-nowrap">
                                                    {project.title}
                                                </h3>
                                                <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${project.color}`} />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Mobile Fallback - Stacked Grid */}
                <div className="lg:hidden grid grid-cols-1 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="relative group rounded-2xl overflow-hidden bg-gray-800 border border-gray-700">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs px-2 py-1 rounded-full bg-gray-900 text-gray-300 border border-gray-600">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4 pt-4 border-t border-gray-700">
                                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300">
                                        <ExternalLink size={16} /> Demo
                                    </a>
                                    <a href={project.code} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-300">
                                        <Github size={16} /> Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </motion.div>
        </section>
    );
};

export default Projects;
