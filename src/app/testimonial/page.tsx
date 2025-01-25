import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai'; // For stars
import { FaCheckCircle } from 'react-icons/fa'; // For verified icon
import Link from 'next/link';

const ClientReviews = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container py-10 mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-center text-gray-800 lg:text-3xl dark:text-white">
            OUR HAPPY CUSTOMERS
          </h1>
          <FaArrowLeft className="text-gray-500 dark:text-white w-6 h-6 ml-auto" />
          <FaArrowRight className="text-gray-500 dark:text-white w-6 h-6" />
        </div>

        <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
          {/* Review 1 */}
          <div className="p-8 rounded-lg dark:bg-gray-800">
            <div className="flex items-center mt-8 -mx-2">
              {/* Stars Above */}
              <div className="mx-2">
                <span className="text-yellow-500">
                  {[...Array(5)].map((_, index) => (
                    <AiFillStar key={index} className="inline" />
                  ))}
                </span>
                <div className="flex items-center mt-2">
                  <h1 className="font-semibold text-gray-800 dark:text-white">
                    Sarah M.
                  </h1>
                  <FaCheckCircle className="text-green-500 w-4 h-4 ml-2" />
                </div>
              </div>
            </div>
            <p className="leading-loose text-gray-500 dark:text-gray-400">
            Im blown away by the quality and style of the clothes I received from Shop co From casual wear to elegant dresses every piece Ive bought has exceeded my expectations
            </p>
          </div>

          {/* Review 2 */}
          <div className="p-8 rounded-lg dark:bg-gray-800">
            <div className="flex items-center mt-8 -mx-2">
              {/* Stars Above */}
              <div className="mx-2">
                <span className="text-yellow-500">
                  {[...Array(5)].map((_, index) => (
                    <AiFillStar key={index} className="inline" />
                  ))}
                </span>
                <div className="flex items-center mt-2">
                  <h1 className="font-semibold text-gray-800 dark:text-white">
                    Alex K.
                  </h1>
                  <FaCheckCircle className="text-green-500 w-4 h-4 ml-2" />
                </div>
              </div>
            </div>
            <p className="leading-loose text-gray-500 dark:text-gray-400">
            Finding clothes that align with my personal style used to be a challenge until I discovered Shop co The range of options they offer is truly remarkable catering to a variety of tastes and occasions
            </p>
          </div>

          {/* Review 3 */}
          <div className="p-8 rounded-lg dark:bg-gray-800">
            <div className="flex items-center mt-8 -mx-2">
              {/* Stars Above */}
              <div className="mx-2">
                <span className="text-yellow-500">
                  {[...Array(5)].map((_, index) => (
                    <AiFillStar key={index} className="inline" />
                  ))}
                </span>
                <div className="flex items-center mt-2">
                  <h1 className="font-semibold text-gray-800 dark:text-white">
                    James L.
                  </h1>
                  <FaCheckCircle className="text-green-500 w-4 h-4 ml-2" />
                </div>
              </div>
            </div>
            <p className="leading-loose text-gray-500 dark:text-gray-400">
            As someone who s always on the lookout for unique fashion pieces I m thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends
            </p>
          </div>
          
        </section>
        <Link href={'/reviews'}>
        <div className="flex justify-center  items-center ">
        <button className="bg-white text-black py-2 px-4  rounded-full border border-gray-300 hover:bg-gray-100 transition duration-300">
          Load More Reviews
        </button>
      </div></Link>
      </div>
    </section>
  );
};

export default ClientReviews;
