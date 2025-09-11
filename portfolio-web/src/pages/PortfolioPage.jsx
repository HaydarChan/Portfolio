import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PortfolioPage() {
    const navigate = useNavigate();

    return (
        <div className='text-[#1C1C1C] w-full h-full flex flex-col items-center gap-y-[40px] py-[40px] px-4 relative'>
            <button 
                onClick={() => navigate('/')}
                className="absolute top-8 left-8 flex items-center gap-x-[12px] hover:gap-x-[24px] transition-all rounded-full font-medium px-[24px] py-[12px] cursor-pointer rounded-full bg-gray-100 text-[#1c1c1c] text-[20px] z-10"
            >
                <ArrowLeft size={20} className='text-gray-500' />
                <span className='text-[16px] font-medium text-gray-600'>Back to Home</span>
            </button>
            <div className='text-center text-[#1c1c1c] flex flex-col items-center'>
                <h1 className='text-[36px] font-bold tracking-[-0.04em] [text-shadow:0_0_24px_rgba(0,0,0,0.24)]'>Projects I’ve Brought to Life</h1>
                <p className='text-[20px] text-gray-400'>Every project tells a story. Here are some highlights where design meets functionality</p>
            </div>
            <div className=''>

            </div>

        </div>
    )
}