import {FC,useContext,useRef,useEffect, PropsWithRef, ComponentPropsWithRef} from 'react'
import Box from '../components/Box'
import Text from '../components/Text'
import data from '../data/why.json'
import { motion } from 'framer-motion'
import { Ctx } from '../utils/context'

interface LogoProps {
    position : string,
    bgColor : string,
    logo : string,
    top : number,
    translateX? : number,
    translateY? : number
}

const LogoDecoration : FC<LogoProps> = ({bgColor,position,logo,top,translateX,translateY}) => {
    // console.log(translate);
    
    return (
        <motion.div
        className={`w-fit p-3 rounded-lg absolute z-20 scale-75 ${position}`}
        style={{
            backgroundColor : bgColor,
            translateX : translateX || 0,
            translateY : translateY || 0
        }}>
            <img className='w-8' src={`/assets/logos/${logo}.svg`}/>
        </motion.div>
    )
}

interface ListWhyProps {
    keyword : string,
    description : string
}

const ListWhy : FC<ListWhyProps> = ({description,keyword}) => {

    return (
        <div className='group'>
            <div className='flex items-center'>
                {/* dots */}
                <div className='h-5 w-5 p-1 rounded-full lg:group-hover:bg-[#326DB733] bg-[#326DB733] lg:bg-transparent transition-all before:bg-blue before:h-full before:w-full before:block before:rounded-full'/>
                {/* -- */}

                <p className='font-semibold ml-2'>{keyword}</p>
            </div>
            <p className='text-gray text-sm mt-2 leading-relaxed'>{description}</p>
        </div>
    )
}

const Decoration:FC<{top : number | 0}> = ({top}) => {
    
    const {windowScroll} = useContext(Ctx)
    
    return(
        <>
        <motion.img
            style={
                windowScroll > top ? 
                {
                translateX : (windowScroll-top)/4
            } : {}
            } 
            animate={{
                scale : [1,1.5,1]
            }}
            transition={{
                repeat : Infinity,
                ease : "linear",
                duration : 15,
            }}
            src="/assets/decorations/ellipse.svg" className='absolute top-5 md:left-[30%] w-4 md:w-6 left-4 lg:right-40 lg:top-0' />
        <img 
        style={{
            rotate : `${windowScroll/2}deg`,                
        }} 
        src="/assets/decorations/dotSet.svg" className='absolute top-2 right-4 md:right-10 z-10 md:top-4 lg:-top-6 lg:right-16 md:w-16 w-14' />
        </>
    )
}

const Why = () => {

    const ref = useRef<HTMLDivElement>(null)
    const {windowScroll} = useContext(Ctx)
    // console.log(, windowScroll)

  return (
    <div className='relative pt-24' ref={ref}>
        {/* Decoration */}
        {/* ref.current?.offsetTop - ref.current?.offsetHeight */}
        {ref.current !== null && (
            <Decoration top={ref.current?.offsetTop - window.innerHeight}/>
        )}
        
        {/* -- */}

        <Box className='md:flex md:items-center'>
        {/* Left side */}
            <div className='md:w-1/2 before:w-5/6 md:before:w-2/3  before:bg-blue before:block before:h-[85%] before:bottom-0 before:right-5 md:before:left-10 before:rounded-xl relative before:absolute'>
                <img src="/assets/images/whyWoman.png" className='w-5/6 md:w-2/3 relative z-10' alt="woman bring a laptop" />
                {/* Social logo decoration */}
                {ref.current !== null && (
                    <>
                    <LogoDecoration
                    translateX={windowScroll > ref.current?.offsetTop - window.innerHeight ? -(windowScroll - (ref.current?.offsetTop - window.innerHeight))/10 : 0}
                    bgColor='#EBF1F8'
                    position='top-[6%] lg:top-8 left-[30%] md:left-16 md:top-6'
                    logo='google'
                    top={ref.current?.offsetTop - window.innerHeight}/>
                    <LogoDecoration
                    translateX={windowScroll > ref.current?.offsetTop - window.innerHeight ? (windowScroll - (ref.current?.offsetTop - window.innerHeight))/10 : 0}
                    bgColor='#F3E3EA'
                    position='-bottom-6 left-12 lg:left-[20%]'
                    logo='bukalapak'
                    top={ref.current?.offsetTop - window.innerHeight}/>
                    <LogoDecoration
                    translateY={windowScroll > ref.current?.offsetTop - window.innerHeight ? (windowScroll - (ref.current?.offsetTop - window.innerHeight))/5 : 0}
                    bgColor='#E5F1E9'
                    position='top-16 lg:right-[22%] lg:top-24 right-0 md:right-24'
                    logo='gojek'
                    top={ref.current?.offsetTop - window.innerHeight}/>
                    </>
                )}
            </div>

        {/* Right side */}
            <div className='mt-10 md:w-1/2 md:mt-0'>
                <Text
                _for='Heading'
                color='black'>Mengapa Harus Kami?</Text>
                <div className='space-y-4 mt-6 lg:mt-10'>
                    {data.map((e,i)=>(
                        <ListWhy
                        key={i}
                        description={e.description}
                        keyword={e.keyword}
                        />
                    ))}
                </div>
            </div>
        </Box>
    </div>
  )
}

export default Why