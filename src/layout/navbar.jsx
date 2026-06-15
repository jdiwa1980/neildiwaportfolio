import { useState, useEffect } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import Button from "../components/Button";

const NavBar = () => {

    const navList = [
        
        { href: "#about", label: "About Me"},
        { href: "#projects", label: "Projects"},
        { href: "#blog", label: "Blog"},
        { href: "#contact", label: "Contact me"},
    ]

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
            const handleScroll = () => {
                setIsScrolled(window.scrollY > 50);
            }
            window.addEventListener("scroll", handleScroll);
    
            return () => window.removeEventListener("scroll", handleScroll);
        },[])

    return (  
        <header className={`
            fixed top-0 left-0 w-full z-50
            transition-all duration-300
            ${
                isScrolled
                    ? "bg-white shadow-md"
                    : "bg-transparent"
            }
        `}>
            <nav className="flex items-center py-5">
                {/* Site Logo  */}
                <a
                    className="md:flex h-12.5 p-1 text-2xl font-medium"
                    href="#"
                >
                    <img src="/icons/idee.png" alt="idee icon" className="h-15 w-auto"/>
                </a>
                {/* Mobile Menu Button  */}
                <button className="ml-auto md:hidden p-2 mr-2 cursor-pointer z-60 relative"
                        onClick={() => setIsMobileMenuOpen((last) => !last)}
                >
                    {isMobileMenuOpen ? <RxCross2 size={30} className="text-gray-500"/> : <RxHamburgerMenu size={30} />}
                </button>
                {/* Desktop NavBar  */}
                <div className="hidden mx-auto md:flex gap-8">
                    
                    {navList.map((item, idx) => (
                        <a href={item.href} 
                            className="header-links"
                            key={idx}
                        >
                        <span className="group-hover:-translate-y-full transition-transform duration-300">{item.label}</span>
                        </a>
                    ))}
                </div>
                {/* CTA Button  */}
                <div className="hidden md:flex justify-self-end mr-8">
                        <Button content="Get in touch" />
                </div>
            </nav>
            {/* Mobile Menu backdrop */}
            <div
                className={`fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity duration-300 ${
                    isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu — slides in from right */}
            <div
                className={`
                    fixed top-0 right-0
                    h-screen  
                    bg-white 
                    z-50
                    md:hidden
                    overflow-hidden
                    transition-all duration-300 ease-in-out
                    ${isMobileMenuOpen ? "w-[65vw]" : "w-0"}
                `}
            >
                <div className="h-full px-6 py-6 flex flex-col items-end justify-between pt-12">
                    {/* <a
                        className="mt-6"
                        href="#"
                    >
                        <img src="/icons/idee.png" alt="idee icon" className="h-15 w-auto"/>
                    </a> */}
                    <div className="flex h-full w-max gap-5 text-base max-lg:mt-7.5 max-lg:flex-col max-lg:place-items-end max-lg:gap-5 lg:mx-auto lg:place-items-center">
                        {navList.map((links, idx) => (
                            <a
                                href={links.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                key={idx}
                                className="group text-sm py-1"
                            >
                                <span className="block header-links text-black group-hover:translate-y-1 transition-transform duration-300">{links.label}</span>
                            </a>
                        ))}
                    </div>
                    <div className="
                        w-full
                        flex
                        justify-center
                        pb-8
                        hover:translate-y-0.5 
                        transition-transform 
                        duration-300">
                        <Button content="Get in touch"/>
                    </div>
                </div>
            </div>
            
        </header>
    );
}
 
export default NavBar;