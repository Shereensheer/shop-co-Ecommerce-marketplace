'use client';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/app/redux/cartslice';
import sanityClient from '../../../sanity/sanityclient';

import { ToastContainer, toast } from 'react-toastify';


interface Product {
  category: any;
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

const ProductDetailPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1); // Default quantity set to 1

  useEffect(() => {
    const fetchProduct = async () => {
      const query = `*[_type == "product" && _id == "${id}"]{
        _id,
        name,
        price,
        description,
        "image": image.asset->url
      }`;
      try {
        const result = await sanityClient.fetch(query);
        setProduct(result[0]);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(
        addToCart({
          id: product._id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity,
        })
      );
      toast.success('Product added to cart!');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="flex flex-col items-center justify-center w-full bg-white p-6 min-h-screen">
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-4 gap-4 md:w-1/2">
          <div className="flex flex-col space-y-4">
            {['/bro.png', '/rel.png', '/fa.png'].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Thumbnail ${i + 1}`}
                className="object-cover rounded-lg"
                height={200}
                width={200}
                loading="lazy"
              />
            ))}
          </div>
          <div className="col-span-3">
            <img
              src={product.image}
              alt="Main Image"
              height={500}
              width={700}
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="flex flex-col w-full md:w-1/2 mt-6 md:mt-0 md:pl-10">
          <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
          <div className="flex items-center mt-2 text-yellow-500">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.431L24 9.576l-6 5.84L19.335 24 12 19.897 4.665 24 6 15.416 0 9.576l8.332-1.558L12 .587z" />
              </svg>
            ))}
          </div>
          <div className="mt-3">
            <span className="text-2xl font-bold text-gray-800">${product.price.toFixed(2)}</span>
            <span className="text-lg text-gray-500 line-through ml-3">$300</span>
          </div>
          <p className="mt-4 text-gray-600">{product.description}</p>

          {/* Select Colors */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">Select Colors</h2>
            <div className="mt-4 flex space-x-4">
              {['Red', 'Blue', 'Black'].map((color) => (
                <button
                  key={color}
                  className={`p-2 w-12 h-12 rounded-full border ${
                    selectedColor === color ? 'border-black' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color.toLowerCase() }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>

          {/* Select Size */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">Select Size</h2>
            <div className="mt-4 flex space-x-4">
              {['S', 'M', 'L', 'XL'].map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 rounded-lg border ${
                    selectedSize === size ? 'bg-black text-white' : 'bg-gray-100 text-gray-800'
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mt-8">
            <button
              className="px-4 py-2 bg-black text-white rounded-full"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </button>
            <span className="mx-4">{quantity}</span>
            <button
              className="px-4 py-2 bg-black text-white rounded-full"
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              -
            </button>
          </div>

          <button
            className="bg-black text-white font-semibold py-3 px-6 mt-10 rounded-full hover:bg-gray-800"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ProductDetailPage;
