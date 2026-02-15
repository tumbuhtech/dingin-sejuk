import { Snowflake, Wind, Droplets, ArrowRightLeft, ThermometerSun, Building2 } from "lucide-react";
import FadeInSection from "./FadeInSection";

const services = [
  { icon: Snowflake, title: "Service Cuci AC", desc: "Pembersihan total indoor & outdoor (berkala) untuk AC lebih dingin dan sehat." },
  { icon: ArrowRightLeft, title: "Bongkar & Pasang AC", desc: "Layanan bongkar pasang AC termasuk vakum untuk pindah rumah atau renovasi." },
  { icon: Wind, title: "Pasang AC Baru", desc: "Pemasangan unit baru yang rapi, termasuk proses vakum sesuai standar." },
  { icon: Droplets, title: "Service Besar / Overhaul", desc: "Perawatan mendalam untuk AC yang sangat kotor atau bermasalah berat." },
  { icon: ThermometerSun, title: "Isi Freon AC", desc: "Penambahan atau pengisian ulang freon berkualitas sesuai jenis AC Anda." },
  { icon: Building2, title: "Jual Beli & Spare Part", desc: "Layanan tambahan penjualan spare part AC dan jual beli AC bekas berkualitas." },
];

const ServicesSection = () => {
  return (
    <section id="layanan" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Layanan <span className="text-gradient">Kami</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Berbagai layanan AC untuk kebutuhan rumah dan bisnis Anda.
            </p>
          </div>
        </FadeInSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <FadeInSection key={s.title} delay={i * 80}>
              <div className="p-6 rounded-xl bg-card border border-border card-hover group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
