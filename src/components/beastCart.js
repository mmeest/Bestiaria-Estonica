import React from 'react'
import { Link } from 'react-router-dom';

const BeastCart = (props) => {
    const{id, name, price, image, description, slug} = props.data;
    return(
        <div className='bg-white p-5 rounded-xl shadow-sm'>
            <Link to={slug}>
                <img src={image} alt='' className='w-full h-80 object-cover object-top drop-shadow-[0_80px_30px_#0007]'/>
            </Link>
            <h3 className='text-2xl py-3 text-center font-medium'>{name}</h3>
            <div className='flex justify-between items-center'>
                <p>
                    <span className='text-1xl font-medium'>{description}</span>
                </p>
            </div>
        </div>
    )
}

export default BeastCart