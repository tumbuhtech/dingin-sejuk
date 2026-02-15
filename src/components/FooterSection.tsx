import { Phone, MapPin, Clock } from "lucide-react";

const WA_LINK = "https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20service%20AC";

const FooterSection = () => {
  return (
    <footer className="bg-foreground text-background/80 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-background mb-3">❄️ Sahabat Cool AC</h3>
            <p className="text-sm leading-relaxed text-background/60">
              Jasa service AC terbaik di <strong>Cibubur</strong>. Melayani perumahan di Citra Grand, Kota Wisata, Raffles Hills, dan sekitarnya.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-background mb-3">Kontak</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">
                  0813-1616-3499 / 0852-8084-5245
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Area Cibubur & Sekitarnya</span>
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
              <li>Service Cuci AC</li>
              <li>Bongkar Pasang AC</li>
              <li>Pasang AC Baru</li>
              <li>Service Besar / Overhaul</li>
              <li>Isi Freon & Spare Part</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/10 pt-6 text-center text-sm text-background/40">
          © {new Date().getFullYear()} Sahabat Cool AC. Semua hak dilindungi.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
