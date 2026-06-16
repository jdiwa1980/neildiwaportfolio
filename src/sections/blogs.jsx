import { blogs } from "../data/datablogs";
import { BsArrowRight } from "react-icons/bs";

const Blogs = () => {
    return (  
        <section
            className="mt-5 flex w-full flex-col place-items-center p-[2%] max-lg:p-3"
            id="blog"
        >
            <h3 className="text-center text-4xl font-medium max-md:text-2xl">
                Read my articles for more insights 📖
            </h3>
            {/* blog container  */}
            <div
                className="mt-10 flex flex-wrap place-content-center gap-10 max-lg:flex-col"
            >
                {blogs.map((blog, idx) => (
                    <a
                    href="#"
                    className="flex h-100 w-87.5 flex-col gap-2 overflow-clip rounded-lg bg-[#edecec79] p-4 shadow-xl max-lg:w-75"
                    key={idx}
                    >
                        <div
                            className="h-50 w-full overflow-hidden rounded-md"
                        >
                            <img
                                    src={blog.imgurl}
                                    alt="article image"
                                    className="h-full w-full object-cover"
                                    srcSet=""
                            />
                        </div>
                        <h3 className="text-2xl font-semibold max-md:text-xl">
                            {blog.title}
                        </h3>
                        <p className="mt-2 text-gray-600">
                            {blog.content}
                        </p>
                        <span>
                            <span>Learn more</span>
                                <BsArrowRight />
                        </span>
                    </a>

                ))}
                    
            </div>
        </section>
    );
}
 
export default Blogs;