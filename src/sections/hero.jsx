
import Button from "../components/Button";
import Skills from "../components/skils";

const Hero = () => {

    return (
        <section
            className="flex min-h-[75vh] w-full flex-col  pt-10 overflow-hidden max-lg:p-4 max-md:mt-12.5"
            id="about"
        >
           {/* Container of the 2 columns  */}
            <div
                className="flex w-full place-content-center gap-6 p-[5%] max-xl:items-center max-lg:flex-col max-lg:items-start"
            >
                {/* Left Column  */}
                <div className="flex flex-col pt-20">
                    <div
                        className="flex flex-wrap text-7xl font-semibold uppercase leading-21.25 max-lg:text-4xl max-md:leading-snug"
                    >
                        <span
                            className="bg-green-200 p-1 px-6 animate-fade-up animation-delay-100"
                        >
                            neildiwa
                        </span>
                        
                        <span className="animate-fade-up animation-delay-200">
                            Web Dev/Graphic Artist
                        </span>
                    </div>
                    <div
                        className="mt-2 max-w-112.5 p-2 text-justify max-lg:max-w-full animate-fade-up animation-delay-400"
                    >
                        Hi, I am a freelance designer/coder who just loves to make 
                        passion projects. I believe it's never too late to follow the path
                        life points at you and fulfill your destiny.
                    </div>
                    

                    <div className="pt-5 self-start animate-fade-up animation-delay-600">   
                            <Button content="Get in touch" variant="lite" />
                    </div>
                    
                </div>
                {/* Right Column  */}
                <div
                    className="flex w-full max-w-[50%] place-content-center  overflow-hidden max-lg:max-w-[unset]"
                >
                    <div
                        className="relative flex max-h-145 min-h-112.5 min-w-87.5 max-w-162.5 overflow-hidden max-lg:h-fit max-lg:max-h-80 max-lg:min-h-45 max-lg:w-[320px] max-lg:min-w-[320px]"
                    >
                        <img
                            src="/pics/door.png"
                            alt="app"
                            className="reveal-hero-img z-1 h-full w-full object-contain animate-fade-in animation-delay-800"
                        />
                    </div>
                </div>
            </div>
            {/* Skills under its own row  */}
            <div className="w-full pb-10">
                <Skills />
            </div>
        </section>
      );
}
 
export default Hero;