import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowRight } from 'lucide-react';

const Contact = () => {
    const [hoveredContact, setHoveredContact] = useState(null);
    const [selectedContact, setSelectedContact] = useState(null);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const blur = useTransform(scrollYProgress, [0, 1], ["0px", "10px"]);

    // Handle click outside to close selected card
    useEffect(() => {
        const handleClickOutside = () => {
            // If clicking strictly outside the card context (handled by propagation stop on card)
            setSelectedContact(null);
        };

        if (selectedContact) {
            document.addEventListener('click', handleClickOutside);
        }
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [selectedContact]);

    const contacts = [
        {
            name: "Email",
            icon: Mail,
            link: "https://mail.google.com/mail/?view=cm&fs=1&to=bairagoniabhi691@gmail.com",
            value: "bairagoniabhi691@gmail.com",
            desc: "Send me a direct message regarding projects or collaborations.",
            action: "Send Email",
            color: "#A855F7",
            gradient: "from-purple-900/40 to-slate-900/40",
            border: "group-hover:border-purple-500/50"
        },
        {
            name: "GitHub",
            icon: Github,
            link: "https://github.com/Spideyabi",
            value: "github.com/Spideyabi",
            desc: "Explore my repositories, contributions, and coding projects.",
            action: "View Profile",
            color: "#FFFFFF",
            gradient: "from-slate-800/80 to-black/80",
            border: "group-hover:border-white/50"
        },
        {
            name: "LinkedIn",
            icon: Linkedin,
            link: "https://www.linkedin.com/in/bairagoni-abhi-charan-77b474315/",
            value: "bairagoni-abhi-charan-77b474315",
            desc: "Connect with me professionally and view my career timeline.",
            action: "Connect",
            color: "#60A5FA",
            gradient: "from-blue-900/40 to-slate-900/40",
            border: "group-hover:border-blue-500/50"
        }
    ];

    return (
        <section ref={containerRef} className="min-h-screen bg-slate-900 flex flex-col justify-start items-center relative overflow-hidden pt-32 px-6 sticky top-0" id="contact">
            {/* Background Decorations */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />

            <motion.div
                style={{ scale, opacity, filter: `blur(${blur})` }}
                className="max-w-4xl w-full z-10"
            >
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                        Let&apos;s Connect & Code
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Always excited to collaborate on new projects, discuss algorithms, or chat about the latest in tech.
                    </p>
                </div>

                {/* Independent Expanding Contact Buttons (Push Layout) */}
                <div
                    className="flex flex-wrap justify-center items-start gap-6"
                    onMouseLeave={() => setHoveredContact(null)}
                >
                    {contacts.map((contact) => {
                        const isExpanded = hoveredContact === contact.name || selectedContact === contact.name;

                        return (
                            <motion.div
                                key={contact.name}
                                layout
                                onMouseEnter={() => setHoveredContact(contact.name)}
                                onMouseLeave={() => setHoveredContact(null)}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedContact(contact.name === selectedContact ? null : contact.name);
                                }}
                                className={`relative rounded-2xl border border-slate-700 bg-slate-800/50 backdrop-blur-md overflow-hidden cursor-pointer group transition-colors duration-300
                                    ${contact.border}
                                    ${isExpanded ? 'w-full sm:w-80 shadow-2xl z-10' : 'w-auto hover:border-slate-500 z-0'}
                                `}
                            >
                                {/* Gradient Background on Hover */}
                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className={`absolute inset-0 bg-gradient-to-br ${contact.gradient}`}
                                        />
                                    )}
                                </AnimatePresence>

                                <div className="relative z-10 w-full h-full">
                                    <div className={`flex flex-col w-full h-full transition-all duration-300 ${isExpanded ? 'p-6' : 'px-6 py-4 flex-row items-center gap-3'}`}>

                                        {/* Header: Icon + Name */}
                                        <div className="flex items-center gap-4 shrink-0">
                                            <motion.div
                                                layout="position"
                                                className={`transition-all duration-300
                                                    ${isExpanded ? 'scale-125 origin-left mb-4' : 'scale-100'}
                                                `}
                                            >
                                                <contact.icon
                                                    size={isExpanded ? 40 : 24}
                                                    style={{ color: contact.color }}
                                                    className="transition-transform duration-300"
                                                />
                                            </motion.div>

                                            <motion.h3
                                                layout="position"
                                                className={`font-bold transition-colors duration-300 group-hover:text-white shrink-0
                                                    ${isExpanded ? 'text-2xl mb-2 ml-2 text-white' : 'text-lg text-gray-400'}
                                                `}
                                            >
                                                {contact.name}
                                            </motion.h3>
                                        </div>

                                        {/* Expanded Content */}
                                        <AnimatePresence>
                                            {isExpanded && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="w-full overflow-hidden"
                                                >
                                                    <p className="text-gray-300 mb-6 leading-relaxed">
                                                        {contact.desc}
                                                    </p>

                                                    <div className="flex flex-col gap-3">
                                                        <span className="text-sm font-mono text-gray-400 bg-black/20 px-3 py-1.5 rounded-lg border border-white/10 w-fit">
                                                            {contact.value}
                                                        </span>
                                                        <a
                                                            href={contact.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            onClick={(e) => e.stopPropagation()} // Allow clicking the link without triggering closure logic if necessary, though outer closes on toggle so we might want that. Actually, link click should work.
                                                            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:brightness-110 w-full shadow-lg"
                                                            style={{ backgroundColor: contact.color === '#FFFFFF' ? '#334155' : contact.color }}
                                                        >
                                                            {contact.action}
                                                            <ArrowRight size={18} />
                                                        </a>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
