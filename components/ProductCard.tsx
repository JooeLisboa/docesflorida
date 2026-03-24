import Image from 'next/image';
import { FeaturedProduct, getWhatsAppLink } from '@/data/siteContent';

type ProductCardProps = {
  product: FeaturedProduct;
};

export function ProductCard({ product }: ProductCardProps) {
  const message = `Olá! Tenho interesse em ${product.name} e gostaria de fazer uma encomenda.`;

  return (
    <article className="rounded-3xl border border-white/70 bg-white/85 p-4 shadow-soft backdrop-blur transition hover:-translate-y-0.5">
      <div className="overflow-hidden rounded-2xl border border-champagne/80 bg-champagne/45">
        <Image src={product.image} alt={product.imageAlt} width={720} height={500} className="h-44 w-full object-cover" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-mocha">{product.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-mocha/80">{product.description}</p>
      <a
        href={getWhatsAppLink(message)}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex rounded-full border border-gold/35 bg-white px-4 py-2 text-sm font-medium text-mocha transition hover:bg-gold/10"
      >
        {product.ctaLabel}
      </a>
    </article>
  );
}
