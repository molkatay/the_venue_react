import {FolderIcon, HeartIcon, LightbulbIcon, RocketIcon, WatchIcon} from "lucide-react";

function FeatureSection() {
    return (
        <section className="relative w-full max-w-screen-xl px-6 py-16 mx-auto border-y sm:px-8 lg:px-12 lg:pt-24"
                 id="Process">
            <h2 className="text-3xl font-extrabold leading-tight text-black dark:text-white sm:text-4xl mb-16 lg:text-5xl dark:drop-shadow-lg lg:text-center">
                Services
            </h2>
            <div className="grid grid-cols-1 gap-8 mb-6 md:grid-cols-3">
                <div>
                    <div className="flex items-center gap-8 mb-6">
                    <div className="w-[4rem] rounded-2xl p-4 border border-rose-300">
                            <WatchIcon/>
                        </div>
                        <h3 className="text-xl font-extrabold">
                            Event Planning
                        </h3>
                    </div>
                    <p className="text-slate-500">Our expert team assists in organizing and executing technology-focused
                        events, ensuring every detail is covered for a seamless experience.</p>


                </div>
                <div>
                    <div className="flex items-center gap-8 mb-6">
                        <div className="w-[4rem] rounded-2xl p-4 border border-rose-300">
                            <HeartIcon/>
                        </div>
                        <h3 className="text-xl font-extrabold">
                            Venue Rental
                        </h3>
                    </div>
                    <p className="text-slate-500">Offering a variety of modern spaces tailored for conferences,
                        workshops, and tech meetups, equipped with the latest technology.</p>

                </div>
                <div>
                    <div className="flex items-center gap-8 mb-6">
                        <div className="w-[4rem] rounded-2xl p-4 border border-rose-300">
                            <FolderIcon/>
                        </div>
                        <h3 className="text-xl font-extrabold">
                            Audio-Visual Support
                        </h3>
                    </div>
                    <p className="text-slate-500">State-of-the-art AV equipment and professional support to enhance
                        presentations and ensure high-quality sound and visuals.</p>

                </div>
                <div>
                    <div className="flex items-center gap-8 mb-6">
                        <div className="w-[4rem] rounded-2xl p-4 border border-rose-300">
                            <RocketIcon/>
                        </div>
                        <h3 className="text-xl font-extrabold">
                            Catering Services
                        </h3>
                    </div>
                    <p className="text-slate-500">We provide catering options that cater to diverse dietary preferences,
                        ensuring delicious meals and snacks throughout your event.
                    </p>

                </div>
                <div>
                    <div className="flex items-center gap-8 mb-6">
                        <div className="w-[4rem] rounded-2xl p-4 border border-rose-300">
                            <LightbulbIcon/>
                        </div>
                        <h3 className="text-xl font-extrabold">
                            Networking Opportunities
                        </h3>
                    </div>
                    <p className="text-slate-500">Facilitating connections between attendees, speakers, and industry
                        leaders to foster collaboration and innovation.</p>

                </div>
                <div>
                    <div className="flex items-center gap-8 mb-6">
                        <div className="w-[4rem] rounded-2xl p-4 border border-rose-300">
                            <LightbulbIcon/>
                        </div>
                        <h3 className="text-xl font-extrabold">
                            Post-Event Feedback
                        </h3>
                    </div>
                    <p className="text-slate-500">We value your input! Our team gathers feedback after every event to
                        continuously improve and tailor our services to your needs.
                    </p>


                </div>
            </div>

        </section>
    );
}

export default FeatureSection;