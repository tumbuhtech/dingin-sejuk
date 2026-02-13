import { ShieldCheck, Headphones, BadgeCheck, Banknote } from "lucide-react";
import FadeInSection from "./FadeInSection";

const guarantees = [
  { icon: ShieldCheck, title: "Garansi 30 Hari", desc: "Jika AC bermasalah lagi dalam 30 hari, kami perbaiki gratis tanpa biaya tambahan." },
  { icon: Headphones, title: "Konsultasi Gratis 24/7", desc: "Tim kami siap menjawab pertanyaan seputar AC Anda kapan saja via WhatsApp." },
  { icon: BadgeCheck, title: "Spare Part Original", desc: "Kami hanya menggunakan spare part original dan freon berkualitas tinggi." },
  { icon: Banknote, title: "Bayar Setelah Beres", desc: "Tidak perlu bayar di muka. Bayar setelah AC Anda kembali normal dan Anda puas." },
];

const GuaranteeSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto max-w-6xl">
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Jaminan <span className="text-gradient">Kami</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Kami berkomitmen memberikan pelayanan terbaik dengan jaminan nyata.
            </p>
          </div>
        </FadeInSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((g, i) => (
            <FadeInSection key={g.title} delay={i * 100}>
              <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent border border-border card-hover">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <g.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{g.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{g.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
