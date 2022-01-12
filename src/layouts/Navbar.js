import { useRef } from "react";
import { NavLink } from "react-router-dom";
import data from './../data/data'
const Navbar = () => {
    const menu = useRef()
    const handleMenu = () => {
        menu.current.classList.toggle("hidden")
    }
    return ( 
        <nav className="container flex justify-between mx-auto mt-4 place-items-center relative">
            <img className="pl-2 sm:h-16" src="../assets/shared/logo.svg" alt="logo"/>
            <img className="h-8 pr-2 sm:hidden" src="../assets/shared/icon-hamburger.svg" 
                alt="menu-btn" onClick={()=>handleMenu()}/>
            <ul ref={menu} className="hidden absolute uppercase top-16 bg-slate-800 bg-opacity-90 w-full tracking-widest font-extralight
                    sm:flex sm:justify-between sm:static sm:w-auto sm:px-6 sm:text-lg sm:py-4">
                <li className="pl-4 py-3 border-b border-gray-400 sm:border-none cursor-pointer">
                    <NavLink to="/" onClick={()=>handleMenu()}>
                        <span className="font-bold">00</span> Home
                    </NavLink>
                </li>
                {Object.keys(data).map((item,index)=> {
                        return(
                                <li className="pl-4 py-3 border-b border-gray-400 sm:border-none cursor-pointer sm:ml-10" 
                                        key={index} >
                                    <NavLink to={`${item}`} onClick={()=>handleMenu()}>
                                        <span className=" font-bold">0{`${index+1}`}</span> {`${item}`}
                                    </NavLink>
                                </li>
                        )
                    })}
            </ul>
        </nav>
     );
}
 
export default Navbar;