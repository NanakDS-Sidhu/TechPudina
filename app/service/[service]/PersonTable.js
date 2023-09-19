'use client'

import React, { useEffect, useState } from 'react'
import PersonCard from './PersonCard';

export default function PersonTable(props) {
  const [data, setData] = useState([]);
console.log(props.role)
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`/api/users?servicetype=${props.role}`);
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await res.json();
        console.log(jsonData)
        setData(jsonData.data);        
      } catch (error) {
        console.error('Error fetching data:', error);        
      }
    }

    fetchData();
  }, []);

  return (
    <div className="">
      {data && data.map((obj, id) => {
        console.log(obj, id)
        return (<PersonCard key={id} name={obj.fullName} role={obj.role} rating={obj.rating} location="Chandigarh,India" experience={10} ></PersonCard>)
      })
      }
    </div>
  )
}