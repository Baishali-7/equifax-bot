import { useState, useEffect, useRef } from "react";
import {
  Calculator,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Zap,
  Target,
  ArrowUpRight,
  BarChart3,
} from "lucide-react";

const ScoreCalculator = () => {
  const [paymentHistory, setPaymentHistory] = useState(95);
  const [creditUtilization, setCreditUtilization] = useState(30);
  const [accountAge, setAccountAge] = useState(7);
  const [creditMix, setCreditMix] = useState(3);
  const [isVisible, setIsVisible] = useState(false);
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
        rootMargin: "0px 0px -50px 0px",
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

  const calculateScore = () => {
    const paymentWeight = (paymentHistory / 100) * 350;
    const utilizationWeight = ((100 - creditUtilization) / 100) * 300;
    const ageWeight = Math.min(accountAge / 15, 1) * 150;
    const mixWeight = (creditMix / 5) * 100;
    return Math.round(
      300 + paymentWeight + utilizationWeight + ageWeight + mixWeight
    );
  };

  const score = calculateScore();

  const getScoreColor = () => {
    if (score >= 750) return "text-emerald-600";
    if (score >= 670) return "text-emerald-500";
    if (score >= 580) return "text-yellow-500";
    return "text-red-500";
  };

  const getScoreLabel = () => {
    if (score >= 750) return "Excellent";
    if (score >= 670) return "Good";
    if (score >= 580) return "Fair";
    return "Poor";
  };

  const getScoreAdvice = () => {
    const advice = [];
    if (paymentHistory < 95) advice.push("Improve payment consistency");
    if (creditUtilization > 30)
      advice.push("Reduce credit utilization below 30%");
    if (accountAge < 5) advice.push("Maintain older accounts");
    if (creditMix < 3) advice.push("Diversify credit types");
    return advice.length ? advice : ["Great job! Maintain current habits"];
  };

  const Slider = ({ value, setValue, min, max, step, label, unit }) => (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-emerald-600 font-medium">
          {value}
          {unit}
        </span>
      </div>
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full h-2 rounded-full appearance-none bg-emerald-100 cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-emerald-600 [&::-webkit-slider-thumb]:hover:bg-emerald-700 [&::-webkit-slider-thumb]:transition-colors"
      />
    </div>
  );

  const factors = [
    {
      label: "Payment History (35%)",
      value: paymentHistory,
      setValue: setPaymentHistory,
      min: 50,
      max: 100,
      unit: "%",
      icon: <CheckCircle className="w-4 h-4" />,
    },
    {
      label: "Credit Utilization (30%)",
      value: creditUtilization,
      setValue: setCreditUtilization,
      min: 0,
      max: 100,
      unit: "%",
      icon: <BarChart3 className="w-4 h-4" />,
    },
    {
      label: "Account Age (15%)",
      value: accountAge,
      setValue: setAccountAge,
      min: 0,
      max: 20,
      unit: " yrs",
      icon: <Target className="w-4 h-4" />,
    },
    {
      label: "Credit Mix (10%)",
      value: creditMix,
      setValue: setCreditMix,
      min: 1,
      max: 5,
      unit: " types",
      icon: <TrendingUp className="w-4 h-4" />,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="features"
      className="py-24 bg-gradient-to-br from-[#f6fbf8] to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            Interactive Simulator
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Credit Score Calculator
          </h2>

          <p className="text-lg text-gray-600">
            Adjust the factors below to see how your credit score can change in
            real time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Controls Panel */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-4"
            }`}
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-emerald-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Credit Factors
                  </h3>
                  <p className="text-sm text-gray-600">
                    Drag sliders to adjust each factor
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                {factors.map((factor, index) => (
                  <div
                    key={factor.label}
                    className={`transition-all duration-700 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{
                      transitionDelay: isVisible
                        ? `${300 + index * 100}ms`
                        : "0ms",
                    }}
                  >
                    <Slider {...factor} step={1} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Score Display Panel */}
          <div className="space-y-6">
            {/* Main Score Card */}
            <div
              className={`transition-all duration-700 delay-500 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-4"
              }`}
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-emerald-100 text-center">
                <p className="text-gray-500 mb-2">Estimated Score</p>
                <div
                  className={`text-7xl font-extrabold mb-2 transition-colors duration-300 ${getScoreColor()}`}
                >
                  {score}
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 mb-8">
                  {score >= 670 ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    <AlertCircle className="w-4 h-4" />
                  )}
                  <span className="font-medium">{getScoreLabel()}</span>
                </div>

                <div className="mb-2">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>300</span>
                    <span className="font-medium">Credit Score Range</span>
                    <span>850</span>
                  </div>
                  <div className="h-3 bg-emerald-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-600 transition-all duration-500 ease-out"
                      style={{ width: `${((score - 300) / 550) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>Poor</span>
                  <span>Fair</span>
                  <span>Good</span>
                  <span>Excellent</span>
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div
              className={`transition-all duration-700 delay-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-100">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Recommendations
                    </h4>
                    <p className="text-xs text-gray-500">
                      Personalized suggestions
                    </p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {getScoreAdvice().map((advice, index) => (
                    <li
                      key={index}
                      className={`flex items-start gap-3 text-sm transition-all duration-500 ${
                        isVisible
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-4"
                      }`}
                      style={{
                        transitionDelay: isVisible
                          ? `${800 + index * 100}ms`
                          : "0ms",
                      }}
                    >
                      <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-medium">
                        {index + 1}
                      </span>
                      <span className="text-gray-600">{advice}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Simple indicator */}
        {isVisible && (
          <div
            className="text-center mt-12 transition-all duration-700"
            style={{ transitionDelay: "1000ms" }}
          >
            <div className="inline-flex items-center gap-2 text-sm text-emerald-600">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <span>Score updates in real-time as you adjust sliders</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ScoreCalculator;
