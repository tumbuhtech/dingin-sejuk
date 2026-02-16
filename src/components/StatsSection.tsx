import { Zap, Users, Clock3, MapPin, Star, Wrench } from "lucide-react";
import FadeInSection from "./FadeInSection";

const stats = [
  { icon: Users, value: "5.000+", label: "Pelanggan Puas" },
  { icon: Wrench, value: "15.000+", label: "AC Telah Ditangani" },
  { icon: Clock3, value: "10+", label: "Tahun Pengalaman" },
  { icon: MapPin, value: "5", label: "Kota Terjangkau" },
  { icon: Star, value: "4.9", label: "Rating Google" },
  { icon: Zap, value: "<1 Jam", label: "Rata-rata Respon" },
];

const StatsSection = () => {
  return (
    <section className="py-12 md:py-16 px-4 bg-primary">
      <div className="container mx-auto max-w-6xl">
        <FadeInSection>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <s.icon className="w-6 h-6 text-primary-foreground/60 mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-extrabold text-primary-foreground">{s.value}</div>
                <div className="text-primary-foreground/70 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default StatsSection;
