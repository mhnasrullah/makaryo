
import {FC} from 'react'
import Button from './Button';

interface Props {
    data : any
}

export const RecommendationCard:FC<Props> = ({data}) => {

    const {logo,baseColor,position,location,description,specification} = data;

  return (
    <div className='bg-pureWhite p-4 rounded-xl'>
        {/* Card header */}
        <div className='flex justify-between'>
            <div className='flex items-center'>
                <div
                className='w-fit p-3 rounded-lg'
                style={{
                    backgroundColor : baseColor
                }}>
                    <img className='w-8' src={logo}/>
                </div>

                <div className='ml-2'>
                    <p className='font-bold'>{position}</p>
                    <p className='text-gray text-sm'>{location}</p>
                </div>
            </div>
            <button className='h-fit w-fit p-2'>
                <img src="/assets/icons/save.svg" className='w-4' alt='save?'/>
            </button>
        </div>
        
        {/* Card body */}
        <div className='mt-4'>
            <p className='text-gray text-sm leading-relaxed'>{description}</p>
            <div className='flex flex-wrap mt-4 gap-2'>
                {specification.map((e : string, i : number)=>(
                    <Button 
                    mode='listKeyword'
                    key={i}>{e}</Button>
                ))}
            </div>
        </div>

        {/* Card footer */}
        <div className='flex space-y-2 md:space-y-0 md:space-x-2 mt-4 flex-wrap md:flex-nowrap'>
            <Button
            className='w-full'
            mode='secondary'>Tanya dulu</Button>
            <Button
            className='w-full'
            mode='primary'>Lamar</Button>
        </div>
    </div>
  )
}
