import { Phone, MapPin, Clock } from "lucide-react";

const WA_LINK = "https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20service%20AC";

const FooterSection = () => {
  return (
    <footer className="bg-foreground text-background/80 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-background mb-3">❄️ CoolAC Service</h3>
            <p className="text-sm leading-relaxed text-background/60">
              Jasa service AC profesional terpercaya di Jabodetabek. Melayani dengan cepat, rapi, dan bergaransi.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-background mb-3">Kontak</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">
                  0812-3456-7890
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Jl. Sejuk Raya No. 123, Jakarta Selatan</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Senin – Minggu, 07.00 – 21.00 WIB</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-background mb-3">Layanan</h4>
            <ul className="space-y-1 text-sm text-background/60">
              <li>Service AC</li>
              <li>Cuci AC</li>
              <li>Isi Freon</li>
              <li>Bongkar Pasang AC</li>
              <li>Maintenance Kantor</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/10 pt-6 text-center text-sm text-background/40">
          © {new Date().getFullYear()} CoolAC Service. Semua hak dilindungi.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
