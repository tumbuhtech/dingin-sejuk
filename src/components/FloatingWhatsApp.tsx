import { MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20service%20AC";

const FloatingWhatsApp = () => {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-whatsapp text-whatsapp-foreground rounded-full flex items-center justify-center shadow-lg whatsapp-pulse hover:scale-110 transition-transform"
      aria-label="Chat WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default FloatingWhatsApp;
