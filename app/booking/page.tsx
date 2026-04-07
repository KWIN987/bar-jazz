'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Calendar, Clock, Users, Mail, Phone, User, MessageSquare, CheckCircle, Music2, CreditCard, PartyPopper } from 'lucide-react'

export default function BookingPage() {
  const [formData, setFormData] = useState({
    eventId: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    guests: '2',
    specialRequests: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const events = [
    { id: '1', name: 'Soirée Jazz Quartet - 15 Avril 2026', price: '25€', time: '21h00', available: 45 },
    { id: '2', name: 'Saxophone Night - 18 Avril 2026', price: '30€', time: '20h30', available: 32 },
    { id: '3', name: 'Piano Bar Session - 22 Avril 2026', price: '20€', time: '19h00', available: 50 },
    { id: '4', name: 'Jazz Fusion Night - 25 Avril 2026', price: '35€', time: '21h30', available: 28 },
    { id: '5', name: 'Jam Session Ouverte - 28 Avril 2026', price: 'Gratuit', time: '20h00', available: 60 },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    // Ici, vous ajouteriez la logique pour envoyer les données au serveur
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="border-green-200 bg-green-50 dark:bg-green-900/10 dark:border-green-800">
            <CardHeader className="text-center pb-6 pt-12">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-green-100 dark:bg-green-900/30">
                  <CheckCircle className="h-16 w-16 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <CardTitle className="text-3xl text-green-900 dark:text-green-100">
                Réservation Confirmée !
              </CardTitle>
              <CardDescription className="text-lg text-green-700 dark:text-green-300">
                Nous avons bien reçu votre demande de réservation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pb-8">
              <Alert className="border-green-300 bg-white dark:bg-green-900/20">
                <PartyPopper className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-900 dark:text-green-100">
                  Un email de confirmation a été envoyé à <strong>{formData.email}</strong>
                </AlertDescription>
              </Alert>

              <div className="bg-white dark:bg-stone-900 rounded-lg p-6 border border-green-200 dark:border-green-800">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Music2 className="h-5 w-5 text-amber-600" />
                  Détails de votre réservation
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Nom :</span>
                    <span className="font-medium">{formData.firstName} {formData.lastName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Nombre de personnes :</span>
                    <span className="font-medium">{formData.guests} {parseInt(formData.guests) > 1 ? 'personnes' : 'personne'}</span>
                  </div>
                  <Separator />
                  <p className="text-xs text-muted-foreground">
                    Numéro de réservation : <strong className="text-foreground">JB-2026-{Math.floor(Math.random() * 10000)}</strong>
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Vous recevrez un rappel 24h avant l'événement</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Annulation gratuite jusqu'à 24h avant</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Une pièce d'identité peut être demandée à l'entrée</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex gap-3 justify-center pb-12">
              <Button onClick={() => setSubmitted(false)} variant="outline">
                Nouvelle Réservation
              </Button>
              <Button onClick={() => window.location.href = '/'} className="bg-amber-600 hover:bg-amber-500">
                Retour à l'Accueil
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12 text-center">
          <div className="inline-flex p-4 rounded-2xl bg-amber-100 dark:bg-amber-900/20 mb-4">
            <Calendar className="h-12 w-12 text-amber-700 dark:text-amber-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Réserver une Place</h1>
          <p className="text-lg text-muted-foreground">
            Rejoignez-nous pour une soirée jazz inoubliable
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulaire de réservation */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Formulaire de Réservation</CardTitle>
                <CardDescription>
                  Remplissez vos informations pour réserver votre place
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Sélection de l'événement */}
                  <div className="space-y-2">
                    <Label htmlFor="event" className="flex items-center gap-2">
                      <Music2 className="h-4 w-4 text-amber-600" />
                      Événement *
                    </Label>
                    <Select
                      value={formData.eventId}
                      onValueChange={(value) => handleChange('eventId', value)}
                      required
                    >
                      <SelectTrigger id="event">
                        <SelectValue placeholder="Sélectionnez un événement" />
                      </SelectTrigger>
                      <SelectContent>
                        {events.map((event) => (
                          <SelectItem key={event.id} value={event.id}>
                            <div className="flex items-center justify-between gap-4">
                              <span>{event.name}</span>
                              <Badge variant="secondary" className="ml-2">{event.price}</Badge>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {formData.eventId && (
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {events.find(e => e.id === formData.eventId)?.time} • {events.find(e => e.id === formData.eventId)?.available} places disponibles
                      </p>
                    )}
                  </div>

                  <Separator />

                  {/* Informations personnelles */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="flex items-center gap-2">
                        <User className="h-4 w-4 text-amber-600" />
                        Prénom *
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="Votre prénom"
                        value={formData.firstName}
                        onChange={(e) => handleChange('firstName', e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nom *</Label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Votre nom"
                        value={formData.lastName}
                        onChange={(e) => handleChange('lastName', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-amber-600" />
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="votre@email.com"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-amber-600" />
                        Téléphone *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="06 12 34 56 78"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="guests" className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-amber-600" />
                      Nombre de personnes *
                    </Label>
                    <Select
                      value={formData.guests}
                      onValueChange={(value) => handleChange('guests', value)}
                      required
                    >
                      <SelectTrigger id="guests">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num > 1 ? 'personnes' : 'personne'}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialRequests" className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-amber-600" />
                      Demandes spéciales (optionnel)
                    </Label>
                    <Textarea
                      id="specialRequests"
                      placeholder="Allergies, préférences de table, occasion spéciale..."
                      rows={4}
                      value={formData.specialRequests}
                      onChange={(e) => handleChange('specialRequests', e.target.value)}
                    />
                  </div>

                  <Alert>
                    <CreditCard className="h-4 w-4" />
                    <AlertDescription>
                      Aucun paiement n'est requis pour la réservation. Le règlement se fera sur place.
                    </AlertDescription>
                  </Alert>

                  <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-500" size="lg">
                    Confirmer la Réservation
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    En réservant, vous acceptez nos{' '}
                    <a href="/terms" className="text-amber-600 hover:underline">
                      conditions d'utilisation
                    </a>
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Informations complémentaires */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Informations Pratiques</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Confirmation Instantanée</p>
                    <p className="text-muted-foreground text-xs">Recevez votre confirmation par email</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Annulation Gratuite</p>
                    <p className="text-muted-foreground text-xs">Jusqu'à 24h avant l'événement</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Places Garanties</p>
                    <p className="text-muted-foreground text-xs">Vos places sont réservées</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 border-amber-200 dark:border-amber-800">
              <CardHeader>
                <CardTitle className="text-lg">Besoin d'Aide ?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p className="text-muted-foreground">
                  Notre équipe est à votre disposition pour répondre à vos questions
                </p>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-amber-600" />
                    <strong>01 23 45 67 89</strong>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-amber-600" />
                    <strong>contact@jazzbar.fr</strong>
                  </p>
                </div>
                <p className="text-xs text-muted-foreground">
                  Du lundi au vendredi, 10h-18h
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Programme de Fidélité</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p className="text-muted-foreground mb-3">
                  Gagnez des points à chaque réservation et profitez d'avantages exclusifs !
                </p>
                <Button variant="outline" className="w-full" onClick={() => window.location.href = '/client/loyalty'}>
                  En Savoir Plus
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
