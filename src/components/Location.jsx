import React, { useEffect, useRef, useState } from "react";
import { MapPin, Globe, Shield, Zap, Cloud, Lock } from "lucide-react";

const Location = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const regions = [
    {
      name: "North America",
      icon: <Globe className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-400",
      stats: "99.9% Uptime",
      delay: 300,
      features: ["SOC 2 Compliant", "Real-time Sync", "256-bit Encryption"],
    },
    {
      name: "Europe",
      icon: <Shield className="w-6 h-6" />,
      color: "from-teal-500 to-cyan-400",
      stats: "GDPR Compliant",
      delay: 450,
      features: ["GDPR Certified", "Local Processing", "Dual Backups"],
    },
    {
      name: "Asia-Pacific",
      icon: <Zap className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-400",
      stats: "< 50ms Latency",
      delay: 600,
      features: ["Low Latency", "Multi-Zone", "Disaster Recovery"],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="locations"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-[#f6fbf8] to-white"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`absolute w-64 h-64 rounded-full bg-gradient-to-br from-emerald-100/20 to-teal-100/10 ${
              isVisible ? "animate-float" : "opacity-0"
            }`}
            style={{
              top: `${20 + i * 20}%`,
              left: `${i * 25}%`,
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}
        {[1, 2].map((i) => (
          <div
            key={i}
            className={`absolute w-48 h-48 rounded-full bg-gradient-to-br from-teal-100/15 to-cyan-100/10 ${
              isVisible ? "animate-float-reverse" : "opacity-0"
            }`}
            style={{
              bottom: `${15 + i * 15}%`,
              right: `${i * 20}%`,
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header with typewriter effect */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className={`inline-flex px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <Globe className="w-4 h-4 mr-2 animate-spin-slow" />
            Global Infrastructure
          </div>

          <h2
            className={`text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <span className="relative inline-block">
              Locations & Infrastructure
              <span
                className={`absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 transition-all duration-1000 ${
                  isVisible ? "w-full" : "w-0"
                }`}
                style={{ transitionDelay: "800ms" }}
              />
            </span>
          </h2>

          <p
            className={`text-lg text-gray-600 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            A global network of data centers and operational hubs ensuring
            secure, reliable, and always-on credit data processing worldwide. We
            provide a global network of data centers and operational hubs that
            ensure secure and reliable credit data processing 24/7.
          </p>
        </div>

        {/* Bottom animation indicator */}
        {isVisible && (
          <div
            className="text-center mt-16 transition-all duration-1000"
            style={{ transitionDelay: "1000ms" }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-emerald-100 shadow-sm">
              <Cloud className="w-5 h-5 text-emerald-600 animate-bounce" />
              <span className="text-sm text-gray-600">
                <span className="font-semibold text-emerald-700">
                  Real-time
                </span>{" "}
                data synchronization across all regions
              </span>
              <div className="flex gap-1">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Add custom animations to global CSS or style tag */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes float-reverse {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(20px) rotate(-5deg);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 25s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-bounce {
          animation: bounce 2s ease-in-out infinite;
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </section>
  );
};

export default Location;
