import { Check } from "lucide-react";
import FadeInSection from "./FadeInSection";
import { Button } from "@/components/ui/button";

const pricingData = [
    {
        title: "Cuci AC",
        items: [
            { label: "0.5 PK – 1 PK", price: "Rp 75.000" },
            { label: "1.5 PK – 2 PK", price: "Rp 95.000" },
        ],
        features: ["Pembersihan Indoor", "Pembersihan Outdoor", "Pengecekan Freon", "Garansi Cuci"],
    },
    {
        title: "Bongkar Pasang AC",
        subtitle: "(+ Vakum)",
        items: [
            { label: "0.5 PK – 1 PK", price: "Rp 450.000" },
            { label: "1.5 PK – 2 PK", price: "Rp 650.000" },
        ],
        features: ["Bongkar Unit Lama", "Pasang Unit Baru", "Vakum Unit", "Pengecekan Kebocoran"],
    },
    {
        title: "Pasang AC Baru",
        subtitle: "(+ Vakum)",
        items: [
            { label: "0.5 PK – 1 PK", price: "Rp 350.000" },
            { label: "1.5 PK – 2 PK", price: "Rp 550.000" },
        ],
        features: ["Pemasangan Unit", "Vakum Unit", "Pengecekan Fungsi", "Garansi Pemasangan"],
    },
];

const PricingSection = () => {
    const WA_LINK = "https://wa.me/6281316163499?text=Halo%20Sahabat%20Cool%20AC%2C%20saya%20mau%20pesan%20layanan...";

    return (
        <section id="harga" className="section-padding bg-secondary/30">
            <div className="container mx-auto max-w-6xl">
                <FadeInSection>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Daftar <span className="text-gradient">Harga Layanan</span>
                        </h2>
                        <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                            Harga transparan dan terjangkau untuk setiap layanan kami.
                        </p>
                    </div>
                </FadeInSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingData.map((plan, index) => (
                        <FadeInSection key={index} delay={index * 100}>
                            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                                <div className="text-center mb-6">
                                    <h3 className="text-xl font-bold text-foreground">{plan.title}</h3>
                                    {plan.subtitle && <span className="text-sm text-muted-foreground">{plan.subtitle}</span>}
                                </div>

                                <div className="space-y-4 mb-6 flex-grow">
                                    {plan.items.map((item, idx) => (
                                        <div key={idx} className="flex justify-between items-center border-b border-border/50 pb-2 last:border-0 last:pb-0">
                                            <span className="text-sm font-medium text-muted-foreground">{item.label}</span>
                                            <span className="text-lg font-bold text-primary">{item.price}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-3 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                                            <Check className="w-4 h-4 text-success" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <Button className="w-full" asChild>
                                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                                        Pesan Sekarang
                                    </a>
                                </Button>
                            </div>
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
