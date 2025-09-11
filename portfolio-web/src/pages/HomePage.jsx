import ProfilePhoto from "../assets/Profile.png"
import { BriefcaseBusiness, Send } from 'lucide-react';
import SplitText from "@/components/SplitText";
import { motion } from 'framer-motion';

export default function HomePage() {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const profileVariants = {
        hidden: { 
            opacity: 0, 
            y: -50,
            scale: 0.4
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.8
            }
        }
    };

    const textVariants = {
        hidden: { 
            opacity: 0, 
            y: 30
        },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 12,
                duration: 0.6
            }
        }
    };

    const buttonsVariants = {
        hidden: { 
            opacity: 0, 
            y: 40,
            scale: 0.8
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.7
            }
        }
    };

    return (
      <div className='text-[#1C1C1C] w-full h-full flex flex-col items-center'>
        <motion.div 
          className='w-full h-screen flex flex-col justify-center items-center gap-y-[40px] px-4'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className='flex flex-col items-center'
            variants={profileVariants}
          >
            <motion.img 
              src={ProfilePhoto} 
              alt="logo" 
              className='w-[175px] h-[175px] rounded-full'
              whileHover={{ 
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.3 }
              }}
            />
            <motion.p 
              className='text-[32px] font-caveat mt-4'
              variants={textVariants}
            >
              Hi, I'm Qy
            </motion.p>
          </motion.div>
          <motion.div 
            className='flex flex-col items-center gap-y-[80px]'
            variants={textVariants}
          >
            <div className='flex flex-col gap-y-[12px] text-center items-center text-[#1C1C1C]'>
              <SplitText
                text="Creating user-first designs and scalable front-end systems that drive results"
                className="text-[64px] font-bold max-w-[1200px] tracking-[-0.04em] [text-shadow:0_0_24px_rgba(0,0,0,0.24)]"
                delay={28}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
              <motion.p 
                className='text-[24px] max-w-[675px] text-gray-400'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 1.2, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 60,
                  damping: 12
                }}
              >
                I'm a UI/UX Designer and Front-End Developer crafting digital products that feel intuitive, beautiful, and fast.
              </motion.p>
            </div>
            <motion.div 
              className='flex gap-x-[16px]'
              variants={buttonsVariants}
            >
              <a href="/portfolio">
                <motion.button 
                  className="flex items-center gap-x-[12px] transition-all rounded-full font-medium px-[24px] py-[12px] cursor-pointer rounded-full bg-[#1c1c1c] text-white text-[20px]"
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ 
                    scale: 0.95,
                    transition: { duration: 0.1 }
                  }}
                >
                  View My Work <BriefcaseBusiness className='w-[24px] h-[24px]' />
                </motion.button>
              </a>
              <a href="/about-me">
                <motion.button 
                  className="flex items-center gap-x-[12px] transition-all rounded-full font-medium px-[24px] py-[12px] cursor-pointer rounded-full bg-gray-100 text-[#1c1c1c] text-[20px]"
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ 
                    scale: 0.95,
                    transition: { duration: 0.1 }
                  }}
                >
                    Learn About Me <Send className='w-[24px] h-[24px]' />
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    )
}