import React from 'react';
import { FaHeadset, FaMoneyBillWave, FaShippingFast, FaTag } from 'react-icons/fa';
const Infosection=()=>{
    const Info=[
        {
            icon:<FaShippingFast/>,
            Title:'Freeshipping',
            Description:'Get your things fast'
        },
        {
            icon:<FaHeadset/>,
            Title:'Support 24/7',
            Description:'Get your things fast'
        },
        {
            icon:<FaMoneyBillWave/>,
            Title:'Refund',
            Description:'100% Refund policy'
        },
        {
            icon:<FaTag/>,
            Title:'Discount',
            Description:'Get your things fast'
        },
        {
            icon:<FaTag/>,
            Title:'Discount',
            Description:'Get your things fast'
        }
    ]
    return(
        <div className='bg-white pb-8 pt-12 mt-2'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
{
    Info.map((items,index) =>(
<div key={index} className='flex flex-col items-center text-center p-4 border-pink-200 border rounder-lg '>
    {items.icon}
    <h3 className='mt-4 font-semibold'>{items.Title}</h3>
    <p className='mt-2 font-xs'>{items.Description}</p>
</div>
    )
    )
}
            </div>
        </div>
    )
}
export default Infosection;