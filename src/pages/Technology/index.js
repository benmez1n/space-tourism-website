import { useEffect , useState } from "react"
import data from "../../data/data"
const Technology = () => {

    document.body.className = "technology"
    
    const technologies = data.technology
    
    const [technologyLink , setTechnologyLink] = useState("Launch vehicle")
    const [ technology,setTechnology ] = useState(technologies[0])
    const [img , setImg ] = useState(technologies[0].images.landscape)

    useEffect(
        ()=>{
            if(technologyLink === "Launch vehicle"){
                setTechnology(technologies[0])
            }
            else if(technologyLink === "Spaceport"){
                setTechnology(technologies[1])
            }
            else if(technologyLink === "Space capsule"){
                setTechnology(technologies[2])
            }
    
            if(window.innerWidth <= 643){
                setImg(technology.images.landscape)
            }
            else{
                setImg(technology.images.portrait)
            }
    
        },[technologyLink,technologies,technology]
    )
    
    return ( 
    <div className="container text-center sm:text-left">
            <div className="w-5/6 mx-auto">
                <h1 className="font-bold pt-8 text-sm  tracking-widest text-gray-300 
                            sm:text-xl sm:mt-10">
                    <span className="text-gray-500">03</span> SPACE LAUNCH 101
                </h1>
                <div className="flex flex-col-reverse mb-8 sm:flex-row sm:mb-0">
                    <div className="sm:mt-24 sm:flex sm:flex-row sm:h-max">
                        <ul className="text-slate-200 flex justify-between w-max h-max mx-auto tracking-widest 
                                        sm:mx-0 sm:mt-10 sm:flex-col ">
                            {
                                technologies.map((technology,index) => {
                                    return (
                                        <li 
                                            className={` w-10 h-10 pt-1.5 cursor-pointer bg-transparent border border-white bg-opacity-20 text-gray-400 uppercase pb-3 sm:pl-3.5 sm:mb-7
                                            ${technologyLink === technology.name && "font-bold text-white"}  rounded-full mx-1`}
                                            key={technology.id} onClick={()=>setTechnologyLink(technology.name)}>
                                            {index+1}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className="mt-7 sm:ml-16">
                            <span className="opacity-50">THE TERMINOLOGY...</span>
                            <h1 className="text-2xl sm:text-4xl mb-4 tracking-widest uppercase">{technology.name}</h1>
                            <p className="leading-6 text-gray-200 sm:w-3/4">{technology.description}</p>
                        </div>
                    </div>
                    <img className = "w-full mx-auto my-8 sm:my-0 sm:w-96" 
                        src={img} alt=""/>
                </div>
            </div>
        </div>
    );
}
 
export default Technology;