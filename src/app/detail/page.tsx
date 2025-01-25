'use client';


import Image from "next/image";
import ReviewBox from "../reviews/page";
import ProductsPage from "../catagary/page";

const DetailPage = () => {
  return (
    <div>
      
      <ProductsPage />
    <div className="flex flex-col items-center justify-center h-full w-full bg-white p-6">

      {/* Product Details, Rating & Reviews, FAQs */}
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto mt-6 bg-white p-4 rounded-lg shadow">
        <span className="text-lg font-medium text-gray-800">Product Details</span>
        <span className="text-lg font-medium text-gray-800">Rating & Reviews</span>
        <span className="text-lg font-medium text-gray-800">FAQs</span>
      </div>

      {/* All Reviews and Image Row */}
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto mt-4 bg-white p-4 rounded-lg shadow">
        <span className="text-lg font-medium text-gray-800">
          All Reviews <span className="text-gray-500">(451)</span>
        </span>
        <Image
          src="/Frame 21.png"
          alt="Review Illustration"
          className="object-cover"
          height={100}
          width={400}
        />
      </div>

      <ReviewBox />
              <div>
                 <h1 className="text-3xl font-extrabold text-center py-16">YOU MIGHT ALSO LIKE</h1>
           
                 {/* Product Grid */}
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                   {/* Card 1 */}
                   <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                     <Image
                       height={100}
                       width={200}
                       src="/polo.png"
                       alt="Product 1"
                       className="w-full h-64 object-cover"
                     />
                     <div className="p-4">
                       <h3 className="mt-2 text-lg font-semibold">Polo with Contrast Trims</h3>
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
                       src="/pink.png"
                       alt="Product 2"
                       className="w-full h-64 object-cover"
                     />
                     <div className="p-4">
                       <h3 className="mt-2 text-lg font-semibold">Polo with Contrast Trims</h3>
                       <div className="flex items-center">
                         <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                       </div>
                       <p className="text-blacl">Rate: $120</p>
                     </div>
                   </div>
           
                   {/* Card 3 */}
                   <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                     <Image
                       height={100}
                       width={400}
                       src="/peech.png"
                       alt="Product 3"
                       className="w-full h-64 object-cover"
                     />
                     <div className="p-4">
                       <h3 className="mt-2 text-lg font-semibold">Polo with Tipping Details</h3>
                       <div className="flex items-center">
                         <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                       </div>
                       <p className="text-black">$180</p>
                     </div>
                   </div>
           
                   {/* Card 4 */}
                   <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                     <Image
                       height={100}
                       width={400}
                       src="/white.png"
                       alt="Product 4"
                       className="w-full h-64 object-cover"
                     />
                     <div className="p-4">
                       <h3 className="mt-2 text-lg font-semibold">Black Striped T-shirt</h3>
                       <div className="flex items-center">
                         <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                       </div>
                       <p className="text-black">$120</p>
                     </div>
                   </div>
                 </div>
      
            </div>
          </div>
          
    </div>
  );
};

export default DetailPage;

