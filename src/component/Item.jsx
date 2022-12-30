import React from 'react'
import data from '../data'
function Item() {
    console.log(data.length)
  return (
    <div className='flex flex-col gap-2 items-center mt-5 bg-slate-200 rounded-xl p-5'>
        <img src="https://images.pexels.com/photos/9154716/pexels-photo-9154716.jpeg?cs=srgb&dl=pexels-cottonbro-9154716.jpg&fm=jpg" className='w-20 h-20 rounded-full' />
        <p className='text-lg mt-2'>فرزاد معصومی</p>
        <h4 className='text-red-500 mt-2'>طراح وب</h4>
        <small className='text-gray-500 mt-5'>'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است'</small>
        <button className='bg-red-500 p-2 text-white rounded-md mt-7'>رندوم</button>
        <div className='flex gap-96 mt-7 text-2xl text-red-500'>
            <button><i class="bi bi-arrow-right-circle-fill"></i></button>
            <button><i class="bi bi-arrow-left-circle-fill"></i></button>
        </div>
    </div>
  )
}

export default Item