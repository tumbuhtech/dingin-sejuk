import { Star } from "lucide-react";
import FadeInSection from "./FadeInSection";

const testimonials = [
  { name: "Budi Santoso", city: "Jakarta Selatan", text: "AC saya sudah tidak dingin berbulan-bulan, setelah di-service langsung dingin lagi! Teknisinya ramah dan cepat. Recommended banget!", rating: 5 },
  { name: "Siti Rahayu", city: "Depok", text: "Cuci AC di rumah, hasilnya bersih banget. Harga sesuai yang dibilang di awal, tidak ada tambahan biaya. Puas!", rating: 5 },
  { name: "Andi Pratama", city: "Bekasi", text: "Bongkar pasang AC untuk pindah rumah, pekerjaannya rapi dan cepat. Garansinya bikin tenang. Terima kasih!", rating: 5 },
  { name: "Diana Putri", city: "Tangerang", text: "Responsnya cepat sekali, pagi hubungi siang sudah datang. AC kantor kami sekarang sejuk kembali. Sangat profesional!", rating: 5 },
  { name: "Hendra Wijaya", city: "Bogor", text: "Maintenance AC kantor bulanan sangat memuaskan. Teknisi selalu tepat waktu dan bekerja rapi. Highly recommended!", rating: 5 },
];

const TestimonialsSection = () => {
  return (
    <section id="testimoni" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Apa Kata <span className="text-gradient">Pelanggan Kami</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Kepercayaan pelanggan adalah bukti kualitas layanan kami.
            </p>
          </div>
        </FadeInSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeInSection key={t.name} delay={i * 100}>
              <div className="p-6 rounded-xl bg-card border border-border card-hover h-full flex flex-col">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-foreground text-sm leading-relaxed mb-4 flex-1">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.city}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
