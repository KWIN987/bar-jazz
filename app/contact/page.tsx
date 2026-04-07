"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

const info = [
  {
    Icon: MapPin,
    label: 'Adresse',
    lines: ['123 Rue du Jazz', '75001 Paris, France'],
    sub: 'Métro : Ligne 1, Station Louvre',
    bg: 'bg-amber-50',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-700',
    action: 'Voir sur Google Maps',
  },
  {
    Icon: Phone,
    label: 'Téléphone',
    lines: ['+33 1 42 86 22 40'],
    sub: 'Du lundi au dimanche',
    bg: 'bg-indigo-50',
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-700',
    action: null,
  },
  {
    Icon: Mail,
    label: 'Email',
    lines: ['contact@jazzbar.fr'],
    sub: 'Réponse sous 24h',
    bg: 'bg-rose-50',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-700',
    action: null,
  },
  {
    Icon: Clock,
    label: "Horaires d'ouverture",
    lines: ['Lun – Jeu : 18h00 – 2h00', 'Ven – Sam : 18h00 – 4h00', 'Dimanche : 17h00 – 1h00'],
    sub: null,
    bg: 'bg-emerald-50',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-700',
    action: null,
  },
]

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-stone-950 py-16 border-b border-stone-800">
        <div className="container mx-auto px-4">
          <p className="text-amber-400 font-semibold tracking-[0.2em] uppercase text-xs mb-4">Jazz Bar Paris</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-none mb-2">Contact</h1>
          <p className="text-stone-400 text-xl mt-3">Une question ? On vous répond rapidement.</p>
        </div>
      </div>

      <div className="bg-stone-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Form — 3 cols */}
            <div className="lg:col-span-3 bg-white rounded-2xl border border-stone-100 p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-stone-900 mb-1">Envoyez-nous un message</h2>
              <p className="text-stone-400 text-sm mb-8">Nous vous répondrons dans les plus brefs délais</p>

              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="firstName" className="text-stone-700 font-medium text-sm">Prénom</Label>
                    <Input id="firstName" placeholder="Votre prénom" className="border-stone-200 focus:border-amber-400 focus:ring-amber-400/20" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="lastName" className="text-stone-700 font-medium text-sm">Nom</Label>
                    <Input id="lastName" placeholder="Votre nom" className="border-stone-200 focus:border-amber-400" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-stone-700 font-medium text-sm">Email</Label>
                  <Input id="email" type="email" placeholder="votre@email.com" className="border-stone-200 focus:border-amber-400" />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="text-stone-700 font-medium text-sm">Téléphone</Label>
                  <Input id="phone" type="tel" placeholder="+33 6 12 34 56 78" className="border-stone-200 focus:border-amber-400" />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="subject" className="text-stone-700 font-medium text-sm">Sujet</Label>
                  <Input id="subject" placeholder="Objet de votre message" className="border-stone-200 focus:border-amber-400" />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-stone-700 font-medium text-sm">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Votre message..."
                    className="min-h-[140px] border-stone-200 focus:border-amber-400 resize-none"
                  />
                </div>

                <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-500 text-white border-0 h-11 font-semibold">
                  <Send className="mr-2 h-4 w-4" />
                  Envoyer le message
                </Button>
              </form>
            </div>

            {/* Info cards — 2 cols */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {info.map(({ Icon, label, lines, sub, bg, iconBg, iconColor, action }) => (
                <div key={label} className={`${bg} rounded-2xl p-5 border border-white`}>
                  <div className="flex items-start gap-4">
                    <div className={`${iconBg} p-2.5 rounded-xl shrink-0`}>
                      <Icon className={`h-5 w-5 ${iconColor}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-stone-800 text-sm mb-1">{label}</p>
                      {lines.map((line) => (
                        <p key={line} className="text-stone-700 text-sm">{line}</p>
                      ))}
                      {sub && <p className="text-stone-400 text-xs mt-1">{sub}</p>}
                      {action && (
                        <Button variant="outline" size="sm" className="mt-3 border-stone-300 text-stone-600 hover:border-amber-400 hover:text-amber-700 text-xs h-7 px-3">
                          {action}
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Reservation note */}
              <div className="bg-stone-900 rounded-2xl p-5 text-white">
                <h3 className="font-bold mb-2">Réservation de table</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Appelez-nous directement au <span className="text-amber-400 font-semibold">+33 1 42 86 22 40</span> ou remplissez le formulaire. Groupes de plus de 8 personnes : nous contacter directement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
