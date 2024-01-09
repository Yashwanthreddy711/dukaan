import React from 'react'
import { CiCircleAlert } from 'react-icons/ci'
import { IoIosArrowDown } from 'react-icons/io'

const Transactiontableheader = () => {
  return (
    <div className="w-[1128px]  h-[40px]  bg-[#F2F2F2] flex gap-[40px] pt-[10px] pb-[10px] pr-[12px] pl-[12px] mb-[12px] ml-[8px] rounded-[4px] mr-[8px] ">
                <div className="w-[246px] h-[20px] ">
                  <h1>Order Id</h1>
                </div>
                <div className="w-[246px] h-[20px] flex gap-[4px] items-center">
                  <h1>Order-Date</h1>
                  <IoIosArrowDown />
                </div>
                <div className="w-[246px] h-[20px] flex justify-end">
                  <h1>Order Amount</h1>
                </div>
                <div className="w-[246px] h-[20px] flex justify-end gap-[4px] items-center ">
                  <h1>Transaction Fees</h1>
                  <CiCircleAlert />
                </div>
              </div>
  )
}

export default Transactiontableheader