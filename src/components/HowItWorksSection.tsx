import { Phone, ClipboardList, UserCheck, Wrench, ThumbsUp } from "lucide-react";
import FadeInSection from "./FadeInSection";

const steps = [
  { icon: Phone, step: "1", title: "Hubungi Kami", desc: "Chat via WhatsApp atau telepon, ceritakan keluhan AC Anda." },
  { icon: ClipboardList, step: "2", title: "Konsultasi & Estimasi", desc: "Teknisi kami memberikan estimasi harga dan waktu pengerjaan." },
  { icon: UserCheck, step: "3", title: "Teknisi Datang", desc: "Teknisi berpengalaman datang ke lokasi Anda sesuai jadwal." },
  { icon: Wrench, step: "4", title: "Pengerjaan", desc: "AC ditangani dengan peralatan modern dan standar tinggi." },
  { icon: ThumbsUp, step: "5", title: "Selesai & Bergaransi", desc: "AC kembali normal, Anda mendapat garansi pekerjaan." },
];

const HowItWorksSection = () => {
  return (
    <section id="cara-kerja" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <FadeInSection>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cara <span className="text-gradient">Pemesanan</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Proses mudah dan cepat, hanya 5 langkah untuk AC kembali dingin.
            </p>
          </div>
        </FadeInSection>
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-border" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((s, i) => (
              <FadeInSection key={s.title} delay={i * 100}>
                <div className="text-center relative">
                  <div className="relative z-10 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <s.icon className="w-7 h-7" />
                  </div>
                  <div className="text-xs font-bold text-primary mb-1">LANGKAH {s.step}</div>
                  <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
