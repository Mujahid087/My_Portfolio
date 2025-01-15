import React from 'react'
import {UserData} from "../data/UserData";

const Footer = () => {
    const currentyear=new Date().getFullYear();
    const {FooterLink}=UserData()
  return (
    <div className='mb-2 flex items-center justify-center gap-2'>
        <div className='font-poppins tect-center text-xs'>
        © Copyright <b>{currentyear}</b> Designed & built by 
        </div>
        <div 
        className='cursor-pointer text-sm font-bold tracking-wider'
        onClick={()=>{
            window.open(FooterLink)
        }}
        >
            Mujahid Mahedi
        </div>
    </div>
  )
}

export default Footer
