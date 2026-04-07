"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import {
  User, Mail, Phone, MapPin, Calendar, Star, Upload, Crown, Lock,
} from 'lucide-react'

const musicGenres = ['Jazz Traditionnel', 'Bebop', 'Jazz Fusion', 'Smooth Jazz', 'Latin Jazz', 'Free Jazz']

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-stone-900 mb-1">Mon Profil</h1>
        <p className="text-stone-500 text-sm">Gérez vos informations personnelles</p>
      </div>

      {/* Profile header */}
      <div className="bg-stone-950 rounded-2xl overflow-hidden">
        <div className="h-20 bg-gradient-to-r from-amber-800 via-amber-900 to-stone-900" />
        <div className="px-6 pb-6">
          <div className="flex items-end gap-4 -mt-10 mb-5">
            <div className="relative shrink-0">
              <div className="h-20 w-20 rounded-2xl bg-amber-700 border-4 border-stone-950 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">MD</span>
              </div>
              <button className="absolute -bottom-1 -right-1 h-7 w-7 bg-stone-800 border border-stone-700 rounded-full flex items-center justify-center hover:bg-stone-700 transition-colors">
                <Upload className="h-3.5 w-3.5 text-stone-300" />
              </button>
            </div>
            <div className="pb-1">
              <div className="flex items-center gap-2">
                <p className="font-bold text-white text-xl">Marie Dubois</p>
                <Badge className="bg-amber-600/20 text-amber-400 border-amber-600/30 text-[10px] px-1.5 py-0 h-4">
                  <Crown className="h-2.5 w-2.5 mr-0.5" />VIP
                </Badge>
              </div>
              <p className="text-stone-400 text-xs mt-0.5">Membre depuis Mars 2024</p>
            </div>
          </div>

          {/* Mini stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: 'Points fidélité', value: '450',    Icon: Star,     color: 'text-amber-400'  },
              { label: 'Visites',          value: '24',     Icon: Calendar, color: 'text-indigo-400' },
              { label: 'Total dépensé',   value: '1 250€', Icon: User,     color: 'text-emerald-400'},
              { label: 'Moy. / visite',   value: '52€',    Icon: Star,     color: 'text-rose-400'   },
            ].map((s) => (
              <div key={s.label} className="bg-stone-900 rounded-xl p-3 border border-stone-800">
                <p className="text-lg font-bold text-white">{s.value}</p>
                <p className="text-xs text-stone-500 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Personal info form */}
      <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6">
        <h2 className="font-bold text-stone-900 mb-1">Informations personnelles</h2>
        <p className="text-stone-400 text-sm mb-6">Mettez à jour vos informations</p>
        <form className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label className="text-stone-700 font-medium text-sm">Prénom</Label>
              <Input defaultValue="Marie" className="border-stone-200 focus:border-amber-400" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-stone-700 font-medium text-sm">Nom</Label>
              <Input defaultValue="Dubois" className="border-stone-200 focus:border-amber-400" />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label className="text-stone-700 font-medium text-sm flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-stone-400" />Email
            </Label>
            <Input type="email" defaultValue="marie.dubois@email.com" className="border-stone-200 focus:border-amber-400" />
          </div>
          <div className="space-y-1.5">
            <Label className="text-stone-700 font-medium text-sm flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-stone-400" />Téléphone
            </Label>
            <Input type="tel" defaultValue="+33 6 12 34 56 78" className="border-stone-200 focus:border-amber-400" />
          </div>
          <div className="space-y-1.5">
            <Label className="text-stone-700 font-medium text-sm flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-stone-400" />Date de naissance
            </Label>
            <Input type="date" defaultValue="1990-05-15" className="border-stone-200 focus:border-amber-400" />
          </div>
          <div className="space-y-1.5">
            <Label className="text-stone-700 font-medium text-sm flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-stone-400" />Adresse
            </Label>
            <Input defaultValue="45 Avenue des Champs-Élysées" className="border-stone-200 focus:border-amber-400" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <Label className="text-stone-700 font-medium text-sm">Code postal</Label>
              <Input defaultValue="75008" className="border-stone-200 focus:border-amber-400" />
            </div>
            <div className="space-y-1.5 col-span-2">
              <Label className="text-stone-700 font-medium text-sm">Ville</Label>
              <Input defaultValue="Paris" className="border-stone-200 focus:border-amber-400" />
            </div>
          </div>
          <Button type="submit" className="bg-amber-600 hover:bg-amber-500 text-white border-0">
            Enregistrer les modifications
          </Button>
        </form>
      </div>

      {/* Password */}
      <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6">
        <h2 className="font-bold text-stone-900 mb-1 flex items-center gap-2">
          <Lock className="h-4 w-4 text-stone-400" />Sécurité
        </h2>
        <p className="text-stone-400 text-sm mb-6">Modifiez votre mot de passe</p>
        <form className="space-y-4">
          <div className="space-y-1.5">
            <Label className="text-stone-700 font-medium text-sm">Mot de passe actuel</Label>
            <Input type="password" className="border-stone-200 focus:border-amber-400" />
          </div>
          <div className="space-y-1.5">
            <Label className="text-stone-700 font-medium text-sm">Nouveau mot de passe</Label>
            <Input type="password" className="border-stone-200 focus:border-amber-400" />
          </div>
          <div className="space-y-1.5">
            <Label className="text-stone-700 font-medium text-sm">Confirmer</Label>
            <Input type="password" className="border-stone-200 focus:border-amber-400" />
          </div>
          <Button type="submit" variant="outline" className="border-stone-200">
            Changer le mot de passe
          </Button>
        </form>
      </div>

      {/* Music preferences */}
      <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6">
        <h2 className="font-bold text-stone-900 mb-1">Préférences musicales</h2>
        <p className="text-stone-400 text-sm mb-5">Aidez-nous à personnaliser votre expérience</p>
        <div className="flex flex-wrap gap-2">
          {musicGenres.map((genre) => (
            <Badge key={genre} variant="outline" className="cursor-pointer border-stone-200 text-stone-600 hover:bg-amber-50 hover:border-amber-400 hover:text-amber-700 transition-colors px-3 py-1.5">
              {genre}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
