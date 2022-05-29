import { useState,useEffect,useContext,useRef } from "react"

import "./test.css"


import {data} from "../Assets/data"

import greyDot from "../Assets/Mobile/dot-grey.png"
import blackDot from "../Assets/Mobile/dot-black.png"


import chatLeft from "../Assets/Desktop/chat-left.png"
import chatRight from "../Assets/Desktop/chat-right.png"

import commaTop from "../Assets/Desktop/comma-top.png"
import commaBottom from "../Assets/Desktop/comma-bottom.png"

/*Import Device Context*/

import { deviceContext } from "../Provider"


/*Testimonial Component*/


export const Testimonial=()=>{

/*Get inner-width of browser from context*/

const deviceWidth=useContext(deviceContext)

const [active,setActive]=useState(0)
const refContainer=useRef()


const time=5000;

const handleScroll=(e)=>
{

    const position=refContainer.current.scrollLeft;
    const totalWidth=refContainer.current.scrollWidth-refContainer.current.clientWidth;

    const progress=100-Math.floor((position/totalWidth)*100);
    

    const index=Math.ceil(100/progress);
    
    if(index<data.length){
        setActive(index-1)
    }

    else{
        setActive(data.length-1)
    }

    
}


    return <div>{deviceWidth<1024?<div className="relative flex flex-col space-y-10 w-full" >


    <div className="flex overflow-x-scroll space-x-2 p-2 scroll-smooth" onScroll={handleScroll} ref={refContainer}>
        
    {data.map((element,index)=>{
        return <TestimonialCardMobile key={index} data={element}/>
    })}
    
    </div>


    <div className="flex space-x-1 my-5 self-center">

    {data.map((element,index)=>{

        return <img key={index} src={active==index?blackDot:greyDot} className="h-['10px'] w-['10px']"/>
    })}
    
    </div>

</div>:
        
    <div className="w-full flex justify-evenly">
    <div className="w-[80%] flex flex-col space-y-5">
    
    {data.map((element,index)=>{

        return <TestimonialCardDesktop key={index} data={element} isLeft={index%2==0?true:false}/>

    })}

    </div>
    </div>
}

    </div>
}

/*Mobile Testimonial Card*/

const TestimonialCardMobile=({data})=>{


    return <div className="relative min-w-[340px] h-[400px]  rounded-3xl border-4 space-y-10 border-black px-1 py-2 flex flex-col items-start">
           
                <div className="flex space-x-5 items-center ml-4">
                    <img src={data.profile.photo} className="w-[60px] h-[60px] rounded-sm"/>
                    <div className="flex flex-col">
                        <img src={data.profile.logo} className="w-[80px] h-[30px]"/>
                        <p className="text-sm font-bold">{data.profile.name}</p>
                        <p className="text-sm font-bold">{data.profile.designation}</p>
                    </div>
                </div>

                <div className="ml-5">
                <p className="text-base">{data.content}</p>
                </div>
            
            <div className="absolute bottom-[40px] ml-5 w-full ">
            <p className="text-xs font-extrabold">Services provided:</p>
            
            <div className="flex w-full space-x-1">
            {data.services.map((service)=>{

                return <div className="bg-gray-200 h-[30] w-[80] rounded-sm px-1 flex-wrap">
                <p className="text-sm text-center ">{service}</p>
                </div>

            })} 
            </div>
            
            </div>


    
    </div>
}


/*Desktop Testimonial Card*/


const TestimonialCardDesktop=({data,isLeft})=>{



    return <div className={isLeft?"relative w-[660px] h-[450px] self-center right-[180px]":"relative w-[650px] h-[450px] self-center left-[120px]"}>

    {isLeft?<div>
    <img src={chatLeft} className="w-full"/>
    <img src={commaBottom} className="absolute bottom-[50px] right-[100px] "/>
    </div>:<div>
    <img src={chatRight} className="w-full"/>
    <img src={commaTop} className="absolute top-[-25px] right-[100px]"/>
    </div>}

    <div className="flex flex-col absolute top-8 w-full items-start space-y-3">

    <div className={isLeft?"flex w-full justify-evenly":"flex w-full justify-evenly flex-row-reverse "}>

        <div className="flex flex-col text-base font-bold justify-evenly">
            <img src={data.profile.logo} className="w-[100px] h-[40px]"/>
            <p>{data.profile.name}</p>
            <p>{data.profile.designation}</p>
            <div className="max-w-[350px] mt-5 text-base font-medium">
            <p>{data.content}</p>
            </div>
        </div>

        <div>
        <img src={data.profile.photo} className="rounded-3xl"/>

        </div>
        
    </div>
        
    
    <div className="ml-12 space-y-2">

    <p className="text-sm font-extrabold">Services provided:</p>
    
    <div className="flex space-x-2">
   
    {data.services.map((service,index)=>{



        return  <div key={index} className="bg-gray-100 p-1 rounded-sm">
    
        <p>{service}</p></div>
    })}
   
  
    </div>

    </div>

    </div>

 

    
    </div>
}