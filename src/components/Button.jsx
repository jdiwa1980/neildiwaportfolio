import { BsArrowUpRight } from "react-icons/bs";

const Button = ({ content, variant="dark"}) => {
    const styles = {
        root: {
            base: "flex h-10 place-items-center gap-2 rounded-full",
            dark: "bg-gray-900 p-1 pl-4 text-white",
            lite: "bg-green-200 p-1 pl-4 text-gray-900 hover:bg-gray-900 hover:text-gray-100"
        },
        icon: {
            base: "flex h-7.5 w-7.5 place-content-center place-items-center rounded-full",
            dark: "bg-white font-semibold text-gray-600",
            lite: "bg-gray-900 text-gray-100"
        }
    }
    
    
    return ( 
        <div className="flex mx-4 place-items-center gap-5 text-base max-md:w-full max-md:flex-col max-md:place-content-center">
                    <a
                        href="#contact"
                        aria-label="signup"
                        className={`${styles.root.base} ${styles.root[variant]}`}
                        
                    >
                        <span>{content}</span>
                        <div className={`${styles.icon.base} ${styles.icon[variant]}`}>
                            <i>
                                <BsArrowUpRight />
                            </i>
                        </div>
                    </a>
                    
        </div>
     );
}
 
export default Button;

