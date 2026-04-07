import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Star, Calendar, ShoppingBag, TrendingUp, Gift, Crown, ArrowUpRight, Music2 } from 'lucide-react'
import Link from 'next/link'

const stats = [
  { title: 'Points fidélité', value: '450', sub: '+120 ce mois', Icon: Star,        bg: 'bg-amber-100',  iconColor: 'text-amber-700',  trend: '+120' },
  { title: 'Réservations',    value: '2',   sub: 'À venir',      Icon: Calendar,    bg: 'bg-indigo-100', iconColor: 'text-indigo-700', trend: null   },
  { title: 'Total dépensé',   value: '1 250€', sub: 'Historique complet', Icon: ShoppingBag, bg: 'bg-emerald-100',iconColor: 'text-emerald-700', trend: null },
  { title: 'Niveau',          value: 'VIP', sub: 'Client fidèle', Icon: TrendingUp, bg: 'bg-rose-100',   iconColor: 'text-rose-700',   trend: null   },
]

const reservations = [
  { id: 1, event: "Soirée Jazz Quartet",  date: "15 Avril 2026", time: "21h00", status: "confirmé" },
  { id: 2, event: "Piano Bar Session",    date: "22 Avril 2026", time: "19h00", status: "confirmé" },
]

const orders = [
  { id: 1, date: "05 Avril 2026", items: "2 Cocktails, 1 Burger", total: "46€" },
  { id: 2, date: "28 Mars 2026",  items: "3 Cocktails, 2 Entrées", total: "67€" },
]

export default function ClientDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-stone-900 mb-1">Bienvenue, Marie !</h1>
        <p className="text-stone-500 text-sm">Voici un aperçu de votre activité</p>
      </div>

      {/* Stat cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.title} className="bg-white rounded-2xl border border-stone-100 p-5 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-2.5 rounded-xl ${s.bg}`}>
                <s.Icon className={`h-5 w-5 ${s.iconColor}`} />
              </div>
              {s.trend && (
                <span className="text-xs font-semibold text-emerald-600 flex items-center gap-0.5">
                  <ArrowUpRight className="h-3.5 w-3.5" />{s.trend}
                </span>
              )}
            </div>
            <p className="text-2xl font-bold text-stone-900">{s.value}</p>
            <p className="text-xs text-stone-400 mt-0.5">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Loyalty card */}
      <div className="bg-stone-950 rounded-2xl p-6 md:p-8 relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-amber-600/10" />
        <div className="absolute -right-4 -bottom-8 h-32 w-32 rounded-full bg-amber-600/5" />

        <div className="relative">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Crown className="h-5 w-5 text-amber-400" />
                <span className="font-bold text-white text-xl">Carte VIP</span>
              </div>
              <p className="text-stone-400 text-sm">Marie Dubois · Jazz Bar Member</p>
            </div>
            <div className="text-right">
              <p className="text-stone-500 text-xs uppercase tracking-wider">Solde</p>
              <p className="text-4xl font-bold text-amber-400">450</p>
              <p className="text-stone-500 text-xs">points</p>
            </div>
          </div>

          <div className="space-y-2 mb-5">
            <div className="flex justify-between text-sm">
              <span className="text-stone-400">Vers la prochaine récompense</span>
              <span className="text-amber-400 font-semibold">450 / 500 pts</span>
            </div>
            <Progress value={90} className="h-2 bg-stone-800 [&>div]:bg-amber-500" />
            <p className="text-stone-500 text-xs">Plus que 50 points pour un cocktail offert !</p>
          </div>

          <div className="flex gap-3">
            <Link href="/client/loyalty">
              <Button className="bg-amber-600 hover:bg-amber-500 text-white border-0 text-sm">
                <Gift className="mr-2 h-4 w-4" />
                Mes récompenses
              </Button>
            </Link>
            <Link href="/events">
              <Button variant="outline" className="border-stone-700 text-stone-300 hover:text-white hover:border-stone-500 bg-transparent text-sm">
                <Music2 className="mr-2 h-4 w-4" />
                Réserver
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Reservations */}
        <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-stone-50">
            <h2 className="font-bold text-stone-900">Mes réservations</h2>
            <Button variant="ghost" size="sm" className="text-stone-400 hover:text-amber-600 text-xs" asChild>
              <Link href="/events">Voir tous</Link>
            </Button>
          </div>
          <div className="divide-y divide-stone-50">
            {reservations.map((r) => (
              <div key={r.id} className="flex items-center gap-3 px-5 py-3.5">
                <div className="h-9 w-9 rounded-xl bg-indigo-100 flex items-center justify-center shrink-0">
                  <Calendar className="h-4 w-4 text-indigo-700" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-stone-800 text-sm truncate">{r.event}</p>
                  <p className="text-xs text-stone-400">{r.date} à {r.time}</p>
                </div>
                <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 text-[10px]">
                  {r.status}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Orders */}
        <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-stone-50">
            <h2 className="font-bold text-stone-900">Commandes récentes</h2>
            <Button variant="ghost" size="sm" className="text-stone-400 hover:text-amber-600 text-xs" asChild>
              <Link href="/client/orders">Voir tout</Link>
            </Button>
          </div>
          <div className="divide-y divide-stone-50">
            {orders.map((o) => (
              <div key={o.id} className="flex items-center gap-3 px-5 py-3.5">
                <div className="h-9 w-9 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                  <ShoppingBag className="h-4 w-4 text-amber-700" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-stone-800 text-sm truncate">{o.date}</p>
                  <p className="text-xs text-stone-400 truncate">{o.items}</p>
                </div>
                <span className="font-bold text-amber-700 text-sm shrink-0">{o.total}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
