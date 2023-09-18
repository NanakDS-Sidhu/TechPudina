import React from 'react'


export default function ProfessionCard(props) {
  return (
    <div className='w-56 text-center text-black'>
    <div className='bg-white rounded-lg drop-shadow-lg h-56 my-2 flex justify-center items-center text-9xl'>
        {props.icon}
    </div>
    <h2><b>{props.children}</b></h2>
</div>
  )
}
