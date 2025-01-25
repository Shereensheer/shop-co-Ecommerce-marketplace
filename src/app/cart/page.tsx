'use client';

import Image from "next/image";

const ImageBox = () => {
  return (
    <div className="w-full h-full bg-white p-6 rounded-lg shadow-md">
      {/* Top Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Chart</h1>

      {/* Main Content */}
      <div className="flex flex-wrap md:flex-nowrap items-start gap-6 h-full w-full">
        {/* Center Image Box */}
        <div className="w-full md:w-1/2 h-full bg-white p-4 rounded-lg shadow-md">
          <div className="flex flex-col gap-4">
            <Image
              src="/red.png"
              alt="Image 1"
              className="object-cover rounded-lg"
              width={700}
              height={700}
            />
            <Image
              src="/bl.png"
              alt="Image 2"
              className="object-cover rounded-lg"
              width={700}
              height={700}
            />
            <Image
              src="/je.png"
              alt="Image 3"
              className="object-cover rounded-lg"
              width={700}
              height={700}
            />
          </div>
        </div>

        {/* Right Side Image Box */}
        <div className="w-full md:w-1/2 h-auto bg-white p-4 rounded-lg shadow-md">
          <div className="flex flex-col gap-4">
            <Image
              src="/boxx.png"
              alt="Image 1"
              className="object-cover rounded-lg"
              width={500}
              height={700}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageBox;
