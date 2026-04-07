import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Users,
  Calendar,
  DollarSign,
  TrendingUp,
  Music,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react'

const stats = [
  { title: "Revenus du mois",      value: "54 320€", change: "+12.5%", trend: "up",   Icon: DollarSign, bg: 'bg-amber-100',  iconColor: 'text-amber-700'  },
  { title: "Réservations",         value: "342",     change: "+8.2%",  trend: "up",   Icon: Calendar,   bg: 'bg-indigo-100', iconColor: 'text-indigo-700' },
  { title: "Clients actifs",       value: "1 248",   change: "+15.3%", trend: "up",   Icon: Users,      bg: 'bg-emerald-100',iconColor: 'text-emerald-700'},
  { title: "Événements ce mois",   value: "28",      change: "-3.1%",  trend: "down", Icon: Music,      bg: 'bg-rose-100',   iconColor: 'text-rose-700'   },
]

const recentEvents = [
  { id: 1, name: "Soirée Jazz Quartet",  date: "15 Avril", bookings: 45, capacity: 50, status: "complet"    },
  { id: 2, name: "Saxophone Night",      date: "18 Avril", bookings: 38, capacity: 50, status: "disponible" },
  { id: 3, name: "Piano Bar Session",    date: "22 Avril", bookings: 32, capacity: 40, status: "disponible" },
]

const recentBookings = [
  { id: 1, customer: "Marie Dubois",    event: "Jazz Quartet",   date: "15 Avril", total: "50€"  },
  { id: 2, customer: "Jean Martin",     event: "Saxophone Night", date: "18 Avril", total: "40€" },
  { id: 3, customer: "Sophie Bernard", event: "Piano Bar",       date: "22 Avril", total: "30€"  },
  { id: 4, customer: "Pierre Petit",   event: "Jam Session",     date: "25 Avril", total: "0€"   },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-stone-900 mb-1">Dashboard</h1>
        <p className="text-stone-500 text-sm">Vue d'ensemble — Avril 2026</p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.title} className="bg-white rounded-2xl border border-stone-100 p-5 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-2.5 rounded-xl ${s.bg}`}>
                <s.Icon className={`h-5 w-5 ${s.iconColor}`} />
              </div>
              <span className={`text-xs font-semibold flex items-center gap-0.5 ${s.trend === 'up' ? 'text-emerald-600' : 'text-rose-600'}`}>
                {s.trend === 'up'
                  ? <ArrowUpRight className="h-3.5 w-3.5" />
                  : <ArrowDownRight className="h-3.5 w-3.5" />
                }
                {s.change}
              </span>
            </div>
            <p className="text-2xl font-bold text-stone-900">{s.value}</p>
            <p className="text-xs text-stone-400 mt-0.5">{s.title}</p>
          </div>
        ))}
      </div>

      {/* Tables */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Events */}
        <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-stone-50">
            <div>
              <h2 className="font-bold text-stone-900">Événements à venir</h2>
              <p className="text-xs text-stone-400 mt-0.5">Les prochains concerts</p>
            </div>
            <Button variant="ghost" size="sm" className="text-stone-400 hover:text-amber-600 text-xs">
              Voir tout
            </Button>
          </div>
          <div className="divide-y divide-stone-50">
            {recentEvents.map((event) => {
              const pct = Math.round((event.bookings / event.capacity) * 100)
              return (
                <div key={event.id} className="flex items-center gap-4 px-5 py-3.5">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-stone-800 text-sm truncate">{event.name}</p>
                    <p className="text-xs text-stone-400">{event.date}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="text-right hidden sm:block">
                      <p className="text-xs font-semibold text-stone-700">{event.bookings}/{event.capacity}</p>
                      <div className="w-20 h-1.5 bg-stone-100 rounded-full mt-1">
                        <div className={`h-full rounded-full ${pct >= 90 ? 'bg-rose-500' : 'bg-amber-500'}`} style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                    <Badge className={event.status === 'complet'
                      ? 'bg-rose-100 text-rose-700 border-rose-200 text-[10px]'
                      : 'bg-emerald-100 text-emerald-700 border-emerald-200 text-[10px]'
                    }>
                      {event.status}
                    </Badge>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bookings */}
        <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-stone-50">
            <div>
              <h2 className="font-bold text-stone-900">Dernières réservations</h2>
              <p className="text-xs text-stone-400 mt-0.5">Réservations récentes</p>
            </div>
            <Button variant="ghost" size="sm" className="text-stone-400 hover:text-amber-600 text-xs">
              Voir tout
            </Button>
          </div>
          <div className="divide-y divide-stone-50">
            {recentBookings.map((b) => (
              <div key={b.id} className="flex items-center gap-3 px-5 py-3.5">
                <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                  <span className="text-amber-700 font-bold text-xs">
                    {b.customer.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-stone-800 text-sm truncate">{b.customer}</p>
                  <p className="text-xs text-stone-400 truncate">{b.event} · {b.date}</p>
                </div>
                <span className="font-bold text-amber-700 text-sm shrink-0">{b.total}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5">
        <h2 className="font-bold text-stone-900 mb-4">Actions rapides</h2>
        <div className="grid gap-3 md:grid-cols-3">
          <button className="group flex items-center gap-3 rounded-xl border border-stone-200 hover:border-amber-400 hover:bg-amber-50 p-4 transition-all text-left">
            <div className="p-2 rounded-lg bg-amber-100 group-hover:bg-amber-200 transition-colors">
              <Calendar className="h-5 w-5 text-amber-700" />
            </div>
            <span className="font-medium text-stone-700 group-hover:text-amber-700 text-sm">Nouvel événement</span>
          </button>
          <button className="group flex items-center gap-3 rounded-xl border border-stone-200 hover:border-indigo-400 hover:bg-indigo-50 p-4 transition-all text-left">
            <div className="p-2 rounded-lg bg-indigo-100 group-hover:bg-indigo-200 transition-colors">
              <Users className="h-5 w-5 text-indigo-700" />
            </div>
            <span className="font-medium text-stone-700 group-hover:text-indigo-700 text-sm">Ajouter un client</span>
          </button>
          <button className="group flex items-center gap-3 rounded-xl border border-stone-200 hover:border-emerald-400 hover:bg-emerald-50 p-4 transition-all text-left">
            <div className="p-2 rounded-lg bg-emerald-100 group-hover:bg-emerald-200 transition-colors">
              <TrendingUp className="h-5 w-5 text-emerald-700" />
            </div>
            <span className="font-medium text-stone-700 group-hover:text-emerald-700 text-sm">Voir les stats</span>
          </button>
        </div>
      </div>
    </div>
  )
}
