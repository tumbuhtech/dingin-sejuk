import { Shield, Clock, Wrench, Award } from "lucide-react";
import FadeInSection from "./FadeInSection";

const features = [
  { icon: Wrench, title: "Teknisi Berpengalaman", desc: "Tim kami terdiri dari teknisi bersertifikat dengan pengalaman bertahun-tahun." },
  { icon: Clock, title: "Pelayanan Cepat & Rapi", desc: "Respon cepat dan pengerjaan rapi, tanpa meninggalkan bekas." },
  { icon: Shield, title: "Harga Transparan", desc: "Harga disampaikan di awal, tanpa biaya tersembunyi." },
  { icon: Award, title: "Bergaransi", desc: "Setiap pekerjaan kami berikan garansi untuk ketenangan Anda." },
];

const AboutSection = () => {
  return (
    <section id="tentang" className="section-padding bg-card">
      <div className="container mx-auto max-w-6xl">
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tentang <span className="text-gradient">Kami</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Kami adalah penyedia jasa service AC terpercaya yang telah melayani ribuan pelanggan di Jabodetabek.
              Dengan komitmen pada kualitas dan kepuasan pelanggan, kami siap menjadi solusi AC Anda.
            </p>
          </div>
        </FadeInSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <FadeInSection key={f.title} delay={i * 100}>
              <div className="text-center p-6 rounded-xl bg-background border border-border card-hover">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <f.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
