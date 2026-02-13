import { Tag, Clock, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeInSection from "./FadeInSection";

const WA_LINK = "https://wa.me/6281234567890?text=Halo%2C%20saya%20tertarik%20promo%20cuci%20AC";

const promos = [
  {
    icon: Percent,
    badge: "HEMAT 30%",
    title: "Paket Cuci 2 Unit AC",
    desc: "Cuci 2 unit AC sekaligus dan dapatkan potongan harga 30%. Berlaku untuk AC split 1/2 PK – 2 PK.",
    price: "Mulai Rp 200.000",
    oldPrice: "Rp 300.000",
  },
  {
    icon: Tag,
    badge: "BEST SELLER",
    title: "Service + Cuci AC Lengkap",
    desc: "Paket lengkap pengecekan, service, dan cuci AC indoor & outdoor. Termasuk pengecekan freon.",
    price: "Mulai Rp 175.000",
    oldPrice: "Rp 250.000",
  },
  {
    icon: Clock,
    badge: "TERBATAS",
    title: "Maintenance Bulanan Kantor",
    desc: "Kontrak perawatan AC kantor bulanan mulai dari 4 unit. Prioritas panggilan darurat gratis.",
    price: "Hubungi Kami",
    oldPrice: null,
  },
];

const PromoSection = () => {
  return (
    <section id="promo" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Promo <span className="text-gradient">Spesial</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Dapatkan harga terbaik untuk layanan AC Anda. Promo terbatas!
            </p>
          </div>
        </FadeInSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promos.map((p, i) => (
            <FadeInSection key={p.title} delay={i * 120}>
              <div className="p-6 rounded-2xl bg-card border border-border card-hover flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {p.badge}
                  </span>
                </div>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <p.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{p.desc}</p>
                <div className="mb-4">
                  <span className="text-xl font-extrabold text-foreground">{p.price}</span>
                  {p.oldPrice && (
                    <span className="text-sm text-muted-foreground line-through ml-2">{p.oldPrice}</span>
                  )}
                </div>
                <Button variant="whatsapp" size="lg" className="w-full" asChild>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                    Ambil Promo Ini
                  </a>
                </Button>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
