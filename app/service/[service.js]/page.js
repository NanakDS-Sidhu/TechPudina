import React from 'react'
import PersonTable from './PersonTable';


export default function page() {
  const array=[
    {id:1,
    name:"Nnnn",
    img:"https://images.unsplash.com/photo-1542801204-141ec23989d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
  },
  {id:1,
    name:"Nnnn",
    img:"https://images.unsplash.com/photo-1542801204-141ec23989d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
  },
  {id:1,
    name:"Nnnn",
    img:"https://images.unsplash.com/photo-1542801204-141ec23989d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
  },
  {id:1,
    name:"Nnnn",
    img:"https://images.unsplash.com/photo-1542801204-141ec23989d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
  },
  ];

  return (
    <div className='h-screen bg-zinc-100 text-black flex'>
      <div className='w-1/4'></div>

      <div className='grow' >      <h1 className='text-5xl'>List of Lawyers</h1>
      <PersonTable></PersonTable>
      </div>

    </div>
  )
}
