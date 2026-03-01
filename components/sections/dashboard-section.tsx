'use client';

import { motion } from 'framer-motion';
import { Settings, MoreVertical, TrendingUp, Users, Activity, BarChart3 } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const chartData = [
  { month: 'Jan', value: 400, users: 240, revenue: 2400 },
  { month: 'Feb', value: 500, users: 290, revenue: 2210 },
  { month: 'Mar', value: 450, users: 320, revenue: 2290 },
  { month: 'Apr', value: 600, users: 380, revenue: 2000 },
  { month: 'May', value: 700, users: 420, revenue: 2181 },
  { month: 'Jun', value: 800, users: 490, revenue: 2500 },
];

const metrics = [
  { label: 'Active Users', value: '24.5K', change: '+12.5%', icon: Users, color: 'from-primary/20 to-primary/10' },
  { label: 'Revenue', value: '$89.2K', change: '+23.1%', icon: TrendingUp, color: 'from-accent/20 to-accent/10' },
  { label: 'Engagement', value: '68.4%', change: '+4.2%', icon: Activity, color: 'from-green-500/20 to-green-500/10' },
  { label: 'Conversion', value: '3.24%', change: '-0.8%', icon: BarChart3, color: 'from-blue-500/20 to-blue-500/10' },
];

export default function DashboardSection() {
  return (
    <section
      id="dashboard"
      className="relative min-h-screen w-full bg-background py-20 overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-t from-primary/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-40 w-80 h-80 bg-gradient-to-b from-accent/15 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Intelligence <span className="text-primary">Dashboard</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-time insights and comprehensive analytics in one unified workspace designed for decision-makers.
          </p>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border/50 bg-card/30 backdrop-blur overflow-hidden hover:border-primary/20 transition-all"
        >
          {/* Header */}
          <div className="border-b border-border/50 bg-card/50 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                ✕
              </div>
              <div>
                <h3 className="font-semibold">Xai Intelligence Workspace</h3>
                <p className="text-xs text-muted-foreground">Real-time Analytics Dashboard</p>
              </div>
            </div>
            <motion.button
              whileHover={{ rotate: 90 }}
              className="text-muted-foreground hover:text-foreground transition"
            >
              <Settings className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Metrics Grid */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                    className={`p-4 rounded-xl bg-gradient-to-br ${metric.color} border border-border/30 hover:border-border/60 transition`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-xs font-semibold text-green-500">{metric.change}</span>
                    </div>
                    <p className="text-2xl font-bold mb-1">{metric.value}</p>
                    <p className="text-xs text-muted-foreground">{metric.label}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Charts Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Line Chart */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="p-4 rounded-xl bg-card/50 border border-border/30"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold">Performance Trend</h4>
                  <MoreVertical className="w-4 h-4 text-muted-foreground" />
                </div>
                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" style={{ fontSize: '12px' }} />
                    <YAxis stroke="rgba(255,255,255,0.5)" style={{ fontSize: '12px' }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1a1a2e',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '8px',
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#7c3aed"
                      fillOpacity={1}
                      fill="url(#colorValue)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </motion.div>

              {/* Bar Chart */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="p-4 rounded-xl bg-card/50 border border-border/30"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold">Revenue Distribution</h4>
                  <MoreVertical className="w-4 h-4 text-muted-foreground" />
                </div>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" style={{ fontSize: '12px' }} />
                    <YAxis stroke="rgba(255,255,255,0.5)" style={{ fontSize: '12px' }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1a1a2e',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '8px',
                      }}
                    />
                    <Bar dataKey="revenue" fill="#a78bfa" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </motion.div>

              {/* Line Chart */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="p-4 rounded-xl bg-card/50 border border-border/30 md:col-span-2"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold">User Growth & Revenue</h4>
                  <MoreVertical className="w-4 h-4 text-muted-foreground" />
                </div>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" style={{ fontSize: '12px' }} />
                    <YAxis stroke="rgba(255,255,255,0.5)" style={{ fontSize: '12px' }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1a1a2e',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '8px',
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="users"
                      stroke="#7c3aed"
                      dot={false}
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="#34d399"
                      dot={false}
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
