"use client"

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Plus, Edit, Trash2, Wine, Coffee, Utensils } from 'lucide-react'

const cocktails = [
  { id: 1, name: "Old Fashioned", description: "Bourbon, sucre, angostura, orange",  price: "12€", available: true  },
  { id: 2, name: "Negroni",       description: "Gin, Campari, vermouth rouge",         price: "11€", available: true  },
  { id: 3, name: "Manhattan",     description: "Whisky, vermouth, angostura",          price: "12€", available: false },
]

const foods = [
  { id: 1, name: "Planche de Charcuterie", description: "Sélection de charcuteries fines", price: "18€", category: "Entrée",  available: true },
  { id: 2, name: "Burger Signature",       description: "Bœuf Angus, cheddar, bacon",       price: "22€", category: "Plat",    available: true },
  { id: 3, name: "Tiramisu Maison",        description: "Recette traditionnelle",            price: "8€",  category: "Dessert", available: true },
]

function ItemTable({ data, showCategory = false }: { data: { id: number; name: string; description: string; price: string; available: boolean; category?: string }[]; showCategory?: boolean }) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-stone-50 hover:bg-stone-50">
          <TableHead className="text-xs text-stone-400 font-semibold">Nom</TableHead>
          <TableHead className="text-xs text-stone-400 font-semibold">Description</TableHead>
          {showCategory && <TableHead className="text-xs text-stone-400 font-semibold">Catégorie</TableHead>}
          <TableHead className="text-xs text-stone-400 font-semibold">Prix</TableHead>
          <TableHead className="text-xs text-stone-400 font-semibold">Disponible</TableHead>
          <TableHead className="text-right text-xs text-stone-400 font-semibold">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id} className="hover:bg-stone-50/50">
            <TableCell className="font-semibold text-stone-800 text-sm">{item.name}</TableCell>
            <TableCell className="text-stone-500 text-sm">{item.description}</TableCell>
            {showCategory && (
              <TableCell>
                <Badge className="bg-stone-100 text-stone-600 border-stone-200 text-[10px]">{item.category}</Badge>
              </TableCell>
            )}
            <TableCell className="font-bold text-amber-700">{item.price}</TableCell>
            <TableCell>
              <Badge className={item.available
                ? 'bg-emerald-100 text-emerald-700 border-emerald-200 text-[10px]'
                : 'bg-stone-100 text-stone-500 border-stone-200 text-[10px]'
              }>
                {item.available ? 'Disponible' : 'Indisponible'}
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
        ))}
      </TableBody>
    </Table>
  )
}

export default function AdminMenuPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-stone-900 mb-1">Gestion du Menu</h1>
          <p className="text-stone-500 text-sm">Gérez votre carte de cocktails et plats</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-amber-600 hover:bg-amber-500 text-white border-0">
              <Plus className="mr-2 h-4 w-4" />Nouvel article
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Ajouter un article au menu</DialogTitle>
              <DialogDescription>Remplissez les informations de l'article</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label>Catégorie</Label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Sélectionner une catégorie" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cocktail">Cocktail</SelectItem>
                    <SelectItem value="wine">Vin</SelectItem>
                    <SelectItem value="food">Nourriture</SelectItem>
                    <SelectItem value="drink">Boisson</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2"><Label>Nom</Label><Input placeholder="Nom de l'article" /></div>
                <div className="space-y-2"><Label>Prix (€)</Label><Input type="number" placeholder="12" /></div>
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea placeholder="Description de l'article" />
              </div>
              <div className="flex items-center gap-2">
                <Switch id="available" defaultChecked />
                <Label htmlFor="available" className="text-sm text-stone-600">Disponible immédiatement</Label>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">Annuler</Button>
              <Button className="bg-amber-600 hover:bg-amber-500 text-white border-0">Ajouter l'article</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { label: 'Articles au menu',  value: '87',           sub: '+5 ce mois',                Icon: Utensils, bg: 'bg-amber-100',  iconColor: 'text-amber-700'   },
          { label: 'Revenus F&B',       value: '21 870€',      sub: '+8.2% vs mois dernier',     Icon: Wine,     bg: 'bg-indigo-100', iconColor: 'text-indigo-700'  },
          { label: 'Article populaire', value: 'Old Fashioned',sub: '543 commandes ce mois',     Icon: Coffee,   bg: 'bg-emerald-100',iconColor: 'text-emerald-700' },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-2xl border border-stone-100 p-5 shadow-sm flex items-center gap-4">
            <div className={`p-3 rounded-xl ${s.bg} shrink-0`}><s.Icon className={`h-5 w-5 ${s.iconColor}`} /></div>
            <div>
              <p className="text-lg font-bold text-stone-900 leading-tight">{s.value}</p>
              <p className="text-xs text-stone-400">{s.label}</p>
              <p className="text-xs text-stone-300 mt-0.5">{s.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
        <Tabs defaultValue="cocktails">
          <div className="px-5 py-4 border-b border-stone-50">
            <TabsList className="bg-stone-100 p-1 rounded-xl h-auto gap-1">
              {['cocktails', 'wines', 'food', 'drinks'].map((v) => (
                <TabsTrigger key={v} value={v} className="rounded-lg px-4 py-1.5 text-xs data-[state=active]:bg-white data-[state=active]:shadow-sm text-stone-500">
                  {v === 'cocktails' ? 'Cocktails' : v === 'wines' ? 'Vins' : v === 'food' ? 'Nourriture' : 'Boissons'}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          <TabsContent value="cocktails"><ItemTable data={cocktails} /></TabsContent>
          <TabsContent value="wines">
            <div className="p-8 text-center text-stone-400 text-sm">Aucun vin ajouté pour le moment.</div>
          </TabsContent>
          <TabsContent value="food"><ItemTable data={foods} showCategory /></TabsContent>
          <TabsContent value="drinks">
            <div className="p-8 text-center text-stone-400 text-sm">Aucune boisson ajoutée pour le moment.</div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
