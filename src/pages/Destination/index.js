import { NavLink , useParams , Outlet } from "react-router-dom";
import data from "../../data/data";
const Destinations = () => {
    document.body.className = "destination"

    const destinations = data.destinations
    const params = useParams()

    return ( 
        <div className="container text-center sm:text-left">
            <div className="w-5/6 mx-auto sm:flex sm:cols-2">
                <div className="">
                    <h1 className="font-bold pt-8 text-lg"><span className="text-gray-400">01</span> PICK YOUR DESTINATION</h1>
                    <img className = "w-3/4 mx-auto my-10 sm:w-full" 
                        src={params.destination ? 
                                    `../assets/destination/image-${params.destination.toLocaleLowerCase()}.png`
                                    : `../assets/destination/image-moon.png`
                                    } alt="" />
                </div>
                <ul className="flex justify-between w-3/4 mx-auto font-light tracking-wider sm:relative sm:left-80 sm:top-10">
                    {
                        destinations.map(destination => {
                            return (
                                <li><NavLink to={destination.name} key={destination.id}>{destination.name}</NavLink></li>
                            )
                        })
                    }
                </ul>
                <Outlet />
            </div>
        </div>
     );
}
 
export default Destinations;