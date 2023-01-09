import React from 'react'
import Box from '../components/Box'
import { RecommendationCard } from '../components/Card'
import Text from '../components/Text'
import data from "../data/recommendation.json"

const Recommendation = () => {
  return (
    <section className='py-10'>
        <Box>
            <Text
            _for='Heading'
            color='black'
            className='text-center'>Rekomendasi untuk kamu</Text>

            {/* List Content */}
            <div className='md:grid md:grid-cols-2 mt-6 lg:mt-10 lg:grid-cols-3 gap-8 space-y-4 md:space-y-0'>
              {data.map((e,i)=>(
                <RecommendationCard 
                key={i}
                data={e}/>
              ))}
            </div>

            <button className='font-semibold text-center mx-auto mt-4 lg:mt-6 block text-sm text-blue'>Lihat Semua Rekomendasi</button>
        </Box>
    </section>
  )
}

export default Recommendation