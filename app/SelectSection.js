import React from 'react'
import ProfessionCard from './ProfessionCard'

import { PiScalesThin } from "react-icons/pi";

export default function Select() {
  return (
    <div className=' h-screen bg-zinc-200'>
        <div className='h-1/2'></div>
      <h1>Select a Service</h1>
      <div className='flex justify-around h-1/2'>
        <ProfessionCard icon={<PiScalesThin/>}>Advocates</ProfessionCard>
        <ProfessionCard >Document Writers</ProfessionCard>
        <ProfessionCard>Notaries</ProfessionCard>
        <ProfessionCard>Mediators</ProfessionCard>
        <ProfessionCard>Arbitrators</ProfessionCard>
      </div>
    </div>
  )
}
