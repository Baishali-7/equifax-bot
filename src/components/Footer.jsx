import { Shield, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Platform: ["Overview", "Features", "Security", "Pricing"],
    Resources: ["Documentation", "API Reference", "Case Studies", "Blog"],
    Company: ["About Us", "Careers", "Press", "Contact"],
    Legal: [
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "Compliance",
    ],
  };

  return (
    <footer className="bg-emerald-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Equifax.bot</span>
            </div>

            <p className="text-white/70 mb-6 max-w-xs">
              Automated credit reporting and monitoring solutions for modern
              businesses.
            </p>

            <div className="space-y-3 text-sm text-white/70">
              <a
                href="mailto:contact@creditguard.com"
                className="flex items-center gap-2 hover:text-white"
              >
                <Mail className="w-4 h-4" />
                XXX
              </a>
              <a
                href="tel:+18005551234"
                className="flex items-center gap-2 hover:text-white"
              >
                <Phone className="w-4 h-4" />
                XXX
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                XXX
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-white text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            © 2024 Equifax.bot. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs">
            {["SOC 2", "ISO 27001", "GDPR"].map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 rounded-full bg-white/10 text-white/70"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
