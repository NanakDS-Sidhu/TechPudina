
export default function PersonCard(props) {
    
    console.log(props)
  return (
    <div key={props.key} className=' h-48 rounded-xl border border-gray-500 mx-4 flex'>
        <div id="PIC" className='w-1/6 flex justify-center items-center'>
            <img className='rounded-full w-32 h-32 object-cover' src="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"></img>
        </div>
        <div id="General info" className='w-2/6 flex flex-col justify-center items-center'>
            <h1 className='my-1'>{props.role+" "+props.name}</h1>
            <h2 className='my-1'>{props.location}</h2>
            <h2 className='my-1'>{props.experience} year Experience</h2>
        </div>
        <div id="Review" className='w-3/6'>
            
    <div class="flex flex-col items-center">
    <div className='flex my-4 text-lg items-center justify-center'>
    <svg class="w-6 h-6 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <p class="ml-2 font-bold text-gray-900 ">{props.rating}</p>
    <p>|</p>
    <a href="#" class="font-medium text-gray-900 underline hover:no-underline">73 clients</a>
    </div>
    <h1> Areas of Expertise</h1>
    <h2>Cheque Bounce, Divorce, Family</h2>
    <button className='bg-teal-700 p-4 rounded-lg text-white'>Contact now</button>
</div>

        </div>

    </div>
  )
}
