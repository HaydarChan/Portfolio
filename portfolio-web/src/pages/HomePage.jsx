import ProfilePhoto from "../assets/Profile.png"
import { BriefcaseBusiness, Send } from 'lucide-react';

export default function HomePage() {
    return (
      <div className='text-[#1C1C1C] w-full h-full flex flex-col items-center'>
        <div className='w-full h-screen flex flex-col justify-center items-center gap-y-[40px] px-4'>
          <div className='flex flex-col items-center'>
            <img src={ProfilePhoto} alt="logo" className='w-[175px] h-[175px]' />
            <p className='text-[32px] font-caveat'>Hi, I'm Qy</p>
          </div>
          <div className='flex flex-col items-center gap-y-[80px]'>
            <div className='flex flex-col gap-y-[12px] text-center items-center text-[#1C1C1C]'>
              <p className='text-[64px] font-bold max-w-[1200px] tracking-[-0.04em] [text-shadow:0_0_24px_rgba(0,0,0,0.24)]'>Creating user-first designs and scalable front-end systems that drive results</p>
              <p className='text-[24px] max-w-[675px] text-gray-400'>I'm a UI/UX Designer and Front-End Developer crafting digital products that feel intuitive, beautiful, and fast.</p>
            </div>
            <div className='flex gap-x-[16px]'>
              <a href="/portfolio">
                <button className="flex items-center gap-x-[12px] hover:gap-x-[24px] transition-all rounded-full font-medium px-[24px] py-[12px] cursor-pointer rounded-full bg-[#1c1c1c] text-white text-[20px]">View My Work <BriefcaseBusiness className='w-[24px] h-[24px]' /></button>
              </a>
              <a target='_blank' href='https://www.linkedin.com/in/atqiyahaydar/'>
                <button className="flex items-center gap-x-[12px] hover:gap-x-[24px] transition-all rounded-full font-medium px-[24px] py-[12px] cursor-pointer rounded-full bg-gray-100 text-[#1c1c1c] text-[20px]">Let's Connect <Send className='w-[24px] h-[24px]' /></button>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}