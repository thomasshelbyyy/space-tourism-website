import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"

const Crew = ({ crews }) => {

    const [selectedCrew, setSelectedCrew] = useState("douglay hurley")
    const [crew, setCrew] = useState(crews.find(crw => crw.name.toLowerCase() === "douglas hurley"))

    const handleClick = crew => {
        setSelectedCrew(crew)
        setCrew(crews.find(crw => crw.name.toLowerCase() === crew))
    }

    useEffect(() => {
        document.title = "Space Tourism | Crew"
    }, [])
    return (
        <div className="w-screen md:h-screen bg-[url('background-crew-mobile.jpg')] bg-no-repeat bg-cover md:bg-[url('background-crew-tablet.jpg')] lg:bg-[url('/background-crew-desktop.jpg')] relative">
            <Navbar />
            <p className="text-xl md:text-3xl text-white md:text-left text-center pt-20 md:pt-32 pb-10 md:pb-0 md:pl-28"><span className="text-slate-400 md:pl-4 tracking-widest">02</span> MEET YOUR CREW</p>
            <div className="md:px-32 w-ful flex flex-col-reverse md:flex-row md:justify-between items-center">
                <div className="font-barlow text-white w-full md:w-96 md:pb-20 px-8 md:px-0 text-center md:text-left">
                    <p className="text-slate-400 text-2xl md:text-4xl font-bellefair pt-6 pb-2">{crew.role.toUpperCase()}</p>
                    <p className="text-2xl md:text-6xl font-bellefair">{crew.name.toUpperCase()}</p>
                    <p className="text-slate-400 text-lg text-justify pt-3 pb-6">{crew.bio.toUpperCase()}</p>
                    <div className="w-full flex justify-center md:justify-start gap-12 pb-10 md:pb-0">
                        {crews.map(crw => (
                            <button key={crw.name} className={`w-3 h-3 md:w-5 md:h-5 rounded-full ${selectedCrew === crw.name.toLowerCase() ? "bg-white" : "bg-slate-400"} hover:bg-white`} onClick={() => handleClick(crw.name.toLowerCase())}></button>
                        ))}
                    </div>
                </div>

                <img src={crew.images.png} alt={`${crew.name} photo`} className="w-1/2 md:w-96 px-12 relative border-b border-b-slate-400" />
            </div>
        </div>
    )
}

export default Crew