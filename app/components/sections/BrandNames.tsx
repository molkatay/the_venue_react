import Image from "next/image";
 function BrandNames() {
    return (
        <section className="section w-full max-w-screen-xl px-6 mx-auto mt-6 overflow-x-hidden sm:px-8 lg:px-12 lg:pb-16">
            <div className="relative overflow-x-hidden overflow-y-hidden lg:mx-16">
                <div>
                    <div className="flex py-4 animate-scroll">
                        <div className="relative w-64 shrink-0">
                            <Image className="object-cover" src="/Logos/logo-1.png" width={150} height={150} alt="img"/>
                        </div>
                        <div className="relative w-64 shrink-0">
                            <Image className="object-cover" src="/Logos/logo-2.png" width={150} height={150} alt="img"/>
                        </div>
                        <div className="relative w-64 shrink-0">
                            <Image className="object-cover" src="/Logos/logo-3.png" width={150} height={150} alt="img"/>
                        </div>
                        <div className="relative w-64 shrink-0">
                            <Image className="object-cover" src="/Logos/logo-4.png" width={150} height={150} alt="img"/>
                        </div>
                        <div className="relative w-64 shrink-0">
                            <Image className="object-cover" src="/Logos/logo-5.png" width={150} height={150} alt="img"/>
                        </div>
                        <div className="relative w-64 shrink-0">
                            <Image className="object-cover" src="/Logos/logo-6.png" width={150} height={150} alt="img"/>
                        </div>
                        <div className="relative w-64 shrink-0">
                            <Image className="object-cover" src="/Logos/logo-7.png" width={150} height={150} alt="img"/>
                        </div>
                        <div className="relative w-64 shrink-0">
                            <Image className="object-cover" src="/Logos/logo-8.png" width={150} height={150} alt="img"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
 }

export default BrandNames;