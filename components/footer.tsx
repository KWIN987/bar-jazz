import Link from 'next/link'
import { Music2, Globe, Camera, Send } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300 mt-auto border-t border-amber-900/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-amber-400 hover:text-amber-300 transition-colors">
              <Music2 className="h-6 w-6" />
              <span>Jazz Bar</span>
            </Link>
            <p className="text-sm text-stone-400">
              Le meilleur bar jazz de la ville. Musique live tous les soirs.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-stone-400 hover:text-amber-400 transition-colors">Accueil</Link></li>
              <li><Link href="/events" className="text-stone-400 hover:text-amber-400 transition-colors">Événements</Link></li>
              <li><Link href="/menu" className="text-stone-400 hover:text-amber-400 transition-colors">Menu</Link></li>
              <li><Link href="/about" className="text-stone-400 hover:text-amber-400 transition-colors">À propos</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Espace Personnel</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/client/dashboard" className="text-stone-400 hover:text-amber-400 transition-colors">Mon compte</Link></li>
              <li><Link href="/client/orders" className="text-stone-400 hover:text-amber-400 transition-colors">Mes commandes</Link></li>
              <li><Link href="/client/loyalty" className="text-stone-400 hover:text-amber-400 transition-colors">Carte de fidélité</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Nous suivre</h3>
            <div className="flex gap-3">
              <Link href="#" className="p-2 rounded-lg bg-stone-800 text-stone-400 hover:bg-amber-700 hover:text-white transition-all">
                <Globe className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 rounded-lg bg-stone-800 text-stone-400 hover:bg-amber-700 hover:text-white transition-all">
                <Camera className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 rounded-lg bg-stone-800 text-stone-400 hover:bg-amber-700 hover:text-white transition-all">
                <Send className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-stone-500">
          <p>&copy; 2026 Jazz Bar. Tous droits réservés.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-amber-400 transition-colors">Confidentialité</Link>
            <Link href="/terms" className="hover:text-amber-400 transition-colors">Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
