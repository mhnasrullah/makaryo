import React, { useState } from 'react'
import Box from '../components/Box'
import Button from '../components/Button'
import Input from '../components/Input'
import Text from '../components/Text'
import { motion } from 'framer-motion'

const Decoration = () => (
    <>
        <img src="/assets/decorations/roundLine.svg" className='absolute -top-10 -left-10 w-[200px]'/>
            <motion.img 
            animate={{
                rotate : '360deg',
                scale : [1,1.5,1]
            }}
            transition={{
                repeat : Infinity,
                ease : "linear",
                duration : 30,
            }}
            src="/assets/decorations/rectangle.svg" className='absolute hidden md:block top-56 left-10'/>
            <img src="/assets/decorations/dotSet.svg" className='absolute bottom-4 left-4 md:bottom-32 lg:bottom-40 lg:left-16 md:left-8 md:w-16 w-14' />
            <motion.img 
            animate={{
                scale : [1,1.5,1]
            }}
            transition={{
                repeat : Infinity,
                ease : "linear",
                duration : 15,
            }}
            src="/assets/decorations/ellipse.svg" className='absolute bottom-80 w-6 right-4 lg:right-40 lg:bottom-0 lg:top-32' />
            <motion.img 
            animate={{
                rotate : '360deg',
                scale : [1,1.5,1]
            }}
            transition={{
                repeat : Infinity,
                ease : "linear",
                duration : 30,
            }}
            src="/assets/decorations/triangle.svg" className='absolute bottom-36 w-6 right-10' />
    </>
)

const Header = () => {

    const [inputValue,setInputValue] = useState("")

    // setValue on input when keyword selected
    const keywordSelection = (e : string) => setInputValue(e);

  return (
    <section className='py-10 lg:py-0 lg:pt-10 relative'>
        {/* Decoration */}
        <Decoration/>
        {/* -- */}
        <Box className='min-h-screen relative flex flex-col justify-center items-center'>

            {/* Text header n sub */}
            <div className='relative lg:w-3/4 lg:mx-auto'>
                <Text
                className='md:text-center'
                _for='BigText'
                color='black'>Temukan <span className='text-blue'>Pekerjaan</span> Impian Anda Dengan Segala Kemudahan</Text>
                <img className='absolute -bottom-2 right-[20%] md:right-[30%] lg:w-54 lg:right-[15%] lg:-bottom-6' src="/assets/decorations/textLine.svg"/>
            </div>
            <p className='text-gray mt-10 text-sm lg:text-xl'><span className='text-blue font-bold'>1.000.000+</span> telah terbantu menemukan pekerjaan impiannya  dengan mudah sekali</p>
            
            <div className="w-full mt-8 md:w-3/4 lg:w-4/6">
            {/* Search */}
                <div className='flex flex-col w-full md:mx-auto lg:flex-row'>
                    <Input 
                    full
                    onChange={(e)=>setInputValue(e.target.value)}
                    value={inputValue}
                    placeholder='Kata kunci'
                    searchIcons/>
                    <Button
                    className='w-full lg:w-fit mt-2 lg:mt-0 lg:ml-2'
                    type='button'
                    mode='primary'>Temukan</Button>
                </div>

            {/* Keyworld */}
                <div className='mt-4 lg:flex lg:items-center'>
                    <p className='text-gray text-sm text-center'>Kata kunci terpopuler<span className='hidden md:inline'> :</span></p>
                    <div className='flex flex-wrap justify-center mt-2 lg:mt-0'> 
                        <Button
                        onClick={()=>keywordSelection("UI/UX Designer")}
                        className='h-fit m-1'
                        mode='listKeyword'>UI/UX Designer</Button>
                        <Button
                        onClick={()=>keywordSelection("Programmer")}
                        className='h-fit m-1'
                        mode='listKeyword'>Programmer</Button>
                        <Button
                        onClick={()=>keywordSelection("Sosial Media Spesialist")}
                        className='h-fit m-1'
                        mode='listKeyword'>Sosial Media Spesialist</Button>
                    </div>
                </div>
            </div>

        </Box>
    </section>
  )
}

export default Header