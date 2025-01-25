'use client';
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Topselling = () => {
  return (
    <div>
      <h1 className="text-3xl font-extrabold text-center py-16">TOP SELLING</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            height={100}
            width={200}
            src="/shirt.png"
            alt="Product 1"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="mt-2 text-lg font-semibold">VERTICAL STRIPED SHIRT</h3>
            <div className="flex items-center">
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
            </div>
            <p className="text-gray-500">$212</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            height={100}
            width={400}
            src="/tshirt.png"
            alt="Product 2"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="mt-2 text-lg font-semibold">COURAGE GRAPHIC T-SHIRT</h3>
            <div className="flex items-center">
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
            </div>
            <p className="text-gray-500">Rate: $129</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            height={100}
            width={400}
            src="/box.png"
            alt="Product 3"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="mt-2 text-lg font-semibold">LOOSE FIT BERMUDA SHORTS</h3>
            <div className="flex items-center">
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
            </div>
            <p className="text-gray-500">$80</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            height={100}
            width={400}
            src="/jeans.png"
            alt="Product 4"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="mt-2 text-lg font-semibold">FADED SKINNY JEANS</h3>
            <div className="flex items-center">
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
            </div>
            <p className="text-gray-500">$210</p>
          </div>
        </div>
      </div>

      {/* Centered View All Button */}
      <div className="flex justify-center py-8"><Link href={'/detail'}>
        <button className="px-6 py-3 border-black bg-white text-black text-lg font-semibold rounded-3xl hover:bg-gray-300 transition duration-300">
          View All
        </button></Link>
      </div>

      {/* Large Image */}
      <div className="flex justify-center py-14">
        <Image
          height={900}
          width={1000}
          src="/Frame 60.png"
          alt="Promotional"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Topselling;
