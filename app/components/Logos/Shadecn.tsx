function Shadecn() {
    return (
        <div className="items-center hidden gap-4 md:flex ">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                class="h-6 w-6"
            >
                <rect width="256" height="256" fill="none"></rect>
                <line
                    x1="208"
                    y1="128"
                    x2="128"
                    y2="208"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                ></line>
                <line
                    x1="192"
                    y1="40"
                    x2="40"
                    y2="192"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                ></line>
            </svg>
            <span className="font-bold lg:text-2xl ">shadcn/ui</span>
        </div>
    );
}

export default Shadecn;