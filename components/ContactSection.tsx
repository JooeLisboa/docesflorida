import { MessageCircle } from 'lucide-react';
import { CardShell } from '@/components/CardShell';
import { getWhatsAppLink, siteContent } from '@/data/siteContent';

export function ContactSection() {
  return (
    <CardShell className="text-center">
      <p className="text-xs uppercase tracking-[0.22em] text-gold">Encomendas</p>
      <h2 className="mt-2 text-2xl font-semibold text-mocha">Fale com a Flórida Doces no WhatsApp</h2>
      <p className="mt-2 text-sm text-mocha/80">Atendimento rápido para reservas, presentes e pedidos especiais.</p>
      <p className="mt-2 text-sm font-medium text-mocha">{siteContent.contact.phoneDisplay}</p>
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noreferrer"
        className="mx-auto mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-[#c5a26f] px-7 py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.02]"
      >
        <MessageCircle size={18} />
        Encomendar agora
      </a>
    </CardShell>
  );
}
