"use client"

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Search, UserPlus, Mail, Phone, Star, Calendar, Crown } from 'lucide-react'

const users = [
  { id: 1, name: "Marie Dubois",    email: "marie.dubois@email.com",    phone: "+33 6 12 34 56 78", loyaltyPoints: 450, totalSpent: "1 250€", lastVisit: "2026-04-08", status: "VIP"      },
  { id: 2, name: "Jean Martin",     email: "jean.martin@email.com",     phone: "+33 6 23 45 67 89", loyaltyPoints: 280, totalSpent: "780€",   lastVisit: "2026-04-05", status: "Régulier" },
  { id: 3, name: "Sophie Bernard",  email: "sophie.bernard@email.com",  phone: "+33 6 34 56 78 90", loyaltyPoints: 150, totalSpent: "420€",   lastVisit: "2026-03-28", status: "Actif"    },
  { id: 4, name: "Pierre Petit",    email: "pierre.petit@email.com",    phone: "+33 6 45 67 89 01", loyaltyPoints: 80,  totalSpent: "210€",   lastVisit: "2026-04-02", status: "Nouveau"  },
]

const statusStyle: Record<string, string> = {
  VIP:      'bg-amber-100 text-amber-800 border-amber-200',
  Régulier: 'bg-indigo-100 text-indigo-800 border-indigo-200',
  Actif:    'bg-emerald-100 text-emerald-800 border-emerald-200',
  Nouveau:  'bg-stone-100 text-stone-600 border-stone-200',
}

function UserTable({ data }: { data: typeof users }) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-stone-50 hover:bg-stone-50">
          {['Client', 'Contact', 'Points', 'Dépensé', 'Dernière visite', 'Statut'].map((h) => (
            <TableHead key={h} className="text-xs text-stone-400 font-semibold">{h}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((user) => (
          <TableRow key={user.id} className="hover:bg-stone-50/50">
            <TableCell>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                  <span className="text-amber-700 font-bold text-xs">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <p className="font-semibold text-stone-800 text-sm">{user.name}</p>
              </div>
            </TableCell>
            <TableCell>
              <div className="space-y-0.5">
                <div className="flex items-center gap-1 text-xs text-stone-500">
                  <Mail className="h-3 w-3" />{user.email}
                </div>
                <div className="flex items-center gap-1 text-xs text-stone-400">
                  <Phone className="h-3 w-3" />{user.phone}
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-1 text-sm">
                <Star className="h-3.5 w-3.5 text-amber-500" />
                <span className="font-semibold text-stone-700">{user.loyaltyPoints}</span>
              </div>
            </TableCell>
            <TableCell className="font-semibold text-amber-700 text-sm">{user.totalSpent}</TableCell>
            <TableCell className="text-sm text-stone-500">
              {new Date(user.lastVisit).toLocaleDateString('fr-FR')}
            </TableCell>
            <TableCell>
              <Badge className={`${statusStyle[user.status] ?? ''} text-[10px] flex items-center gap-0.5 w-fit`}>
                {user.status === 'VIP' && <Crown className="h-2.5 w-2.5" />}
                {user.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default function AdminUsersPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-stone-900 mb-1">Gestion des Clients</h1>
          <p className="text-stone-500 text-sm">Gérez vos clients et leur fidélité</p>
        </div>
        <Button className="bg-amber-600 hover:bg-amber-500 text-white border-0">
          <UserPlus className="mr-2 h-4 w-4" />Nouveau client
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { label: 'Total clients',      value: '1 248', Icon: UserPlus, bg: 'bg-amber-100',  iconColor: 'text-amber-700'  },
          { label: 'Nouveaux ce mois',   value: '87',    Icon: Star,     bg: 'bg-indigo-100', iconColor: 'text-indigo-700' },
          { label: 'Taux de rétention',  value: '78%',   Icon: Calendar, bg: 'bg-emerald-100',iconColor: 'text-emerald-700'},
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-2xl border border-stone-100 p-5 shadow-sm flex items-center gap-4">
            <div className={`p-3 rounded-xl ${s.bg} shrink-0`}><s.Icon className={`h-5 w-5 ${s.iconColor}`} /></div>
            <div>
              <p className="text-xl font-bold text-stone-900">{s.value}</p>
              <p className="text-xs text-stone-400">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-4">
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
            <Input placeholder="Rechercher par nom, email ou téléphone…" className="pl-9 border-stone-200 focus:border-amber-400" />
          </div>
          <Button className="bg-amber-600 hover:bg-amber-500 text-white border-0">Rechercher</Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
        <Tabs defaultValue="all">
          <div className="px-5 py-4 border-b border-stone-50">
            <TabsList className="bg-stone-100 p-1 rounded-xl h-auto gap-1">
              {['all', 'vip', 'regular', 'new'].map((v) => (
                <TabsTrigger key={v} value={v} className="rounded-lg px-4 py-1.5 text-xs data-[state=active]:bg-white data-[state=active]:shadow-sm text-stone-500 capitalize">
                  {v === 'all' ? 'Tous' : v === 'vip' ? 'VIP' : v === 'regular' ? 'Réguliers' : 'Nouveaux'}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          <TabsContent value="all"><UserTable data={users} /></TabsContent>
          <TabsContent value="vip"><UserTable data={users.filter(u => u.status === 'VIP')} /></TabsContent>
          <TabsContent value="regular">
            <div className="p-8 text-center text-stone-400 text-sm">
              Clients qui visitent régulièrement votre établissement.
            </div>
          </TabsContent>
          <TabsContent value="new">
            <div className="p-8 text-center text-stone-400 text-sm">
              Clients récemment inscrits.
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
