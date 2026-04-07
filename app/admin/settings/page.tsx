"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'

export default function AdminSettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Paramètres</h1>
        <p className="text-muted-foreground">
          Gérez les paramètres de votre établissement
        </p>
      </div>

      <Tabs defaultValue="general">
        <TabsList>
          <TabsTrigger value="general">Général</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="loyalty">Fidélité</TabsTrigger>
          <TabsTrigger value="advanced">Avancé</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informations générales</CardTitle>
              <CardDescription>
                Informations de base de votre établissement
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom de l'établissement</Label>
                  <Input id="name" defaultValue="Jazz Bar" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="contact@jazzbar.fr" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input id="phone" defaultValue="+33 1 42 86 22 40" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Site web</Label>
                  <Input id="website" defaultValue="www.jazzbar.fr" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Adresse</Label>
                <Input id="address" defaultValue="123 Rue du Jazz, 75001 Paris" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  defaultValue="Le meilleur bar jazz de la ville. Musique live tous les soirs."
                  className="min-h-[100px]"
                />
              </div>
              <Button>Enregistrer les modifications</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Horaires d'ouverture</CardTitle>
              <CardDescription>
                Configurez vos horaires
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { day: "Lundi", open: "18:00", close: "02:00" },
                { day: "Mardi", open: "18:00", close: "02:00" },
                { day: "Mercredi", open: "18:00", close: "02:00" },
                { day: "Jeudi", open: "18:00", close: "02:00" },
                { day: "Vendredi", open: "18:00", close: "04:00" },
                { day: "Samedi", open: "18:00", close: "04:00" },
                { day: "Dimanche", open: "17:00", close: "01:00" },
              ].map((schedule) => (
                <div key={schedule.day} className="flex items-center gap-4">
                  <div className="w-24 font-medium">{schedule.day}</div>
                  <Input type="time" defaultValue={schedule.open} className="w-32" />
                  <span>-</span>
                  <Input type="time" defaultValue={schedule.close} className="w-32" />
                  <Switch defaultChecked />
                </div>
              ))}
              <Button>Enregistrer les horaires</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>
                Configurez vos préférences de notification
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">Nouvelles réservations</div>
                  <div className="text-sm text-muted-foreground">
                    Recevoir un email pour chaque nouvelle réservation
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">Annulations</div>
                  <div className="text-sm text-muted-foreground">
                    Être notifié des annulations de réservations
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">Nouveaux clients</div>
                  <div className="text-sm text-muted-foreground">
                    Notification lors de l'inscription d'un nouveau client
                  </div>
                </div>
                <Switch />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">Rapport quotidien</div>
                  <div className="text-sm text-muted-foreground">
                    Recevoir un résumé quotidien des activités
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              <Button>Enregistrer les préférences</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="loyalty" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Programme de fidélité</CardTitle>
              <CardDescription>
                Configurez votre programme de fidélité
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="pointsPerEuro">Points par euro dépensé</Label>
                <Input id="pointsPerEuro" type="number" defaultValue="10" />
                <p className="text-sm text-muted-foreground">
                  Nombre de points gagnés pour chaque euro dépensé
                </p>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label htmlFor="pointsValue">Valeur d'un point</Label>
                <Input id="pointsValue" type="number" defaultValue="0.01" step="0.01" />
                <p className="text-sm text-muted-foreground">
                  Valeur en euros d'un point de fidélité
                </p>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label htmlFor="minPoints">Points minimum pour récompense</Label>
                <Input id="minPoints" type="number" defaultValue="100" />
                <p className="text-sm text-muted-foreground">
                  Nombre minimum de points pour utiliser une récompense
                </p>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">Activer le programme de fidélité</div>
                  <div className="text-sm text-muted-foreground">
                    Permettre aux clients de gagner et utiliser des points
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              <Button>Enregistrer la configuration</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advanced" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Paramètres avancés</CardTitle>
              <CardDescription>
                Configuration technique de l'application
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">Mode maintenance</div>
                  <div className="text-sm text-muted-foreground">
                    Désactiver temporairement le site pour les visiteurs
                  </div>
                </div>
                <Switch />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">Réservations en ligne</div>
                  <div className="text-sm text-muted-foreground">
                    Autoriser les réservations via le site web
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">Mode sombre</div>
                  <div className="text-sm text-muted-foreground">
                    Afficher le site en mode sombre par défaut
                  </div>
                </div>
                <Switch />
              </div>
              <Button>Enregistrer les paramètres</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
