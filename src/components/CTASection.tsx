import { Phone, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeInSection from "./FadeInSection";

const WA_LINK = "https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20service%20AC";

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary to-accent relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary-foreground/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>
      <div className="container relative z-10 mx-auto max-w-3xl text-center">
        <FadeInSection>
          <div className="inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <AlertTriangle className="w-4 h-4 text-primary-foreground" />
            <span className="text-primary-foreground text-sm font-medium">Jangan tunggu AC rusak total!</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-4">
            AC Bermasalah? Jangan Tunggu Rusak!
          </h2>
          <p className="text-primary-foreground/85 text-lg mb-8 max-w-xl mx-auto">
            Hubungi kami sekarang dan teknisi profesional siap datang ke lokasi Anda hari ini juga.
          </p>
          <Button variant="hero" size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <Phone className="!size-5" />
              Hubungi via WhatsApp
            </a>
          </Button>
        </FadeInSection>
      </div>
    </section>
  );
};

export default CTASection;
