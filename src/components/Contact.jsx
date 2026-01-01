import { useState, useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Users,
  Clock,
} from "lucide-react";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess(false);

    // simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    });

    setIsSubmitting(false);
    setSuccess(true);

    // Reset success message after 5 seconds
    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactItems = [
    {
      icon: <Mail className="w-5 h-5 text-white" />,
      label: "Email Us",
      value: "XXX",
      href: "mailto:contact@creditguard.com",
      delay: 300,
    },
    {
      icon: <Phone className="w-5 h-5 text-white" />,
      label: "Call Us",
      value: "XXX",
      href: "tel:+18005551234",
      delay: 450,
    },
    {
      icon: <MapPin className="w-5 h-5 text-white" />,
      label: "Visit Us",
      value: "XXX",
      delay: 600,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 bg-gradient-to-br from-[#f6fbf8] to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div>
            <div
              className={`inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Get in Touch
            </div>

            <h2
              className={`text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Contact Information
            </h2>

            <p
              className={`text-lg text-gray-600 mb-8 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              Schedule a demo of our automated credit platform and learn how it
              integrates with your existing systems.
            </p>

            {/* Contact Stats */}
            <div
              className={`flex flex-wrap gap-4 mb-8 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm">
                <Clock className="w-4 h-4" />
                <span>24h response time</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm">
                <Users className="w-4 h-4" />
                <span>Expert support</span>
              </div>
            </div>

            <div className="space-y-4 mb-12">
              {contactItems.map((item, index) => (
                <div
                  key={item.label}
                  className={`transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${item.delay}ms` }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{item.label}</p>
                        <p className="font-medium text-gray-900 transition-colors duration-300 group-hover:text-emerald-600">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-200">
                      <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{item.label}</p>
                        <p className="font-medium text-gray-900">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Request a Demo
              </h3>
              <p className="text-gray-600 mb-8">
                Fill out the form and we'll reach out within 24 hours.
              </p>

              {success && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 text-emerald-700 text-sm font-medium flex items-center gap-3 animate-fade-in">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>
                    Message sent successfully! We'll get back to you soon.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div
                    className={`transition-all duration-700 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: "800ms" }}
                  >
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name *"
                      required
                      className="h-12 w-full rounded-xl border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300 focus:border-emerald-500"
                    />
                  </div>
                  <div
                    className={`transition-all duration-700 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: "850ms" }}
                  >
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Work Email *"
                      required
                      className="h-12 w-full rounded-xl border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300 focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div
                  className={`transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: "900ms" }}
                >
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name *"
                    required
                    className="h-12 w-full rounded-xl border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300 focus:border-emerald-500"
                  />
                </div>

                <div
                  className={`transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: "950ms" }}
                >
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    rows={4}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300 focus:border-emerald-500"
                  />
                </div>

                <div
                  className={`transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: "1000ms" }}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 hover:shadow-md active:scale-[0.98]"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>

                <p
                  className={`text-xs text-center text-gray-500 transition-all duration-700 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ transitionDelay: "1050ms" }}
                >
                  By submitting, you agree to our Privacy Policy and Terms.
                </p>
              </form>
            </div>

            {/* Form Success Animation */}
            {success && (
              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-2 text-sm text-emerald-600 animate-pulse">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span>We'll contact you shortly</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
