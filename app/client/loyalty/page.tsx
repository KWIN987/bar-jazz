import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Star, Gift, Trophy, Crown, Wine, Utensils, Ticket, Percent, ArrowUpRight, ArrowDownLeft } from 'lucide-react'

const rewards = [
  { id: 1, name: "Cocktail offert",     points: 500, available: false, currentPoints: 450, Icon: Wine,    color: 'amber'   },
  { id: 2, name: "Entrée gratuite",     points: 300, available: true,  currentPoints: 300, Icon: Ticket,  color: 'indigo'  },
  { id: 3, name: "10% de réduction",   points: 200, available: true,  currentPoints: 200, Icon: Percent, color: 'emerald' },
  { id: 4, name: "Dessert offert",      points: 150, available: true,  currentPoints: 150, Icon: Utensils,color: 'rose'    },
]

const history = [
  { id: 1, date: "05 Avril 2026",  action: "Achat",   points: "+45",   description: "Soirée Jazz Quartet"       },
  { id: 2, date: "28 Mars 2026",   action: "Achat",   points: "+67",   description: "Dîner & Cocktails"         },
  { id: 3, date: "15 Mars 2026",   action: "Échange", points: "-300",  description: "Entrée gratuite utilisée"  },
  { id: 4, date: "08 Mars 2026",   action: "Achat",   points: "+52",   description: "Piano Bar Session"         },
]

const levels = [
  { name: "Bronze", minPoints: 0,    benefits: "5% de réduction",                           color: 'bg-amber-700',   current: false },
  { name: "Argent", minPoints: 500,  benefits: "10% de réduction",                          color: 'bg-stone-400',   current: false },
  { name: "Or",     minPoints: 1000, benefits: "15% de réduction + priorité",               color: 'bg-yellow-400',  current: false },
  { name: "VIP",    minPoints: 2000, benefits: "20% de réduction + invitations exclusives", color: 'bg-amber-500',   current: true  },
]

const colorMap: Record<string, { card: string; btn: string; icon: string; badge: string }> = {
  amber:   { card: 'bg-amber-50 border-amber-200',   btn: 'bg-amber-600 hover:bg-amber-500',  icon: 'text-amber-600',  badge: 'bg-amber-100 text-amber-700 border-amber-200'   },
  indigo:  { card: 'bg-indigo-50 border-indigo-200', btn: 'bg-indigo-600 hover:bg-indigo-500',icon: 'text-indigo-600', badge: 'bg-indigo-100 text-indigo-700 border-indigo-200' },
  emerald: { card: 'bg-emerald-50 border-emerald-200',btn:'bg-emerald-600 hover:bg-emerald-500',icon:'text-emerald-600',badge:'bg-emerald-100 text-emerald-700 border-emerald-200'},
  rose:    { card: 'bg-rose-50 border-rose-200',     btn: 'bg-rose-600 hover:bg-rose-500',    icon: 'text-rose-600',   badge: 'bg-rose-100 text-rose-700 border-rose-200'       },
}

export default function LoyaltyPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-stone-900 mb-1">Carte de fidélité</h1>
        <p className="text-stone-500 text-sm">Gagnez des points et profitez de récompenses exclusives</p>
      </div>

      {/* Card */}
      <div className="relative bg-gradient-to-br from-stone-950 via-amber-950 to-stone-900 rounded-2xl p-6 md:p-8 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg,#d97706 0,#d97706 1px,transparent 0,transparent 50%)', backgroundSize: '20px 20px' }} />
        <div className="relative">
          <div className="flex items-start justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Crown className="h-5 w-5 text-amber-400" />
                <span className="font-bold text-white text-xl">Carte VIP</span>
              </div>
              <p className="text-stone-400 text-sm">Marie Dubois</p>
              <p className="text-stone-500 text-xs mt-0.5">Membre depuis Mars 2024</p>
            </div>
            <div className="text-right">
              <p className="text-stone-500 text-[10px] uppercase tracking-widest">Solde actuel</p>
              <p className="text-5xl font-bold text-amber-400 leading-none my-1">450</p>
              <p className="text-stone-500 text-xs">points</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-stone-400">Vers la prochaine récompense</span>
              <span className="text-amber-400 font-semibold">450 / 500</span>
            </div>
            <Progress value={90} className="h-2.5 bg-stone-800 [&>div]:bg-gradient-to-r [&>div]:from-amber-500 [&>div]:to-amber-400" />
            <p className="text-stone-500 text-xs">Plus que 50 points pour un cocktail offert !</p>
          </div>
        </div>
      </div>

      {/* Levels */}
      <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-stone-50">
          <h2 className="font-bold text-stone-900 flex items-center gap-2">
            <Trophy className="h-4 w-4 text-amber-500" />
            Niveaux de fidélité
          </h2>
        </div>
        <div className="p-5 grid grid-cols-2 md:grid-cols-4 gap-3">
          {levels.map((l) => (
            <div key={l.name} className={`rounded-xl p-4 border-2 transition-all ${l.current ? 'border-amber-400 bg-amber-50' : 'border-stone-100 bg-stone-50'}`}>
              <div className={`h-3 w-3 rounded-full ${l.color} mb-3`} />
              <p className={`font-bold text-sm ${l.current ? 'text-amber-700' : 'text-stone-700'}`}>{l.name}</p>
              {l.current && <Badge className="bg-amber-600 text-white border-0 text-[10px] mt-1">Actuel</Badge>}
              <p className="text-xs text-stone-400 mt-2 leading-tight">{l.benefits}</p>
              <p className="text-xs text-stone-300 mt-1">{l.minPoints.toLocaleString()} pts min.</p>
            </div>
          ))}
        </div>
      </div>

      {/* Rewards */}
      <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-stone-50">
          <h2 className="font-bold text-stone-900 flex items-center gap-2">
            <Gift className="h-4 w-4 text-rose-500" />
            Récompenses disponibles
          </h2>
        </div>
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          {rewards.map((r) => {
            const c = colorMap[r.color]
            const pct = Math.min(100, Math.round((r.currentPoints / r.points) * 100))
            return (
              <div key={r.id} className={`rounded-xl border p-4 ${c.card} ${!r.available ? 'opacity-60' : ''}`}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <r.Icon className={`h-6 w-6 ${c.icon}`} />
                    <div>
                      <p className="font-semibold text-stone-800 text-sm">{r.name}</p>
                      <div className="flex items-center gap-1 text-xs text-stone-400 mt-0.5">
                        <Star className="h-3 w-3" />{r.points} points
                      </div>
                    </div>
                  </div>
                  {!r.available && (
                    <div className="text-right">
                      <p className="text-xs text-stone-400">{r.currentPoints}/{r.points}</p>
                      <div className="w-16 h-1.5 bg-stone-200 rounded-full mt-1">
                        <div className="h-full rounded-full bg-stone-400" style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  )}
                </div>
                <Button
                  size="sm"
                  disabled={!r.available}
                  className={`w-full text-white border-0 text-xs h-8 ${r.available ? c.btn : 'bg-stone-300'}`}
                >
                  {r.available ? 'Utiliser ma récompense' : 'Bientôt disponible'}
                </Button>
              </div>
            )
          })}
        </div>
      </div>

      {/* History */}
      <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-stone-50">
          <h2 className="font-bold text-stone-900">Historique des points</h2>
        </div>
        <div className="divide-y divide-stone-50">
          {history.map((item) => {
            const isGain = item.points.startsWith('+')
            return (
              <div key={item.id} className="flex items-center gap-4 px-5 py-3.5">
                <div className={`h-9 w-9 rounded-xl flex items-center justify-center shrink-0 ${isGain ? 'bg-emerald-100' : 'bg-orange-100'}`}>
                  {isGain
                    ? <ArrowUpRight className="h-4 w-4 text-emerald-600" />
                    : <ArrowDownLeft className="h-4 w-4 text-orange-600" />
                  }
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-stone-800 truncate">{item.description}</p>
                  <p className="text-xs text-stone-400">{item.date} · {item.action}</p>
                </div>
                <span className={`font-bold text-sm shrink-0 ${isGain ? 'text-emerald-600' : 'text-orange-600'}`}>
                  {item.points} pts
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {/* How it works */}
      <div className="bg-stone-950 rounded-2xl p-6 text-white">
        <h2 className="font-bold mb-5">Comment ça marche ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { n: '1', title: 'Gagnez des points', desc: '10 points pour chaque euro dépensé',       color: 'bg-amber-600' },
            { n: '2', title: 'Choisissez',         desc: 'Sélectionnez parmi nos récompenses',       color: 'bg-rose-600'  },
            { n: '3', title: 'Profitez',            desc: 'Utilisez lors de votre prochaine visite', color: 'bg-indigo-600'},
          ].map((step) => (
            <div key={step.n} className="flex items-start gap-3">
              <div className={`h-8 w-8 rounded-full ${step.color} flex items-center justify-center font-bold text-sm shrink-0`}>{step.n}</div>
              <div>
                <p className="font-semibold text-sm">{step.title}</p>
                <p className="text-stone-400 text-xs mt-0.5">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
