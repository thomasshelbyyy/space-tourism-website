import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"


const Destination = ({ destinations }) => {
    const [selectedDestination, setSelectedDestination] = useState("moon")
    const [destination, setDestination] = useState(destinations.find(dst => dst.name.toLowerCase() === selectedDestination))

    const handleClick = (planet) => {
        setSelectedDestination(planet)
        setDestination(destinations.find(dst => dst.name.toLowerCase() === planet))
    }

    useEffect(() => {
        document.title = "Space Tourism | Destination"
    }, [])
    return (
        <div className="w-screen md:h-screen bg-[url('background-destination-mobile.jpg')] bg-no-repeat bg-cover md:bg-[url('background-destination-tablet.jpg')] lg:bg-[url('/background-destination-desktop.jpg')] relative">
            <Navbar />
            <div className="flex flex-col md:flex-row justify-between md:px-40 pt-40 font-barlow">
                <div>
                    <h1 className="text-white text-2xl pb-8 text-center"><span className="text-gray-400">01</span> PICK YOUR DESTINATION</h1>
                    <img src={destination.images.png} className="w-52 md:w-80 mx-auto" />
                </div>
                <div className="w-full md:w-96 px-10 md:px-0">
                    <div className="flex">
                        <button className={`text-xl text-slate-400 w-1/4 pb-2 relative before:absolute before:w-full before:h-[2px]  before:bottom-0 before:left-0 ${selectedDestination === "moon" ? "before:scale-100 before:bg-white" : "before:bg-slate-400"}  before:scale-0 hover:before:scale-100 before:transition before:duration-200`} onClick={() => handleClick("moon")}>MOON</button>
                        <button className={`text-xl text-slate-400 w-1/4 pb-2 relative before:absolute before:w-full before:h-[2px]  before:bottom-0 before:left-0 ${selectedDestination === "mars" ? "before:scale-100 before:bg-white" : "before:bg-slate-400"}  before:scale-0 hover:before:scale-100 before:transition before:duration-200`} onClick={() => handleClick("mars")}>MARS</button>
                        <button className={`text-xl text-slate-400 w-1/4 pb-2 relative before:absolute before:w-full before:h-[2px]  before:bottom-0 before:left-0 ${selectedDestination === "europa" ? "before:scale-100 before:bg-white" : "before:bg-slate-400"}  before:scale-0 hover:before:scale-100 before:transition before:duration-200`} onClick={() => handleClick("europa")}>EUROPA</button>
                        <button className={`text-xl text-slate-400 w-1/4 pb-2 relative before:absolute before:w-full before:h-[2px]  before:bottom-0 before:left-0 ${selectedDestination === "titan" ? "before:scale-100 before:bg-white" : "before:bg-slate-400"}  before:scale-0 hover:before:scale-100 before:transition before:duration-200`} onClick={() => handleClick("titan")}>TITAN</button>
                    </div>
                    <p className="font-bellefair text-7xl tracking-wider text-center text-white py-8">{destination.name.toUpperCase()}</p>
                    <p className="text-slate-400 text-justify w-full text-xl pb-4">{destination.description}</p>
                    <div className="w-full h-[1px] bg-slate-200"></div>
                    <div className="flex flex-col md:flex-row justify-evenly pt-4 text-white tracking-wider">
                        <div className="text-center pb-4 md:pb-0">
                            <p>AVG. DISTANCE</p>
                            <p className="text-4xl font-bellefair pt-3">{destination.distance}</p>
                        </div>
                        <div className="text-center">
                            <p>EST. TRAVEL TIME</p>
                            <p className="text-4xl font-bellefair pt-3">{destination.travel}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination