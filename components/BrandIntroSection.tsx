import { CardShell } from '@/components/CardShell';
import { siteContent } from '@/data/siteContent';

export function BrandIntroSection() {
  return (
    <CardShell>
      <p className="text-xs uppercase tracking-[0.22em] text-gold">Nossa Essência</p>
      <h2 className="mt-2 text-2xl font-semibold text-mocha">{siteContent.intro.title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-mocha/80 sm:text-base">{siteContent.intro.text}</p>
      <p className="mt-4 text-sm text-mocha/70">{siteContent.brand.shortTagline}</p>
    </CardShell>
  );
}
