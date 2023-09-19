import React from 'react'
import PersonTable from './PersonTable';
import DropDownFilter from './DropDownFilter';
import Filters from './Filters';


export default function Page({params}) {

  return (
    <div className='h-screen  text-black flex'>
      <div className='w-1/4 h-screen'>
        <h2 className='text-4xl font-bold p-4'>Filters</h2>
        <Filters></Filters>

      </div>

      <div className='grow' >      <h1 className='text-4xl font-bold p-4'>List of {params.service}</h1>
        <PersonTable role={params.service}/>
      </div>

    </div>
  )
}
