# 🎷 Jazz Bar - Site Web Complet

Un site web moderne et complet pour un bar jazz, construit avec Next.js 16, React 19, et shadcn/ui.

## ✨ Fonctionnalités

### 🌐 Site Public
- **Page d'accueil** : Présentation du bar avec événements à venir, caractéristiques et informations pratiques
- **Événements** : Liste complète des concerts et événements avec filtres par type (concerts, piano bar, jam sessions)
- **Menu** : Carte détaillée avec cocktails, vins, plats et boissons
- **À propos** : Histoire du bar, équipe, valeurs et récompenses
- **Contact** : Formulaire de contact et informations de localisation

### 👨‍💼 Dashboard Admin
- **Vue d'ensemble** : Statistiques en temps réel (revenus, réservations, clients actifs)
- **Gestion des événements** : Création, modification et suppression d'événements
- **Gestion du menu** : Administration complète de la carte (cocktails, vins, plats, boissons)
- **Gestion des utilisateurs** : Vue détaillée des clients avec filtres et recherche
- **Statistiques** : Graphiques et analyses des performances
- **Paramètres** : Configuration du bar (horaires, notifications, programme de fidélité)

### 👤 Dashboard Client
- **Tableau de bord** : Vue d'ensemble de l'activité du client
- **Carte de fidélité** : 
  - Visualisation des points gagnés
  - Niveaux de fidélité (Bronze, Argent, Or, VIP)
  - Récompenses disponibles
  - Historique des points
- **Mes commandes** : 
  - Liste de toutes les commandes passées
  - Réservations d'événements à venir
  - Historique complet
- **Mon profil** : Gestion des informations personnelles et préférences
- **Paramètres** : Configuration des notifications et de la confidentialité

## 🚀 Installation & Lancement

1. Installer les dépendances :
```bash
npm install
```

2. Lancer le serveur de développement :
```bash
npm run dev
```

3. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur

## 📦 Technologies Utilisées

- **Framework** : Next.js 16.2.2 (App Router)
- **React** : 19.2.4
- **UI Components** : shadcn/ui (Radix UI)
- **Styling** : Tailwind CSS 4
- **Icons** : Lucide React
- **TypeScript** : Support complet

## 📁 Structure du Projet

```
bar-jazz/
├── app/
│   ├── page.tsx                 # Page d'accueil
│   ├── events/                  # Pages événements
│   ├── menu/                    # Pages menu
│   ├── about/                   # Page à propos
│   ├── contact/                 # Page contact
│   ├── admin/                   # Dashboard admin
│   │   ├── dashboard/
│   │   ├── events/
│   │   ├── menu/
│   │   ├── users/
│   │   ├── stats/
│   │   └── settings/
│   └── client/                  # Dashboard client
│       ├── dashboard/
│       ├── loyalty/
│       ├── orders/
│       ├── profile/
│       └── settings/
├── components/
│   ├── ui/                      # Composants shadcn/ui
│   ├── navigation.tsx           # Navigation principale
│   └── footer.tsx               # Pied de page
└── lib/
    └── utils.ts                 # Utilitaires
```

## 🎨 Composants shadcn/ui Utilisés

Le projet utilise **uniquement des composants shadcn/ui** pour une interface cohérente :

- **Navigation** : Sheet, Sidebar, Navigation Menu
- **Formulaires** : Input, Textarea, Select, Switch, Checkbox, Label
- **Affichage** : Card, Badge, Avatar, Separator, Progress
- **Interactions** : Button, Dialog, Dropdown Menu, Tabs, Accordion
- **Tables** : Table avec tri et filtrage
- **Notifications** : Sonner (Toast)
- **Et 37+ composants au total**

## 📝 Routes Principales

### Public
- `/` - Accueil
- `/events` - Événements
- `/menu` - Menu
- `/about` - À propos
- `/contact` - Contact

### Admin
- `/admin/dashboard` - Dashboard admin
- `/admin/events` - Gestion événements
- `/admin/menu` - Gestion menu
- `/admin/users` - Gestion utilisateurs
- `/admin/stats` - Statistiques
- `/admin/settings` - Paramètres

### Client
- `/client/dashboard` - Dashboard client
- `/client/loyalty` - Carte de fidélité
- `/client/orders` - Mes commandes
- `/client/profile` - Mon profil
- `/client/settings` - Paramètres

## 🎨 Design & UX

- Interface moderne et responsive
- Dark mode supporté
- Animations fluides
- Accessibilité (ARIA)
- Compatible mobile, tablette et desktop

---

Développé avec ❤️ pour les amateurs de jazz
