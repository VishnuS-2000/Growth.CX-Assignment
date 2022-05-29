
/*Import Dot Images*/
import ellipseLarge from "../Assets/Mobile/ellipse-large.png"
import ellipseMedium from "../Assets/Mobile/ellipse-medium.png"
import ellipseSmall from "../Assets/Mobile/ellipse-small.png"

import ellipseLargeDesktop from "../Assets/Desktop/ellipse-large.png"
import ellipseMediumDesktop from "../Assets/Desktop/ellipse-medium.png"
import ellipseSmallDesktop from "../Assets/Desktop/ellipse-small.png"

/*Import Background Curve*/
import mobileBackground from "../Assets/Mobile/footer-background.png"
import desktopBackground from "../Assets/Desktop/footer-background.png"


/*Import device context and provider*/


import { deviceContext } from "../Provider"
import { useContext } from "react"

/*Footer Component*/

export const Footer=()=>{
    
    /*Get inner-width of browser from context*/

    const deviceWidth=useContext(deviceContext)

    return <div className="relative flex flex-col">


            <Pattern deviceWidth={deviceWidth}/>
    

            <div className="absolute flex flex-col top-[10%] w-full justify-start items-center px-12 space-y-12 text-white lg:top-[35%] self-center ">
            <h1 className=" font-extrabold text-xl text-center lg:text-5xl">Set the foundation for an <br/>aggressive growth</h1>
            <button className="bg-white text-black w-[150px] h-[40px]  rounded-md  font-bold drop-shadow text-xl lg:text-2xl lg:w-[210px] lg:h-[50px]">Hop on a Call</button>
            

            <div className="space-y-6 text-center flex flex-col lg:flex-row w-full lg:space-y-0 justify-evenly">


            <div className="space-y-6 text-center lg:space-x-6">
            <p className="text-xm font-bold lg:text-xl">Our fixes</p>
            <ul className="text-center space-y-4 text-xs lg:text-sm space-y-6 text-gray-300">
                
                <li type="none" >Team</li>
                <li type="none" >Expert</li>
                <li type="none" >Content</li>
            </ul>

            </div>




            <div className="space-y-6  text-center lg:space-x-6">
            <p className="text-xm font-bold lg:text-xl">Community</p>
            <ul className=" space-y-4 text-xs lg:text-sm space-y-6 text-gray-300">
                
                <li type="none" >About Us</li>
                <li type="none" >Contact Us</li>
                <li type="none" >Privacy</li>
                <li type="none" >Terms</li>
            </ul>

            </div>



            <div className="space-y-6  text-center ">
            <p className="text-xm font-bold lg:text-xl">Social</p>
            <ul className="space-y-4 text-xs lg:text-sm space-y-6 text-gray-300">
                
                <li type="none" >Eye-Openers</li>
                <li type="none" >Buzz</li>
               
            </ul>

            </div>


            <div className="space-y-6 text-center">
            <p className="font-bold text-sm lg:text-xl">Resources</p>
            <ul className="space-y-4 text-xs lg:text-sm space-y-6 text-gray-300">
                
                <li type="none" >Linkedin</li>
                <li type="none" >Facebook</li>
                <li type="none" >Twitter</li>
                <li type="none" >Instagram</li>
            </ul>

            </div>



           

            </div>
            <p className="text-xs lg:text-base">© Copyright 2020 Growth.cx</p>
            </div>



    </div>
}







const Pattern=({deviceWidth})=>{


    
    return <div>
    <div className="w-full ">

    {deviceWidth<1024?<div><img src={mobileBackground} className="w-full h-[1050px]"/> <div className="absolute rotate-[60deg] space-y-1 top-[-1%] left-[20%]">
    <img src={ellipseSmall}/>
    <img src={ellipseMedium}/>
    <img src={ellipseLarge}/>
    
    
</div></div>:
<div>
<img src={desktopBackground} className="w-[200%] h-[900px]"/>
<div className="absolute rotate-[60deg] space-y-1 top-[-2%] left-[26%]">
<img src={ellipseSmallDesktop}/>
<img src={ellipseMediumDesktop}/>
<img src={ellipseLargeDesktop} className="w-[120px] h-[120px]"/>
</div>
</div>

}
    
    </div>
       
    </div>  
}