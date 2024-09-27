import Image from "next/image";
import {BackpackIcon, CalendarIcon, EuroIcon, FolderIcon, LocateIcon, RocketIcon} from "lucide-react";

function EventSection() {
    return (
        <section id="Work"
                 className="relative w-full max-w-screen-xl px-6 py-4 pt-16 mx-auto border-b-2 md:py-16 sm:px-8 lg:px-12 lg:pt-24">
            <div className="mb-8 lg:mb-12">
                <h2 className="text-3xl font-extrabold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl dark:drop-shadow-lg lg:text-center">
                    Featured Event
                </h2>
            </div>
            <div className="grid gap-4 bg-[#F9FAFB] grid-cols-1 p-10 border-2 rounded-3xl md:grid-cols-2">
                <div>
                    <h3 className="mb-6 text-3xl font-semibold">
                        Tech Innovators Conference 2024
                    </h3>
                    <p>
                        Join us for the Tech Innovators Conference, where industry leaders and visionary thinkers come
                        together to explore the future of technology. This year’s theme is “Transforming Ideas into
                        Reality,” featuring keynote speeches, panel discussions, and hands-on workshops designed to
                        inspire innovation. Don’t miss the opportunity to network with fellow tech enthusiasts and
                        discover the latest trends in the tech world!
                    </p>
                    <div className="flex items-center mt-4">
                        <CalendarIcon className="mr-2 text-slate-500" size={24} icon={CalendarIcon}/>
                        <span className="">Date: March 15-17, 2024</span>
                    </div>
                    <div className="flex items-center mt-2">
                        <LocateIcon className="mr-2 text-slate-500" size={24}/>
                        <span>Location: The Venue Spot, Chatou, France</span>
                    </div>
                    <div className="flex items-center mt-2">
                        <EuroIcon className="mr-2 text-slate-500" size={24}/>
                        <span>Registration Fee: €199 (Early Bird Pricing Available)</span>
                    </div>
                </div>

                <div className="relative">
                    <Image className="object-cover bg-center" src="/web-design.png" alt="Web design" fill={true}/>

                </div>
            </div>


            <div className="my-[4rem] max-w-[32rem]">
                <h1 className="mb-6 text-3xl font-semibold">
                    The Venue Edge
                </h1>
                <p>
                    {' '}
                    As part of our commitment to fostering growth and collaboration in the tech community, we are
                    excited to present a lineup of upcoming events. Each event is designed to enhance your skills,
                    expand your network, and keep you at the forefront of technological advancements.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="border p-4 rounded-lg shadow-md">
                    <div className="flex items-center gap-8 mb-6">
                        <img src="/img-1.jpg" alt="AI Workshop" className="w-[4rem] rounded-2xl"/>
                        <h3 className="text-xl font-extrabold">AI and Machine Learning Workshop</h3>
                    </div>
                    <p className="text-slate-500">
                        Dive deep into the world of AI with expert-led sessions on machine learning techniques,
                        practical applications, and ethical considerations in tech.
                    </p>
                    <div className="mt-4 text-slate-600">
                        <span className="block">Date: March 15, 2024</span>
                        <span className="block">Location: Tech Hub, Paris, France</span>
                    </div>
                </div>

                <div className="border p-4 rounded-lg shadow-md">
                    <div className="flex items-center gap-8 mb-6">
                        <img src="/img-2.jpg" alt="Cloud Computing Seminar"
                             className="w-[4rem] rounded-2xl"/>
                        <h3 className="text-xl font-extrabold">Cloud Computing Seminar</h3>
                    </div>
                    <p className="text-slate-500">
                        Explore the fundamentals of cloud computing, including architecture, deployment models, and
                        security best practices.
                    </p>
                    <div className="mt-4 text-slate-600">
                        <span className="block">Date: April 10, 2024</span>
                        <span className="block">Location: Innovation Center, Lyon, France</span>
                    </div>
                </div>

                <div className="border p-4 rounded-lg shadow-md">
                    <div className="flex items-center gap-8 mb-6">
                        <img src="/img-3.jpg" alt="Blockchain Technology Forum"
                             className="w-[4rem] rounded-2xl"/>
                        <h3 className="text-xl font-extrabold">Blockchain Technology Forum</h3>
                    </div>
                    <p className="text-slate-500">
                        Join us for an in-depth discussion on blockchain technology, its applications, and future
                        potential in various industries.
                    </p>
                    <div className="mt-4 text-slate-600">
                        <span className="block">Date: May 5, 2024</span>
                        <span className="block">Location: Conference Hall, Nice, France</span>
                    </div>
                </div>
            </div>


        </section>
    );
}

export default EventSection;