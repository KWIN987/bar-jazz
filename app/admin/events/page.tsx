"use client"

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calendar, Clock, Users, Plus, Edit, Trash2 } from 'lucide-react'

const events = [
  { id: 1, title: "Soirée Jazz Quartet",  artist: "The Miles Davis Tribute",  date: "2026-04-15", time: "21:00", price: "25€", capacity: 50, bookings: 45, status: "complet"    },
  { id: 2, title: "Saxophone Night",      artist: "Sarah Johnson Ensemble",    date: "2026-04-18", time: "20:30", price: "20€", capacity: 50, bookings: 38, status: "disponible" },
  { id: 3, title: "Piano Bar Session",    artist: "Marcus Steel",              date: "2026-04-22", time: "19:00", price: "15€", capacity: 40, bookings: 32, status: "disponible" },
]

export default function AdminEventsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-stone-900 mb-1">Gestion des Événements</h1>
          <p className="text-stone-500 text-sm">Gérez tous vos concerts et événements</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-amber-600 hover:bg-amber-500 text-white border-0">
              <Plus className="mr-2 h-4 w-4" />Nouvel événement
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Créer un nouvel événement</DialogTitle>
              <DialogDescription>Remplissez les informations de l'événement</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Titre</Label>
                  <Input placeholder="Nom de l'événement" />
                </div>
                <div className="space-y-2">
                  <Label>Artiste</Label>
                  <Input placeholder="Nom de l'artiste" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea placeholder="Description de l'événement" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2"><Label>Date</Label><Input type="date" /></div>
                <div className="space-y-2"><Label>Heure</Label><Input type="time" /></div>
                <div className="space-y-2"><Label>Prix (€)</Label><Input type="number" placeholder="25" /></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2"><Label>Capacité</Label><Input type="number" placeholder="50" /></div>
                <div className="space-y-2">
                  <Label>Type</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Sélectionner" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="concert">Concert</SelectItem>
                      <SelectItem value="piano-bar">Piano Bar</SelectItem>
                      <SelectItem value="jam">Jam Session</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">Annuler</Button>
              <Button className="bg-amber-600 hover:bg-amber-500 text-white border-0">Créer l'événement</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { label: 'Événements ce mois', value: '28',      sub: '+2 vs mois dernier',              Icon: Calendar, bg: 'bg-amber-100',  iconColor: 'text-amber-700'  },
          { label: 'Taux de remplissage', value: '87%',    sub: 'Moyenne 30 jours',                Icon: Users,    bg: 'bg-indigo-100', iconColor: 'text-indigo-700' },
          { label: 'Revenus événements',  value: '32 450€',sub: '+12.5% vs mois dernier',          Icon: Clock,    bg: 'bg-emerald-100',iconColor: 'text-emerald-700'},
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-2xl border border-stone-100 p-5 shadow-sm flex items-center gap-4">
            <div className={`p-3 rounded-xl ${s.bg} shrink-0`}><s.Icon className={`h-5 w-5 ${s.iconColor}`} /></div>
            <div>
              <p className="text-xl font-bold text-stone-900">{s.value}</p>
              <p className="text-xs text-stone-400">{s.label}</p>
              <p className="text-xs text-stone-300 mt-0.5">{s.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-stone-50">
          <h2 className="font-bold text-stone-900">Liste des événements</h2>
          <p className="text-xs text-stone-400 mt-0.5">Tous les événements programmés</p>
        </div>
        <Table>
          <TableHeader>
            <TableRow className="bg-stone-50 hover:bg-stone-50">
              <TableHead className="text-xs text-stone-400 font-semibold">Événement</TableHead>
              <TableHead className="text-xs text-stone-400 font-semibold">Artiste</TableHead>
              <TableHead className="text-xs text-stone-400 font-semibold">Date</TableHead>
              <TableHead className="text-xs text-stone-400 font-semibold">Prix</TableHead>
              <TableHead className="text-xs text-stone-400 font-semibold">Remplissage</TableHead>
              <TableHead className="text-xs text-stone-400 font-semibold">Statut</TableHead>
              <TableHead className="text-right text-xs text-stone-400 font-semibold">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events.map((event) => {
              const pct = Math.round((event.bookings / event.capacity) * 100)
              return (
                <TableRow key={event.id} className="hover:bg-stone-50/50">
                  <TableCell className="font-semibold text-stone-800">{event.title}</TableCell>
                  <TableCell className="text-stone-500 text-sm">{event.artist}</TableCell>
                  <TableCell>
                    <p className="text-sm text-stone-700">{new Date(event.date).toLocaleDateString('fr-FR')}</p>
                    <p className="text-xs text-stone-400">{event.time}</p>
                  </TableCell>
                  <TableCell className="font-semibold text-amber-700">{event.price}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-stone-100 rounded-full">
                        <div className={`h-full rounded-full ${pct >= 90 ? 'bg-rose-500' : 'bg-amber-500'}`} style={{ width: `${pct}%` }} />
                      </div>
                      <span className="text-xs text-stone-500">{event.bookings}/{event.capacity}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={event.status === 'complet'
                      ? 'bg-rose-100 text-rose-700 border-rose-200 text-[10px]'
                      : 'bg-emerald-100 text-emerald-700 border-emerald-200 text-[10px]'
                    }>
                      {event.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-stone-400 hover:text-amber-600 hover:bg-amber-50">
                        <Edit className="h-3.5 w-3.5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-stone-400 hover:text-rose-600 hover:bg-rose-50">
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
