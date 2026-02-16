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
    <section id="tentang" className="section-padding bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <FadeInSection>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Tentang <span className="text-gradient">Kami</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Sahabat Cool AC merupakan jasa service AC yang bergerak di bidang pendingin ruangan dan telah melayani pelanggan di wilayah Cibubur dengan teknisi profesional berpengalaman lebih dari 10 tahun.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Pekerjaan rapi dan jujur",
                  "Respon cepat",
                  "Komunikasi yang mudah dipahami",
                  "Kepuasan pelanggan",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      ✓
                    </div>
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground">
                Sahabat Cool AC siap melayani kebutuhan AC rumah, ruko, kantor, maupun apartemen.
              </p>
            </FadeInSection>
          </div>
          <div className="order-1 md:order-2">
            <FadeInSection delay={200}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video md:aspect-square lg:aspect-video">
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Teknisi Service AC Cibubur Sahabat Cool AC"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
