

'use client';
import React, { useEffect, useState } from 'react';
import { FaChevronRight, FaChevronUp, FaStar } from 'react-icons/fa';
import sanityClient from '../../sanity/sanityclient';
import Link from 'next/link';

interface Product {
  id: any;
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  color: string; // Added for color filtering
  tags: string[]; // Added for tag filtering
  style: string; // Added for style filtering
  size: string[]; // Added for size filtering
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [wishlist, setWishlist] = useState<Product[]>([]);



  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"]{
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

      try {
        const result = await sanityClient.fetch(query);
        setProducts(result);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on all selected criteria
  const filteredProducts = products.filter(
    (product) =>
      (!selectedCategory || product.name.includes(selectedCategory)) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1] &&
      (!selectedColor || product.color === selectedColor) &&
      (!selectedTag || (product.tags && product.tags.includes(selectedTag))) && // Add check for null or undefined
      (!selectedStyle || product.style === selectedStyle) &&
      (!selectedSize || (product.size && product.size.includes(selectedSize))) // Add check for null or undefined
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
    setCurrentPage(1);
  };

  const handlePriceChange = (min: number, max: number) => {
    setPriceRange([min, max]);
    setCurrentPage(1);
  };

  const handleColorClick = (color: string) => {
    setSelectedColor(color === selectedColor ? '' : color);
    setCurrentPage(1);
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag === selectedTag ? '' : tag);
    setCurrentPage(1);
  };

  const handleStyleClick = (style: string) => {
    setSelectedStyle(style === selectedStyle ? '' : style);
    setCurrentPage(1);
  };

  const handleSizeClick = (size: string) => {
    setSelectedSize(size === selectedSize ? '' : size);
    setCurrentPage(1);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold">Loading products...</p>
      </div>
    );
  }

  const handleAddToWishlist = (product?: any) => {
    // Directly add the product to the wishlist without checking for duplicates
    setWishlist([...wishlist, product]);
  };
  
  const handleRemoveFromWishlist = (id: string) => {
    // Remove only one instance of the product with the given ID
    const index = wishlist.findIndex((item) => item.id === id);
    if (index !== -1) {
      const updatedWishlist = [...wishlist];
      updatedWishlist.splice(index, 1); // Remove one instance of the product
      setWishlist(updatedWishlist);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="w-full lg:w-64 bg-gray-100 p-4">
          <div className="mb-6">
            <h2 className="text-lg font-semibold flex items-center justify-between">
              Filter
              <span className="text-gray-500 cursor-pointer">
                <FaChevronRight />
              </span>
            </h2>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <h3 className="text-md font-medium flex items-center justify-between mb-2">
              Price Range
              <FaChevronUp className="text-gray-500" />
            </h3>
            <div className="flex space-x-2">
              <input
                type="number"
                placeholder="Min"
                className="w-full p-2 border rounded"
                onChange={(e) => handlePriceChange(Number(e.target.value), priceRange[1])}
              />
              <input
                type="number"
                placeholder="Max"
                className="w-full p-2 border rounded"
                onChange={(e) => handlePriceChange(priceRange[0], Number(e.target.value))}
              />
            </div>
            <div className="flex justify-between mt-2 text-sm">
              <span>Low Price: ${priceRange[0]}</span>
              <span>High Price: ${priceRange[1]}</span>
            </div>
          </div>

          {/* Colors */}
          <div className="mb-6">
            <h3 className="text-md font-medium mb-2">Colors</h3>
            <div className="flex space-x-2">
              {['red', 'blue', 'green', 'yellow', 'black'].map((color) => (
                <div
                  key={color}
                  className={`w-8 h-8 rounded-full border cursor-pointer ${selectedColor === color ? 'ring-2 ring-blue-500' : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorClick(color)}
                ></div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="mb-6">
            <h3 className="text-md font-medium mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {['New Arrivals', 'Bestseller'].map((tag) => (
                <button
                  key={tag}
                  className={`px-3 py-1 border rounded ${selectedTag === tag ? 'bg-blue-500 text-white' : 'border-gray-300'}`}
                  onClick={() => handleTagClick(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Styles */}
          <div className="mb-6">
            <h3 className="text-md font-medium mb-2">Styles</h3>
            <div className="flex flex-wrap gap-2">
              {['Casual', 'Formal', 'Sporty'].map((style) => (
                <button
                  key={style}
                  className={`px-3 py-1 border rounded ${selectedStyle === style ? 'bg-blue-500 text-white' : 'border-gray-300'}`}
                  onClick={() => handleStyleClick(style)}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-6">
            <h3 className="text-md font-medium mb-2">Sizes</h3>
            <div className="flex flex-wrap gap-2">
              {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <button
                  key={size}
                  className={`px-3 py-1 border rounded ${selectedSize === size ? 'bg-blue-500 text-white' : 'border-gray-300'}`}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="flex-1 p-4">
          <h1 className="text-2xl lg:text-3xl font-extrabold text-center mb-6">CASUAL DRESS</h1>
          <div
            className={`grid gap-6 ${filteredProducts.length > 3 ? 'lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1' : 'lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1'}`}
          >
            {displayedProducts.map((product) => (
              <div
                key={product._id}
                className="text-center border p-4 rounded hover:shadow-lg"
              >
                <Link href={`/product/${product._id}`} key={product._id}>
                  <img
                    src={product.image}
                    alt={product.name}
                    height={250}
                    width={250}
                    className="object-cover mx-auto"
                  />
                  <h3 className="text-md font-medium mt-2">{product.name}</h3>
                </Link>
                <div className="flex justify-center space-x-1 text-yellow-500 mt-1">
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <FaStar key={index} />
                    ))}
                </div>
                <p className="text-gray-600 mt-2">${product.price.toFixed(2)}</p>
                <button
                      onClick={() => handleAddToWishlist(product)}
                      className="mt-2 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
                    >
                      Add to Wishlist
                    </button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-6 flex-wrap">
            <button
              className="text-blue-500 hover:underline"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              Previous
            </button>
            <span className="text-sm">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="text-blue-500 hover:underline"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            >
              Next
            </button>

          </div>
          
          <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="border rounded-md p-4 hover:shadow-md transition"
              > <Link href={`/productss/${item._id}`} key={item._id}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-40 w-full object-cover rounded-md mb-2"
                /></Link>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-orange-600 font-bold">${item.price}</p>
                <button
                  onClick={() => handleRemoveFromWishlist(item.id)}
                  className="mt-2 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                >
                  Remove from Wishlist
                </button>
              </div>
            ))}
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
}
