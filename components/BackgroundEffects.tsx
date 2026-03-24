export function BackgroundEffects() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute -left-10 top-12 h-44 w-44 rounded-full bg-rose/25 blur-3xl" />
      <div className="absolute right-0 top-24 h-56 w-56 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute bottom-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-champagne blur-3xl" />
      <div className="absolute left-7 top-1/3 h-5 w-5 rounded-full border border-gold/25" />
      <div className="absolute right-10 top-[58%] h-3 w-3 rounded-full bg-gold/25" />
      <div className="absolute bottom-20 right-16 h-6 w-6 rounded-[40%] border border-rose/35" />
    </div>
  );
}
