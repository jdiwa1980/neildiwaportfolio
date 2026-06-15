const Skills = () => {


    const stack =[
    "React",
    "Node.js",
    "MongoDB",
    "Express",
    "Vercel",
    "Tailwind CSS",
    "Canva",
    "Figma",
    "Git",
];
    return ( 
        <div className="animate-fade-up animation-delay-1000">
            <p className="text-sm text-gray-600 mb-6 text-center">
            Technologies I work with
            </p>
            <div className="relative overflow-hidden">
                <div
                    className="absolute left-0 top-0 bottom-0 w-32
                    bg-linear-to-r from-white to-transparent z-10"
                />
                <div
                    className="absolute right-0 top-0 bottom-0 w-32
                    bg-linear-to-l from-white to-transparent z-10"
                />
                <div className="flex animate-marquee">
                        {[...stack, ...stack].map((skill, idx) => (
                        <div key={idx} className="shrink-0 px-8 py-4">
                            <span className="text-xl font-semibold text-gray-600 hover:text-green-300 transition-colors">
                                {skill}
                            </span>
                        </div>
              ))} 
                </div>
            </div>
        </div>
     );
}
 
export default Skills;