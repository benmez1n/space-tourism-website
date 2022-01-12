import { useEffect , useState } from "react"
import data from "../../data/data"
const Crew = () => {
    document.body.className = "crew"    
    
    const crew = data.crew
    const [numberLink , setNumberLink] = useState("Douglas Hurley")
    const [ number,setNumber ] = useState(data.crew[0])

    useEffect(
        ()=>{
            if(numberLink === "Douglas Hurley"){
                setNumber(crew[0])
            }
            else if(numberLink === "Mark Shuttleworth"){
                setNumber(crew[1])
            }
            else if(numberLink === "Victor Glover"){
                setNumber(crew[2])
            }
            else if(numberLink === "Anousheh Ansari"){
                setNumber(crew[3])
            }
        },[numberLink,crew,number]
    )
    return ( 
        <div className="container text-center sm:text-left">
            <div className="w-5/6 mx-auto">
                <h1 className="font-bold pt-8 text-sm  tracking-widest text-gray-300 
                            sm:text-xl sm:mt-10">
                    <span className="text-gray-500">02</span> MEET YOUR CREW
                </h1>
                <div className="flex flex-col-reverse mb-8 sm:flex-row sm:mb-0">
                    <div className="sm:mt-24 sm:flex sm:flex-col-reverse sm:h-max">
                        <ul className="text-slate-200 flex justify-between w-max mx-auto tracking-widest 
                                        sm:mx-0 sm:mt-10">
                            {
                                crew.map(number => {
                                    return (
                                        <li 
                                            className={` w-3 h-3 cursor-pointer bg-white bg-opacity-20 uppercase pb-3 
                                            ${numberLink === number.name && "bg-opacity-100"}  rounded-full mx-1`}
                                            key={number.id} onClick={()=>setNumberLink(number.name)}>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className="mt-7">
                            <h2 className="uppercase tracking-wide opacity-50 sm:text-3xl">{number.role}</h2>
                            <h1 className="text-2xl sm:text-4xl mb-4 tracking-widest uppercase">{number.name}</h1>
                            <p className="leading-6 text-gray-200 sm:w-3/4">{number.bio}</p>
                        </div>
                    </div>
                    <img className = "w-3/4 mx-auto my-8 sm:my-0 sm:w-96" 
                        src={numberLink ? 
                                    `../assets/crew/image-${numberLink.toLocaleLowerCase().split(" ").join("-")}.png`
                                    : `../assets/crew/image-douglas-hurley.png`
                                    } alt=""/>
                </div>
            </div>
        </div>
     );
}
 
export default Crew;
