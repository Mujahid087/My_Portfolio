import React from "react";
import TypewriterText from "../components/TypeWriterText";
import { UserData } from "../data/UserData";
import {
    AiFillGithub,
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";
  import imagedeveloper from "../assets/images/imagedeveloper.png"

  function Home(){
    const socialMedia=UserData.socialMedia;

    const socialMediaIcons={
        AiFillGithub: AiFillGithub,
        FaLinkedinIn: FaLinkedinIn,
    }
    return (
        <div className="mb-28 h-auto w-full sm:mb-0 md:h-screen">
            <div className="mx-auto mt-40 flex  w-[90%] flex-col items-center sm:flex-row  lg:mt-32 lg:w-[80%] lg:justify-between ">
                <div className="w-full">
                    <h2 className="text-2xl font-semibold leading-tight text-gray-900 lg:text-3xl">
                        Hello <span className="wave">👋</span>

                    </h2>
                    <TypewriterText/>

                    <div className="mt-4 flex gap-8 lg:gap-0">
                        {socialMedia.map((data,index)=>{
                            const IconComponent=socialMediaIcons[data.icon];
                            return (
                                <button key={index}
                                className="flex items-center justify-center rounded-lg border-none bg-transparent hover:bg-white hover:bg-opacity-20 hover:opacity-80 hover:shadow-lg lg:h-12 lg:w-24"
                                onClick={()=>window.open(data.url)}
                                
                                >
                                    <IconComponent className="icon"/>

                                </button>
                            )

                        })}

                    </div>

                </div>
                <div className="mt-20 lg:mt-12">
                    <img 
                    src={imagedeveloper}
                    alt=""
                     className="max-w[550px] bg-cover bg-center bg-no-repeat lg:h-[400px] lg:w-[600px]"
                    
                    />

                </div>

            </div>

        </div>
    )

  }

  export default Home