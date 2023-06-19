import React from 'react'

const Card = ({user}) => {
  return (
    <div className='flex gap-3 border-2 border-[#5dd4ac] ml-2 mb-2 rounded-md px-3 py-2 hover:bg-[#0a0a0a] duration-100 cursor-pointer w-96'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZU_zWQ4OOM3Xmsv8IhYjN3fAeM7Cd7HaAj6f-rLBkCA&usqp=CAU&ec=48665701"
        className='w-14 h-14 rounded-full' alt="" />
        <div>
            <h3 className='text-[#5dd4ac]'>{user.name}</h3>
            <p className='text-[#9c9c9c]'>Email: {user.email}</p>
            <p className='text-[#9c9c9c]'>Username: {user.username}</p>
            <p className='text-[#9c9c9c]'>Phone: {user.phone}</p>
        </div>
    </div>
  )
}

export default Card