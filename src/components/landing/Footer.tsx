import { Leaf } from "lucide-react";

const footerLinks = {
  layanan: [
    { label: "Konsultansi Lingkungan", href: "#layanan" },
    { label: "Pendampingan CSR", href: "#layanan" },
    { label: "Pelatihan Lingkungan", href: "#layanan" },
  ],
  perusahaan: [
    { label: "Tentang Kami", href: "#tentang" },
    { label: "Keunggulan", href: "#keunggulan" },
    { label: "Testimoni", href: "#testimoni" },
  ],
  bantuan: [
    { label: "FAQ", href: "#faq" },
    { label: "Kontak", href: "#kontak" },
  ],
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Leaf className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">Eco Enviro</span>
                <span className="text-xs leading-tight opacity-70">Indonesia</span>
              </div>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Partner for Sustainable Business and Environmental Excellence
            </p>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2">
              {footerLinks.layanan.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <h4 className="font-semibold mb-4">Perusahaan</h4>
            <ul className="space-y-2">
              {footerLinks.perusahaan.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Bantuan */}
          <div>
            <h4 className="font-semibold mb-4">Bantuan</h4>
            <ul className="space-y-2">
              {footerLinks.bantuan.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-70">
            © {currentYear} Eco Enviro Indonesia. All rights reserved.
          </p>
          <p className="text-sm opacity-70">envirobiz.id</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
