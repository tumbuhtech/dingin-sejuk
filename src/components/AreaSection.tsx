import { MapPin } from "lucide-react";
import FadeInSection from "./FadeInSection";

const areas = ["Jakarta Pusat", "Jakarta Selatan", "Jakarta Barat", "Jakarta Timur", "Jakarta Utara", "Depok", "Bekasi", "Tangerang", "Tangerang Selatan", "Bogor"];

const AreaSection = () => {
  return (
    <section id="area" className="section-padding bg-card">
      <div className="container mx-auto max-w-6xl">
        <FadeInSection>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Area <span className="text-gradient">Layanan</span>
            </h2>
            <p className="text-muted-foreground text-lg">Kami melayani area Jabodetabek dan sekitarnya</p>
          </div>
        </FadeInSection>
        <FadeInSection delay={100}>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <div key={area} className="flex items-center gap-2 px-5 py-3 rounded-full bg-background border border-border text-foreground text-sm font-medium card-hover">
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
