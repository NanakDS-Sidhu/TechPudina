import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <>
     <div className='px-32 py-14 w-full'>
        <div className=' w-full'>
            <div className='flex gap-14'>
                {/* image */}
                <div className='h-60 w-40 border p-2 rounded  border-1 border-black '>
                    <img className='h-full w-full object-cover' src="https://www.unicef.org/sites/default/files/styles/hero_tablet/public/unicef-youth-advocates-3-UN0348822.jpg?itok=z-YojuS5" alt="image" width="50" height = "50"></img>
                </div>
                <div >
                    <div>
                        <h1 className='text-2xl font-bold'>Advocate Sunita Bafna</h1>
                        <span >
                        <img width="15" height="15" className='' src="https://lawrato.com/assets/img/sprite/icon/rating-star-full-icon-new.png" alt="LawRato"></img>
                        <img width="15" height="15" className='' src="https://lawrato.com/assets/img/sprite/icon/rating-star-full-icon-new.png" alt="LawRato"></img>
                        <img width="15" height="15" className='' src="https://lawrato.com/assets/img/sprite/icon/rating-star-full-icon-new.png" alt="LawRato"></img>
                        <img width="15" height="15" className='' src="https://lawrato.com/assets/img/sprite/icon/rating-star-full-icon-new.png" alt="LawRato"></img>
                        <img width="15" height="15" className='' src="https://lawrato.com/assets/img/sprite/icon/rating-star-full-icon-new.png" alt="LawRato"></img>
                        </span>
                        <h3>5</h3>
                    </div>
                    <div>

                    </div>
                </div>

            </div>
        </div>
        </div> 
    </>
  )
}

export default page
