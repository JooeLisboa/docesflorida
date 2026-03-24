import { CardShell } from '@/components/CardShell';
import { ProductCard } from '@/components/ProductCard';
import { siteContent } from '@/data/siteContent';

export function FeaturedProductsSection() {
  return (
    <CardShell className="space-y-5" id="destaques">
      <div>
        <p className="text-xs uppercase tracking-[0.22em] text-gold">Destaques de Páscoa</p>
        <h2 className="mt-2 text-2xl font-semibold text-mocha">Seleção especial para presentear</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {siteContent.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </CardShell>
  );
}
