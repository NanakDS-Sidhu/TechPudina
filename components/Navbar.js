import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav className='h-16 flex items-center justify-between p-16'>
        <img className='h-10 w-10 object-cover rounded-full mx-3' src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt = "profile"></img>
        
        <div className="flex gap-24">

        <ul className='flex items-center justify-center gap-3 md:gap-12'>
          <li className=''><a href=''>Home</a></li>
          <li className=''><a href=''>Lawyers</a></li>
          <li className=''><a href=''>Documents</a></li>
        </ul>
        <ul className='flex items-center justify-center gap-3  ml-auto mr-3' >
          <li className=' '><button ><Link href="/auth">Sign Up</Link></button></li>
          <li className=''><button className="p-2 text-white bg-black border-l rounded " >Log In</button></li>
        </ul>
        </div>

      </nav>
    </>
  );
};

export default Navbar;
