import { MapPin } from "lucide-react";
import FadeInSection from "./FadeInSection";

const areas = [
  "Citra Grand", "Raffles Hills", "Kota Wisata", "Legenda Wisata",
  "Bukit Golf", "Villa Nusa Indah", "Taman Kenari Nusantara", "The Address",
  "Magohani", "Cibubur Residence", "Grand Cibubur", "Puri Sriwedari",
  "Kranggan Permai", "Cibubur Country", "Permata Puri Laguna", "Permata Puri",
  "Pondok Cibubur", "Cibubur Indah", "Villa Cibubur Indah", "Bukit Permai",
  "Wilayah Jambore", "Lapangan Tembak", "Dan sekitarnya"
];

const AreaSection = () => {
  return (
    <section id="area" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <FadeInSection>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Area <span className="text-gradient">Layanan</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Melayani wilayah Cibubur dan sekitarnya.
            </p>
          </div>
        </FadeInSection>
        <FadeInSection delay={100}>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <div key={area} className="flex items-center gap-2 px-5 py-3 rounded-full bg-secondary border border-border text-foreground text-sm font-medium hover:bg-primary/10 transition-colors cursor-default">
                <MapPin className="w-4 h-4 text-primary" />
                {area}
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default AreaSection;
