import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Shield, Lock, Eye, UserCheck, Cookie, FileText } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12 text-center">
          <div className="inline-flex p-4 rounded-2xl bg-amber-100 dark:bg-amber-900/20 mb-4">
            <Shield className="h-12 w-12 text-amber-700 dark:text-amber-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Politique de Confidentialité</h1>
          <p className="text-lg text-muted-foreground">
            Dernière mise à jour : 7 avril 2026
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-amber-600" />
              Introduction
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Bienvenue sur le site du Jazz Bar. Nous nous engageons à protéger votre vie privée et vos données personnelles. 
              Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations.
            </p>
            <p>
              En utilisant notre site web et nos services, vous acceptez les pratiques décrites dans cette politique.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-amber-600" />
              Informations que Nous Collectons
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Informations Personnelles</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Informations de paiement (traitées de manière sécurisée)</li>
                <li>Historique de réservations et de commandes</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-2">Données de Navigation</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Adresse IP</li>
                <li>Type de navigateur et système d'exploitation</li>
                <li>Pages visitées et durée des visites</li>
                <li>Données de cookies et technologies similaires</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="h-5 w-5 text-amber-600" />
              Utilisation de Vos Données
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Nous utilisons vos informations pour :</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Traiter vos réservations et commandes</li>
              <li>Gérer votre compte client et votre carte de fidélité</li>
              <li>Vous envoyer des confirmations et des notifications importantes</li>
              <li>Améliorer nos services et votre expérience utilisateur</li>
              <li>Vous informer de nos événements et offres spéciales (avec votre consentement)</li>
              <li>Prévenir la fraude et assurer la sécurité de notre plateforme</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-amber-600" />
              Protection de Vos Données
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger 
              vos données personnelles contre tout accès, modification, divulgation ou destruction non autorisés.
            </p>
            
            <div className="bg-amber-50 dark:bg-amber-900/10 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Lock className="h-4 w-4" />
                Mesures de Sécurité
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Chiffrement SSL/TLS pour toutes les communications</li>
                <li>Chiffrement des données sensibles dans nos bases de données</li>
                <li>Contrôles d'accès stricts aux données personnelles</li>
                <li>Audits de sécurité réguliers</li>
                <li>Formation continue de notre personnel sur la protection des données</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cookie className="h-5 w-5 text-amber-600" />
              Cookies et Technologies Similaires
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Notre site utilise des cookies pour améliorer votre expérience. Les cookies sont de petits fichiers 
              texte stockés sur votre appareil.
            </p>
            
            <div>
              <h3 className="font-semibold mb-2">Types de Cookies Utilisés</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-amber-500 pl-4">
                  <h4 className="font-medium">Cookies Essentiels</h4>
                  <p className="text-sm text-muted-foreground">
                    Nécessaires au fonctionnement du site (authentification, panier)
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-medium">Cookies Analytiques</h4>
                  <p className="text-sm text-muted-foreground">
                    Nous aident à comprendre comment vous utilisez notre site
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-medium">Cookies de Préférence</h4>
                  <p className="text-sm text-muted-foreground">
                    Mémorisent vos préférences (langue, thème)
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Vos Droits</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="mt-1 h-5 w-5 rounded-full bg-amber-100 dark:bg-amber-900/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-amber-700 dark:text-amber-400">1</span>
                </div>
                <div>
                  <strong>Droit d'accès :</strong> Obtenir une copie de vos données personnelles
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 h-5 w-5 rounded-full bg-amber-100 dark:bg-amber-900/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-amber-700 dark:text-amber-400">2</span>
                </div>
                <div>
                  <strong>Droit de rectification :</strong> Corriger vos données inexactes
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 h-5 w-5 rounded-full bg-amber-100 dark:bg-amber-900/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-amber-700 dark:text-amber-400">3</span>
                </div>
                <div>
                  <strong>Droit à l'effacement :</strong> Demander la suppression de vos données
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 h-5 w-5 rounded-full bg-amber-100 dark:bg-amber-900/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-amber-700 dark:text-amber-400">4</span>
                </div>
                <div>
                  <strong>Droit à la limitation :</strong> Limiter le traitement de vos données
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 h-5 w-5 rounded-full bg-amber-100 dark:bg-amber-900/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-amber-700 dark:text-amber-400">5</span>
                </div>
                <div>
                  <strong>Droit à la portabilité :</strong> Recevoir vos données dans un format structuré
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 h-5 w-5 rounded-full bg-amber-100 dark:bg-amber-900/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-amber-700 dark:text-amber-400">6</span>
                </div>
                <div>
                  <strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données
                </div>
              </li>
            </ul>

            <Separator className="my-6" />

            <p className="text-sm">
              Pour exercer ces droits, contactez-nous à : <strong>privacy@jazzbar.fr</strong>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Pour toute question concernant cette politique de confidentialité ou le traitement de vos données :
            </p>
            <div className="space-y-2 text-sm">
              <p><strong>Email :</strong> privacy@jazzbar.fr</p>
              <p><strong>Adresse :</strong> 123 Rue du Jazz, 75001 Paris</p>
              <p><strong>Téléphone :</strong> 01 23 45 67 89</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
