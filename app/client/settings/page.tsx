"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function ClientSettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Paramètres</h1>
        <p className="text-muted-foreground">
          Gérez vos préférences et notifications
        </p>
      </div>

      {/* Notifications */}
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>
            Choisissez comment vous souhaitez être notifié
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="email-notifications">Notifications par email</Label>
              <div className="text-sm text-muted-foreground">
                Recevoir des emails pour les nouveaux événements et offres
              </div>
            </div>
            <Switch id="email-notifications" defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="booking-confirmations">Confirmations de réservation</Label>
              <div className="text-sm text-muted-foreground">
                Recevoir un email lors de chaque réservation
              </div>
            </div>
            <Switch id="booking-confirmations" defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="marketing">Communications marketing</Label>
              <div className="text-sm text-muted-foreground">
                Recevoir des offres spéciales et promotions
              </div>
            </div>
            <Switch id="marketing" />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="newsletter">Newsletter</Label>
              <div className="text-sm text-muted-foreground">
                Newsletter mensuelle avec la programmation
              </div>
            </div>
            <Switch id="newsletter" defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="loyalty-updates">Mises à jour fidélité</Label>
              <div className="text-sm text-muted-foreground">
                Notifications sur vos points et récompenses
              </div>
            </div>
            <Switch id="loyalty-updates" defaultChecked />
          </div>
        </CardContent>
      </Card>

      {/* Preferences */}
      <Card>
        <CardHeader>
          <CardTitle>Préférences</CardTitle>
          <CardDescription>
            Personnalisez votre expérience
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="language">Langue</Label>
            <Select defaultValue="fr">
              <SelectTrigger id="language">
                <SelectValue placeholder="Choisir une langue" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fr">Français</SelectItem>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Separator />
          <div className="space-y-2">
            <Label htmlFor="timezone">Fuseau horaire</Label>
            <Select defaultValue="paris">
              <SelectTrigger id="timezone">
                <SelectValue placeholder="Choisir un fuseau horaire" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="paris">Europe/Paris</SelectItem>
                <SelectItem value="london">Europe/London</SelectItem>
                <SelectItem value="new-york">America/New_York</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="dark-mode">Mode sombre</Label>
              <div className="text-sm text-muted-foreground">
                Utiliser le thème sombre
              </div>
            </div>
            <Switch id="dark-mode" />
          </div>
        </CardContent>
      </Card>

      {/* Privacy */}
      <Card>
        <CardHeader>
          <CardTitle>Confidentialité</CardTitle>
          <CardDescription>
            Contrôlez vos données personnelles
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="profile-visibility">Profil public</Label>
              <div className="text-sm text-muted-foreground">
                Rendre votre profil visible aux autres membres
              </div>
            </div>
            <Switch id="profile-visibility" />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="data-sharing">Partage de données</Label>
              <div className="text-sm text-muted-foreground">
                Partager vos données pour améliorer l'expérience
              </div>
            </div>
            <Switch id="data-sharing" defaultChecked />
          </div>
          <Separator />
          <div className="space-y-2">
            <Button variant="outline">Télécharger mes données</Button>
            <p className="text-xs text-muted-foreground">
              Téléchargez une copie de toutes vos données
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Payment Methods */}
      <Card>
        <CardHeader>
          <CardTitle>Moyens de paiement</CardTitle>
          <CardDescription>
            Gérez vos cartes bancaires enregistrées
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                💳
              </div>
              <div>
                <div className="font-medium">•••• •••• •••• 4242</div>
                <div className="text-sm text-muted-foreground">Expire 12/2027</div>
              </div>
            </div>
            <Button variant="ghost" size="sm">Supprimer</Button>
          </div>
          <Button variant="outline" className="w-full">
            Ajouter une carte
          </Button>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="border-destructive">
        <CardHeader>
          <CardTitle className="text-destructive">Zone dangereuse</CardTitle>
          <CardDescription>
            Actions irréversibles
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Button variant="outline" className="w-full">
              Désactiver mon compte
            </Button>
            <p className="text-xs text-muted-foreground">
              Votre compte sera désactivé temporairement
            </p>
          </div>
          <Separator />
          <div className="space-y-2">
            <Button variant="destructive" className="w-full">
              Supprimer mon compte
            </Button>
            <p className="text-xs text-muted-foreground">
              Suppression définitive de toutes vos données
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button>Enregistrer toutes les modifications</Button>
      </div>
    </div>
  )
}
