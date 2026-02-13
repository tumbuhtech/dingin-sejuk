import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import FadeInSection from "./FadeInSection";

const faqs = [
  { q: "Berapa harga service AC?", a: "Harga service AC mulai dari Rp 150.000 tergantung jenis layanan dan kondisi AC. Kami akan memberikan estimasi harga sebelum pengerjaan, tanpa biaya tersembunyi." },
  { q: "Apakah bisa panggilan hari ini?", a: "Ya! Kami melayani panggilan di hari yang sama untuk area Jabodetabek. Hubungi kami sebelum jam 14.00 untuk layanan hari yang sama." },
  { q: "Apakah ada garansi?", a: "Tentu! Setiap pekerjaan kami berikan garansi. Garansi service 30 hari dan garansi spare part sesuai ketentuan produsen." },
  { q: "Melayani AC apa saja?", a: "Kami melayani semua merek dan tipe AC: split, cassette, standing floor, central, dan ducting. Merek apapun kami tangani." },
  { q: "Area mana saja yang dilayani?", a: "Kami melayani seluruh area Jabodetabek: Jakarta, Depok, Bekasi, Tangerang, dan Bogor. Hubungi kami untuk konfirmasi area Anda." },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl">
        <FadeInSection>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pertanyaan yang Sering <span className="text-gradient">Ditanyakan</span>
            </h2>
          </div>
        </FadeInSection>
        <FadeInSection delay={100}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-xl px-6 bg-card">
                <AccordionTrigger className="text-foreground font-semibold text-left hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeInSection>
      </div>
    </section>
  );
};

export default FAQSection;
