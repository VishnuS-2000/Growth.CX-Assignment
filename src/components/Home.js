import "./Home.css"
import desktopBackground from "../Assets/Desktop/home-background.png"
import mobileBackground from "../Assets/Mobile/home-background.png"


import { useContext } from 'react';
import { deviceContext } from "../Provider"


/*Home Component*/

export const Home=()=>{

    /*Get inner-width of browser from context*/
    const deviceWidth=useContext(deviceContext)

    return <div className="w-screen min-h-[400px] items-start home bg-left-bottom flex  flex-col lg:min-h-[600px] items-center justify-center  space-y-32">
        {deviceWidth<1024?<img src={mobileBackground} className="absolute w-full max-w-[400px]"/>:<img src={desktopBackground} className="absolute w-[95%]"/>}
        
        <div className=" flex justify-center flex-col max-w-[350px] px-2 lg:max-w-[900px] space-y-10">
        <h1 className="text-3xl font-black drop-shadow-2xl antialiased text-center lg:text-5xl leading-2 title ">Somebody told us sharing customer testimonials adds credibility. </h1>
        <p className="text-base font-small  text-center antialiased drop-shadow lg:text-3xl font-medium">So sharing some of them for the sake of it!</p>
        </div>

        <div className="text-base  drop-shadow-2xl antialiased mb-8 lg:text-4xl font-bold">A few of our happy customers</div>
    </div>



}