import React from 'react';

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap md:flex-nowrap">
        <div className="w-full md:w-1/4 flex-shrink-0 text-center md:text-left mb-10 md:mb-0">
          <a className="flex title-font font-medium items-center justify-center md:justify-start text-gray-900">
            <span className="ml-3 text-3xl font-extrabold">Shop.co</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">
            We have clothes that suit your style and <br/>
             which you’re proud to wear. From <br/>
             women to men.
          </p>
        </div>
        <div className="w-full md:w-3/4 flex flex-wrap">
          {[
            {
              title: 'Company',
              links: ['About', 'Features', 'Works', 'Career'],
            },
            {
              title: 'Help',
              links: ['Customer Support', 'Delivery Details', 'Terms & Condition', 'Privacy & Policy'],
            },
            {
              title: 'FAQ',
              links: ['Account', 'Manage Delivery', 'Orders', 'Payments'],
            },
            {
              title: 'Resources',
              links: ['Free Ebooks', 'Development Tutorial', 'How to Blog', 'YouTube Playlist'],
            },
          ].map((section, index) => (
            <div key={index} className="w-full md:w-1/4 px-4 mb-10">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">
                {section.title}
              </h2>
              <nav className="list-none">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a className="text-gray-600 hover:text-gray-800">{link}</a>
                  </li>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row items-center">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            SHOP.CO 2000-2023 ALL Rights Reserved
          </p>
          <span className="inline-flex sm:ml-auto mt-2 sm:mt-0 justify-center sm:justify-start">
            <a className="ml-3 text-gray-500" href="#facebook">
              <svg
                fill="currentColor"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.692V11.08h3.128V8.345c0-3.1 1.894-4.788 4.658-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.591l-.467 3.626h-3.124V24h6.127c.73 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500" href="#twitter">
              <svg
                fill="currentColor"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.643 4.937c-.835.37-1.73.62-2.675.733 0 0 0 0 0 0 1.01-.604 1.731-1.56 2.084-2.7-.948.56-2.004.96-3.127 1.184-.894-.95-2.17-1.543-3.583-1.543-2.715 0-4.917 2.204-4.917 4.917 0 .385.045.76.127 1.12-4.084-.205-7.698-2.16-10.124-5.127-.423.723-.664 1.564-.664 2.46 0 1.698.867 3.197 2.187 4.078-.805-.026-1.563-.247-2.225-.616v.06c0 2.37 1.68 4.347 3.912 4.799-.41.11-.843.167-1.288.167-.316 0-.626-.03-.927-.088.626 1.956 2.446 3.38 4.606 3.42-1.68 1.32-3.797 2.106-6.102 2.106-.395 0-.788-.023-1.174-.067 2.178 1.397 4.764 2.213 7.548 2.213 9.057 0 14.01-7.497 14.01-13.986 0-.213-.005-.425-.014-.636.962-.693 1.797-1.56 2.457-2.548l-.047-.02z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500" href="#instagram">
              <svg
                fill="currentColor"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.318 3.608 1.293.975.975 1.231 2.241 1.293 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.318 2.633-1.293 3.608-.975.975-2.241 1.231-3.608 1.293-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.318-3.608-1.293-.975-.975-1.231-2.241-1.293-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.318-2.633 1.293-3.608.975-.975 2.241-1.231 3.608-1.293 1.265-.058 1.645-.07 4.849-.07zm0-2.163C8.756 0 8.383.013 7.145.072c-1.753.08-3.147.35-4.285 1.488C1.72 2.926 1.45 4.32 1.37 6.074.312 7.312.3 7.685.3 12c0 4.315.013 4.688.072 6.926.08 1.753.35 3.147 1.488 4.285 1.138 1.138 2.532 1.408 4.285 1.488C8.383 23.987 8.756 24 12 24c4.315 0 4.688-.013 6.926-.072 1.753-.08 3.147-.35 4.285-1.488 1.138-1.138 1.408-2.532 1.488-4.285.059-2.238.072-2.611.072-6.926 0-4.315-.013-4.688-.072-6.926-.08-1.753-.35-3.147-1.488-4.285C20.073 1.72 18.679 1.45 16.926 1.37 15.688.313 15.315.3 12 .3zm0 5.838c-3.407 0-6.163 2.756-6.163 6.163S8.593 18.164 12 18.164 18.163 15.408 18.163 12 15.407 6.138 12 6.138zm0 10.026c-2.135 0-3.863-1.728-3.863-3.863s1.728-3.863 3.863-3.863 3.863 1.728 3.863 3.863-1.728 3.863-3.863 3.863zm4.406-11.845c-.796 0-1.44.645-1.44 1.44s.645 1.44 1.44 1.44 1.44-.645 1.44-1.44-.645-1.44-1.44-1.44z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500" href="#linkedin">
              <svg
                fill="currentColor"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.648c0-1.348-.028-3.087-1.884-3.087-1.884 0-2.173 1.472-2.173 2.993v5.742h-3.554v-11.64h3.413v1.587h.049c.474-.9 1.632-1.847 3.36-1.847 3.594 0 4.255 2.365 4.255 5.444v6.456zM5.337 7.433c-1.144 0-2.069-.926-2.069-2.07s.926-2.07 2.07-2.07c1.144 0 2.07.926 2.07 2.07s-.927 2.07-2.07 2.07zm1.777 13.019h-3.554v-11.64h3.554v11.64zM22.225 0h-20.451c-.978 0-1.775.796-1.775 1.775v20.451c0 .978.797 1.775 1.775 1.775h20.451c.978 0 1.775-.797 1.775-1.775v-20.451c0-.979-.797-1.775-1.775-1.775z" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
