import { BsArrowRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import Button from "../components/Button";
import { cardList } from "../data/projects";

const projects = () => {

    return (  
        <section className="relative flex min-h-screen w-full max-w-[100vw] flex-col place-items-center overflow-hidden p-6 py-5"
                id="projects"
        >
            <h3 className="text-6xl font-medium max-lg:text-3xl animate-fade-up animation-delay-200">
                projects
            </h3>
            {/* Lining  */}
            <div className="my-4 h-px w-[80%] bg-black animate-fade-up animation-delay-300" />
            <div className="mt-8 gap-10 space-y-8 max-md:columns-1 lg:columns-2 xl:columns-3">
                {/* Card for projects  */}
                {cardList.map((card, idx) => (
                    <div className="flex h-fit w-112.5 break-inside-avoid flex-col 
                                    gap-2 rounded-lg bg-[#f3f3f3b4] p-4 shadow-lg 
                                    max-lg:w-full max-lg:max-w-100
                                    animate-fade-up animation-delay-500"
                            key={idx}
                    >
                    <div className="gap-3">
                        <div className="h-75 w-full overflow-hidden rounded-lg">
                            <img
                                src={card.picurl}
                                className="h-full w-full object-cover"
                                alt="design"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-medium">{card.title}</h3>
                            <p className="text-gray-600">
                                {card.content}
                            </p>
                            {/* Button for the cards  */}
                            <div className="mt-4 flex items-center justify-between w-full">

                                {/* GitHub Link */}
                                <a
                                    href={card.git}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:scale-110 transition-transform duration-300"
                                >
                                    <FaGithub size={30} />
                                </a>

                                {/* Demo Button */}
                                <a
                                    href={card.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        inline-flex
                                        items-center
                                        gap-2
                                        rounded-full
                                        border
                                        p-1
                                        pl-4
                                        hover:gap-3
                                        transition-all
                                        duration-300
                                    "
                                >
                                    DEMO & CODE

                                    <span
                                        className="
                                            flex
                                            h-8
                                            w-8
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-gray-800
                                            text-gray-50
                                        "
                                    >
                                        <BsArrowRight />
                                    </span>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            
        </section>
    );
}
 
export default projects;