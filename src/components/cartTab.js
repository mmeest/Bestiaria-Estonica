import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { beasts } from '../beasts'; 
import { toggleStatusTab } from '../redux/cartSlice'; // Importime Reduxi tegevuse

const CartTab = () => {
    const statusTab = useSelector(store => store.cart.statusTab);
    const dispatch = useDispatch();

    // Funktsioon nimekirja sulgemiseks
    const closeCart = () => {
        dispatch(toggleStatusTab(false)); 
    };

    return (
        <div className={`fixed top-0 right-0 bg-gray-700 shadow-2xl w-96 max-w-full h-full flex flex-col transform ${statusTab ? "translate-x-0" : "translate-x-full"} transition-transform duration-300`}>
            
            {/* Pealkiri */}
            <h2 className='p-4 text-white text-2xl border-b border-gray-500'>Nimekiri</h2>

            {/* Tegelaste loetelu (keritav) */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {beasts
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((beast) => (
                    <Link 
                        key={beast.id} 
                        to={`/${beast.slug}`} 
                        className="block text-white hover:underline"
                        onClick={closeCart} // Sulgeb nimekirja pärast klikki
                    >
                        {beast.name}
                    </Link>
                ))}
            </div>

            {/* Sulge nupp (fikseeritud alla) */}
            <div className='p-3 border-t border-gray-500'>
                <button className='w-full bg-black text-white py-2 rounded-md' onClick={closeCart}>
                    SULE
                </button>
            </div>
        </div>
    );
};

export default CartTab;
