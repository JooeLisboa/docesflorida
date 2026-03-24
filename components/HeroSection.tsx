'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, MessageCircleHeart } from 'lucide-react';
import { CardShell } from '@/components/CardShell';
import { getWhatsAppLink, siteContent } from '@/data/siteContent';

export function HeroSection() {
  return (
    <CardShell className="relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="space-y-6"
      >
        <Image
          src="/images/logo-florida.svg"
          alt="Logo Flórida Doces"
          width={220}
          height={220}
          priority
          className="mx-auto w-[160px] drop-shadow-glow sm:w-[190px]"
        />

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] text-gold">Cartão Interativo Premium</p>
          <h1 className="text-3xl font-semibold tracking-tight text-mocha sm:text-4xl">{siteContent.brand.name}</h1>
          <p className="mx-auto max-w-md text-sm leading-relaxed text-mocha/80 sm:text-base">
            {siteContent.brand.subtitle}
          </p>
          <p className="mx-auto max-w-md text-sm text-mocha/70">{siteContent.brand.bio}</p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold to-[#c5a26f] px-6 py-3 text-sm font-medium text-white shadow-glow transition hover:scale-[1.02]"
          >
            <MessageCircleHeart size={18} />
            {siteContent.contact.primaryCTA}
          </a>
          <a
            href="#destaques"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/30 bg-white/70 px-6 py-3 text-sm font-medium text-mocha transition hover:bg-white"
          >
            <ArrowDown size={16} />
            {siteContent.contact.secondaryCTA}
          </a>
        </div>
      </motion.div>
    </CardShell>
  );
}
