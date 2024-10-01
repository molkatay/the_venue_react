import Link from "next/link";
import { Button } from "../../../components/ui/button";
import { useEffect, useState, useMemo } from 'react';
import { FetchApiService } from "@/app/services/FetchApiNavService";
import { ApiService } from "@/app/services/ApiService";

function DesktopNav() {
    const [data, setData] = useState<{ navItems: any[]; cta: any } | null>(null);
    const apiService: ApiService = useMemo(() => new FetchApiService(), []);
    const [hasFetched, setHasFetched] = useState(false); // Flag for fetch tracking

    useEffect(() => {
        const fetchNavigation = async () => {
            if (!hasFetched) { // Check if the data has already been fetched
                try {
                    const result = await apiService.fetchMenuData();
                    setData({
                        navItems: result?.navItems || [],
                        cta: result?.cta || null,
                    });
                    setHasFetched(true); // Set the flag to true after fetch
                } catch (error) {
                    console.error("Error fetching navigation data:", error);
                }
            }
        };

        fetchNavigation();
    }, [apiService, hasFetched]);

    return (
        <div className="md:fixed z-50 flex items-center justify-between h-12 gap-6 py-3 pr-2 pl-4
            border shadow-lg top-6 rounded-3xl border-slate-200 bg-slate-100/60 shadow-black/5 backdrop-blur-lg dark:border-slate-700
            dark:shadow-black/70 dark:shadow-black/10 md:top-10 md:right-[5rem] xl:right-[12]">
            {data?.navItems?.length > 0 ? (
                data.navItems.map((navItem: any) => (
                    <Link key={navItem.id} className="font-bold transition text-slate-600 hover:text-black" href={navItem.href}>
                        {navItem.label}
                    </Link>
                ))
            ) : (
                <span>Loading...</span>
            )}
            {data?.cta && (
                <Button className="text-white transition bg-indigo-500 shadow hover:bg-indigo-600 rounded-3xl shadow-indigo-500/25
                    focus:outline-none focus:ring-1 focus:ring-white/30">{data.cta.label}</Button>
            )}
        </div>
    );
}

export default DesktopNav;
