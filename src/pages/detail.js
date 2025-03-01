import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { beasts } from '../beasts'

const Detail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [detail, setDetail] = useState([]);

    useEffect(() => {
        const findDetail = beasts.find(beast => beast.slug === slug); 
        if (findDetail) {
            setDetail(findDetail);
        } else {
            navigate('/');
        }
    }, [slug, navigate]);

    return (
        <div>
            <h2 className='text-3xl text-center' style={{ fontFamily: 'Metamorphous, sans-serif' }}>DETAILNE KIRJELDUS:</h2>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                <div>
                    <img src={detail.image} alt="" className='w-full'/>
                </div>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-4xl uppercase font-bold text-center' style={{ fontFamily: 'Metamorphous, sans-serif' }}>{detail.name}</h1>
                    <p className='font-bold text-3xl text-center'>
                        {detail.price}
                    </p>
                    <p>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: detail.fulldescription ? detail.fulldescription.replace(/\n/g, '<br />') : ''
                            }}
                        />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Detail