import React from 'react';

const SubscribeBox = () => {
  return (
   
    <div className="flex rounded-lg  text-white h-full bg-black">
      <div className="flex    rounded-lg p-6 pl-20  w-screen ">
        {/* Left Section */}
        <div className=" ">
          <h2 className="text-6xl font-bold  mb-4 text-left mr-[auto] ">Stay Up To Date About</h2>
          <h2 className='text-6xl font-bold text-left mr-auto'> Latest Offers</h2>
         
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 mt-6 md:mt-0  pl-80 items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-[90%] p-3 border border-gray-300  rounded-3xl mb-4 focus:outline-none focus:ring-2 focus:ring-white "
          />
          <input
            type="text"
            placeholder="Subscribe to Newsletter"
            className="w-full md:w-[90%] p-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
      </div>
    </div>
  );
};

export default SubscribeBox;
