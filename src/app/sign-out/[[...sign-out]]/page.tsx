import { SignOutButton } from '@clerk/nextjs'

export default function Page() {
  return <div className='p-3  text-white bg-gradient-to-r from-black to-black rounded-2xl shadow-md hover:from-black
   hover:to-red-700 active:scale-95 focus:ring-2 focus:ring-offset-2  bg-gray-100'>  <SignOutButton/></div>
}
