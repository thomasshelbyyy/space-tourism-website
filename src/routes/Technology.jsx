import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"

const Technology = ({ technologies }) => {
    const [selectedTechnology, setSelectedTechnology] = useState("launch vehicle")
    const [technology, setTechnology] = useState(technologies.find(tech => tech.name.toLowerCase() === "launch vehicle"))

    const handleClick = tech => {
        setSelectedTechnology(tech)
        setTechnology(technologies.find(tch => tch.name.toLowerCase() === tech))
    }

    useEffect(() => {
        document.title = "Space Tourism | Technology"
    }, [])
    return (
        <div className="w-screen h-screen bg-[url('background-technology-mobile.jpg')] bg-no-repeat bg-cover md:bg-[url('background-technology-tablet.jpg')] lg:bg-[url('/background-technology-desktop.jpg')] relative">
            <Navbar />
            <div className="md:px-32 w-full h-full flex md:flex-row md:justify-between items-center">
                <div className="font-barlow text-white relative text-center md:text-left w-full">
                    <p className="text-2xl md:pl-8 pb-8 tracking-wider"><span className="text-slate-400">03 </span> SPACE LAUNCH 101</p>
                    <img src={technology.images.landscape} alt="" className="md:hidden w-full absolute" />
                    <div className="flex flex-col md:flex-row gap-8 pt-32 md:pt-0">
                        <div className="flex md:flex-col font-bellefair gap-8 justify-center z-50">
                            {technologies.map((tech, i) => (
                                <button key={tech.name} className={`text-xl md:text-5xl px-4 py-2 rounded-full transition duration-200 ${selectedTechnology === tech.name.toLowerCase() ? "bg-white text-slate-400" : "bg-transparent"}  border`} onClick={() => handleClick(tech.name.toLowerCase())}>{i + 1}</button>
                            ))}
                        </div>
                        <div className="flex flex-col w-full px-8 md:px-0 justify-around z-50">
                            <p className="text-slate-400">THE TERMINOLOGY</p>
                            <p className="text-5xl font-bellefair">{technology.name.toUpperCase()}</p>
                            <p className="text-slate-400 text-xl text-justify">{technology.description}</p>
                        </div>
                    </div>
                </div>
                <img src={technology.images.portrait} alt={`${technology.name} photo`} className="w-96 hidden md:block" />
            </div>
        </div>
    )
}

export default Technology