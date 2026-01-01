import React from "react";
import { ArrowRight, Shield, Zap, BarChart3 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-[#f6fbf8] to-white">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse 2s ease-in-out infinite;
        }
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>

      {/* Background - Simplified to match the second example */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(5,150,105,0.08),transparent_50%)] animate-pulse-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(5,150,105,0.06),transparent_50%)] animate-pulse-slow delay-100" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6 animate-fadeInUp opacity-0">
              <Zap className="w-4 h-4" />
              Real-time Credit Intelligence
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-6 animate-fadeInUp opacity-0 delay-100">
              Automated Credit
              <span className="block text-emerald-600">
                Reporting & Monitoring
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 mb-8 animate-fadeInUp opacity-0 delay-200">
              Enable instant credit decisions with comprehensive automated
              reports, real-time risk assessment, and continuous monitoring of
              customer financial health.
            </p>

            {/* Trust */}
            <div className="mt-12 pt-8 border-t border-gray-200 animate-fadeInUp opacity-0 delay-300">
              <p className="text-sm text-gray-500 mb-4">
                Trusted by leading financial institutions
              </p>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-8 max-w-md ml-auto animate-slideInRight opacity-0 delay-200 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex justify-between mb-6">
                <div>
                  <p className="text-sm text-gray-500">Credit Score</p>
                  <p className="text-4xl font-bold text-emerald-600">742</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-emerald-600" />
                </div>
              </div>

              {[
                { label: "Payment History", value: "98%" },
                { label: "Credit Utilization", value: "23%" },
                { label: "Account Age", value: "85%" },
              ].map((item) => (
                <div key={item.label} className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">{item.label}</span>
                    <span className="text-emerald-600 font-medium">
                      {item.value}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-600 rounded-full"
                      style={{ width: item.value }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl border border-gray-100 shadow-lg animate-float">
              <div className="flex items-center gap-3">
                <Shield className="text-emerald-600" />
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    Fraud Alert
                  </p>
                  <p className="text-xs text-gray-500">No issues detected</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl border border-gray-100 shadow-lg animate-float delay-200">
              <div className="flex items-center gap-3">
                <Zap className="text-emerald-600" />
                <div>
                  <p className="text-sm font-medium text-gray-800">Real-time</p>
                  <p className="text-xs text-gray-500">Updates every 24h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
