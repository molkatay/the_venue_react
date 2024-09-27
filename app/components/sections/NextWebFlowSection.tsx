import NextJs from '../Logos/NextJs';
import Tailwindcss from "@/app/components/Logos/TailwindCss";
import Shadecn from "@/app/components/Logos/Shadecn";

function NextWebFlowSection() {
    return (
        <section className="relative section w-full max-w-screen-xl px-6 pt-16 mx-auto border-b-2 sm:px-8 lg:px-12 lg:pt-2" id="About">
            <div className="mb-[2rem] max-w-[26rem]">
                <h3 className="mb-6 text-3xl font-bold">
                    test
                </h3>
                <p>
                    {' '}
                    dsd
                </p>
            </div>
            <div className="grid items-center w-full grid-cols-2 mb-6 md:grid-cols-3 md:gap-4">
                <NextJs />
                <Tailwindcss />
                <Shadecn />
            </div>
        </section>
    );
}
export default NextWebFlowSection;