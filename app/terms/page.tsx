import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { FileText, AlertCircle, CheckCircle, XCircle, Scale, CreditCard } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12 text-center">
          <div className="inline-flex p-4 rounded-2xl bg-amber-100 dark:bg-amber-900/20 mb-4">
            <FileText className="h-12 w-12 text-amber-700 dark:text-amber-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Conditions d'Utilisation</h1>
          <p className="text-lg text-muted-foreground">
            Dernière mise à jour : 7 avril 2026
          </p>
        </div>

        <Alert className="mb-8 border-amber-200 bg-amber-50 dark:bg-amber-900/10 dark:border-amber-800">
          <AlertCircle className="h-4 w-4 text-amber-600" />
          <AlertDescription>
            En utilisant notre site web et nos services, vous acceptez ces conditions d'utilisation. 
            Veuillez les lire attentivement avant de procéder à toute réservation.
          </AlertDescription>
        </Alert>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-amber-600" />
              1. Acceptation des Conditions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              En accédant et en utilisant le site web du Jazz Bar ("le Site"), vous acceptez d'être lié par 
              ces conditions d'utilisation, toutes les lois et réglementations applicables.
            </p>
            <p>
              Si vous n'êtes pas d'accord avec l'une de ces conditions, vous êtes interdit d'utiliser ou 
              d'accéder à ce site.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-amber-600" />
              2. Réservations et Événements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">2.1 Processus de Réservation</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Les réservations sont confirmées uniquement après réception d'un email de confirmation</li>
                <li>Nous nous réservons le droit d'accepter ou de refuser toute réservation</li>
                <li>Les places sont attribuées selon la disponibilité</li>
                <li>Une pièce d'identité peut être demandée à l'entrée</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-2">2.2 Annulation et Modification</h3>
              <div className="space-y-3 mt-3">
                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <p className="font-medium text-sm">Annulation Gratuite</p>
                  <p className="text-sm text-muted-foreground">
                    Jusqu'à 24 heures avant l'événement - remboursement intégral
                  </p>
                </div>
                <div className="border-l-4 border-amber-500 pl-4 py-2">
                  <p className="font-medium text-sm">Annulation Tardive</p>
                  <p className="text-sm text-muted-foreground">
                    Entre 24h et 12h avant - remboursement de 50%
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-4 py-2">
                  <p className="font-medium text-sm">Annulation Dernière Minute</p>
                  <p className="text-sm text-muted-foreground">
                    Moins de 12h avant - aucun remboursement
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-2">2.3 Événements Spéciaux</h3>
              <p className="text-muted-foreground">
                Pour certains événements spéciaux (concerts premium, soirées privées), des conditions 
                particulières peuvent s'appliquer. Ces conditions seront clairement indiquées lors de la réservation.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-amber-600" />
              3. Paiements et Tarifs
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">3.1 Modes de Paiement Acceptés</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Cartes bancaires (Visa, Mastercard, American Express)</li>
                <li>Paiements en ligne sécurisés</li>
                <li>Espèces sur place (pour les consommations)</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-2">3.2 Tarification</h3>
              <p className="text-muted-foreground mb-2">
                Les prix affichés sur le site sont en euros (€) et incluent toutes les taxes applicables.
              </p>
              <p className="text-muted-foreground">
                Nous nous réservons le droit de modifier nos tarifs à tout moment, mais les prix confirmés 
                dans les réservations existantes ne seront pas affectés.
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-2">3.3 Frais de Service</h3>
              <p className="text-muted-foreground">
                Des frais de service peuvent s'appliquer pour certaines réservations. Ces frais seront 
                clairement indiqués avant la confirmation de votre réservation.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>4. Programme de Fidélité</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">4.1 Adhésion</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>L'adhésion au programme de fidélité est gratuite</li>
                <li>Les points sont attribués pour chaque euro dépensé</li>
                <li>Les points ont une validité de 12 mois à compter de leur attribution</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-2">4.2 Utilisation des Points</h3>
              <p className="text-muted-foreground mb-2">
                Les points peuvent être échangés contre :
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Des réductions sur les consommations</li>
                <li>Des places gratuites pour certains événements</li>
                <li>Des avantages exclusifs membres</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-2">4.3 Niveaux de Fidélité</h3>
              <div className="grid gap-3 mt-3">
                <div className="p-3 rounded-lg bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
                  <p className="font-medium">🥉 Bronze (0-499 points)</p>
                  <p className="text-sm text-muted-foreground">Avantages de base</p>
                </div>
                <div className="p-3 rounded-lg bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
                  <p className="font-medium">🥈 Argent (500-999 points)</p>
                  <p className="text-sm text-muted-foreground">Réductions supplémentaires + accès prioritaire</p>
                </div>
                <div className="p-3 rounded-lg bg-amber-100 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700">
                  <p className="font-medium">🥇 Or (1000-1999 points)</p>
                  <p className="text-sm text-muted-foreground">Événements exclusifs + cadeaux</p>
                </div>
                <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700">
                  <p className="font-medium">💎 VIP (2000+ points)</p>
                  <p className="text-sm text-muted-foreground">Tables réservées + invitations privées</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>5. Règles de Conduite</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>En visitant notre établissement, vous vous engagez à :</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Respecter les autres clients et le personnel</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Maintenir un comportement approprié</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Suivre les consignes de sécurité</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Respecter la propriété de l'établissement</span>
              </li>
            </ul>

            <Separator className="my-4" />

            <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-lg border border-red-200 dark:border-red-800">
              <h4 className="font-semibold mb-2 flex items-center gap-2 text-red-700 dark:text-red-400">
                <XCircle className="h-4 w-4" />
                Comportements Interdits
              </h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Violence verbale ou physique</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Discrimination de toute nature</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Consommation excessive d'alcool</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Usage de substances illicites</span>
                </li>
              </ul>
              <p className="text-xs text-muted-foreground mt-3">
                Nous nous réservons le droit de refuser l'accès ou d'expulser toute personne ne respectant pas ces règles.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>6. Age et Consommation d'Alcool</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert className="border-red-200 bg-red-50 dark:bg-red-900/10 dark:border-red-800">
              <AlertCircle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-900 dark:text-red-100">
                <strong>Accès réservé aux personnes majeures.</strong> La vente d'alcool aux mineurs est interdite par la loi. 
                Une pièce d'identité peut être exigée à l'entrée.
              </AlertDescription>
            </Alert>
            <p className="text-muted-foreground">
              Nous encourageons une consommation responsable d'alcool. Notre personnel est formé pour 
              refuser de servir toute personne en état d'ébriété manifeste.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>7. Propriété Intellectuelle</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Tout le contenu de ce site (textes, images, logos, musique, vidéos) est protégé par 
              le droit d'auteur et appartient au Jazz Bar ou à ses concédants de licence.
            </p>
            <p className="text-muted-foreground">
              Toute reproduction, distribution ou utilisation non autorisée est strictement interdite.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>8. Limitation de Responsabilité</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Le Jazz Bar ne peut être tenu responsable de :
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>La perte ou le vol d'objets personnels</li>
              <li>Les dommages indirects ou consécutifs</li>
              <li>Les interruptions ou modifications de services</li>
              <li>Les erreurs ou omissions dans le contenu du site</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>9. Modifications des Conditions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Nous nous réservons le droit de modifier ces conditions d'utilisation à tout moment. 
              Les modifications entreront en vigueur dès leur publication sur le site.
            </p>
            <p className="text-muted-foreground">
              Votre utilisation continue du site après la publication des modifications constitue 
              votre acceptation de ces modifications.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>10. Contact et Réclamations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Pour toute question concernant ces conditions d'utilisation ou pour toute réclamation :
            </p>
            <div className="space-y-2 text-sm">
              <p><strong>Email :</strong> contact@jazzbar.fr</p>
              <p><strong>Adresse :</strong> 123 Rue du Jazz, 75001 Paris</p>
              <p><strong>Téléphone :</strong> 01 23 45 67 89</p>
              <p><strong>Horaires :</strong> Lundi-Vendredi, 10h-18h</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
