import React from 'react';
import {allCatagrory} from '../../../../Data/Data';
import { IoChevronForward } from "react-icons/io5";

const Catagory = () => {
  return (
    <div>
        <ul className='flex flex-col gap-y-5'>
            {allCatagrory?.map((item)=>(
                <div key={item.id} className='flex items-center gap-x-[51px] justify-between'>
                    <li className='font-popins text-[16px] text-primaryBlack cursor-pointer'>{item.title}</li>
                    {item.subCatagory && (<div className='me-9'><IoChevronForward size={"24px"}/></div>)}
                </div>
                ))}
        </ul>
    </div>
  )
}

export default Catagory