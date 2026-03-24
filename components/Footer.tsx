import Image from "next/image";
import { siteContent } from "@/data/siteContent";

export function Footer() {
  return (
    <footer className="px-2 pb-10 text-center text-mocha/80">
      <Image
        src="/images/logo-florida.jpg"
        alt="Logo Flórida Doces"
        width={82}
        height={82}
        className="mx-auto opacity-90"
      />
      <p className="mt-2 text-sm font-medium">{siteContent.brand.name}</p>
      <p className="mx-auto mt-1 max-w-sm text-xs">
        {siteContent.brand.footerLine}
      </p>
    </footer>
  );
}
