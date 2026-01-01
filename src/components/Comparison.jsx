import { useState, useEffect } from "react";
import { Check, X, Minus, ChevronRight } from "lucide-react";
import { useInView } from "react-intersection-observer";

const features = [
  {
    name: "Real-time Credit Monitoring",
    creditGuard: true,
    experian: true,
    transUnion: true,
  },
  {
    name: "Instant Credit Decisions (<1s)",
    creditGuard: true,
    experian: "partial",
    transUnion: false,
  },
  {
    name: "Fraud Detection AI",
    creditGuard: true,
    experian: true,
    transUnion: "partial",
  },
  {
    name: "Custom Risk Scoring Models",
    creditGuard: true,
    experian: "partial",
    transUnion: false,
  },
  {
    name: "API Response Time",
    creditGuard: "<50ms",
    experian: "~200ms",
    transUnion: "~300ms",
  },
  {
    name: "Data Accuracy Rate",
    creditGuard: "99.8%",
    experian: "98.5%",
    transUnion: "97.9%",
  },
  {
    name: "Global Coverage",
    creditGuard: true,
    experian: true,
    transUnion: "partial",
  },
  {
    name: "White-label Solutions",
    creditGuard: true,
    experian: false,
    transUnion: false,
  },
  {
    name: "Dedicated Support",
    creditGuard: "24/7",
    experian: "Business Hours",
    transUnion: "Business Hours",
  },
  {
    name: "Custom Integrations",
    creditGuard: true,
    experian: "partial",
    transUnion: false,
  },
  {
    name: "Compliance Dashboard",
    creditGuard: true,
    experian: true,
    transUnion: true,
  },
  {
    name: "Historical Data (Years)",
    creditGuard: "10+",
    experian: "7",
    transUnion: "7",
  },
];

const filterCategories = [
  { label: "All Features", value: "all" },
  { label: "Speed & Performance", value: "speed" },
  { label: "Features", value: "features" },
  { label: "Support", value: "support" },
];

const ComparisonTable = () => {
  const [filter, setFilter] = useState("all");
  const [visibleRows, setVisibleRows] = useState([]);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const filteredFeatures = features.filter((feature) => {
    if (filter === "all") return true;
    if (filter === "speed")
      return feature.name.includes("Time") || feature.name.includes("Instant");
    if (filter === "features")
      return (
        feature.name.includes("Detection") || feature.name.includes("Scoring")
      );
    if (filter === "support")
      return (
        feature.name.includes("Support") || feature.name.includes("Dashboard")
      );
    return true;
  });

  // Animate rows sequentially
  useEffect(() => {
    if (inView) {
      filteredFeatures.forEach((_, index) => {
        setTimeout(() => {
          setVisibleRows((prev) => [...prev, index]);
        }, index * 50);
      });
    } else {
      setVisibleRows([]);
    }
  }, [inView, filter]);

  const renderValue = (value, column, rowIndex) => {
    const isCreditGuard = column === "creditGuard";
    const animationDelay = `${rowIndex * 50 + 200}ms`;

    if (value === true) {
      return (
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto transition-all duration-500 transform ${
            visibleRows.includes(rowIndex)
              ? "scale-100 opacity-100"
              : "scale-0 opacity-0"
          }`}
          style={{
            animationDelay,
            backgroundColor: isCreditGuard ? "#10b981" : "#d1fae5",
          }}
        >
          <Check className="w-4 h-4 text-white" />
        </div>
      );
    }
    if (value === false) {
      return (
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto transition-all duration-500 transform ${
            visibleRows.includes(rowIndex)
              ? "scale-100 opacity-100"
              : "scale-0 opacity-0"
          }`}
          style={{ animationDelay }}
        >
          <div className="w-full h-full rounded-full bg-red-100 flex items-center justify-center">
            <X className="w-4 h-4 text-red-600" />
          </div>
        </div>
      );
    }
    if (value === "partial") {
      return (
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto transition-all duration-500 transform ${
            visibleRows.includes(rowIndex)
              ? "scale-100 opacity-100"
              : "scale-0 opacity-0"
          }`}
          style={{ animationDelay }}
        >
          <div className="w-full h-full rounded-full bg-yellow-100 flex items-center justify-center">
            <Minus className="w-4 h-4 text-yellow-600" />
          </div>
        </div>
      );
    }
    return (
      <span
        className={`font-medium text-gray-900 inline-block transition-all duration-500 transform ${
          visibleRows.includes(rowIndex)
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0"
        }`}
        style={{ animationDelay }}
      >
        {value}
      </span>
    );
  };

  return (
    <section
      id="comparison"
      ref={ref}
      className="py-24 bg-gradient-to-br from-[#f6fbf8] to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 transform ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span
            className={`inline-flex px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4 transition-all duration-700 transform ${
              inView ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Competitive Analysis
          </span>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 transition-all duration-700 transform ${
              inView ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            How We Compare
          </h2>
          <p
            className={`text-lg text-gray-600 transition-all duration-700 transform ${
              inView ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            See how Equifax.bot stacks up against major credit bureaus in speed,
            accuracy, and features.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-10 transition-all duration-700 transform ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          {filterCategories.map((cat, index) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 ${
                filter === cat.value
                  ? "bg-emerald-600 text-white shadow-lg scale-105"
                  : "border border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:shadow-md hover:scale-105"
              }`}
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Table */}
        <div
          className={`bg-white rounded-2xl shadow-xl border border-emerald-100 overflow-hidden transition-all duration-1000 transform ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-emerald-100">
                  <th className="text-left p-6 font-semibold text-gray-900">
                    Feature
                  </th>
                  <th className="p-6 text-center">
                    <div
                      className={`inline-flex items-center gap-2 font-bold text-emerald-700 px-4 py-2 rounded-lg transition-all duration-500 transform ${
                        inView ? "scale-100 opacity-100" : "scale-90 opacity-0"
                      }`}
                      style={{ transitionDelay: "700ms" }}
                    >
                      <span>Equifax.bot</span>
                      <div className="relative">
                        <div className="absolute -inset-1 bg-emerald-200 rounded-full blur opacity-75 animate-pulse"></div>
                        <div className="relative w-2 h-2 bg-emerald-600 rounded-full"></div>
                      </div>
                    </div>
                  </th>
                  <th className="p-6 text-center">
                    <div
                      className={`font-semibold text-gray-700 transition-all duration-500 transform ${
                        inView
                          ? "translate-x-0 opacity-100"
                          : "translate-x-5 opacity-0"
                      }`}
                      style={{ transitionDelay: "750ms" }}
                    >
                      Experian
                    </div>
                  </th>
                  <th className="p-6 text-center">
                    <div
                      className={`font-semibold text-gray-700 transition-all duration-500 transform ${
                        inView
                          ? "translate-x-0 opacity-100"
                          : "translate-x-5 opacity-0"
                      }`}
                      style={{ transitionDelay: "800ms" }}
                    >
                      TransUnion
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredFeatures.map((feature, index) => (
                  <tr
                    key={feature.name}
                    className={`border-b border-emerald-50 transition-all duration-500 transform hover:bg-emerald-50/60 ${
                      visibleRows.includes(index)
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-5 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <td className="p-6 font-medium text-gray-900">
                      <div
                        className={`flex items-center gap-2 transition-all duration-500 transform ${
                          visibleRows.includes(index)
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-5 opacity-0"
                        }`}
                      >
                        <ChevronRight className="w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {feature.name}
                      </div>
                    </td>
                    <td className="p-6 text-center bg-gradient-to-r from-emerald-50/80 to-emerald-50/40">
                      {renderValue(feature.creditGuard, "creditGuard", index)}
                    </td>
                    <td className="p-6 text-center">
                      {renderValue(feature.experian, "experian", index)}
                    </td>
                    <td className="p-6 text-center">
                      {renderValue(feature.transUnion, "transUnion", index)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-10 transition-all duration-1000 transform ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          <p className="text-sm text-gray-500 mb-4">
            Data based on public sources and internal benchmarks
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
