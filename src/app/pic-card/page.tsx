'use client';
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      {/* Brands Section */}
      <div className="w-full md:flex bg-black p-3 max-w-full h-40 container mx-auto place-items-center">
        <span className="text-5xl text-white font-bold px-10 font-sans">VERSACE</span>
        <span className="text-5xl text-white font-bold px-10 font-serif">ZARA</span>
        <span className="text-6xl text-white font-bold px-10 font-sans">GUCCI</span>
        <span className="text-6xl text-white font-extrabold px-10 font-serif">PRADA</span>
        <span className="text-6xl text-white font-bold px-10 font-sans">CALVIN KLEIN</span>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-extrabold text-center py-16">NEW ARRIVALS</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            height={100}
            width={200}
            src="/black.png"
            alt="Product 1"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="mt-2 text-lg font-semibold">T-SHIRT WITH TAPE DETAILS</h3>
            <div className="flex items-center">
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
            </div>
            <p className="text-gray-500">$120</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            height={100}
            width={400}
            src="/image 10.png"
            alt="Product 2"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="mt-2 text-lg font-semibold">SKINNY FIT JEANS</h3>
            <div className="flex items-center">
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
            </div>
            <p className="text-gray-500">$240 $260 -20%</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            height={100}
            width={400}
            src="/ma.png"
            alt="Product 3"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="mt-2 text-lg font-semibold">CHECKERED SHIRT</h3>
            <div className="flex items-center">
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
            </div>
            <p className="text-gray-500">$180</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            height={100}
            width={400}
            src="/org.png"
            alt="Product 4"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="mt-2 text-lg font-semibold">SLEEVE STRIPED T-SHIRT</h3>
            <div className="flex items-center">
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
            </div>
            <p className="text-gray-500">$130 $160 -30%</p>
          </div>
        </div>
      </div>

      {/* View All Button */}
      <div className="flex justify-center py-8"><Link href={'/catagary'}>
        <button className="px-6 py-3 border-black bg-white text-black text-lg font-semibold rounded-3xl hover:bg-gray-300 transition duration-300 ">
          View All
        </button></Link>
      </div>
    </div>
  );
};

export default Page;
