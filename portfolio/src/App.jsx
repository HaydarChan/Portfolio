import './App.css'
import ProfilePhoto from "./assets/Profile.png"

function App() {
  return (
    <div className='text-[#1C1C1C] w-full h-full flex flex-col items-center'>
      <div className='w-full h-screen flex flex-col justify-center items-center gap-y-[40px]'>
        <div className='flex flex-col items-center gap-y-6'>
          <img src={ProfilePhoto} alt="logo" className='w-[175px] h-[175px]' />
          <p className='text-[32px] font-caveat'>Hi, I'm Qy</p>
        </div>
        <div className='flex flex-col items-center gap-y-40'>
          <div className='flex flex-col gap-y-[12px] text-center items-center text-[#1C1C1C]'>
            <p className='text-[64px] font-bold max-w-[1000px] tracking-[-0.04em] [text-shadow:0_0_24px_rgba(0,0,0,0.24)]'>Build experiences that speak to users and scale with businesses</p>
            <p className='text-[24px] max-w-[675px]'>I’m a UI/UX Designer and Front-End Developer crafting digital products that feel intuitive, beautiful, and fast.</p>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
