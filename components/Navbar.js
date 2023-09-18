import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className='h-16 flex items-center justify-between p-16 text-black'>
        <h1 className='h-10 w-10 mx-3 text-4xl font-extrabold' >SIH</h1>
        
        <div className="flex gap-24">

        <ul className='flex items-center justify-center gap-3 md:gap-12'>
          <li className=''><Link href='/'>Home</Link></li>
          <li className=''><Link href=''>Lawyers</Link></li>
          <li className=''><Link href=''>Documents</Link></li>
        </ul>
        <ul className='flex items-center justify-center gap-3  ml-auto mr-3' >
          <li className=' '><button ><Link href="/auth/signup">Sign Up</Link></button></li>
          <li className=''><button className="p-2 text-white bg-black border-l rounded " ><Link href="/auth/login">Log In</Link></button></li>
        </ul>
        </div>

      </nav>
    </>
  );
};

export default Navbar;
