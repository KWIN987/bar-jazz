import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ShoppingBag, Calendar, Package, CheckCircle, Clock, Star, QrCode } from 'lucide-react'

const orders = [
  {
    id: "CMD-2026-0042",
    date: "05 Avril 2026",
    time: "20:30",
    items: [
      { name: "Old Fashioned",    quantity: 2, price: "24€" },
      { name: "Burger Signature", quantity: 1, price: "22€" },
    ],
    total: "46€",
    status: "completed",
    points: "+46",
  },
  {
    id: "CMD-2026-0038",
    date: "28 Mars 2026",
    time: "21:15",
    items: [
      { name: "Negroni",               quantity: 3, price: "33€" },
      { name: "Planche de Charcuterie",quantity: 1, price: "18€" },
      { name: "Planche de Fromages",   quantity: 1, price: "16€" },
    ],
    total: "67€",
    status: "completed",
    points: "+67",
  },
  {
    id: "CMD-2026-0035",
    date: "15 Mars 2026",
    time: "19:45",
    items: [
      { name: "Manhattan",          quantity: 2, price: "24€" },
      { name: "Risotto Champignons",quantity: 1, price: "18€" },
      { name: "Tiramisu Maison",    quantity: 2, price: "16€" },
    ],
    total: "58€",
    status: "completed",
    points: "+58",
  },
]

const reservations = [
  {
    id: "RES-2026-0125",
    event: "Soirée Jazz Quartet",
    artist: "The Miles Davis Tribute",
    date: "15 Avril 2026",
    time: "21:00",
    tickets: 2,
    total: "50€",
    status: "confirmed",
  },
  {
    id: "RES-2026-0134",
    event: "Piano Bar Session",
    artist: "Marcus Steel",
    date: "22 Avril 2026",
    time: "19:00",
    tickets: 1,
    total: "15€",
    status: "confirmed",
  },
  {
    id: "RES-2026-0098",
    event: "Saxophone Night",
    artist: "Sarah Johnson Ensemble",
    date: "08 Mars 2026",
    time: "20:30",
    tickets: 2,
    total: "40€",
    status: "completed",
  },
]

export default function OrdersPage() {
  const confirmed = reservations.filter(r => r.status === 'confirmed')
  const past = reservations.filter(r => r.status === 'completed')

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-stone-900 mb-1">Mes Commandes</h1>
        <p className="text-stone-500 text-sm">Commandes et réservations</p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { title: 'Commandes totales', value: '24',     sub: "Depuis l'inscription", Icon: ShoppingBag, bg: 'bg-amber-100',  iconColor: 'text-amber-700' },
          { title: 'Réservations',      value: '2',      sub: 'À venir',               Icon: Calendar,   bg: 'bg-indigo-100', iconColor: 'text-indigo-700'},
          { title: 'Total dépensé',     value: '1 250€', sub: 'Historique complet',    Icon: Package,    bg: 'bg-emerald-100',iconColor: 'text-emerald-700'},
        ].map((s) => (
          <div key={s.title} className="bg-white rounded-2xl border border-stone-100 p-5 shadow-sm flex items-center gap-4">
            <div className={`p-3 rounded-xl ${s.bg} shrink-0`}>
              <s.Icon className={`h-5 w-5 ${s.iconColor}`} />
            </div>
            <div>
              <p className="text-xl font-bold text-stone-900">{s.value}</p>
              <p className="text-xs text-stone-400">{s.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <Tabs defaultValue="orders">
        <TabsList className="bg-stone-100 p-1 rounded-xl h-auto gap-1">
          <TabsTrigger value="orders" className="rounded-lg px-4 py-2 text-sm data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-stone-900 text-stone-500">
            Commandes
          </TabsTrigger>
          <TabsTrigger value="reservations" className="rounded-lg px-4 py-2 text-sm data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-stone-900 text-stone-500">
            Réservations
          </TabsTrigger>
        </TabsList>

        <TabsContent value="orders" className="mt-6 space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 bg-stone-50 border-b border-stone-100">
                <div>
                  <p className="font-mono text-xs text-stone-400">{order.id}</p>
                  <p className="font-semibold text-stone-800 text-sm mt-0.5">
                    {order.date} · {order.time}
                  </p>
                </div>
                <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 text-[10px] flex items-center gap-1">
                  <CheckCircle className="h-3 w-3" /> Terminée
                </Badge>
              </div>

              {/* Items */}
              <div className="px-5 py-4 space-y-2.5">
                {order.items.map((item, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <span className="text-stone-600">
                      <span className="text-stone-400 mr-2">{item.quantity}×</span>
                      {item.name}
                    </span>
                    <span className="font-medium text-stone-800">{item.price}</span>
                  </div>
                ))}
                <div className="pt-3 border-t border-stone-100 flex justify-between font-bold">
                  <span className="text-stone-800">Total</span>
                  <span className="text-stone-900">{order.total}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-stone-400">Points gagnés</span>
                  <span className="text-emerald-600 font-semibold flex items-center gap-1">
                    <Star className="h-3 w-3" />{order.points} pts
                  </span>
                </div>
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="reservations" className="mt-6 space-y-6">
          {confirmed.length > 0 && (
            <div>
              <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">À venir</p>
              <div className="space-y-4">
                {confirmed.map((r) => (
                  <div key={r.id} className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
                    <div className="h-1 bg-gradient-to-r from-amber-500 to-amber-700" />
                    <div className="px-5 py-4">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <p className="font-bold text-stone-900">{r.event}</p>
                          <p className="text-amber-700 font-semibold text-xs mt-0.5">{r.artist}</p>
                          <div className="flex items-center gap-3 text-stone-400 text-xs mt-2">
                            <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{r.date}</span>
                            <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{r.time}</span>
                          </div>
                        </div>
                        <Badge className="bg-amber-100 text-amber-700 border-amber-200 text-[10px]">Confirmée</Badge>
                      </div>
                      <div className="grid grid-cols-3 gap-3 text-xs text-stone-500 bg-stone-50 rounded-xl p-3 mb-4">
                        <div><p className="text-stone-300">N° réservation</p><p className="font-mono text-stone-600 text-[10px] mt-0.5">{r.id}</p></div>
                        <div><p className="text-stone-300">Places</p><p className="font-bold text-stone-700 mt-0.5">{r.tickets}</p></div>
                        <div><p className="text-stone-300">Total</p><p className="font-bold text-amber-700 mt-0.5">{r.total}</p></div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" className="flex-1 text-sm h-9 border-stone-200">Annuler</Button>
                        <Button className="flex-1 text-sm h-9 bg-amber-600 hover:bg-amber-500 text-white border-0">
                          <QrCode className="mr-2 h-4 w-4" />QR Code
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {past.length > 0 && (
            <div>
              <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">Historique</p>
              <div className="space-y-3">
                {past.map((r) => (
                  <div key={r.id} className="bg-white rounded-2xl border border-stone-100 p-4 opacity-70">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-stone-700 text-sm">{r.event}</p>
                        <p className="text-xs text-stone-400 mt-0.5">{r.date} · {r.tickets} place(s)</p>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-stone-100 text-stone-500 border-stone-200 text-[10px]">Terminée</Badge>
                        <p className="text-amber-700 font-bold text-sm mt-1">{r.total}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
