import React from 'react'
import Box from '../components/Box'
import Button from '../components/Button'
import Input from '../components/Input'
import Text from '../components/Text'

const Header = () => {
  return (
    <section className='py-10'>
        <Box className='min-h-screen flex flex-col justify-center items-center'>

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
                    placeholder='Kata kunci'
                    searchIcons/>
                    <Button
                    className='w-full lg:w-fit mt-2 lg:mt-0 lg:ml-2'
                    type='button'
                    mode='primary'>Temukan</Button>
                </div>

            {/* Keyworld */}
                <div className='mt-4'>
                    <p className='text-gray text-sm text-center'>Kata kunci terpopuler<span className='hidden md:inline'> :</span></p>
                    <div className='flex flex-wrap justify-center mt-2'> 
                        <Button
                        className='h-fit m-1'
                        mode='listKeyword'>UI/UX Designer</Button>
                        <Button
                        className='h-fit m-1'
                        mode='listKeyword'>Programmer</Button>
                        <Button
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