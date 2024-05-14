import { Link, useLocation } from "react-router-dom"
import logo from "../assets/logo.svg"
import { useState } from "react"

const Navbar = () => {
    const [isSidebarActive, setIsSidebarActive] = useState(false)

    const location = useLocation()
    return (
        <>
            <nav
                className="w-full flex justify-between items-center absolute top-12 z-50"
            >
                <Link to="/" className="pl-12">
                    <img src={logo} alt="Logo" className="w-8 h-8 " />
                </Link>

                <ul className="hidden md:flex font-barlow text-white text-lg tracking-wider ">
                    <li
                        className={`backdrop-blur-md w-40 h-16 relative before:absolute before:w-full before:scale-x-0 ${location.pathname === "/" ? "before:bg-white before:scale-x-100" : ""} hover:before:scale-x-100 before:h-1 before:bg-gray-400 before:bottom-0 before:left-0 before:transition before:duration-200`}
                    >
                        <Link to="/" className="w-full h-full flex justify-center items-center">00 HOME</Link>
                    </li>
                    <li
                        className={`backdrop-blur-md w-40 h-16 relative before:absolute before:w-full before:scale-x-0 ${location.pathname === "/destination" ? "before:bg-white before:scale-x-100" : ""} hover:before:scale-x-100 before:h-1 before:bg-gray-400 before:bottom-0 before:left-0 before:transition before:duration-200`}
                    >
                        <Link to="/destination" className="w-full h-full flex justify-center items-center">01 DESTINATION</Link>
                    </li>
                    <li
                        className={`backdrop-blur-md w-40 h-16 relative before:absolute before:w-full before:scale-x-0 ${location.pathname === "/crew" ? "before:bg-white before:scale-x-100" : ""} hover:before:scale-x-100 before:h-1 before:bg-gray-400 before:bottom-0 before:left-0 before:transition before:duration-200`}
                    >
                        <Link to="/crew" className="w-full h-full flex justify-center items-center">02 CREW</Link>
                    </li>
                    <li
                        className={`backdrop-blur-md w-40 h-16 relative before:absolute before:w-full before:scale-x-0 ${location.pathname === "/technology" ? "before:bg-white before:scale-x-100" : ""} hover:before:scale-x-100 before:h-1 before:bg-gray-400 before:bottom-0 before:left-0 before:transition before:duration-200`}
                    >
                        <Link to="/technology" className="w-full h-full flex justify-center items-center">03 TECHNOLOGY</Link>
                    </li>
                </ul>

                <button className="flex md:hidden flex-col gap-1 pr-12" onClick={() => setIsSidebarActive(!isSidebarActive)}>
                    <div className={`w-8 h-1 rounded-full bg-white transition duration-200 ${isSidebarActive ? "rotate-45 translate-y-2" : ""}`}></div>
                    <div className={`w-8 h-1 rounded-full bg-white transition duration-200 ${isSidebarActive ? "opacity-0" : ""}`}></div>
                    <div className={`w-8 h-1 rounded-full bg-white transition duration-200 ${isSidebarActive ? "-rotate-45 -translate-y-2" : ""}`}></div>
                </button>
            </nav>
            <div className={`md:hidden w-full h-full transition duration-200  absolute ${isSidebarActive ? "backdrop-blur-md z-10" : "backdrop-blur-none -z-50"}`}>
                <ul className={`w-full flex flex-col gap-10 items-center pt-24 font-barlow text-white transition duration-200 ${isSidebarActive ? "scale-100" : "scale-0"}`}>
                    <li><Link to="/" className={`text-xl pb-2 px-4 relative before:absolute before:w-full before:h-[3px] before:bottom-0 before:left-0 before:transition before:duration-200  ${location.pathname === "/" ? "before:scale-100 before:bg-white" : "before:scale-0"} before:bg-slate-400 hover:before:scale-100`}>00 HOME</Link></li>
                    <li><Link to="/destination" className={`text-xl pb-2 px-4 relative before:absolute before:w-full before:h-[3px] before:bottom-0 before:left-0 before:transition before:duration-200  ${location.pathname === "/destination" ? "before:scale-100 before:bg-white" : "before:scale-0"} before:bg-slate-400 hover:before:scale-100`}>01 DESTINATION</Link></li>
                    <li><Link to="/crew" className={`text-xl pb-2 px-4 relative before:absolute before:w-full before:h-[3px] before:bottom-0 before:left-0 before:transition before:duration-200  ${location.pathname === "/crew" ? "before:scale-100 before:bg-white" : "before:scale-0"} before:bg-slate-400 hover:before:scale-100`}>02 CREW</Link></li>
                    <li><Link to="/technology" className={`text-xl pb-2 px-4 relative before:absolute before:w-full before:h-[3px] before:bottom-0 before:left-0 before:transition before:duration-200  ${location.pathname === "/technology" ? "before:scale-100 before:bg-white" : "before:scale-0"} before:bg-slate-400 hover:before:scale-100`}>03 TECHNOLOGY</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar