import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import Button from "../components/Button";

const NavBar = () => {
    const navList = [
        { href: "#", label: "Home"},
        { href: "#about", label: "About"},
        { href: "#resume", label: "Resume"},
        { href: "#projects", label: "Projects"},
        { href: "#contact", label: "Contact"},
    ]

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    return (  
        <header>
            <nav className="grid grid-cols-[1fr_auto_1fr] items-center max-w-465 mx-auto max-md:w-auto px-6 py-4 text-gray-950 text-md md:flex md:justify-between">
                <div className="md:hidden" aria-hidden="true" />
                {/* Site Logo  */}
                <a href="#" className="justify-self-center md:justify-self-auto" title="go to neildiwa">
                    <img src="/icons/idee.png" alt="idee icon" className="h-20 w-auto"/>
                </a>
                {/* Mobile Menu Button  */}
                <button className="justify-self-end md:hidden p-2 mr-2 cursor-pointer z-60 relative"
                        onClick={() => setIsMobileMenuOpen((last) => !last)}
                >
                    {isMobileMenuOpen ? <RxCross2 size={30} className="text-gray-500"/> : <RxHamburgerMenu size={30} />}
                </button>
                {/* Desktop NavBar  */}
                <div className="hidden md:flex items-center gap-6 mr-8 ml-auto">
                    
                    {navList.map((item, idx) => (
                        <a href={item.href} 
                            className="relative overflow-hidden h-6 group"
                            key={idx}
                        >
                        <span className="block group-hover:-translate-y-full transition-transform duration-300">{item.label}</span>
                        <span
                            className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">{item.label}</span>
                        </a>
                    ))}
                    <Button content="get in touch" />
                </div>
                
             </nav>
             {/* Mobile Menu  */}
             {/* using useState() to toggle the menu from false to true  */}
             {isMobileMenuOpen && (
                <div className="fixed top-0 left-0 w-full h-[90vh] z-50 md:hidden glass-strong animate-fade-in backdrop-blur-md flex flex-col">
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4 items-center justify-center flex-1">
                        {navList.map((links, idx) => (
                            <a href={links.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            key={idx}
                            className="group text-lg py-2"
                            >
                                <span className="block text-white group-hover:translate-y-1 transition-transform duration-300">{links.label}</span>
                            </a>
                        
                        ))}
                    </div>
                    <div className="flex justify-center pb-8 hover:translate-y-0.5 transition-transform duration-300">
                        <Button content="Get in touch"/>
                    </div>
                    
                </div>

                )} 

        </header>
        
        
    );
}
 
export default NavBar;