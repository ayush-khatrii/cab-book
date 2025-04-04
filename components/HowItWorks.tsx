const HowItWorks = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {[
            { number: 1, title: "Choose Location", desc: "Enter your pickup and drop-off locations" },
            { number: 2, title: "Pick a Date", desc: "Select your travel date and time" },
            { number: 3, title: "Choose a Cab", desc: "Select from our range of vehicles" },
            { number: 4, title: "Enjoy the Ride", desc: "Sit back and relax during your journey" }
          ].map((step, index) => (
            <div key={index} className="text-center relative group cursor-pointer">
              <div className="absolute left-1/2 -translate-x-1/2 h-1 bg-primary/20 top-6 w-full hidden md:block"
                style={{ display: index === 4 ? 'none' : '' }} />
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-foreground/60 font-medium">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks