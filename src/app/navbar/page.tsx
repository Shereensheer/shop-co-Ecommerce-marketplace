// 'use client';

// import { DropdownMenu, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
// import { ChevronDownIcon } from 'lucide-react';
// import Link from 'next/link';
// import { useState } from 'react';
// import { CiSearch } from 'react-icons/ci';
// import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';
// import Topnav from '../topnav/page';

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <nav className="bg-white shadow">
//             <Topnav />
//             <div className="container mx-auto px-4 md:px-6">
//                 <div className="flex items-center justify-between py-4">
//                     {/* Logo */}
//                     <h1 className="text-2xl font-extrabold text-black pr-10">SHOP.CO</h1>

//                     {/* Mobile Menu Button */}
//                     <div className="lg:hidden">
//                         <button
//                             onClick={() => setIsOpen(!isOpen)}
//                             type="button"
//                             className="text-gray-500 hover:text-gray-600 focus:outline-none"
//                         >
//                             {!isOpen ? (
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     className="w-6 h-6"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                     strokeWidth="2"
//                                 >
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
//                                 </svg>
//                             ) : (
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     className="w-6 h-6"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                     strokeWidth="2"
//                                 >
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                                 </svg>
//                             )}
//                         </button>
//                     </div>

//                     {/* Desktop Menu */}
//                     <div className="hidden lg:flex items-center space-x-8">
//                     <Link href="/" className="hover:text-gray-700">
//                            Home
//                         </Link>

//                         <Link href="/cart" className="hover:text-gray-700">
//                             <DropdownMenu>
//                                 <DropdownMenuTrigger className="flex items-center">
//                                     Shop <ChevronDownIcon className="ml-1 w-5 h-5" />
//                                 </DropdownMenuTrigger>
//                             </DropdownMenu>
//                         </Link>

//                         <Link href="/catagary" className="hover:text-gray-700">
//                             OnSale
//                         </Link>
//                         <Link href="/pic-card" className="hover:text-gray-700">
//                             New Arrivals
//                         </Link>
//                         <Link href="detail" className="hover:text-gray-700">
//                             Brands
//                         </Link>
//                     </div>

//                     {/* Search Bar */}
//                     <div className="hidden md:block flex-grow mx-4 lg:mx-8">
//                         <div className="relative">
//                             <input
//                                 type="text"
//                                 className="w-full py-2 pl-10 pr-4 text-sm border rounded-full focus:outline-none focus:ring focus:ring-black"
//                                 placeholder="Search for Product"
//                             />
//                             <span className="absolute inset-y-0 left-0 flex items-center pl-3">
//                                 <CiSearch className="w-5 h-5 text-gray-500" />
//                             </span>
//                         </div>
//                     </div>

//                     {/* Icons */}
//                     <div className="flex items-center space-x-4">
//                         <Link href="#" className="text-gray-700 hover:text-gray-600">
//                             <FaShoppingCart className="w-5 h-5" />
//                         </Link>
//                         <Link href="#" className="text-gray-700 hover:text-gray-600">
//                             <FaUserAlt className="w-5 h-5" />
//                         </Link>
//                     </div>
//                 </div>

//                 {/* Mobile Menu */}
//                 <div
//                     className={`lg:hidden transition-all duration-300 ease-in-out ${
//                         isOpen ? 'block' : 'hidden'
//                     }`}
//                 >
//                     <div className="flex flex-col space-y-2 text-black bg-white px-4 py-2">
//                         <Link href="/cart" className="hover:bg-gray-100 py-2 rounded">
//                             Shop
//                         </Link>
//                         <Link href="/catagary" className="hover:bg-gray-100 py-2 rounded">
//                             OnSale
//                         </Link>
//                         <Link href="/pic-card" className="hover:bg-gray-100 py-2 rounded">
//                             New Arrivals
//                         </Link>
//                         <Link href="detail" className="hover:bg-gray-100 py-2 rounded">
//                             Brands
//                         </Link>

//                         {/* Search Bar in Mobile */}
//                         <div className="mt-4">
//                             <div className="relative">
//                                 <input
//                                     type="text"
//                                     className="w-full py-2 pl-10 pr-4 text-sm border rounded-full focus:outline-none focus:ring "
//                                     placeholder="Search for Product"
//                                 />
//                                 <span className="absolute inset-y-0 left-0 flex items-center pl-3">
//                                     <CiSearch className="w-5 h-5 text-gray-500" />
//                                 </span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;
"use client";

import {  useState } from "react";
import { CiSearch } from "react-icons/ci";
import {  FaUserAlt } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion"; // Import Framer Motion
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { client } from "../../sanity/lib/client"; // Import sanity client
import Topnav from "../topnav/page";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const cart = useSelector((state: RootState) => state.cart);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Handle input change in the search bar
  const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      // Fetch products based on search term
      const products = await fetchProducts(value);
      setSearchResults(products);
    } else {
      setSearchResults([]);
    }
  };

  // Fetch products from Sanity
  const fetchProducts = async (term: string) => {
    const query = `*[_type == "product" && name match "${term}*"]{
      _id,
      name,
      price,
      description,
      "image": image.asset->url,
      color,
      tags,
      style,
      size
    }`;

    const products = await client.fetch(query);
    return products;
  };

  return (
    <nav className="bg-white shadow">
      <Topnav />
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <h1 className="text-2xl font-extrabold text-black pr-10">SHOP.CO</h1>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:outline-none"
            >
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="hover:text-gray-700">
                Home
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/catagary" className="hover:text-gray-700">
                OnSale
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/pic-card" className="hover:text-gray-700">
                New Arrivals
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/detail" className="hover:text-gray-700">
                Brands
              </Link>
            </motion.div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:block flex-grow mx-4 lg:mx-8">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full py-2 pl-10 pr-4 text-sm border rounded-full focus:outline-none focus:ring focus:ring-black"
                placeholder="Search for Product"
              />
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <CiSearch className="w-5 h-5 text-gray-500" />
              </span>
            </div>
            {/* Display search results */}
            {searchResults.length > 0 && (
              <div className="absolute w-full bg-white border rounded-lg shadow-lg mt-2">
                <ul className="max-h-60 overflow-y-auto">
                  {searchResults.map((product: any) => (
                    <li key={product._id} className="px-4 py-2">
                      <Link href={`/product/${product._id}`} className="text-gray-700 hover:text-gray-900">
                        {product.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <Link href="/cartitems">
                  <FiShoppingCart className="w-6 h-6 cursor-pointer hover:text-orange-500" />
                  {cartCount > 0 && (
                    <span className="absolute text-center top-0 right-0 block h-4 w-4 text-xs bg-orange-500 text-white rounded-full">
                      {cartCount}
                    </span>
                  )}
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/contact">
                <FaUserAlt className="w-5 h-5 cursor-pointer hover:text-gray-600" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`}
      >
        <div className="flex flex-col space-y-2 text-black bg-white px-4 py-2">
          <Link href="/" className="hover:bg-gray-100 py-2 rounded">
            Home
          </Link>
          <Link href="/catagary" className="hover:bg-gray-100 py-2 rounded">
            OnSale
          </Link>
          <Link href="/pic-card" className="hover:bg-gray-100 py-2 rounded">
            New Arrivals
          </Link>
          <Link href="/detail" className="hover:bg-gray-100 py-2 rounded">
            Brands
          </Link>

          {/* Mobile Search Bar */}
          <div className="mt-4">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full py-2 pl-10 pr-4 text-sm border rounded-full focus:outline-none focus:ring "
                placeholder="Search for Product"
              />
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <CiSearch className="w-5 h-5 text-gray-500" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
