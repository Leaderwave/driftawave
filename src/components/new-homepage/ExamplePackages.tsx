
"use client";

export const ExamplePackages = () => {
  return (
    <section className="bg-canvas-light py-20">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-4xl font-bold text-text-dark">
          Example Packages
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-8">
            <h3 className="text-2xl font-bold text-text-dark">The Kickstarter</h3>
            <p className="mt-4 text-text-dark/80">3 days, 2 nights</p>
          </div>
          <div className="rounded-2xl bg-canvas-dark p-8">
            <h3 className="text-2xl font-bold text-text-light">The Accelerator</h3>
            <p className="mt-4 text-text-light/80">5 days, 4 nights</p>
          </div>
          <div className="rounded-2xl bg-white p-8">
            <h3 className="text-2xl font-bold text-text-dark">The Visionary</h3>
            <p className="mt-4 text-text-dark/80">7+ days, bespoke</p>
          </div>
        </div>
      </div>
    </section>
  );
};
