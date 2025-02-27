import React, {useState, useEffect} from 'react'
import { beasts } from '../beasts';

const CartItem = (props) => {
    const {name, slug} = props.data;
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        const findDetail = beasts(name)[0];
        setDetail(findDetail);
    }, [name])
    return(
        <div className='flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md'>
            <h3>{beasts.name}</h3>
        </div>
    )
}

export default CartItem