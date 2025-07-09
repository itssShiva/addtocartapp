import React from 'react'

const Hero = () => {
  return (
    <div>
        <section className='py-16'>
            <div className='max-w-6xl mx-auto px-6 flex flex-col items-center justify-center md:flex-row'>
                        {/* Left div */}
                <div className='md:w-1/2 text-center md:text-left space-x-6'>
                    <h1 className='text-4xl md:text-6xl font-bold text-gray-900'>Discover Our Latest Product😍</h1>
                    <p className='text-gray-600 text-lg '>Make Yourself Look More Attractive</p>
                    <div className='flex justify-center md:justify-start gap-5'>
                        <button className='bg-indigo-800 text-white px-6 py-3 rounded-lg hover:bg-indigo-950'>Shop Now</button>
                        <button className='bg-gray-400 px-6 py-3 rounded-lg hover:bg-gray-500'>Learn More</button>
                    </div>
                </div>

                {/* Right */}
                <div className='md:w-1/2'>
                <img src='https://plus.unsplash.com/premium_photo-1664201890375-f8fa405cdb7d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Fashion'
                className='w-full rounded-xl object-cover'></img>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero