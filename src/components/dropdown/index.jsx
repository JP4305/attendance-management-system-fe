'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, {useCallback, useState } from 'react'

const DropDown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { push } = useRouter();
  const logout = useCallback(() => {
    localStorage.clear();
  
    alert("User logged out");
    push("/login");
    
}, []);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative">
    <button
      onClick={toggleMenu}
      className=" items-center px-4 py-2 text-black hover:bg-gray-100  hover:rounded-xl  "
    >
     Account
      
    </button>
    {isOpen && (
      <div className=" flex flex-col w-28 absolute mt-2 gap-2 bg-white rounded-md shadow-lg">
        
        <Link
            href="/auth/login"
            className=" text-xs  md:text-base p-2 text-center text-white bg-gray-600 rounded-md  hover:bg-gray-800"
          >
            Sign in
          </Link>
          <Link
            href="/auth/register"
            className="   text-xs  p-2  md:text-base text-center text-gray-800 bg-slate-50  rounded-md  hover:bg-gray-200"
          >
            Sign up
          </Link>
          <button
            href="/login"
            className="text-center  text-xs  md:text-base p-2 text-white bg-gray-600 rounded-md  hover:bg-gray-800"
            onClick={logout}
          >
            Sign out
          </button>
        {/* Add more items as needed */}
      </div>
    )} 
  </div>
  )
}

export default DropDown