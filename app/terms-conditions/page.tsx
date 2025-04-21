export const page = () => {
  return (
    <section className="max-w-5xl mx-auto p-6">
      <div className="">
        <h1 className="text-3xl font-bold mb-6 text-center">Self Drive Terms & Conditions</h1>

        <section className="mb-4">
          <h2 className="text-xl font-semibold">1. Vehicle Usage</h2>
          <ul className="list-disc ml-6">
            <li>The renter must only use the vehicle for personal purposes and within permissible driving limits.</li>
            <li>Subleasing or lending the vehicle to third parties is strictly prohibited.</li>
            <li>The renter must not engage in illegal activities while operating the vehicle.</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold">2. Driver’s Responsibility</h2>
          <ul className="list-disc ml-6">
            <li>The renter must hold a valid driving license.</li>
            <li>The renter is responsible for all parking tickets, traffic violations, tolls, and other penalties during the rental period.</li>
            <li>Operating the vehicle under the influence of alcohol, drugs, or any intoxicants is strictly prohibited.</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold">3. Vehicle Condition and Maintenance</h2>
          <ul className="list-disc ml-6">
            <li>The vehicle must be returned in the same condition as received, except for normal wear and tear.</li>
            <li>In the event of damage, loss, or theft, the renter shall bear the cost of repair or replacement.</li>
            <li>Routine maintenance and fuel costs are the renter’s responsibility during the rental period.</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold">4. Fuel Policy</h2>
          <ul className="list-disc ml-6">
            <li>The vehicle must be returned with the same fuel level as provided at the time of rental.</li>
            <li>Fuel shortages will be charged at the current applicable rate.</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold">5. Extension and Termination</h2>
          <ul className="list-disc ml-6">
            <li>Rental extensions must be requested and approved at least 24 hours before the rental period ends.</li>
            <li>Early returns will not be eligible for a refund unless explicitly agreed upon.</li>
            <li>Late returns will incur a penalty of Rs. 300 per hour.</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold">6. Cancellation Policy</h2>
          <p>Cancellations will not result in a refund of the advance payment taken for bookings.</p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold">7. Security Deposit</h2>
          <p>
            The renter must deposit their original Driving License, Aadhaar Card, and PAN Card. The documents will be returned once the vehicle and full payment are received.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold">8. Governing Law</h2>
          <p>This agreement is governed by the laws of the jurisdiction where the vehicle is rented.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">9. Signatures</h2>
          <p>By using our services, you acknowledge that you have read, understood, and agreed to all the terms and conditions stated above.</p>
        </section>

        <hr className="my-4" />

        <div className="text-sm text-accent-foreground/90">
          <p><strong>Contact:</strong> 7984986324</p>
          <p><strong>Self Drive Agreement</strong></p>
        </div>
      </div>
    </section>
  )
}

export default page