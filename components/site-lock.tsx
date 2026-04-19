import { LockKeyhole } from "lucide-react";

export default function SiteLock() {
  return (
    <main className="min-h-dvh bg-[#120d0a] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(197,138,45,0.22),_transparent_34%),linear-gradient(135deg,_rgba(80,16,28,0.38),_transparent_48%)]" />
      <section className="relative flex min-h-dvh items-center justify-center px-5 py-10">
        <div
          aria-modal="true"
          role="dialog"
          aria-labelledby="site-lock-title"
          className="w-full max-w-md rounded-lg border border-[#d9a84f]/35 bg-[#1c1410] p-7 shadow-2xl shadow-black/40"
        >
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-[#d9a84f] text-[#160f0b]">
            <LockKeyhole aria-hidden="true" className="h-6 w-6" />
          </div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#d9a84f]">
            Acces suspendu
          </p>
          <h1
            id="site-lock-title"
            className="text-3xl font-semibold leading-tight text-white"
          >
            Ce site est temporairement verrouille.
          </h1>
          <p className="mt-4 text-base leading-7 text-white/78">
            L&apos;acces au site est bloque jusqu&apos;a regularisation du paiement du
            site web. Merci de contacter votre prestataire pour reactiver la
            mise en ligne.
          </p>
          <div className="mt-6 rounded-md border border-white/10 bg-white/6 p-4 text-sm leading-6 text-white/70">
            Une fois le paiement recu, l&apos;acces complet au site pourra etre
            retabli.
          </div>
        </div>
      </section>
    </main>
  );
}
