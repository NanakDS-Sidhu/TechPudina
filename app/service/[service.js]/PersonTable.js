import React from 'react'
import PersonCard from './PersonCard';

async function getData() {
    const res = await fetch('/api/user')
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }

export default async function PersonTable() {
    const data = await getData()
  return (
    <div className="">
      {data.data.map((obj,id)=>{
        console.log(obj,id)
        return(<PersonCard key={id} name={obj.fullName} role={obj.role} rating={obj.rating} location="Chandigarh,India" experience={10} ></PersonCard>)
      })
      }

</div>

      
  )
}
