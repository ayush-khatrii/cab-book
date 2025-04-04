import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Frequent Rider",
    image: "https://dummyimage.com/100x100",
    feedback: "Great service! Always on time and very reliable. Highly recommend!"
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Business Traveler",
    image: "https://dummyimage.com/100x100",
    feedback: "The best cab service I've used. Clean cars and professional drivers."
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Daily Commuter",
    image: "https://dummyimage.com/100x100",
    feedback: "Affordable prices and easy booking. My go-to cab service!"
  }
];

const Testimonials = () => {
  return (
    <section className="max-w-7xl text-center mx-auto py-12 px-5">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">What Our Customers Say</h2>
      <div className="relative grid md:grid-cols-3 gap-6">

        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="border border-foreground/15 cursor-pointer p-6 rounded-md">
            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            <p className="text-sm text-accent-foreground/60">{testimonial.role}</p>
            <p className="text-accent-foreground italic mt-5">"{testimonial.feedback}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;