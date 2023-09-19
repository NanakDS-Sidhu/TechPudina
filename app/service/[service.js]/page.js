import React from 'react'
import PersonTable from './PersonTable';
import DropDownFilter from './DropDownFilter';
import Filters from './Filters';


export default function Page() {

  return (
    <div className='h-screen  text-black flex'>
      <div className='w-1/4 h-screen'>
        <h2 className='text-5xl p-4'>Filters</h2>
        <Filters></Filters>

      </div>

      <div className='grow' >      <h1 className='text-5xl p-4'>List of Lawyers</h1>
        <PersonTable/>
      </div>
    </div>
  )
}
