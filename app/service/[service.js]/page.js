import React from 'react'
import PersonTable from './PersonTable';


export default function page() {

  return (
    <div className='h-screen bg-zinc-100 text-black flex'>
      <div className='w-1/4'></div>

      <div className='grow' >      <h1 className='text-5xl'>List of Lawyers</h1>
      <PersonTable></PersonTable>
      </div>

    </div>
  )
}
