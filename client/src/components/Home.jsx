import React from 'react'
// import banner from '../assets/banner.jpg'
import banner1 from '../assets/banner1.jpg'
import Products from './Products'
import Requirement from './Requirement'
import About from './About'
import Testimonials from './Testimonials'
import Contact from './Contact'
const Home=()=>{
    return(
       
        <><div className="h-full w-full overflow-hidden">
            <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${banner1})` }}>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <h1 className="text-white text-4xl font-bold">Bringing Fresh Produce from Farm to Table</h1>
                    <p className="text-white mt-4 text-lg">Direct from farmers to your doorstep – Fresh, Affordable, Trustworthy</p>
                    <div className="mt-4 flex space-x-4">
                        <button className="bg-green-400 px-6 py-3 rounded-md text-white font-semibold">
                            <a href="/buyer-login">Shop Now</a>
                        </button>
                        <button className="bg-yellow-300 px-6 py-3 rounded-md text-white font-semibold">
                            <a href="/farmer-login">Sell Now</a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 p-10">
                <h2 className="text-black text-2xl font-semibold">Why Choose Us</h2>
                <div className="flex flex-col md:flex-row justify-around">
                    <div className="max-w-sm">
                        <h3 className="text-black text-lg font-semibold mt-3">For Farmers</h3>
                        <p className="mt-2">Reach buyers directly, get fair prices and grow your income</p>
                    </div>
                    <div className="max-w-sm">
                        <h3 className="text-black text-lg font-semibold mt-3">For Buyers</h3>
                        <p className="mt-2">Access fresh quality produce directly from trusted farmers</p>
                    </div>
                </div>
            </div>
            <div className="bg-white mt-5 mb-5">
                <h2 className="font-semibold text-2xl">How it works</h2>
                <div className="flex flex-col md:flex-row justify-around">
                    <div className="max-w-sm">
                        <h3 className="font-semibold mt-3 text-xl">1. Farmers List their produce</h3>
                        <p className="mt-2 text-md">Farmers post their products directly on the platform</p>
                    </div>
                    <div className="max-w-sm">
                        <h3 className="font-semibold mt-3 text-xl">2. Buyers Order with ease</h3>
                        <p className="mt-2 text-md">Choose your fresh produce and place an order in minutes</p>
                    </div>
                    <div className="max-w-sm">
                        <h3 className="font-semibold mt-3 text-xl">3. Support local Farmers</h3>
                        <p className="mt-2 text-md">Every purchase supports sustainable farming practice</p>
                    </div>
                </div>
                <Products limit={12} />

                <Requirement />

            </div>


        </div><About /><Testimonials /><Contact /></>
    )
}

export default Home 
















