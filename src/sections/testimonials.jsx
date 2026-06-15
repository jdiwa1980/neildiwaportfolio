const Testimonials = () => {

    const testiList = [
        {
            name: "April",
            job: "Wife, Diwa family",
            comment:`He's my husband, i tell him what he needs to do and
            he always obey me. He's not "under", he's just loyal and loving to
            me and our dogs. He's our IT guy!`,
            imgsrc:"/people/tata.JPG"
        },
        {
            name: "Summer",
            job: "favorite Dog, Alpo",
            imgsrc:"/people/summer.JPG",
            comment:`He always feeds me everyday. Even three times a Day! What a great human!
            He always tells stories about me to my other master April his wife. They both love me so much
            i don't know what i did to deserve this. I guess i'm just too cute!`
            
        },
        {
            name: "Olie",
            job: "Loyal Dog",
            imgsrc:"/people/olie.JPG",
            comment:`Truly every dog's best friend. I always like to stay near my master! No one else comes close.
            Even though i've broken his expensive glasses, he never forgets to feed me everyday. That's why i love him
            so much!`
            
        },
        {
            name: "Squirky",
            job: "Summer's Sister",
            imgsrc:"/people/squirky.JPG",
            comment:`He always lets me sit at his table. Even though we haven't caught any mice in a few weeks
            he still feeds us! What a loving master. I know its completely unrelated to his portfolio. He just asked
            us so he can fill out his testimonials!`
        },
        {
            name: "Darth Vader",
            job: "Overlord, Darkside inc.",
            imgsrc:"/people/vader.avif",
            comment:"Neil, I am your Father!"
        },
    ] 

    return ( 
        <section
            className="relative mt-10 flex min-h-screen w-full max-w-[100vw] flex-col place-content-center place-items-center lg:p-6"
        >
            <div
                className="flex h-full w-full justify-around gap-8 rounded-xl bg-[#e7e6e685] p-4 max-lg:max-w-full max-lg:flex-col"
            >
                <div
                    className="flex h-full w-[50%] place-content-center max-lg:w-full lg:sticky lg:top-[20%]"
                >
                    <h3 className="text-center text-6xl font-medium max-lg:text-3xl">
                        What my colleagues say
                    </h3>
                </div>
                {/* Cards container  */}
                <div
                    className="flex w-[30%] flex-col place-items-center gap-4 p-2 max-lg:w-full"
                >
                    {/* Cards frame/border  */}
                    {testiList.map((people, idx) => (
                        <div
                        className="flex h-fit w-full flex-col gap-4 border-2 border-black bg-white p-4"
                        key={idx}
                        >
                        <div
                            className="flex w-full place-items-center gap-4 p-2"
                        >
                            {/* Card Contents  */}
                            <div
                                className="flex h-15 w-15 overflow-hidden rounded-full"
                            >
                                <img
                                    src={people.imgsrc}
                                    alt="profile pic"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div>
                                <p className="text-xl font-semibold">{people.name}</p>
                                <p className="text-lg text-gray-600">
                                    {people.job}
                                </p>
                            </div>
                        </div>
                        <div className="text-justify text-gray-800">
                                {people.comment}
                        </div>
                    </div>

                    ))}
                    
                    
                </div>
                 
            </div>
           
        </section>
     );
}
 
export default Testimonials;