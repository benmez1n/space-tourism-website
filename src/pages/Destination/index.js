import { useEffect, useState } from "react";
import data from "../../data/data";
const Destinations = () => {
    document.body.className = "destination"

    const destinations = data.destinations
    const [destinationLink , setDestinationLink] = useState("Moon")
    const [ destination,setDestination ] = useState(data.destinations[0]) 
    useEffect(
        ()=>{
            if(destinationLink === "Moon"){
                setDestination(destinations[0])
            }
            else if(destinationLink === "Mars"){
                setDestination(destinations[1])
            }
            else if(destinationLink === "Europa"){
                setDestination(destinations[2])
            }
            else if(destinationLink === "Titan"){
                setDestination(destinations[3])
            }
        },[destinationLink,destinations,destination]
    )
    return ( 
        <div className="container text-center sm:text-left">
            <div className="w-5/6 mx-auto sm:grid sm:grid-cols-2 sm:gap-10">
                <div className="sm:mt-10">
                    <h1 className="font-bold pt-8 text-sm  tracking-widest text-gray-300 sm:text-xl">
                        <span className="text-gray-500">01</span> PICK YOUR DESTINATION
                    </h1>
                    <img className = "w-3/4 mx-auto my-10 " 
                        src={destinationLink ? 
                                    `../assets/destination/image-${destinationLink.toLocaleLowerCase()}.png`
                                    : `../assets/destination/image-moon.png`
                                    } alt="" />
                </div>
                <div className="sm:mt-36">
                    <ul className="text-slate-200 flex justify-between w-11/12 mx-auto tracking-widest sm:mx-0">
                        {
                            destinations.map(destination => {
                                return (
                                    <li className={`cursor-pointer uppercase pb-3 ${destinationLink === destination.name && "border-b-2"}`}
                                        key={destination.id} onClick={()=>setDestinationLink(destination.name)}>
                                        {destination.name}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="mt-7">
                        <h1 className="text-6xl sm:text-7xl mb-4 tracking-widest uppercase">{destination.name}</h1>
                        <p className="leading-6 text-gray-400">{destination.description}</p>
                        <div className="my-8 pt-4 border-t border-gray-500 grid sm:grid-cols-2 gap-y-8 mb-10">
                            <div className="grid uppercase">
                                <span className="text-gray-400">AVG. DISTANCE</span>
                                <span className="font-light text-2xl sm:text-3xl">{destination.distance}</span>
                            </div>
                            <div className="grid uppercase"> 
                                <span className="text-gray-200">EST. TRAVEL TIME</span>
                                <span className="font-light text-2xl sm:text-3xl">{destination.travel}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Destinations;