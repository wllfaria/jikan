import { ROUTES } from "@/constants";
import { Link, useNavigate } from "react-router-dom";

export function Sidebar() {
    const navigate = useNavigate();

    return (
        <aside className="w-[80px] px-[10px] flex flex-col">
            <nav className="flex-2 w-[60px] w-full bg-accent-700 border border-solid border-accent-800 py-[30px] rounded-[48px]">
                <ul className="flex flex-col items-center gap-5">
                    {ROUTES.map((route) => (
                        <li
                            key={route.title}
                            className="p-2 rounded-[12px] hover:bg-accent-800 text-accent-300 hover:text-primary-500 cursor-pointer"
                            onClick={() => navigate(route.url)}
                        >
                            <Link to={route.title}>
                                <route.icon variant="Bold" />
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="flex-1" />
        </aside>
    );
}
