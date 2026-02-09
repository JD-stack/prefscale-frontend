import {
  Gauge,
  Zap,
  Activity,
  ShieldCheck,
  Bug,
  Server,
  Database,
  Cloud,
  Cpu,
  Radar,
} from "lucide-react";
import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <div className="bg-black text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#1e293b,_#020617_70%)]" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fade}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl px-6"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Performance <span className="text-sky-400">Engineering</span>
          </h1>

          <p className="mt-8 text-slate-300 text-lg leading-relaxed">
            We don’t just test applications.  
            We **simulate reality**, break systems under load,
            and expose the limits before your users do.
          </p>
        </motion.div>
      </section>

      {/* ================= SYSTEM VIEW ================= */}
      <section className="py-24 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-7xl mx-auto px-8">
          <motion.h2
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-bold text-center"
          >
            Think of Performance as a System
          </motion.h2>

          <div className="mt-16 grid md:grid-cols-4 gap-8">
            <SystemBlock
              icon={<Cpu />}
              title="Application Layer"
              desc="API latency, thread contention, async behavior."
            />
            <SystemBlock
              icon={<Database />}
              title="Database Layer"
              desc="Query latency, connection pools, locks."
            />
            <SystemBlock
              icon={<Server />}
              title="Infrastructure"
              desc="CPU, memory, scaling, load balancers."
            />
            <SystemBlock
              icon={<Cloud />}
              title="Cloud Limits"
              desc="Auto-scaling, quotas, shared resources."
            />
          </div>
        </div>
      </section>

      {/* ================= SERVICES MATRIX ================= */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            What We Test Under Load
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <ServiceCard
              icon={<Gauge />}
              title="Load Testing"
              tagline="Can your system handle normal reality?"
              bullets={[
                "Concurrent logins",
                "Steady traffic behavior",
                "SLA validation",
              ]}
            />

            <ServiceCard
              icon={<Zap />}
              title="Stress Testing"
              tagline="What breaks first — and how?"
              bullets={[
                "Breaking point discovery",
                "Graceful failure checks",
                "Recovery analysis",
              ]}
            />

            <ServiceCard
              icon={<Activity />}
              title="Spike Testing"
              tagline="What happens when traffic explodes?"
              bullets={[
                "Flash sale simulation",
                "Sudden user bursts",
                "Auto-scaling reaction",
              ]}
            />

            <ServiceCard
              icon={<Radar />}
              title="Endurance Testing"
              tagline="What fails after hours of load?"
              bullets={[
                "Memory leaks",
                "CPU saturation",
                "Resource exhaustion",
              ]}
            />

            <ServiceCard
              icon={<Bug />}
              title="Bottleneck Detection"
              tagline="Where is the real slowdown?"
              bullets={[
                "Slow APIs",
                "DB contention",
                "Concurrency locks",
              ]}
            />

            <ServiceCard
              icon={<ShieldCheck />}
              title="Reliability Engineering"
              tagline="Can you trust production?"
              bullets={[
                "Failure tolerance",
                "High availability",
                "System resilience",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ================= WHY IT MATTERS ================= */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold">
            Why This Is Not Optional
          </h2>

          <p className="mt-8 text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Most production failures are not bugs —  
            they are **performance limits discovered too late**.
            <br /><br />
            PREFSCALE exists to make those limits visible,
            measurable, and fixable.
          </p>
        </div>
      </section>

    </div>
  );
}

/* ================= COMPONENTS ================= */

function SystemBlock({ icon, title, desc }) {
  return (
    <motion.div
      variants={fade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-slate-900/60 border border-slate-700 p-6 rounded-xl backdrop-blur"
    >
      <div className="text-sky-400 mb-4">{icon}</div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-sm text-slate-400">{desc}</p>
    </motion.div>
  );
}

function ServiceCard({ icon, title, tagline, bullets }) {
  return (
    <motion.div
      variants={fade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-sky-500 transition"
    >
      <div className="absolute -top-6 left-6 text-sky-400">
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-slate-400 text-sm">{tagline}</p>

      <ul className="mt-5 space-y-2 text-sm text-slate-300">
        {bullets.map((b, i) => (
          <li key={i}>• {b}</li>
        ))}
      </ul>
    </motion.div>
  );
}
