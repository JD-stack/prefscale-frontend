import { ArrowRight, Gauge, Activity, ShieldCheck, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-white">
{/* HERO SECTION */}
{/* HERO SECTION */}
<section className="relative h-[85vh] overflow-hidden bg-black">
  {/* Silent Background Image */}
  <img
    src="https://images.unsplash.com/photo-1518770660439-4636190af475"
    alt="Abstract technology background"
    className="absolute inset-0 w-full h-full object-cover opacity-40"
  />

  {/* Soft Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-8 h-full flex items-center">
    <div className="max-w-2xl text-white">
      <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
        Engineering Performance <br />
        <span className="text-gray-300">That Scales</span>
      </h1>

      <p className="mt-6 text-lg text-gray-300">
        PREFSCALE enables engineering teams to design, test, and
        optimize system performance using real-world traffic
        patterns and measurable insights.
      </p>

      <div className="mt-10 flex gap-4">
        <Link
          to="/signup"
          className="bg-white text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition"
        >
          Get Started
        </Link>

        <Link
          to="/about"
          className="border border-white/30 text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition"
        >
          Learn More
        </Link>
      </div>
    </div>
  </div>
</section>


      {/* TRUST / VALUE SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Why Engineering Teams Choose PREFSCALE
          </h2>

          <div className="mt-12 grid md:grid-cols-4 gap-8">
            <Feature
              icon={<Gauge />}
              title="Performance Testing"
              desc="Identify bottlenecks before your users do."
            />
            <Feature
              icon={<Zap />}
              title="Load & Spike Testing"
              desc="Ensure stability under sudden traffic bursts."
            />
            <Feature
              icon={<Activity />}
              title="Real-time Monitoring"
              desc="Track performance trends continuously."
            />
            <Feature
              icon={<ShieldCheck />}
              title="Enterprise Reliability"
              desc="Build systems you can trust at scale."
            />
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            How PREFSCALE Works
          </h2>

          <div className="mt-14 grid md:grid-cols-3 gap-10">
            <Step
              number="01"
              title="Analyze"
              desc="Understand application behavior under real-world traffic."
            />
            <Step
              number="02"
              title="Test"
              desc="Run load, stress, and endurance tests with precision."
            />
            <Step
              number="03"
              title="Optimize"
              desc="Use actionable insights to improve performance."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
<section className="py-8 bg-gradient-to-r from-slate-700 to-slate-800 text-white text-center">
  <h2 className="text-2xl font-semibold tracking-wide">
    Performance Is Not Optional
  </h2>

  <p className="mt-2 text-slate-200 max-w-xl mx-auto text-sm">
    Start building systems that scale with confidence.
  </p>

  <Link
    to="/signup"
    className="inline-block mt-4 bg-white text-slate-800 px-6 py-2 rounded-md font-semibold hover:bg-slate-100 transition"
  >
    Start Free
  </Link>
</section>

    </div>
  );
}

/* 🔹 Reusable Components */

function Feature({ icon, title, desc }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="font-semibold text-gray-800">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function Step({ number, title, desc }) {
  return (
    <div className="text-center">
      <div className="text-blue-600 text-4xl font-bold">{number}</div>
      <h3 className="mt-4 font-semibold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600 text-sm">{desc}</p>
    </div>
  );
}
