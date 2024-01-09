import React from 'react';

const Paymenttable = () => {

    const jsxElements = Array.from({ length: 18 }, (_, index) => (
        <div key={index} className="w-[1128px] h-[48px] flex gap-[40px]  pb-[14px] pr-[12px] pl-[16px]  items-center rounded-[4px]  border-b-[1px] border-[#D9D9D9] ">
          <div className="w-[246px] h-[20px] ">
            <h1 className="text-[#146EB4]">#281209</h1>
          </div>
          <div className="w-[246px] h-[20px] flex gap-[4px] pl-[7px] items-center">
            <h1>7-July-2023</h1>
          </div>
          <div className="w-[246px] h-[20px] flex justify-end">
            <h1>₹1278.23</h1>
          </div>
          <div className="w-[246px] h-[20px] flex justify-end gap-[4px] items-center ">
            <h1>₹22</h1>
          </div>
        </div>
      ));
    
    
      return <>{jsxElements}</>;
};

export default Paymenttable;
