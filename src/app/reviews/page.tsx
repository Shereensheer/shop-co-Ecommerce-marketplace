'use client';



const ReviewBox = () => {
  return ( 
    
    <div className="flex flex-col items-start w-full max-w-7xl mx-auto mt-6 bg-white p-4 rounded-lg shadow">
      {/* Six Boxes */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        {/* Box 1 */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          {/* Stars in the Box */}
          <div className="flex items-center mt-2 text-yellow-500">
            {Array(5)
              .fill(0)
              .map((_, index) => (
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
          {/* Name with Green Tick */}
          <div className="flex items-center">
            <span className="text-gray-700 font-semibold">Samantha D.</span>
            <span className="text-green-500 text-xl ml-2">✔️</span>
          </div>
          {/* Review Paragraph */}
          <p className="mt-4 text-gray-600">
            I absolutely love this t-shirt The design is unique and the fabric feels so comfortable As a fellow designer I appreciate the attention to detail Its become my favorite go-to shirt
          </p>
          {/* Posted on Date */}
          <p className="mt-2 text-gray-500 text-sm">Posted on August 14, 2023</p>
        </div>

        {/* Box 2 */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          {/* Stars in the Box */}
          <div className="flex items-center mt-2 text-yellow-500">
            {Array(5)
              .fill(0)
              .map((_, index) => (
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
          {/* Name with Green Tick */}
          <div className="flex items-center">
            <span className="text-gray-700 font-semibold">Alex M.</span>
            <span className="text-green-500 text-xl ml-2">✔️</span>
          </div>
          {/* Review Paragraph */}
          <p className="mt-4 text-gray-600">
            The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself Im quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me
          </p>
          {/* Posted on Date */}
          <p className="mt-2 text-gray-500 text-sm">Posted on August 15 2023</p>
        </div>

        {/* Box 3 */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          {/* Stars in the Box */}
          <div className="flex items-center mt-2 text-yellow-500">
            {Array(5)
              .fill(0)
              .map((_, index) => (
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
          {/* Name with Green Tick */}
          <div className="flex items-center">
            <span className="text-gray-700 font-semibold">Ethan R</span>
            <span className="text-green-500 text-xl ml-2">✔️</span>
          </div>
          {/* Review Paragraph */}
          <p className="mt-4 text-gray-600">
            This t-shirt is a must-have for anyone who appreciates good design The minimalistic yet stylish pattern caught my eye and the fit is perfect I can see the designers touch in every aspect of this shirt
          </p>
          {/* Posted on Date */}
          <p className="mt-2 text-gray-500 text-sm">Posted on August 16 2023</p>
        </div>

        {/* Box 4 */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          {/* Stars in the Box */}
          <div className="flex items-center mt-2 text-yellow-500">
            {Array(5)
              .fill(0)
              .map((_, index) => (
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
          {/* Name with Green Tick */}
          <div className="flex items-center">
            <span className="text-gray-700 font-semibold">Olivia P.</span>
            <span className="text-green-500 text-xl ml-2">✔️</span>
          </div>
          {/* Review Paragraph */}
          <p className="mt-4 text-gray-600">
            As a UI/UX enthusiast I value simplicity and functionality This t-shirt not only represents those principles but also feels great to wear Its evident that the designer poured their creativity into making this t-shirt stand out
          </p>
          {/* Posted on Date */}
          <p className="mt-2 text-gray-500 text-sm">Posted on August 17 2023</p>
        </div>

        {/* Box 5 */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          {/* Stars in the Box */}
          <div className="flex items-center mt-2 text-yellow-500">
            {Array(5)
              .fill(0)
              .map((_, index) => (
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
          {/* Name with Green Tick */}
          <div className="flex items-center">
            <span className="text-gray-700 font-semibold">Liam K.</span>
            <span className="text-green-500 text-xl ml-2">✔️</span>
          </div>
          {/* Review Paragraph */}
          <p className="mt-4 text-gray-600">
            This t-shirt is a fusion of comfort and creativity The fabric is soft and the design speaks volumes about the designers skill Its like wearing a piece of art that reflects my passion for both design and fashion
          </p>
          {/* Posted on Date */}
          <p className="mt-2 text-gray-500 text-sm">Posted on August 18 2023</p>
        </div>

        {/* Box 6 */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          {/* Stars in the Box */}
          <div className="flex items-center mt-2 text-yellow-500">
            {Array(5)
              .fill(0)
              .map((_, index) => (
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
          {/* Name with Green Tick */}
          <div className="flex items-center">
            <span className="text-gray-700 font-semibold">Ava H.</span>
            <span className="text-green-500 text-xl ml-2">✔️</span>
          </div>
          {/* Review Paragraph */}
          <p className="mt-4 text-gray-600">
            I am not just wearing a t-shirt I am wearing a piece of design philosophy The intricate details and thoughtful layout of the design make this shirt a conversation starter
          </p>
          {/* Posted on Date */}
          <p className="mt-2 text-gray-500 text-sm">Posted on August 19 2023</p>
        </div>
      </div>
<br/><br/><br/>
      {/* Load More Reviews Button */}
      <div className="ml-32">
     </div>
    </div>
  );
};

export default ReviewBox;
