import FadeInSection from "./FadeInSection";

const brands = [
  "Daikin", "Panasonic", "Samsung", "LG", "Sharp",
  "Mitsubishi", "Gree", "Midea", "Haier", "Toshiba",
  "Hitachi", "Aux",
];

const BrandsSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto max-w-6xl">
        <FadeInSection>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Merek AC yang Kami <span className="text-gradient">Tangani</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Kami berpengalaman menangani semua merek AC ternama.
            </p>
          </div>
        </FadeInSection>
        <FadeInSection delay={100}>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {brands.map((brand) => (
              <div
                key={brand}
                className="flex items-center justify-center h-20 rounded-xl bg-background border border-border card-hover"
              >
                <span className="font-bold text-foreground/70 text-lg">{brand}</span>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default BrandsSection;
