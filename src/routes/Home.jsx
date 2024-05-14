import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import { useEffect } from "react"

const Home = () => {

    useEffect(() => {
        document.title = "Space Tourism | Home"
    }, [])

    return (
        <div
            className={`w-screen h-screen bg-[url('background-home-mobile.jpg')] bg-no-repeat bg-cover md:bg-[url('background-home-tablet.jpg')] lg:bg-[url('/background-home-desktop.jpg')] relative`}
        >
            <Navbar />

            <div className="flex flex-col md:flex-row justify-between items-center px-16 pt-24 h-full">
                <div className="w-full lg:w-2/5 text-center md:text-left">
                    <p className="text-2xl text-gray-400 font-barlow">SO YOU WANT TO TRAVEL TO</p>
                    <p className="text-9xl text-white font-bellefair">SPACE</p>
                    <p className="text-xl text-gray-400 font-barlow">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>

                <div className="relative text-3xl w-40 h-40 md:w-48 md:h-48 rounded-full font-bellefair tracking-wider z-50 group">
                    <Link to="/destination" className="flex justify-center items-center rounded-full w-full h-full bg-white hover:scale-90 transition duration-200">EXPLORE</Link>
                    <div className="absolute w-full h-full rounded-full bg-gray-500 -z-50 top-0 left-0 scale-0 group-hover:scale-110 transition duration-200 group-hover:shadow-lg group-hover:shadow-white"></div>
                </div>
            </div>


        </div>
    )
}

export default Home