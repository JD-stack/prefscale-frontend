import {
  Gauge,
  Zap,
  Activity,
  ShieldCheck,
  Bug,
  Server,
  Database,
  Cloud,
} from "lucide-react";
import { motion } from "framer-motion";

/* ================= PAGE TRANSITION ================= */
const pageTransition = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

/* ================= TRAFFIC WAVE ================= */
const wave = {
  animate: {
    x: ["-100%", "100%"],
    transition: {
      repeat: Infinity,
      duration: 6,
      ease: "linear",
    },
  },
};

export default function Services() {
  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.6 }}
      className="overflow-hidden"
    >
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center bg-black text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900" />

        {/* TRAFFIC WAVES */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            variants={wave}
            animate="animate"
            className="absolute top-1/3 w-full h-[2px] bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-40"
          />
          <motion.div
            variants={wave}
            animate="animate"
            className="absolute top-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-30"
            style={{ animationDelay: "1s" }}
          />
          <motion.div
            variants={wave}
            animate="animate"
            className="absolute top-2/3 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-30"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold">
            Performance <span className="text-sky-400">Services</span>
          </h1>

          <p className="mt-8 text-slate-300 text-lg leading-relaxed">
            We simulate real traffic, push systems to their limits,
            and expose performance bottlenecks before production users do.
          </p>
        </div>
      </section>

      {/* ================= SERVICES (LIGHT BACKGROUND) ================= */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-100 text-slate-900">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            What We Test Under Load
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <ServiceCard
              icon={<Gauge />}
              title="Load Testing"
              desc="Validate system behavior under expected concurrent users and steady traffic."
            />
            <ServiceCard
              icon={<Zap />}
              title="Stress Testing"
              desc="Push applications beyond limits to discover breaking points and failure behavior."
            />
            <ServiceCard
              icon={<Activity />}
              title="Spike Testing"
              desc="Analyze sudden traffic bursts and system reaction under extreme conditions."
            />
            <ServiceCard
              icon={<Database />}
              title="Database Performance"
              desc="Expose slow queries, connection pool exhaustion, and concurrency issues."
            />
            <ServiceCard
              icon={<Cloud />}
              title="Scalability Testing"
              desc="Validate auto-scaling, cloud limits, and infrastructure elasticity."
            />
            <ServiceCard
              icon={<ShieldCheck />}
              title="Reliability Engineering"
              desc="Ensure graceful failure, resilience, and high availability under load."
            />
          </div>
        </div>
      </section>

      {/* ================= WHY IT MATTERS ================= */}
      <section className="py-24 bg-black text-white text-center">
        <h2 className="text-4xl font-bold">
          Traffic Is Predictable. Failures Are Not.
        </h2>

        <p className="mt-8 text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Most production outages are not caused by bugs —
          they are caused by untested concurrency, saturation,
          and infrastructure limits.
          <br /><br />
          PREFSCALE makes those limits visible before users experience them.
        </p>
      </section>
    </motion.div>
  );
}

/* ================= COMPONENT ================= */

function ServiceCard({ icon, title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-sky-500 text-white"
    >
      <div className="absolute -top-6 left-6 text-sky-400">
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-slate-300 text-sm">{desc}</p>
    </motion.div>
  );
}
