import { useState, useEffect } from "react";
import { Menu, X, Shield, Search, User } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.pageYOffset;

      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation links based on your actual sections
  const navLinks = [
    { name: "Platform", href: "#platform" },
    { name: "Credit Score Calculator", href: "#features" },
    { name: "Error Checklist", href: "#error" },
    { name: "Location", href: "#locations" },
    { name: "Competitive Analysis", href: "#comparison" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  // Get progress percentage
  const getProgress = () => {
    if (typeof window === "undefined") return 0;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;
    return Math.min(scrolled, 100);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg border-b border-emerald-100"
            : "bg-gradient-to-r from-emerald-50/95 to-white/95 backdrop-blur-md border-b border-emerald-100/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center gap-3 group"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
            >
              <div className="relative">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-500 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300 ${
                    scrolled ? "shadow-emerald-200" : "shadow-emerald-100"
                  }`}
                >
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -inset-1 bg-emerald-400/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-600 bg-clip-text text-transparent">
                  Equifax.bot
                </span>
                <span className="text-xs text-gray-500 -mt-1">
                  Credit Education
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === link.href.replace("#", "")
                      ? "text-emerald-700 bg-emerald-50"
                      : "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/50"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 rounded-lg hover:bg-emerald-50 transition-colors text-gray-700"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-emerald-100 bg-white/95 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      activeSection === link.href.replace("#", "")
                        ? "text-emerald-700 bg-emerald-50"
                        : "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/50"
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Progress Indicator */}
      <div className="fixed top-16 lg:top-20 left-0 right-0 h-1 bg-emerald-100 z-40">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-300"
          style={{ width: `${getProgress()}%` }}
        />
      </div>
    </>
  );
};

export default Header;
