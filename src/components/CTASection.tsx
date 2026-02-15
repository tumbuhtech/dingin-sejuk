import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const WA_LINK = "https://wa.me/6281316163499?text=Halo%20Sahabat%20Cool%20AC%2C%20saya%20butuh%20layanan%20AC";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516156008625-3a9d60da92e5?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Butuh Service AC di Cibubur?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Hubungi Sahabat Cool AC sekarang dan dapatkan layanan terbaik dari teknisi berpengalaman.
        </p>
        <Button size="xl" variant="secondary" className="font-bold shadow-lg hover:shadow-xl transition-all" asChild>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
            <Phone className="mr-2 h-5 w-5" />
            WhatsApp & Pesan Sekarang
          </a>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
