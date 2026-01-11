
"use client";

const journeySteps = [
  "01 Consultation",
  "02 Proposal",
  "03 Booking",
  "04 Pre-Retreat Prep",
  "05 The Retreat",
  "06 Post-Retreat Impact",
];

export const Journey = () => {
  return (
    <section className="bg-canvas-light py-20">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-4xl font-bold text-text-dark">
          Your Journey With Us
        </h2>
        <div className="divide-y divide-stroke">
          {journeySteps.map((step, index) => (
            <div key={index} className="py-6">
              <p className="text-xl md:text-2xl font-semibold text-text-dark">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
