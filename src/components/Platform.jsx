import { Shield, Zap, BarChart3, FileCheck, Clock, Lock } from "lucide-react";
import { useInView } from "react-intersection-observer";

const features = [
  {
    icon: Zap,
    title: "Instant Credit Decisions",
    description:
      "Automated credit scoring enables real-time decisions, reducing approval time from days to seconds.",
  },
  {
    icon: BarChart3,
    title: "Continuous Monitoring",
    description:
      "24/7 surveillance of customer credit profiles with instant alerts for significant changes.",
  },
  {
    icon: FileCheck,
    title: "Comprehensive Reports",
    description:
      "Detailed credit reports with payment history, utilization, and risk indicators in one view.",
  },
  {
    icon: Shield,
    title: "Fraud Detection",
    description:
      "Advanced AI algorithms identify suspicious patterns and potential fraud in real-time.",
  },
  {
    icon: Clock,
    title: "Historical Analysis",
    description:
      "Track credit behavior trends over time to predict future creditworthiness accurately.",
  },
  {
    icon: Lock,
    title: "Bank-Grade Security",
    description:
      "Enterprise-level encryption and compliance with SOC 2, GDPR, and industry regulations.",
  },
];

const PlatformSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="platform"
      ref={ref}
      className="py-24 bg-gradient-to-br from-[#f6fbf8] to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ease-out ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span
            className={`inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4 transition-all duration-700 ease-out ${
              inView ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Platform Summary
          </span>

          <h2
            className={`text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 transition-all duration-700 ease-out ${
              inView ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Core Automation Capabilities
          </h2>

          <p
            className={`text-lg text-gray-600 transition-all duration-700 ease-out ${
              inView ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            Our platform automates comprehensive credit reporting, enabling
            instant decisions and continuous monitoring of customer financial
            health.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group bg-white rounded-2xl p-8 shadow-sm border border-emerald-100 hover:shadow-xl hover:border-emerald-200 transition-all duration-500 ease-out ${
                inView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{
                transitionDelay: `${400 + index * 100}ms`,
              }}
            >
              <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-all duration-300" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          className={`mt-20 grid grid-cols-2 lg:grid-cols-4 gap-10 transition-all duration-1000 ease-out ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          {[
            { value: "99.9%", label: "Uptime SLA" },
            { value: "<50ms", label: "Response Time" },
            { value: "500M+", label: "Reports Generated" },
            { value: "10K+", label: "Active Businesses" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ease-out ${
                inView ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: `${1100 + index * 100}ms` }}
            >
              <p className="text-3xl sm:text-4xl font-extrabold text-emerald-600 mb-2">
                {stat.value}
              </p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
