import { FaGithub, FaLinkedin, FaFacebook} from "react-icons/fa";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/jdiwa1980", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/neil-jeffrey-diwa-502a85134/", label: "LinkedIn" },
  { icon: FaFacebook, href: "https://www.facebook.com/jeff.diwa.2024/", label: "Facebook" },
];

const navList = [
        
        { href: "#about", label: "About Me"},
        { href: "#projects", label: "Projects"},
        { href: "#blog", label: "Blog"},
        { href: "#contact", label: "Contact me"},
    ]


const Footer = () => {
    const currentYear = new Date().getFullYear();

    return ( 
        <footer
            className="mt-auto flex min-h-25 w-full place-content-around place-items-center gap-3 p-[2%] px-[10%] text-black max-md:flex-col border-t border-gray-300"
        >
            <div className="container mx-auto px-6"> 
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Site Logo  */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <a
                        className="md:flex h-12.5 p-5 md:p-1"
                        href="#"
                        >
                            <img src="/icons/idee.png" alt="idee icon" className="h-10 w-auto"/>
                        </a>
                        <p className="text-sm text-muted-foreground mt-2">
                            © {currentYear} neiljeffreydiwa. All rights reserved.
                        </p>
                    </div>
                    
                    <nav className="flex flex-wrap justify-center gap-6">
                        {navList.map((item, idx) => (
                        <a href={item.href} 
                            className="header-links"
                            key={idx}
                        >
                        <span className="group-hover:-translate-y-full transition-transform duration-300">{item.label}</span>
                        </a>
                    ))}

                    </nav>
                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.href}
                            aria-label={item.label}
                            className="p-2 rounded-full  hover:text-green-200 transition-all"
                        >
                            <item.icon className="w-5 h-5" />
                        </a>
                    ))}

                    </div>
                </div>   
            </div>
        </footer>
     );
}
 
export default Footer;