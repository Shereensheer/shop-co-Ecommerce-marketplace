import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
function Hero() {
  return (
    <div>
      <section className="body-font text-white min-h-screen bg-[#F2F0F1] flex justify-center items-center">
        <div className="container mx-auto flex px-5 py-10 flex-col lg:flex-row items-center">
          {/* Text Content */}
          <div className="lg:flex-grow md:w-1/2 lg:pl-16 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-10 lg:mb-0 items-center text-center">
            <h1 className="font-bold text-black sm:text-5xl text-3xl mb-6 leading-tight">
              FIND CLOTHES<br /> THAT MATCHES<br /> YOUR STYLE
            </h1>
            <p className="mb-8 leading-relaxed text-black sm:text-lg text-base">
              Browse through our diverse range of meticulously crafted garments,
              <br className="hidden sm:block" />
              designed to bring out your individuality and cater to your sense of style.
            </p>
            <div className="flex justify-center">
              <Link href="/catagary" className="hover:text-gray-700">
              <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded-3xl text-lg">
                Shop Now
              </button>
              </Link>
            </div>
          
          </div>

          {/* Image Section */}
          <div className="relative w-full md:w-1/2 flex justify-center items-center">
            <Image
              className="object-center rounded max-w-full h-auto"
              alt="hero"
              src="/Rectangle 2.png"
              height={500}
              width={500}
              priority
            />
            {/* Decorative Images */}
            <div className="absolute top-10 left-5 sm:top-20 sm:left-10">
              <Image
                src="/star.png"
                alt="Star Decoration"
                height={60}
                width={60}
                className="w-[40px] sm:w-[60px] h-auto"
              />
            </div>
            <div className="absolute top-10 right-5 sm:bottom-20 sm:right-10">
              <Image
                src="/vstar.png"
                alt="V Star Decoration"
                height={100}
                width={100}
                className="w-[60px] sm:w-[100px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default Hero;
