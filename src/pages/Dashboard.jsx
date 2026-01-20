import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Activity,
  Users,
  AlertTriangle,
  TrendingUp,
  Clock,
} from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();

  // 🔐 HARD AUTH PROTECTION (WORKS EVEN IN NEW TAB)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-8">

        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            Performance Dashboard
          </h1>
          <p className="mt-2 text-gray-600">
            Real-time overview of application performance
          </p>
        </div>

        {/* KPI CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KpiCard
            title="Avg Response Time"
            value="320 ms"
            icon={<Clock className="text-blue-600" />}
            trend="+5%"
          />

          <KpiCard
            title="Throughput"
            value="1,200 req/min"
            icon={<TrendingUp className="text-green-600" />}
            trend="+12%"
          />

          <KpiCard
            title="Error Rate"
            value="0.8%"
            icon={<AlertTriangle className="text-red-600" />}
            trend="-2%"
          />

          <KpiCard
            title="Active Users"
            value="540"
            icon={<Users className="text-purple-600" />}
            trend="+8%"
          />
        </div>

        {/* CHARTS SECTION */}
        <div className="mt-12 grid lg:grid-cols-3 gap-6">

          {/* Performance Trend */}
          <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-800">
              Performance Trends
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Response time & throughput analysis
            </p>

            <div className="mt-6 h-64 border border-dashed rounded flex items-center justify-center text-gray-400">
              Chart Component (API / JMeter Data)
            </div>
          </div>

          {/* System Status */}
          <div className="bg-white p-8 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-800">
              System Health
            </h2>

            <div className="mt-6 space-y-4">
              <StatusRow label="API Status" status="Healthy" />
              <StatusRow label="Database" status="Stable" />
              <StatusRow label="Server Load" status="Moderate" />
              <StatusRow label="Error Logs" status="Low" />
            </div>
          </div>
        </div>

        {/* RECENT ACTIVITY */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-800">
            Recent Test Activity
          </h2>

          <div className="mt-6 space-y-4">
            <ActivityRow text="Load Test executed on /login API" />
            <ActivityRow text="Spike Test detected latency increase" />
            <ActivityRow text="Endurance Test completed successfully" />
          </div>
        </div>

      </div>
    </div>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function KpiCard({ title, value, icon, trend }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
      <div className="flex justify-between items-center">
        <h3 className="text-sm text-gray-500">{title}</h3>
        {icon}
      </div>
      <p className="text-3xl font-bold text-gray-800 mt-3">{value}</p>
      <p className="text-sm text-green-600 mt-1">{trend} from last test</p>
    </div>
  );
}

function StatusRow({ label, status }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-gray-600">{label}</span>
      <span className="font-medium text-green-600">{status}</span>
    </div>
  );
}

function ActivityRow({ text }) {
  return (
    <div className="flex items-center gap-3 text-gray-600">
      <Activity size={16} className="text-blue-600" />
      <span>{text}</span>
    </div>
  );
}
