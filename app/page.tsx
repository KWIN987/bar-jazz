import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Music, Music2, Mic, Wine, MapPin, Clock, Star, Sparkles, Users, Award, Heart, ArrowRight, Phone } from 'lucide-react'

export default function Home() {
  const featuredEvents = [
    {
      id: 1,
      title: "Soirée Jazz Quartet",
      artist: "The Miles Davis Tribute",
      date: "15 Avril 2026",
      time: "21h00",
      image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&h=600&fit=crop",
      spots: 8,
    },
    {
      id: 2,
      title: "Saxophone Sessions",
      artist: "Sarah Johnson Ensemble",
      date: "18 Avril 2026",
      time: "20h30",
      image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=800&h=600&fit=crop",
      spots: 12,
    },
    {
      id: 3,
      title: "Piano Bar Intimiste",
      artist: "Marcus Steel",
      date: "22 Avril 2026",
      time: "19h00",
      image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&h=600&fit=crop",
      spots: 5,
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section - Immersive */}
      <section className="relative h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1920&h=1080&fit=crop"
            alt="Jazz bar atmosphere"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="mb-6 bg-amber-600/20 text-amber-300 border-amber-500/30 backdrop-blur-md text-sm px-4 py-2">
            <Sparkles className="h-4 w-4 mr-2" /> Ouvert 7 jours sur 7
          </Badge>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight">
            Là où le jazz
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400">
              prend vie
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl mb-4 text-stone-300 max-w-3xl mx-auto font-light">
            Une parenthèse élégante au cœur de Paris
          </p>
          
          <p className="text-base md:text-lg mb-10 text-stone-400 max-w-2xl mx-auto">
            Depuis 1987, nous cultivons l'art de l'accueil et de la musique live. 
            Chaque soir, nos artistes transforment votre soirée en un moment d'exception.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-500 text-white border-0 shadow-2xl shadow-amber-900/40 text-base px-8 py-6">
                <Calendar className="mr-2 h-5 w-5" />
                Réserver une Table
              </Button>
            </Link>
            <Link href="/events">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-white/5 backdrop-blur-sm text-base px-8 py-6">
                <Music className="mr-2 h-5 w-5" />
                Découvrir le Programme
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* L'Expérience - Story Section */}
      <section className="py-20 md:py-32 bg-stone-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1541689592655-f5f52825a3b8?w=800&h=1000&fit=crop"
                alt="Interior du bar jazz"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div className="text-white">
              <div className="inline-flex items-center gap-2 mb-6 text-amber-400 font-medium">
                <div className="h-px w-12 bg-amber-400" />
                L'HISTOIRE D'UNE PASSION
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Plus qu'un bar,
                <span className="block text-amber-400">une destination</span>
              </h2>
              
              <p className="text-lg md:text-xl text-stone-300 mb-6 leading-relaxed">
                Dans l'intimité feutrée de notre cave voûtée du Marais, chaque note résonne comme une conversation entre amis. 
                Ici, pas de spectacle froid : juste la proximité authentique avec des musiciens passionnés.
              </p>
              
              <p className="text-base md:text-lg text-stone-400 mb-8 leading-relaxed">
                Notre fondateur, ancien saxophoniste de jazz, a créé ce lieu pour réunir deux de ses amours : 
                la musique vivante et l'art de la mixologie. Près de 40 ans plus tard, cette vision continue d'animer chaque soirée.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="border-l-2 border-amber-500 pl-4">
                  <div className="text-4xl font-bold text-amber-400 mb-1">250+</div>
                  <div className="text-stone-400 text-sm">Concerts par an</div>
                </div>
                <div className="border-l-2 border-amber-500 pl-4">
                  <div className="text-4xl font-bold text-amber-400 mb-1">39</div>
                  <div className="text-stone-400 text-sm">Années d'excellence</div>
                </div>
              </div>

              <Link href="/about">
                <Button variant="outline" className="border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-white">
                  Notre Histoire
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-stone-950 to-stone-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6 text-amber-400 font-medium">
              <div className="h-px w-12 bg-amber-400" />
              CETTE SEMAINE
              <div className="h-px w-12 bg-amber-400" />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Nos Concerts d'Exception
            </h2>
            
            <p className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto">
              Des artistes triés sur le volet pour des soirées inoubliables
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredEvents.map((event) => (
              <Card key={event.id} className="bg-stone-900 border-stone-800 hover:border-amber-700/50 transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent" />
                  <Badge className="absolute top-4 right-4 bg-amber-600 text-white border-0">
                    {event.spots} places restantes
                  </Badge>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-white text-xl">{event.title}</CardTitle>
                  <CardDescription className="text-amber-400 font-medium text-base">{event.artist}</CardDescription>
                </CardHeader>
                
                <CardContent className="pb-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-stone-400">
                      <Calendar className="h-4 w-4 mr-2 text-amber-500" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-stone-400">
                      <Clock className="h-4 w-4 mr-2 text-amber-500" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Link href="/booking" className="w-full">
                    <Button className="w-full bg-amber-600 hover:bg-amber-500 text-white border-0 group">
                      Réserver
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/events">
              <Button size="lg" variant="outline" className="border-stone-700 text-white hover:bg-white/5">
                Voir Tous les Événements
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Premium Features */}
      <section className="py-20 md:py-32 bg-stone-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6 text-amber-400 font-medium">
              <div className="h-px w-12 bg-amber-400" />
              L'EXCELLENCE À CHAQUE INSTANT
              <div className="h-px w-12 bg-amber-400" />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Votre Soirée Parfaite
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group">
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-stone-800 to-stone-900 border border-stone-700 hover:border-amber-600/50 transition-all duration-300 h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600/10 rounded-full blur-3xl group-hover:bg-amber-600/20 transition-colors" />
                <div className="relative">
                  <div className="p-4 rounded-2xl bg-amber-600/20 mb-6 w-fit">
                    <Music2 className="h-8 w-8 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Acoustique Premium</h3>
                  <p className="text-stone-400 leading-relaxed">
                    Une salle pensée pour sublimer chaque note, où le son vous enveloppe sans jamais vous assourdir
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-stone-800 to-stone-900 border border-stone-700 hover:border-rose-600/50 transition-all duration-300 h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-600/10 rounded-full blur-3xl group-hover:bg-rose-600/20 transition-colors" />
                <div className="relative">
                  <div className="p-4 rounded-2xl bg-rose-600/20 mb-6 w-fit">
                    <Wine className="h-8 w-8 text-rose-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Mixologie d'Art</h3>
                  <p className="text-stone-400 leading-relaxed">
                    Des cocktails signature créés par des barmen primés, avec des spiritueux sélectionnés avec passion
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-stone-800 to-stone-900 border border-stone-700 hover:border-indigo-600/50 transition-all duration-300 h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/10 rounded-full blur-3xl group-hover:bg-indigo-600/20 transition-colors" />
                <div className="relative">
                  <div className="p-4 rounded-2xl bg-indigo-600/20 mb-6 w-fit">
                    <Users className="h-8 w-8 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Ambiance Intime</h3>
                  <p className="text-stone-400 leading-relaxed">
                    Une capacité limitée pour garantir votre confort et une proximité unique avec les artistes
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-stone-800 to-stone-900 border border-stone-700 hover:border-emerald-600/50 transition-all duration-300 h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600/10 rounded-full blur-3xl group-hover:bg-emerald-600/20 transition-colors" />
                <div className="relative">
                  <div className="p-4 rounded-2xl bg-emerald-600/20 mb-6 w-fit">
                    <Award className="h-8 w-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Artistes Renommés</h3>
                  <p className="text-stone-400 leading-relaxed">
                    Les meilleurs musiciens de la scène jazz parisienne et internationale se produisent chez nous
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-stone-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6 text-amber-400 font-medium">
              <div className="h-px w-12 bg-amber-400" />
              ILS TÉMOIGNENT
              <div className="h-px w-12 bg-amber-400" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ce Que Nos Clients Disent
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-stone-900 border-stone-800">
              <CardHeader>
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <CardDescription className="text-stone-300 text-base leading-relaxed">
                  "Une expérience magique ! L'acoustique est parfaite et les cocktails sont divins. 
                  C'est devenu notre rituel du vendredi soir."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center text-white font-bold">
                    MC
                  </div>
                  <div>
                    <div className="font-semibold text-white">Marie Chevalier</div>
                    <div className="text-sm text-stone-400">Cliente régulière</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-stone-900 border-stone-800">
              <CardHeader>
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <CardDescription className="text-stone-300 text-base leading-relaxed">
                  "Le meilleur bar jazz de Paris, sans hésitation. Les musiciens sont exceptionnels 
                  et l'ambiance chaleureuse. Un vrai bijou !"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-600 to-rose-800 flex items-center justify-center text-white font-bold">
                    PL
                  </div>
                  <div>
                    <div className="font-semibold text-white">Pierre Leblanc</div>
                    <div className="text-sm text-stone-400">Amateur de jazz</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-stone-900 border-stone-800">
              <CardHeader>
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <CardDescription className="text-stone-300 text-base leading-relaxed">
                  "J'ai découvert ce bar lors d'un voyage à Paris. Trois ans plus tard, 
                  je reviens à chaque visite. Une adresse incontournable !"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-indigo-800 flex items-center justify-center text-white font-bold">
                    SK
                  </div>
                  <div>
                    <div className="font-semibold text-white">Sophie Keller</div>
                    <div className="text-sm text-stone-400">Visiteuse internationale</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location & Contact CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Location */}
            <Card className="bg-stone-900/50 border-stone-700 backdrop-blur-sm hover:shadow-2xl transition-shadow">
              <CardHeader>
                <div className="inline-flex p-4 rounded-2xl bg-amber-600/20 mb-4 w-fit">
                  <MapPin className="h-8 w-8 text-amber-400" />
                </div>
                <CardTitle className="text-white text-2xl mb-2">Nous Trouver</CardTitle>
                <CardDescription className="text-stone-400 text-base">
                  Au cœur du Marais, à deux pas du Louvre
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <p className="text-lg text-white font-medium">123 Rue du Jazz</p>
                  <p className="text-lg text-white font-medium">75001 Paris</p>
                  <div className="pt-4 border-t border-stone-700">
                    <div className="flex items-start gap-3 text-stone-300">
                      <MapPin className="h-5 w-5 text-amber-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium mb-1">Métro</p>
                        <p className="text-sm text-stone-400">Ligne 1 - Station Louvre-Rivoli</p>
                        <p className="text-sm text-stone-400">Ligne 7 - Station Pont Neuf</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-amber-600 hover:bg-amber-500 text-white border-0">
                  <MapPin className="mr-2 h-4 w-4" />
                  Itinéraire Google Maps
                </Button>
              </CardFooter>
            </Card>

            {/* Opening Hours */}
            <Card className="bg-stone-900/50 border-stone-700 backdrop-blur-sm hover:shadow-2xl transition-shadow">
              <CardHeader>
                <div className="inline-flex p-4 rounded-2xl bg-rose-600/20 mb-4 w-fit">
                  <Clock className="h-8 w-8 text-rose-400" />
                </div>
                <CardTitle className="text-white text-2xl mb-2">Horaires</CardTitle>
                <CardDescription className="text-stone-400 text-base">
                  Ouvert 7 jours sur 7 pour votre plaisir
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-stone-700/50">
                    <span className="font-medium text-white">Lundi - Jeudi</span>
                    <Badge variant="secondary" className="bg-stone-800 text-stone-200 border-0">
                      18h00 - 2h00
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-stone-700/50">
                    <span className="font-medium text-white">Vendredi - Samedi</span>
                    <Badge className="bg-amber-600 text-white border-0">
                      18h00 - 4h00
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-medium text-white">Dimanche</span>
                    <Badge variant="secondary" className="bg-stone-800 text-stone-200 border-0">
                      17h00 - 1h00
                    </Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex-col gap-3">
                <Link href="/contact" className="w-full">
                  <Button className="w-full bg-amber-600 hover:bg-amber-500 text-white border-0">
                    <Phone className="mr-2 h-4 w-4" />
                    Nous Contacter
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-stone-950 border-t border-stone-800">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-16 w-16 mx-auto mb-6 text-amber-400" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Prêt pour une soirée mémorable ?
          </h2>
          <p className="text-xl text-stone-400 mb-10 max-w-2xl mx-auto">
            Rejoignez-nous ce soir et laissez-vous porter par la magie du jazz live
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-500 text-white border-0 shadow-2xl shadow-amber-900/40 text-lg px-10 py-7">
                <Calendar className="mr-2 h-5 w-5" />
                Réserver Maintenant
              </Button>
            </Link>
            <Link href="/menu">
              <Button size="lg" variant="outline" className="border-stone-600 text-white hover:bg-white/5 text-lg px-10 py-7">
                <Wine className="mr-2 h-5 w-5" />
                Voir la Carte
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

