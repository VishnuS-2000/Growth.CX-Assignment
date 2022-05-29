import { useState, createContext,useEffect } from "react"


/*Create Device Context*/
export  const deviceContext=createContext()


/*Device Provider*/


export default function DeviceProvider({children}){

const [deviceWidth,setDeviceWidth]=useState(window.innerWidth)

  useEffect(()=>{
    
    /*Function to handle resize of browser*/

    const handleResize=()=>{

     setDeviceWidth(window.innerWidth)


    }

    window.addEventListener('resize',handleResize)

    return ()=>window.removeEventListener('resize',handleResize)

  })


    return <deviceContext.Provider value={deviceWidth}>
    {children}
    </deviceContext.Provider>




}