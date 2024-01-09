import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Pagination = () => {
    const [page, setPage] = useState(10)
    const values = [1, '...', 10,11, 12, 13, 14, 15, 16, 17]
    return (
        <ul className="flex items-center mx-auto my-6 w-fit">
            <li>
                <button className=" text-black border-[1.5px] hover:bg-gray-100 flex items-center justify-center rounded px-3 text-xs py-2">
                     <IoIosArrowBack/>
                     <h1> Previous</h1>
                     </button>
            </li>
            {
                values.map(item => {
                    return <li onClick={()=>setPage(item)}>
                        <button className={`rounded w-[30px] h-[30px] mx-1  text-xs ${page === item ? ' bg-blue-900 text-white' : 'hover:bg-gray-100 text-black'}`}>{item}</button>
                    </li>
                })
            }
            <li>
                <button className=" text-black border-[1px] hover:bg-gray-100 flex items-center justify-center rounded px-3 text-xs py-2">
                    <h1>Next</h1> 
                    <IoIosArrowForward/>
                    </button>
            </li>
        </ul>
    );
};

export default Pagination;