import React from 'react'
import { beasts } from '../beasts'
import Beast from '../components/beastCart'
import BeastCart from '../components/beastCart'
    
const Home = () => {
    const shuffledBeasts = [...beasts].sort(() => 0.5 - Math.random()).slice(0, 3);

    return (
        <div style={{ fontFamily: 'Metamorphous, sans-serif' }}>            
            <h1 className='text-3xl my-5 text-center font-weight-bold'>Olendid Eesti Mütoloogiast</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-5'>
                {shuffledBeasts.map((beast, key) => (
                    <BeastCart key={key} data={beast} />
                ))}
            </div>
        </div>
    )
}
    

export default Home