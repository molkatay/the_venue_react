import {Check} from "lucide-react";
import {Button} from "@/components/ui/button";

function PricingSection() {
    return (
        <section
            className="relative section w-full max-w-screen-xl py-8 px-6  mx-auto border-b-2 sm:px-8 lg:px-12 lg:pt-[6rem] lg:pb-24"
            id="Pricing">
            <h2 className="text-3xl font-extrabold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl dark:drop-shadow-lg lg:text-center">
                Pricing
            </h2>
            <div
                className="grid w-full max-w-screen-xl grid-cols-1 pt-[3rem] mx-auto sm:px-8 lg:px-12 lg:pt-[6rem] lg:grid-cols-3 gap-y-12 gap-x-16 lg:pb-2">
                <div
                    className="p-[1rem] md:p-[2rem] w-full h-full rounded-3xl lg:rounded-[2.5rem] bg-slate-100 border shadow-lg">
                    <h3 className="mb-4 text-3xl font-bold">
                        Design <br></br> only
                    </h3>
                    <p className="mb-4 text-slate-500">
                        Get eerything
                    </p>
                    <div className="flex items-center gap-4 mb-[2rem]">
                        <h3 className="text-4xl font-medium">$ 1299</h3>
                        <span className="text-sm text-slate-500">per<br></br>month</span>
                    </div>
                    <ul className="text-slate-500 mb-[3rem]">
                        <li className="flex items-center gap-2">
                            <Check size={15}/>
                            <span>Unlimited design requests</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Check size={15}/>
                            <span>Unlimited design requests</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Check size={15}/>
                            <span>Unlimited design requests</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Check size={15}/>
                            <span>Unlimited design requests</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Check size={15}/>
                            <span>Unlimited design requests</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Check size={15}/>
                            <span>Unlimited sq requests</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Check size={15}/>
                            <span>Unlimited dq requests</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Check size={15}/>
                            <span>Unlimited design dsq</span>
                        </li>
                    </ul>

                    <div className="flex items-center gap-4">
                        <Button variant="secondary" className="bg-white rounded-full shadow-md">Get started</Button>
                        <div className="flex items-center gap-2">
                            <span
                                className="animate-ping absolute inline-flex h-full rounded-full bg-green-400 opacity-60"></span>
                            <span
                                className="relative inline-flex h-3 w-3 bg-green-500 rounded-full"></span>
                            <p className="text-slate-500">4 slots left</p>
                        </div>
                    </div>
                </div>

                <div
                    className="p-[2rem] w-full h-full rounded-3xl lg:rounded-[2.5rem] bg-slate-100 border shadow-lg">
                    <h3 className="mb-4 text-3xl font-bold">
                        Design &<br></br> develoment
                    </h3>
                    <p className="mb-4 text-slate-500">
                        Get everything
                    </p>
                    <div className="flex items-center gap-4 mb-[2rem]">
                        <h3 className="text-4xl font-medium">$ 1299</h3>
                        <span className="text-sm text-slate-500">per<br></br>month</span>
                    </div>
                    <ul className="text-slate-500 mb-[3rem]">
                        <li className="flex items-center gap-2">
                            <Check size={15}/>
                            <span>Unlimited design requests</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Check size={15}/>
                            <span>Unlimited design requests</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Check size={15}/>
                            <span>Unlimited design requests</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Check size={15}/>
                            <span>Unlimited design requests</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Check size={15}/>
                            <span>Unlimited design requests</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Check size={15}/>
                            <span>Unlimited sq requests</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Check size={15}/>
                            <span>Unlimited dq requests</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Check size={15}/>
                            <span>Unlimited design dsq</span>
                        </li>
                    </ul>

                    <div className="flex items-center gap-4">
                        <Button variant="secondary"
                                className="text-white bg-indigo-500 rounded-full shadow-md hover:bg-indigo-600">Get
                            started</Button>
                        <div className="flex items-center gap-2">
                            <span
                                className="animate-ping absolute inline-flex h-full rounded-full bg-yellow-500 opacity-60"></span>
                            <span
                                className="relative inline-flex h-3 w-3 bg-yellow-500 rounded-full"></span>
                            <p className="text-slate-500">3 slots left</p>
                        </div>
                    </div>
                </div>
                <div
                    className="p-[2rem] w-full h-full rounded-3xl lg:rounded-[2.5rem]">
                    <h3 className="mb-4 text-3xl font-bold">
                        Not sure this is <br></br> right for you?
                    </h3>

                    <p className="mb-4 text-slate-500">

                        ltedsd dfsdf sdfsd f    {' '}
                    </p>

                    <Button variant="secondary"
                            className="bg-white rounded-full shadow-md">Scueldule a call</Button>

                </div>
            </div>
        </section>
    );
}

export default PricingSection;