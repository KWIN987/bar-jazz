import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Calendar, Clock, Users, MapPin, Ticket, Star, Music, ArrowRight, Sparkles, Heart } from 'lucide-react'

const events = [
  {
    id: 1,
    title: "Soirée Jazz Quartet",
    artist: "The Miles Davis Tribute",
    description: "Revivez la légende ! Un hommage vibrant à Miles Davis avec Marcus Johnson à la trompette. Au programme : So What, Freddie Freeloader, Blue in Green... Des standards immortels réinterprétés avec passion et technique virtuose.",
    date: "15 Avril 2026",
    time: "21h00",
    price: "25€",
    capacity: "50 places",
    available: 12,
    type: "concert",
    image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=1200&h=800&fit=crop",
    featured: true,
    tags: ["Tribute", "Hard Bop", "Classique"]
  },
  {
    id: 2,
    title: "Saxophone Night",
    artist: "Sarah Johnson Ensemble",
    description: "La nouvelle étoile du saxophone contemporain ! Formée à Berklee, Sarah fusionne jazz modal et influences afro-cubaines. Une performance électrique qui repousse les frontières du genre.",
    date: "18 Avril 2026",
    time: "20h30",
    price: "30€",
    capacity: "50 places",
    available: 8,
    type: "concert",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&h=800&fit=crop",
    featured: false,
    tags: ["Contemporain", "Fusion", "Incontournable"]
  },
  {
    id: 3,
    title: "Piano Bar Intimiste",
    artist: "Marcus Steel",
    description: "Une soirée douce et feutrée dans l'intimité de notre bar. Marcus interprète vos classiques favoris (Ellington, Monk, Evans) et prend vos requêtes. Parfait pour un rendez-vous romantique ou une soirée entre amis.",
    date: "22 Avril 2026",
    time: "19h00",
    price: "20€",
    capacity: "40 places",
    available: 15,
    type: "piano-bar",
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=1200&h=800&fit=crop",
    featured: false,
    tags: ["Intimiste", "Standards", "Accessible"]
  },
  {
    id: 4,
    title: "Jam Session Ouverte",
    artist: "Session Collaborative",
    description: "LA soirée des musiciens ! Venez partager votre passion, improviser avec nos artistes résidents et le public. Tous niveaux bienvenus. Apportez votre instrument, on s'occupe du reste. Entrée gratuite !",
    date: "25 Avril 2026",
    time: "20h00",
    price: "Gratuit",
    capacity: "60 places",
    available: 45,
    type: "jam",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=800&fit=crop",
    featured: false,
    tags: ["Participatif", "Gratuit", "Convivial"]
  },
  {
    id: 5,
    title: "Vocal Jazz Evening",
    artist: "Ella Thompson Quartet",
    description: "Une voix d'or pour une soirée magique. Ella réinvente le Great American Songbook avec une sensibilité jazz moderne. Sublime interprétation des classiques de Billie Holiday, Ella Fitzgerald et Sarah Vaughan.",
    date: "28 Avril 2026",
    time: "21h00",
    price: "35€",
    capacity: "50 places",
    available: 5,
    type: "concert",
    image: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=1200&h=800&fit=crop",
    featured: true,
    tags: ["Vocal Jazz", "Prestige", "Dernières Places"]
  },
  {
    id: 6,
    title: "Latin Jazz Explosion",
    artist: "Los Amigos Del Jazz",
    description: "¡Caliente! Vibrez au son du latin jazz avec ce collectif franco-cubain explosif. Salsa, mambo, cha-cha-cha rencontrent l'improvisation jazz. Une fusion irrésistible qui vous fera danser !",
    date: "2 Mai 2026",
    time: "21h30",
    price: "28€",
    capacity: "50 places",
    available: 20,
    type: "concert",
    image: "https://images.unsplash.com/photo-1501612780327-45045538702b?w=1200&h=800&fit=crop",
    featured: false,
    tags: ["Latin", "Dansant", "Festif"]
  },
  {
    id: 7,
    title: "Piano Solo Nocturne",
    artist: "Antoine Reverb",
    description: "Une expérience unique en tête-à-tête avec le piano. Antoine, influencé par Keith Jarrett et Brad Mehldau, crée des improvisations libres hypnotiques. Un voyage musical méditatif et profond.",
    date: "5 Mai 2026",
    time: "22h00",
    price: "22€",
    capacity: "40 places",
    available: 18,
    type: "piano-bar",
    image: "https://images.unsplash.com/photo-1552422535-c45813c61732?w=1200&h=800&fit=crop",
    featured: false,
    tags: ["Solo", "Contemplatif", "Improvisation"]
  },
  {
    id: 8,
    title: "Jam du Dimanche",
    artist: "Session Ouverte",
    description: "Le rendez-vous hebdomadaire des amoureux du jazz ! Ambiance décontractée, musiciens professionnels et amateurs se mélangent pour des improvisations spontanées. Brunch jazz disponible de 12h à 15h.",
    date: "4 Mai 2026",
    time: "16h00",
    price: "Gratuit",
    capacity: "60 places",
    available: 52,
    type: "jam",
    image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=1200&h=800&fit=crop",
    featured: false,
    tags: ["Dimanche", "Gratuit", "Brunch"]
  },
  {
    id: 9,
    title: "Gypsy Jazz Experience",
    artist: "Django Legacy Trio",
    description: "Le swing manouche dans toute sa splendeur ! Un trio virtuose qui perpétue l'héritage de Django Reinhardt. Guitare manouche, contrebasse et violon pour une soirée endiablée et authentique.",
    date: "8 Mai 2026",
    time: "20h00",
    price: "26€",
    capacity: "50 places",
    available: 14,
    type: "concert",
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=1200&h=800&fit=crop",
    featured: false,
    tags: ["Manouche", "Swing", "Énergique"]
  },
]


function EventCard({ event }: { event: typeof events[0] }) {
  const [day, month] = event.date.split(' ')
  const availabilityColor = event.available < 10 ? 'text-red-400' : event.available < 20 ? 'text-amber-400' : 'text-green-400'
  
  return (
    <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-stone-900">
      <div className="relative h-96">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
          <div className="flex flex-col gap-2">
            {event.featured && (
              <Badge className="bg-amber-600 text-white border-0 shadow-lg w-fit font-semibold">
                <Star className="w-3 h-3 mr-1 fill-current" />
                Concert Phare
              </Badge>
            )}
            <Badge variant="secondary" className="bg-black/60 text-white border-white/20 backdrop-blur-sm w-fit">
              {event.type === 'concert' ? '🎵 Concert' : event.type === 'piano-bar' ? '🎹 Piano Bar' : '🎺 Jam Session'}
            </Badge>
          </div>
          
          <div className="bg-white text-stone-900 rounded-xl px-3 py-2 shadow-lg text-center min-w-[60px]">
            <div className="text-xs font-medium uppercase tracking-wider opacity-70">{month}</div>
            <div className="text-2xl font-bold leading-none">{day}</div>
          </div>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="mb-3">
            <h3 className="text-2xl font-bold mb-2 leading-tight group-hover:text-amber-400 transition-colors">{event.title}</h3>
            <p className="text-amber-400 font-semibold text-lg">{event.artist}</p>
          </div>
          
          <p className="text-sm text-stone-300 leading-relaxed mb-4 line-clamp-3">
            {event.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {event.tags?.map((tag) => (
              <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/10 text-stone-300 border border-white/20">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm mb-4 pb-4 border-b border-white/20">
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-amber-400" />
              <span className="font-medium">{event.time}</span>
            </span>
            <span className="flex items-center gap-2">
              <Users className="h-4 w-4 text-amber-400" />
              <span className="font-medium">{event.capacity}</span>
            </span>
            <span className="flex items-center gap-2">
              <Ticket className={`h-4 w-4 ${availabilityColor}`} />
              <span className={`font-medium ${availabilityColor}`}>
                {event.available} restantes
              </span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/booking" className="flex-1">
              <Button className="w-full bg-amber-600 hover:bg-amber-500 text-white border-0 font-semibold shadow-lg group">
                Réserver - {event.price}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default function EventsPage() {
  const featuredEvents = events.filter(e => e.featured)
  const upcomingEvents = events.filter(e => !e.featured)

  return (
    <div className="bg-stone-950 min-h-screen">
      {/* Hero - Immersive */}
      <div className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1920&h=1080&fit=crop"
          alt="Jazz concert atmosphere"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-stone-950" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Badge className="mb-6 bg-amber-600/20 text-amber-300 border-amber-500/30 backdrop-blur-md text-sm px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            Programmation Avril - Mai 2026
          </Badge>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Vivez le Jazz
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400">
              Comme Jamais
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-stone-300 max-w-3xl mx-auto font-light mb-4">
            Chaque soir, une histoire musicale unique
          </p>
          
          <p className="text-base md:text-lg text-stone-400 max-w-2xl mx-auto mb-10">
            Des légendes du jazz aux talents émergents, une sélection rigoureuse 
            pour des soirées inoubliables dans notre cave voûtée acoustiquement parfaite
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#featured" 
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-lg transition-colors shadow-2xl shadow-amber-900/40"
            >
              <Star className="w-5 h-5 mr-2 fill-current" />
              Concerts Phares
            </a>
            <a 
              href="#all-events"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-white/10 text-white font-semibold rounded-lg border-2 border-white/30 hover:border-white/50 transition-colors backdrop-blur-sm"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Toute la Programmation
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </div>
        </div>
      </div>

      {/* Featured Events */}
      {featuredEvents.length > 0 && (
        <section id="featured" className="py-20 md:py-32 bg-gradient-to-b from-stone-950 to-stone-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-6 text-amber-400 font-medium">
                <div className="h-px w-12 bg-amber-400" />
                NE MANQUEZ PAS
                <div className="h-px w-12 bg-amber-400" />
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Concerts d'Exception
              </h2>
              
              <p className="text-xl text-stone-400 max-w-2xl mx-auto">
                Des artistes triés sur le volet pour des performances mémorables. 
                Les places partent vite !
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {featuredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Attend Section */}
      <section className="py-20 md:py-32 bg-stone-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6 text-amber-400 font-medium">
              <div className="h-px w-12 bg-amber-400" />
              POURQUOI VENIR
              <div className="h-px w-12 bg-amber-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              L'Expérience Jazz Bar
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-8 rounded-2xl bg-stone-950 border border-stone-800 hover:border-amber-700/50 transition-all">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-amber-600/20 flex items-center justify-center">
                <Music className="h-8 w-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Acoustique Exceptionnelle</h3>
              <p className="text-stone-400 leading-relaxed">
                Notre cave voûtée du 17ème siècle offre une acoustique naturelle sublime. 
                Chaque note résonne avec une clarté cristalline.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-stone-950 border border-stone-800 hover:border-rose-700/50 transition-all">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-rose-600/20 flex items-center justify-center">
                <Heart className="h-8 w-8 text-rose-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Proximité avec les Artistes</h3>
              <p className="text-stone-400 leading-relaxed">
                Jauge limitée garantie. Vous êtes à quelques mètres des musiciens, 
                dans une intimité rare à Paris.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-stone-950 border border-stone-800 hover:border-indigo-700/50 transition-all">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-indigo-600/20 flex items-center justify-center">
                <Star className="h-8 w-8 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Excellence Totale</h3>
              <p className="text-stone-400 leading-relaxed">
                Cocktails primés, cuisine gastronomique, service impeccable. 
                Une expérience complète pensée dans les moindres détails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All Events with Tabs */}
      <section id="all-events" className="py-20 md:py-32 bg-stone-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-6 text-amber-400 font-medium">
              <div className="h-px w-12 bg-amber-400" />
              PROGRAMMATION COMPLÈTE
              <div className="h-px w-12 bg-amber-400" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tous les Événements
            </h2>
            
            <p className="text-lg text-stone-400 max-w-2xl mx-auto">
              Explorez notre sélection de concerts, sessions piano bar et jam sessions. 
              Il y en a pour tous les goûts !
            </p>
          </div>

          <Tabs defaultValue="all" className="mt-12 flex flex-col">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-stone-900 border border-stone-700 p-1.5 rounded-full h-auto gap-1 inline-flex">
                <TabsTrigger value="all" className="rounded-full px-6 py-2.5 text-sm font-medium text-stone-400 data-[state=active]:bg-amber-600 data-[state=active]:text-white transition-all">
                  Tous ({events.length})
                </TabsTrigger>
                <TabsTrigger value="concert" className="rounded-full px-6 py-2.5 text-sm font-medium text-stone-400 data-[state=active]:bg-amber-600 data-[state=active]:text-white transition-all">
                  Concerts ({events.filter(e => e.type === 'concert').length})
                </TabsTrigger>
                <TabsTrigger value="piano-bar" className="rounded-full px-6 py-2.5 text-sm font-medium text-stone-400 data-[state=active]:bg-amber-600 data-[state=active]:text-white transition-all">
                  Piano Bar ({events.filter(e => e.type === 'piano-bar').length})
                </TabsTrigger>
                <TabsTrigger value="jam" className="rounded-full px-6 py-2.5 text-sm font-medium text-stone-400 data-[state=active]:bg-amber-600 data-[state=active]:text-white transition-all">
                  Jam Sessions ({events.filter(e => e.type === 'jam').length})
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-0">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </TabsContent>

            <TabsContent value="concert" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-0">
              {events.filter(e => e.type === 'concert').map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </TabsContent>

            <TabsContent value="piano-bar" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-0">
              {events.filter(e => e.type === 'piano-bar').map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </TabsContent>

            <TabsContent value="jam" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-0">
              {events.filter(e => e.type === 'jam').map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-stone-950 to-stone-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6 text-amber-400 font-medium">
              <div className="h-px w-12 bg-amber-400" />
              ILS TÉMOIGNENT
              <div className="h-px w-12 bg-amber-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nos Spectateurs Adorent
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-stone-900 border-stone-800 p-8">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-stone-300 leading-relaxed mb-6 italic">
                "Incroyable proximité avec les musiciens ! L'acoustique est parfaite, 
                on entend chaque nuance. C'est devenu notre rituel du vendredi soir."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center text-white font-bold">
                  MC
                </div>
                <div>
                  <div className="font-semibold text-white">Marie C.</div>
                  <div className="text-sm text-stone-400">Cliente régulière</div>
                </div>
              </div>
            </Card>

            <Card className="bg-stone-900 border-stone-800 p-8">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-stone-300 leading-relaxed mb-6 italic">
                "Le meilleur bar jazz d'Europe, point final. Programmation exceptionnelle, 
                ambiance intimiste, cocktails divins. Un vrai bijou caché."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-600 to-rose-800 flex items-center justify-center text-white font-bold">
                  PL
                </div>
                <div>
                  <div className="font-semibold text-white">Pierre L.</div>
                  <div className="text-sm text-stone-400">Passionné de jazz</div>
                </div>
              </div>
            </Card>

            <Card className="bg-stone-900 border-stone-800 p-8">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-stone-300 leading-relaxed mb-6 italic">
                "J'ai assisté à plus de 30 concerts ici. Chaque fois, c'est magique. 
                Les artistes adorent jouer dans cette ambiance unique."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-indigo-800 flex items-center justify-center text-white font-bold">
                  SK
                </div>
                <div>
                  <div className="font-semibold text-white">Sophie K.</div>
                  <div className="text-sm text-stone-400">Membre depuis 2020</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1920&h=600&fit=crop"
              alt="Jazz performance"
              width={1920}
              height={600}
              className="object-cover w-full h-96"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40" />
            
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-8 text-white max-w-3xl">
                <Sparkles className="h-12 w-12 text-amber-400 mb-6" />
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Réservez Votre
                  <span className="block text-amber-400">Soirée Jazz Parfaite</span>
                </h2>
                <p className="text-xl text-stone-300 mb-10 leading-relaxed">
                  Les meilleures places partent vite. Ne manquez pas l'occasion de vivre 
                  une expérience musicale unique dans le cadre intimiste de notre cave voûtée.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/booking">
                    <Button size="lg" className="bg-amber-600 hover:bg-amber-500 text-white border-0 font-semibold shadow-2xl text-lg px-10 py-7">
                      <Ticket className="w-5 h-5 mr-2" />
                      Réserver Maintenant
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="border-2 border-white/40 text-white hover:bg-white/10 bg-transparent text-lg px-10 py-7">
                      <MapPin className="w-5 h-5 mr-2" />
                      Nous Trouver
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
