import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const WA_LINK = "https://wa.me/6281316163499?text=Halo%20Sahabat%20Cool%20AC%2C%20saya%20butuh%20layanan%20AC";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Jasa Service AC Cibubur Teknisi Profesional" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
      </div>
      <div className="container relative z-10 mx-auto max-w-6xl px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6 animate-fade-in-up">
            Jasa Service AC Cibubur
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 mb-10 animate-fade-in-up animate-delay-200">
            Sahabat Cool AC siap melayani service AC panggilan area Cibubur dan sekitarnya dengan teknisi berpengalaman, respon cepat, dan harga transparan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-300">
            <Button variant="hero" size="xl" asChild>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                <Phone className="!size-5" />
                WhatsApp & Pesan Sekarang
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#layanan">Lihat Layanan</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
