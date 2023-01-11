import Box from "../components/Box"
import { motion } from 'framer-motion'
import { useContext, useEffect, useRef,RefObject, FC } from "react"
import { Ctx } from "../utils/context"

const Decoration:FC<{top : number | 0}> = ({top}) => {

  const {windowScroll} = useContext(Ctx)

  return (
    <>
      <motion.img 
            style={
                windowScroll > top ? 
                {
                translateX : (windowScroll-top)/4
            } : {}
            } 
            animate={{
                rotate : '360deg',
                scale : [1,1.5,1]
            }}
            transition={{
                repeat : Infinity,
                ease : "linear",
                duration : 30,
            }}
            src="/assets/decorations/rectangle.svg" className='absolute w-4 md:w-6 lg:top-9 bottom-10 lg:left-9 left-10'/>
      <motion.img 
            style={
                windowScroll > top ? 
                {
                translateX : -(windowScroll-top)/4
            } : {}
            } 
            animate={{
                rotate : '360deg',
                scale : [1,1.5,1]
            }}
            transition={{
                repeat : Infinity,
                ease : "linear",
                duration : 30,
            }}
            src="/assets/decorations/triangle.svg" className='absolute top-0 w-4 md:w-6 right-10 lg:right-14 lg:-top-6' />
    </>
  )
}


const Partner = () => {

  const ref = useRef<HTMLDivElement>(null)
  
  return (
    <div className="pt-24 relative" ref={ref}>
        {ref.current !== null && (
            <Decoration top={ref.current?.offsetTop - window.innerHeight}/>
        )}
        <Box>
            <p className="text-gray text-center text-sm lg:text-base">Sudah lebih dari <span className="text-blue font-semibold">100+</span> bekerjasama dengan kami</p>
            <div className="flex flex-wrap justify-center items-center mt-4">
                <img className="h-7 m-2 md:m-0 md:mx-4 lg:mx-6 lg:h-9" src={`/assets/images/google.png`} alt={"google"} />
                <img className="h-7 m-2 md:m-0 md:mx-4 lg:mx-6 lg:h-9" src={`/assets/images/shopee.png`} alt={"shopee"} />
                <img className="h-5 m-2 md:m-0 md:mx-4 lg:mx-6 lg:h-7" src={`/assets/images/gojek.png`} alt={"gojek"} />
                <img className="h-8 m-2 md:m-0 md:mx-4 lg:mx-6 lg:h-10" src={`/assets/images/tokopedia.png`} alt={"tokopedia"} />
                <img className="h-9 m-2 md:m-0 md:mx-4 lg:mx-6 lg:h-11" src={`/assets/images/traveloka.png`} alt={"traveloka"} />
            </div>
        </Box>
    </div>
  )
}

export default Partner