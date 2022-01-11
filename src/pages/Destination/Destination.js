import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data/data";
const Destination = () => {
    
    const paramDestination = useParams()
    const [ destination,setDestination ] = useState(data.destinations[0]) 
    useEffect(
        ()=>{
            if(paramDestination.destination === "Moon"){
                setDestination(data.destinations[0])
            }
            else if(paramDestination.destination === "Mars"){
                setDestination(data.destinations[1])
            }
            else if(paramDestination.destination === "Europa"){
                setDestination(data.destinations[2])
            }
            else if(paramDestination.destination === "Titan"){
                setDestination(data.destinations[3])
            }
        },[paramDestination.destination]
    )
    return ( 
        <div className="text-slate-200 z-8">
            <h1 className="text-6xl sm:text-8xl my-4 tracking-widest uppercase">{destination.name}</h1>
            <p className="leading-6 text-gray-400">{destination.description}</p>
            <div className="my-8 pt-4 border-t border-gray-500 grid sm:grid-cols-2 gap-y-8 mb-10">
                <div className="grid">
                    <span className="text-gray-400">AVG. DISTANCE</span>
                    <span className="uppercase font-light text-3xl sm:text-5xl">{destination.distance}</span>
                </div>
                <div className="grid"> 
                    <span className="text-gray-400">EST. TRAVEL TIME</span>
                    <span className="uppercase font-light text-3xl sm:text-5xl">{destination.travel}</span>
                </div>
            </div>
        </div>
     );
}
 
export default Destination;