import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-hero-glow px-6 text-center">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.22em] text-gold">Flórida Doces</p>
        <h1 className="text-3xl font-semibold text-mocha">Cartão Interativo Premium</h1>
        <Link href="/cartao" className="inline-flex rounded-full bg-gold px-6 py-3 text-sm font-medium text-white">
          Acessar cartão
        </Link>
      </div>
    </main>
  );
}
