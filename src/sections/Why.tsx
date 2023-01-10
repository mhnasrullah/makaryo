import {FC} from 'react'
import Box from '../components/Box'
import Text from '../components/Text'
import data from '../data/why.json'
import { motion } from 'framer-motion'

interface LogoProps {
    position : string,
    bgColor : string,
    logo : string
}

const LogoDecoration : FC<LogoProps> = ({bgColor,position,logo}) => {
    return (
        <div
        className={`w-fit p-3 rounded-lg absolute z-20 scale-75 ${position}`}
        style={{
            backgroundColor : bgColor
        }}>
            <img className='w-8' src={`/assets/logos/${logo}.svg`}/>
        </div>
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

const Decoration:FC = () => {
    return(
        <>
        <motion.img 
            animate={{
                scale : [1,1.5,1]
            }}
            transition={{
                repeat : Infinity,
                ease : "linear",
                duration : 15,
            }}
            src="/assets/decorations/ellipse.svg" className='absolute top-0 md:left-[30%] w-6 left-4 lg:right-40 lg:top-0' />
        <img src="/assets/decorations/dotSet.svg" className='absolute top-2 right-4 md:right-10 z-10 md:top-4 lg:-top-6 lg:right-16 md:w-16 w-14' />
        </>
    )
}

const Why = () => {
  return (
    <section className='relative'>
        {/* Decoration */}
        <Decoration/>
        {/* -- */}

        <Box className='md:flex md:items-center'>
        {/* Left side */}
            <div className='md:w-1/2 before:w-5/6 md:before:w-2/3  before:bg-blue before:block before:h-[85%] before:bottom-0 before:right-5 md:before:left-10 before:rounded-xl relative before:absolute'>
                <img src="/assets/images/whyWoman.png" className='w-5/6 md:w-2/3 relative z-10' alt="woman bring a laptop" />
                {/* Social logo decoration */}
                <LogoDecoration
                bgColor='#EBF1F8'
                position='top-0 lg:top-8 left-8 md:left-16 md:top-6'
                logo='google'/>
                <LogoDecoration
                bgColor='#F3E3EA'
                position='-bottom-6 left-12 lg:left-[20%]'
                logo='bukalapak'/>
                <LogoDecoration
                bgColor='#E5F1E9'
                position='top-16 lg:right-[22%] lg:top-24 right-0 md:right-24'
                logo='gojek'/>
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
    </section>
  )
}

export default Why