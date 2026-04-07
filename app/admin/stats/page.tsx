"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { TrendingUp, DollarSign, Users, Calendar, ArrowUpRight, ArrowDownRight } from 'lucide-react'

const stats = [
  { title: 'Revenus totaux',  value: '54 320€', change: '+12.5%', trend: 'up',   Icon: DollarSign, bg: 'bg-amber-100',  iconColor: 'text-amber-700'  },
  { title: 'Événements',      value: '28',       change: '-3.4%',  trend: 'down', Icon: Calendar,   bg: 'bg-indigo-100', iconColor: 'text-indigo-700' },
  { title: 'Clients',         value: '1 248',    change: '+11.4%', trend: 'up',   Icon: Users,      bg: 'bg-emerald-100',iconColor: 'text-emerald-700'},
  { title: 'Panier moyen',    value: '43.50€',   change: '+5.2%',  trend: 'up',   Icon: TrendingUp, bg: 'bg-rose-100',   iconColor: 'text-rose-700'   },
]

const monthlyRevenue = [
  { month: "Jan", revenue: 45000, events: 24, customers: 980  },
  { month: "Fév", revenue: 48000, events: 26, customers: 1050 },
  { month: "Mar", revenue: 52000, events: 28, customers: 1120 },
  { month: "Avr", revenue: 54320, events: 28, customers: 1248 },
]

const topEvents = [
  { name: "Soirée Jazz Quartet",  revenue: "2 250€", attendees: 45, color: 'bg-amber-500'  },
  { name: "Saxophone Night",      revenue: "1 900€", attendees: 38, color: 'bg-rose-500'   },
  { name: "Piano Bar Session",    revenue: "1 600€", attendees: 32, color: 'bg-indigo-500' },
]

const topItems = [
  { name: "Old Fashioned",     orders: 543, revenue: "6 516€", color: 'bg-amber-500'  },
  { name: "Negroni",           orders: 432, revenue: "4 752€", color: 'bg-indigo-500' },
  { name: "Burger Signature",  orders: 287, revenue: "6 314€", color: 'bg-emerald-500'},
]

const maxRevenue = Math.max(...monthlyRevenue.map(d => d.revenue))
const maxCustomers = Math.max(...monthlyRevenue.map(d => d.customers))

export default function AdminStatsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-stone-900 mb-1">Statistiques</h1>
          <p className="text-stone-500 text-sm">Performances de votre établissement</p>
        </div>
        <Select defaultValue="30">
          <SelectTrigger className="w-[160px] border-stone-200 text-sm">
            <SelectValue placeholder="Période" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7">7 derniers jours</SelectItem>
            <SelectItem value="30">30 derniers jours</SelectItem>
            <SelectItem value="90">90 derniers jours</SelectItem>
            <SelectItem value="365">12 derniers mois</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* KPIs */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.title} className="bg-white rounded-2xl border border-stone-100 p-5 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-2.5 rounded-xl ${s.bg}`}>
                <s.Icon className={`h-5 w-5 ${s.iconColor}`} />
              </div>
              <span className={`text-xs font-semibold flex items-center gap-0.5 ${s.trend === 'up' ? 'text-emerald-600' : 'text-rose-600'}`}>
                {s.trend === 'up' ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowDownRight className="h-3.5 w-3.5" />}
                {s.change}
              </span>
            </div>
            <p className="text-2xl font-bold text-stone-900">{s.value}</p>
            <p className="text-xs text-stone-400 mt-0.5">{s.title}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
        <Tabs defaultValue="revenue">
          <div className="px-5 py-4 border-b border-stone-50">
            <TabsList className="bg-stone-100 p-1 rounded-xl h-auto gap-1">
              <TabsTrigger value="revenue"   className="rounded-lg px-4 py-1.5 text-xs data-[state=active]:bg-white data-[state=active]:shadow-sm text-stone-500">Revenus</TabsTrigger>
              <TabsTrigger value="events"    className="rounded-lg px-4 py-1.5 text-xs data-[state=active]:bg-white data-[state=active]:shadow-sm text-stone-500">Événements</TabsTrigger>
              <TabsTrigger value="customers" className="rounded-lg px-4 py-1.5 text-xs data-[state=active]:bg-white data-[state=active]:shadow-sm text-stone-500">Clients</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="revenue" className="p-5">
            <h2 className="font-bold text-stone-900 mb-1">Évolution des revenus</h2>
            <p className="text-xs text-stone-400 mb-6">4 derniers mois</p>
            <div className="space-y-4">
              {monthlyRevenue.map((d) => (
                <div key={d.month} className="flex items-center gap-4">
                  <p className="w-10 font-semibold text-sm text-stone-500">{d.month}</p>
                  <div className="flex-1 bg-stone-50 rounded-full h-8 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-end pr-3 transition-all"
                      style={{ width: `${(d.revenue / maxRevenue) * 100}%` }}
                    >
                      <span className="text-white text-xs font-bold whitespace-nowrap">{d.revenue.toLocaleString()}€</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="events" className="p-5">
            <h2 className="font-bold text-stone-900 mb-1">Top événements</h2>
            <p className="text-xs text-stone-400 mb-6">Les plus rentables</p>
            <div className="space-y-4">
              {topEvents.map((e, i) => (
                <div key={e.name} className="flex items-center gap-4 p-4 rounded-xl border border-stone-100 bg-stone-50">
                  <div className={`h-8 w-8 rounded-full ${e.color} text-white font-bold text-sm flex items-center justify-center shrink-0`}>
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-stone-800 text-sm truncate">{e.name}</p>
                    <p className="text-xs text-stone-400">{e.attendees} participants</p>
                  </div>
                  <p className="font-bold text-amber-700 text-sm shrink-0">{e.revenue}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="customers" className="p-5">
            <h2 className="font-bold text-stone-900 mb-1">Évolution des clients</h2>
            <p className="text-xs text-stone-400 mb-6">4 derniers mois</p>
            <div className="space-y-4">
              {monthlyRevenue.map((d) => (
                <div key={d.month} className="flex items-center gap-4">
                  <p className="w-10 font-semibold text-sm text-stone-500">{d.month}</p>
                  <div className="flex-1 bg-stone-50 rounded-full h-8 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-end pr-3 transition-all"
                      style={{ width: `${(d.customers / maxCustomers) * 100}%` }}
                    >
                      <span className="text-white text-xs font-bold">{d.customers}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Top items */}
      <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-stone-50">
          <h2 className="font-bold text-stone-900">Articles les plus vendus</h2>
          <p className="text-xs text-stone-400 mt-0.5">Top ventes du menu ce mois</p>
        </div>
        <div className="divide-y divide-stone-50">
          {topItems.map((item, i) => (
            <div key={item.name} className="flex items-center gap-4 px-5 py-3.5">
              <div className={`h-8 w-8 rounded-full ${item.color} text-white font-bold text-sm flex items-center justify-center shrink-0`}>
                {i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-stone-800 text-sm">{item.name}</p>
                <p className="text-xs text-stone-400">{item.orders} commandes</p>
              </div>
              <p className="font-bold text-amber-700 shrink-0">{item.revenue}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
