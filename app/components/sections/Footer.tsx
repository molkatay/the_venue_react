import Link from "next/link";

function Footer() {
    return (
        <footer className="grid w-full grid-cols-1 gap-6 p-4 border-t-2 md:gap-0 md:p-8 bg-slate-100 md:grid-cols-2">
<div className="flex flex-col justify-between row-start-2 md:row-start-1 text-slate-400">
    <p>CODE GEFDSF 2024</p>
    <p><Link href="#" > Cookies & data</Link></p>
</div>
        </footer>
    );
}

export default Footer;