import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Wine, Coffee, Utensils, Sparkles, Star, Award } from 'lucide-react'

// ─── Data ───────────────────────────────────────────────────────────────────

const cocktails = [
  { 
    id: 1, 
    name: "Old Fashioned", 
    description: "Bourbon, sucre, angostura, orange", 
    price: "12€", 
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&h=600&fit=crop",
    featured: true 
  },
  { 
    id: 2, 
    name: "Negroni", 
    description: "Gin, Campari, vermouth rouge", 
    price: "11€",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&h=600&fit=crop",
    featured: false 
  },
  { 
    id: 3, 
    name: "Manhattan", 
    description: "Whisky, vermouth, angostura", 
    price: "12€",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800&h=600&fit=crop",
    featured: false 
  },
  { 
    id: 4, 
    name: "Mojito", 
    description: "Rhum blanc, menthe, citron vert, soda", 
    price: "10€",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&h=600&fit=crop",
    featured: false 
  },
  { 
    id: 5, 
    name: "Margarita", 
    description: "Tequila, triple sec, citron vert", 
    price: "11€",
    image: "https://images.unsplash.com/photo-1609951651556-5334e2706168?w=800&h=600&fit=crop",
    featured: false 
  },
  { 
    id: 6, 
    name: "Espresso Martini", 
    description: "Vodka, café, Kahlua", 
    price: "13€",
    image: "https://images.unsplash.com/photo-1609951651544-5a65d2494007?w=800&h=600&fit=crop",
    featured: true 
  },
]

const wines = [
  { 
    id: 1, 
    name: "Bordeaux Rouge", 
    region: "Bordeaux", 
    year: "2019",
    description: "Notes de fruits rouges et tanins veloutés",
    glass: "8€", 
    bottle: "35€",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=600&fit=crop"
  },
  { 
    id: 2, 
    name: "Bourgogne Blanc", 
    region: "Bourgogne", 
    year: "2020",
    description: "Élégant et minéral, notes de fleurs blanches",
    glass: "9€", 
    bottle: "40€",
    image: "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800&h=600&fit=crop"
  },
  { 
    id: 3, 
    name: "Champagne Brut", 
    region: "Champagne", 
    year: "NV",
    description: "Fines bulles, notes de brioche et agrumes",
    glass: "12€", 
    bottle: "60€",
    image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=800&h=600&fit=crop"
  },
]

const dishes = [
  {
    id: 1,
    name: "Planche de Charcuterie",
    category: "Entrées",
    description: "Sélection de charcuteries fines artisanales, cornichons maison",
    price: "18€",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop"
  },
  {
    id: 2,
    name: "Burrata Crémeuse",
    category: "Entrées",
    description: "Burrata di Puglia, tomates anciennes, basilic, huile d'olive",
    price: "14€",
    image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=800&h=600&fit=crop"
  },
  {
    id: 3,
    name: "Burger Signature",
    category: "Plats",
    description: "Bœuf Angus 180g, cheddar affiné, bacon croustillant, frites maison",
    price: "22€",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop"
  },
  {
    id: 4,
    name: "Tartare de Saumon",
    category: "Plats",
    description: "Saumon frais, avocat, citron vert, câpres, toast grillé",
    price: "19€",
    image: "https://images.unsplash.com/photo-1580959375944-57957d72a0d6?w=800&h=600&fit=crop"
  },
  {
    id: 5,
    name: "Tiramisu Maison",
    category: "Desserts",
    description: "Recette traditionnelle italienne, mascarpone, café, cacao",
    price: "8€",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&h=600&fit=crop"
  },
  {
    id: 6,
    name: "Fondant au Chocolat",
    category: "Desserts",
    description: "Cœur coulant Valrhona, glace vanille bourbon",
    price: "9€",
    image: "https://images.unsplash.com/photo-1606312619070-d48b4cff00f6?w=800&h=600&fit=crop"
  },
]


// ─── Components ─────────────────────────────────────────────────────────────

function CocktailCard({ cocktail }: { cocktail: typeof cocktails[0] }) {
  return (
    <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
      <div className="relative h-80 overflow-hidden">
        <Image
          src={cocktail.image}
          alt={cocktail.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        
        {cocktail.featured && (
          <Badge className="absolute top-4 right-4 bg-amber-500 text-white border-0 shadow-lg">
            <Sparkles className="w-3 h-3 mr-1" />
            Signature
          </Badge>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="flex items-end justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">{cocktail.name}</h3>
              <p className="text-sm text-stone-300 leading-relaxed">{cocktail.description}</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-amber-400">{cocktail.price}</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

function WineCard({ wine }: { wine: typeof wines[0] }) {
  return (
    <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
      <div className="relative h-96 overflow-hidden">
        <Image
          src={wine.image}
          alt={wine.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-white/90 text-stone-900 border-0">
            {wine.year}
          </Badge>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-1">{wine.name}</h3>
          <p className="text-amber-400 text-sm font-semibold mb-3">{wine.region}</p>
          <p className="text-sm text-stone-300 mb-4">{wine.description}</p>
          
          <div className="flex items-center gap-6 pt-4 border-t border-white/20">
            <div>
              <p className="text-xs text-stone-400 uppercase tracking-wider mb-1">Verre</p>
              <p className="text-xl font-bold">{wine.glass}</p>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div>
              <p className="text-xs text-stone-400 uppercase tracking-wider mb-1">Bouteille</p>
              <p className="text-xl font-bold">{wine.bottle}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

function DishCard({ dish }: { dish: typeof dishes[0] }) {
  return (
    <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
      <div className="relative h-72 overflow-hidden">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />
        
        <div className="absolute top-4 left-4">
          <Badge variant="outline" className="bg-black/50 text-white border-white/30 backdrop-blur-sm">
            {dish.category}
          </Badge>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="flex items-end justify-between gap-3">
            <div className="flex-1 text-white">
              <h3 className="text-xl font-bold mb-2">{dish.name}</h3>
              <p className="text-sm text-stone-300 leading-relaxed">{dish.description}</p>
            </div>
            <div className="text-2xl font-bold text-amber-400">{dish.price}</div>
          </div>
        </div>
      </div>
    </Card>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function MenuPage() {
  return (
    <div className="bg-stone-950">
      {/* Hero avec image */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1920&h=1080&fit=crop"
          alt="Bar ambiance"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-stone-950" />
        
        <div className="relative z-10 text-center text-white px-4">
          <Badge className="mb-6 bg-amber-600/90 text-white border-0 backdrop-blur-sm">
            <Award className="w-4 h-4 mr-2" />
            Carte Récompensée 2026
          </Badge>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-none">
            Notre Carte
          </h1>
          <p className="text-xl md:text-2xl text-stone-300 max-w-2xl mx-auto">
            Une sélection raffinée de cocktails signatures, vins d'exception et cuisine artisanale
          </p>
        </div>
      </div>

      {/* Cocktails Section */}
      <section className="py-20 bg-gradient-to-b from-stone-950 to-stone-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-4 rounded-2xl bg-amber-600/20">
              <Wine className="h-8 w-8 text-amber-400" />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Cocktails Signatures</h2>
              <p className="text-stone-400 mt-2">Créations de nos mixologues experts</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cocktails.map((cocktail) => (
              <CocktailCard key={cocktail.id} cocktail={cocktail} />
            ))}
          </div>
        </div>
      </section>

      {/* Wines Section */}
      <section className="py-20 bg-amber-950/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-4 rounded-2xl bg-rose-600/20">
              <Wine className="h-8 w-8 text-rose-400" />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Cave Sélectionnée</h2>
              <p className="text-stone-400 mt-2">Grands crus et terroirs d'exception</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {wines.map((wine) => (
              <WineCard key={wine.id} wine={wine} />
            ))}
          </div>
        </div>
      </section>

      {/* Food Section */}
      <section className="py-20 bg-stone-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-4 rounded-2xl bg-emerald-600/20">
              <Utensils className="h-8 w-8 text-emerald-400" />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Restauration</h2>
              <p className="text-stone-400 mt-2">De l'entrée au dessert, une cuisine raffinée</p>
            </div>
          </div>

          <Tabs defaultValue="all" className="mt-12">
            <TabsList className="bg-stone-800 border border-stone-700 mb-8">
              <TabsTrigger value="all">Tout Voir</TabsTrigger>
              <TabsTrigger value="starters">Entrées</TabsTrigger>
              <TabsTrigger value="mains">Plats</TabsTrigger>
              <TabsTrigger value="desserts">Desserts</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dishes.map((dish) => (
                <DishCard key={dish.id} dish={dish} />
              ))}
            </TabsContent>

            <TabsContent value="starters" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dishes.filter(d => d.category === "Entrées").map((dish) => (
                <DishCard key={dish.id} dish={dish} />
              ))}
            </TabsContent>

            <TabsContent value="mains" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dishes.filter(d => d.category === "Plats").map((dish) => (
                <DishCard key={dish.id} dish={dish} />
              ))}
            </TabsContent>

            <TabsContent value="desserts" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dishes.filter(d => d.category === "Desserts").map((dish) => (
                <DishCard key={dish.id} dish={dish} />
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-stone-900 to-stone-950">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <Coffee className="h-12 w-12 text-amber-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Envie de Découvrir Notre Carte ?
            </h2>
            <p className="text-stone-400 mb-8">
              Réservez votre table dès maintenant et laissez-vous tenter par nos créations culinaires
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/booking" 
                className="inline-flex items-center justify-center px-8 py-3 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-lg transition-colors"
              >
                Réserver une Table
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 bg-transparent hover:bg-white/10 text-white font-semibold rounded-lg border-2 border-white/20 hover:border-white/40 transition-colors"
              >
                Nous Contacter
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
