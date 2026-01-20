export default function About() {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* HERO */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
          alt="Performance Engineering"
          className="w-full h-[80vh] object-cover"
        />

        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl mx-auto px-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Engineering <br /> Performance at Scale
            </h1>
            <p className="mt-6 max-w-xl text-slate-300 text-lg">
              PREFSCALE exists to ensure systems never fail when it matters most.
            </p>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">

          <div className="border-l-4 border-slate-300 pl-8">
            <h2 className="text-3xl font-bold text-slate-800">
              Our Story
            </h2>

            <p className="mt-6 text-slate-600 leading-relaxed">
              PREFSCALE was founded to solve a recurring industry problem —
              applications that pass functional tests but fail under real traffic.
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Performance issues are often discovered too late, during outages,
              customer complaints, or revenue loss.
            </p>

            <p className="mt-4 font-semibold text-slate-800">
              We decided to change that mindset.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Engineering team collaboration"
              className="w-full h-64 object-cover"
            />

            <div className="p-8 text-sm text-slate-500">
              Real-world traffic requires real performance engineering
            </div>
          </div>

        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-10">
          <InfoCard
            title="Our Mission"
            desc="To help engineering teams predict failures before users experience them — by embedding performance engineering into every stage of development."
          />
          <InfoCard
            title="Our Vision"
            desc="To make performance a design decision, not a post-release emergency."
          />
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-slate-800 text-center">
            How We Approach Performance
          </h2>

          <div className="mt-16 space-y-12">
            <TimelineStep step="01" title="Understand the System" desc="We analyze architecture, workflows, and traffic patterns." />
            <TimelineStep step="02" title="Model Real Traffic" desc="We simulate realistic load, spikes, and endurance conditions." />
            <TimelineStep step="03" title="Measure What Matters" desc="Latency, throughput, errors, and saturation points." />
            <TimelineStep step="04" title="Enable Continuous Performance" desc="Performance testing integrated into CI/CD pipelines." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-slate-700 to-slate-800 text-white text-center">
        <h2 className="text-2xl font-semibold tracking-wide">
          Performance Is Not Optional
        </h2>
        <p className="mt-2 text-slate-300 max-w-2xl mx-auto">
          PREFSCALE helps teams scale with confidence and reliability.
        </p>
      </section>

    </div>
  );
}

/* ---------- COMPONENTS ---------- */

function InfoCard({ title, desc }) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-10 hover:shadow-lg transition">
      <h3 className="text-2xl font-bold text-slate-800">{title}</h3>
      <p className="mt-4 text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function TimelineStep({ step, title, desc }) {
  return (
    <div className="flex gap-6 items-start">
      <div className="text-slate-400 font-semibold text-xl">
        {step}
      </div>
      <div>
        <h4 className="text-xl font-semibold text-slate-800">
          {title}
        </h4>
        <p className="mt-2 text-slate-500 max-w-2xl">
          {desc}
        </p>
      </div>
    </div>
  );
}
