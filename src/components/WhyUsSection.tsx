import { CheckCircle2 } from "lucide-react";
import FadeInSection from "./FadeInSection";

const reasons = [
  "Teknisi berpengalaman & bersertifikat",
  "Respon cepat — bisa hari yang sama",
  "Harga jujur & transparan, tanpa biaya tersembunyi",
  "Bergaransi untuk setiap pekerjaan",
  "Melayani rumah, apartemen, kantor & gedung",
  "Peralatan lengkap & modern",
];

const WhyUsSection = () => {
  return (
    <section id="keunggulan" className="section-padding bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeInSection>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Kenapa Pilih <span className="text-gradient">Kami?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Kepuasan pelanggan adalah prioritas utama kami. Berikut alasan ribuan orang mempercayakan AC mereka kepada kami.
              </p>
              <div className="space-y-4">
                {reasons.map((r, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground font-medium">{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
          <FadeInSection delay={200}>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 text-center">
              <div className="text-6xl font-extrabold text-gradient mb-2">5000+</div>
              <p className="text-muted-foreground text-lg mb-6">Pelanggan Puas</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card rounded-xl p-4 border border-border">
                  <div className="text-2xl font-bold text-foreground">10+</div>
                  <p className="text-muted-foreground text-sm">Tahun Pengalaman</p>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border">
                  <div className="text-2xl font-bold text-foreground">50+</div>
                  <p className="text-muted-foreground text-sm">Teknisi Terlatih</p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
