import { RxCross2 } from "react-icons/rx";
import { GoLocation } from "react-icons/go";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { CiMail } from "react-icons/ci";



const ContactModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <>
        <div className="fixed inset-0 bg-black/50 z-40"
                onClick={onClose}
        />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div className="bg-gray-50 rounded-xl p-6 w-full max-w-5xl shadow-xl">
                    <div className="flex justify-end items-center mb-6">
                        {/* <h2 className="text-2xl font-semibold text-gray-800">
                            Contact Me
                        </h2> */}
                        <button onClick={onClose}>
                            <RxCross2 size={24} />
                        </button>
                    </div>
                    {/* form goes here  */}
                    <section className="py-6 bg-gray-50 text-gray-800">
                        <div className="grid max-w-6xl grid-cols-2 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                            {/* details section left side  */}
                            <div className="py-6 md:py-0 md:px-6">
                                <h1 className="text-4xl font-bold">Get in touch</h1>
                                <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                                <div className="space-y-4">
                                    <p className="flex items-center">
                                        <GoLocation  size={24} className="w-5 h-5 mr-2 sm:mr-6"/>
                                        <span>Cainta, Rizal 1900</span>
                                    </p>
                                    <p className="flex items-center">
                                        <BsFillTelephoneOutboundFill size={24} className="w-5 h-5 mr-2 sm:mr-6" />
                                        <span>+63 917 1207892</span>
                                    </p>
                                    <p className="flex items-center">
                                        <CiMail size={24} className="w-5 h-5 mr-2 sm:mr-6"/>
                                        <span>njdiwa1980@gmail.com</span>
                                    </p>
                                </div>
                            </div>
                            {/* form section right side  */}
                            <form  className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                                <label className="block">
                                    <span className="mb-2 font-medium">Full name</span>
                                    <input type="text" placeholder="Leroy Jenkins" className="block w-full rounded-md shadow-sm border border-gray-300 bg-gray-100 px-4 py-2 focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-300" />
                                </label>
                                <label className="block">
                                    <span className="mb-2 font-medium">Email address</span>
                                    <input type="email" placeholder="leroy@jenkins.com" className="block w-full rounded-md shadow-sm border border-gray-300 bg-gray-100 px-4 py-2 focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-300" />
                                </label>
                                <label className="block">
                                    <span className="mb-2 font-medium">Message</span>
                                    <textarea rows="5" className="block w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-2 focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-300"></textarea>
                                </label>
                                <button type="button" className="self-center px-8 py-3 text-lg rounded-full focus:ring hover:ring  bg-green-200 text-gray-900 focus:ring-green-200 hover:ring-green-200 ">Submit</button>
                            </form>
                        </div>
                    </section> 
                </div>
            </div>
        </> 
     );
}
 
export default ContactModal;

