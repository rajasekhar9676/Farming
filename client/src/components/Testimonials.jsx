import React from 'react';

const testimonials = [
  {
    name: 'John Doe',
    role: 'Farmer',
    message: 'This platform has helped me connect directly with buyers. I am able to sell my produce faster and at better prices!',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Sarah Lee',
    role: 'Buyer',
    message: 'A fantastic experience! I found exactly what I was looking for and got fresh products delivered straight to my doorstep.',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    name: 'Mike Johnson',
    role: 'Farmer',
    message: 'I’ve been able to expand my business and reach new customers through this platform. It’s simple to use and very effective.',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
];


const Testimonials = () => {
  return (
    <div className=" bg-[#c1e84a] mb-20 p-8">
      <div className="max-w-6xl mx-auto  p-10">
        <h1 className="text-4xl font-bold text-white mb-6">What Our Users Say</h1>
        <p className="text-lg text-white mb-6">
          Our platform is designed to help farmers and buyers connect, and we are proud of the positive impact it has had on many lives.
          Read some of the feedback from our happy users.
        </p>

        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex items-center space-x-6 bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="h-16 w-16 rounded-full object-cover border-2 border-[#005225]"
              />
              <div>
                <h2 className="text-xl font-semibold text-[#005225]">{testimonial.name}</h2>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
                <p className="mt-2 text-gray-800 italic">"{testimonial.message}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;


