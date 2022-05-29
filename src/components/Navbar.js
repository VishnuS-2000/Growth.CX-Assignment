import {useState} from "react"


/*Import Logo & MenuBar Icon for Mobile*/

import Logo from "../Assets/Growth.cx-logo.png"
import menuBar from "../Assets/Mobile/menu-icon.png"


/*Navigation Bar*/

export const NavBar=()=>{



    

    return <div className="w-full h-[80px] flex justify-start items-center cursor-pointer shadow-md ">

        <div className="flex justify-center flex-grow-[0.2]">
        <img src={Logo} className="h-[36px] lg:h-[50px]"/>

        </div>

        <img src={menuBar} className="absolute right-[20px] lg:hidden"/>


        <div className="hidden lg:flex flex-grow-[0.7] justify-evenly  font-bold w-[800px] items-center ">

        <div>
        <h1 className="drop-shadow">Why Us?</h1>
        </div>


        <div className="flex flex-col items-center">
        <h1 className="font-cursive line-through drop-shadow">Your pains</h1>
        <h1 className="drop-shadow">Our Fixes</h1>
        
        </div>

    
        <div>
        <h1 className="drop-shadow">Growth</h1>
        </div>

        <div>
        <h1 className="drop-shadow">Eye-Openers</h1>
        </div>

        <div className="p-7 border-b-4 border-black">
        <h1 className="drop-shadow">Customers</h1>
        </div>


        <button className="bg-black w-100px px-4 py-2 rounded-md text-white font-bold">Hop on a Call</button>
        </div>

    
    </div>
}

