import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Code2, Database, Layout, Terminal, Cpu, Globe } from 'lucide-react';

const Skills = () => {
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.9, 0.5]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const blur = useTransform(scrollYProgress, [0, 1], ["0px", "10px"]);

    const skills = [
        { name: "Java", icon: Code2, color: "#ef4444", desc: "Basic knowledge of OOP principles, core syntax, and backend concepts.", level: "55%" },
        { name: "Python", icon: Terminal, color: "#eab308", desc: "Familiar with syntax, data analysis basics, and automation scripts.", level: "60%" },
        { name: "C", icon: Cpu, color: "#3b82f6", desc: "Foundational understanding of pointers and low-level memory management.", level: "70%" },
        { name: "React", icon: Layout, color: "#06b6d4", desc: "Experienced in building dynamic SPAs with hooks and state management.", level: "85%" },
        { name: "Web", icon: Globe, color: "#f97316", desc: "Proficient in Semantic HTML, CSS, and modern JavaScript (ES6+).", level: "90%" },
        { name: "DBMS", icon: Database, color: "#22c55e", desc: "Basic experience with SQL queries and database schema design.", level: "40%" },
    ];

    return (
        <section ref={containerRef} className="min-h-screen sticky top-0 bg-slate-900 flex flex-col justify-center overflow-hidden" id="skills">
            <motion.div
                style={{ scale, opacity, filter: `blur(${blur})` }}
                className="w-full h-full flex flex-col justify-center py-20 px-6"
            >
                <div className="max-w-7xl mx-auto w-full relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                            Technical Skills
                        </h2>
                        <p className="text-gray-400">Hover to expand details</p>
                    </div>
                    <div
                        className="hidden md:flex flex-row h-[260px] gap-2 w-full transition-all duration-300"
                        onMouseLeave={() => setHoveredSkill(null)}
                    >
                        {skills.map((skill) => {
                            const isHovered = hoveredSkill === skill.name;
                            const isDimmed = hoveredSkill !== null && !isHovered;

                            return (
                                <motion.div
                                    key={skill.name}
                                    layout
                                    onMouseEnter={() => setHoveredSkill(skill.name)}
                                    className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out border border-gray-800
                                    ${isHovered ? 'flex-[3] border-purple-500 shadow-2xl shadow-purple-900/50' : 'flex-1 hover:border-gray-600'}
                                    ${isDimmed ? 'opacity-40 grayscale-[50%]' : 'opacity-100'}
                                    `}
                                    style={{
                                        background: 'linear-gradient(to bottom right, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9))',
                                    }}
                                >
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                                        <motion.div
                                            layout="position"
                                            className={`p-4 rounded-full bg-gray-900/50 mb-4 transition-transform duration-300 ${isHovered ? 'scale-125' : 'scale-100'}`}
                                        >
                                            <skill.icon size={32} style={{ color: skill.color }} />
                                        </motion.div>

                                        <motion.h3 layout="position" className="text-xl font-bold text-white mb-2 whitespace-nowrap">
                                            {skill.name}
                                        </motion.h3>

                                        <AnimatePresence>
                                            {isHovered && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10, transition: { duration: 0.1 } }}
                                                    className="px-4"
                                                >
                                                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                                        {skill.desc}
                                                    </p>
                                                    <div className="w-full bg-gray-700 h-1 rounded-full mt-4 overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={{ width: skill.level }}
                                                            transition={{ delay: 0.1, duration: 0.5 }}
                                                            className="h-full"
                                                            style={{ backgroundColor: skill.color }}
                                                        />
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    <div className="md:hidden grid grid-cols-2 gap-4">
                        {skills.map((skill) => (
                            <div key={skill.name} className="bg-slate-800/80 p-5 rounded-xl border border-gray-700 flex flex-col items-center text-center">
                                <skill.icon size={28} style={{ color: skill.color }} className="mb-2" />
                                <span className="font-bold text-gray-200">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
