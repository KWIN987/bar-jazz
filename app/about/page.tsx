import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Music, Heart, Users, Award, Wine, Utensils, Music2, Trophy, Quote, Sparkles, Star, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react'

const timeline = [
  { year: '1987', event: 'Naissance du Rêve', description: 'Marc Dubois, saxophoniste professionnel, rêve de créer un lieu où le jazz respire librement' },
  { year: '1989', event: 'Découverte du Lieu', description: 'Découverte de cette cave voûtée du 17ème siècle au cœur du Marais, coup de foudre immédiat' },
  { year: '1990', event: 'Ouverture Officielle', description: 'Le Jazz Bar ouvre ses portes avec 40 places et une promesse : créer la maison du jazz parisien' },
  { year: '1995', event: 'Premier Prix', description: 'Reconnaissance par Jazz Magazine comme "Scène Émergente de l\'Année"' },
  { year: '2005', event: 'Rénovation Majeure', description: 'Agrandissement et amélioration acoustique, tout en préservant l\'âme du lieu' },
  { year: '2015', event: '25 Ans de Jazz', description: 'Célébration avec les plus grandes légendes du jazz français et international' },
  { year: '2024', event: 'Excellence Reconnue', description: 'Prix de l\'Excellence du Guide Fooding et Meilleur Bar Jazz par Time Out Paris' },
  { year: '2026', event: 'Aujourd\'hui', description: 'Plus de 250 concerts par an, une référence incontournable de la scène jazz européenne' },
]

const team = [
  {
    name: "Marc Dubois",
    role: "Fondateur & Directeur",
    story: "Saxophoniste de formation, Marc a joué dans les plus grands clubs de jazz avant de créer son propre temple de la musique. Sa vision : un lieu où artistes et public ne font qu'un.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    quote: "Le jazz, c'est une conversation - ici, tout le monde est invité à participer"
  },
  {
    name: "Sophie Martin",
    role: "Directrice Artistique",
    story: "Ancienne pianiste de renom, Sophie a voyagé le monde avant de revenir à Paris. Elle orchestre notre programmation avec une exigence artistique sans compromis.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    quote: "Chaque concert est une histoire unique à raconter"
  },
  {
    name: "Thomas Bernard",
    role: "Chef Mixologue",
    story: "Champion de France Cocktail 2024, Thomas crée des cocktails qui dialoguent avec la musique. Chaque création est pensée pour sublimer l'expérience sonore.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    quote: "Un bon cocktail, c'est comme une improvisation réussie"
  },
  {
    name: "Julie Petit",
    role: "Chef de Cuisine",
    story: "Formée dans les plus grandes maisons, Julie compose une carte gastronomique qui accompagne parfaitement nos soirées jazz. Créativité et tradition s'y marient harmonieusement.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    quote: "La cuisine et le jazz partagent la même âme créative"
  },
]

const values = [
  { 
    Icon: Music2,  
    title: 'Authenticité Musicale', 
    desc: 'Nous programmons uniquement des artistes que nous admirons sincèrement. Pas de compromis sur la qualité, jamais.',
    stat: '250+ concerts/an'
  },
  { 
    Icon: Heart,  
    title: 'Passion Sans Limite',
    desc: "Depuis 39 ans, chaque soir est une célébration. L'amour du jazz guide chacune de nos décisions.",
    stat: '39 ans d\'excellence'
  },
  { 
    Icon: Users,  
    title: 'Communauté Vivante',
    desc: 'Plus qu\'un public, c\'est une famille qui se retrouve ici. Des habitués aux nouveaux venus, tous sont accueillis comme des amis.',
    stat: '15k membres fidèles'
  },
  { 
    Icon: Award,  
    title: 'Excellence Reconnue',
    desc: "De la sélection musicale à l'assiette, en passant par nos cocktails primés, nous visons l'excellence à chaque instant.",
    stat: '12 prix & distinctions'
  },
]

const achievements = [
  { year: '2025', title: 'Meilleur Bar Jazz de Paris', source: 'Time Out Paris', icon: Trophy },
  { year: '2024', title: "Prix de l'Excellence Gastronomique", source: 'Guide Fooding', icon: Award },
  { year: '2024', title: "Champion de France Cocktail", source: 'Thomas Bernard', icon: Wine },
  { year: '2023', title: "Scène Jazz de l'Année", source: 'Jazz Magazine', icon: Music },
  { year: '2022', title: "Meilleure Acoustique", source: 'Le Parisien Culture', icon: Star },
  { year: '2020', title: "Coup de Cœur Public", source: 'Télérama Sortir', icon: Heart },
]

const philosophy = [
  { point: 'Une acoustique travaillée pendant 2 ans avec les meilleurs ingénieurs du son' },
  { point: 'Des musiciens sélectionnés pour leur talent ET leur capacité à créer une connexion avec le public' },
  { point: 'Un engagement : 100% de nos artistes sont rémunérés équitablement' },
  { point: 'Une jauge limitée volontairement pour garantir une expérience intime' },
  { point: 'Aucune amplification excessive - le jazz mérite d\'être entendu dans sa pureté' },
  { point: 'Des produits locaux et de saison pour notre cuisine et nos cocktails' },
]

export default function AboutPage() {
  return (
    <div className="bg-stone-950">
      {/* Hero Section - Immersive */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1920&h=1080&fit=crop"
            alt="Jazz bar interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-stone-950" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <Badge className="mb-6 bg-amber-600/20 text-amber-300 border-amber-500/30 backdrop-blur-md">
            <Sparkles className="h-4 w-4 mr-2" />
            Depuis 1987
          </Badge>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            39 Ans de
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400">
              Passion Jazz
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-stone-300 max-w-3xl mx-auto font-light mb-8">
            L'histoire d'un rêve devenu légende parisienne
          </p>

          <div className="flex flex-wrap gap-8 justify-center text-left max-w-2xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-amber-600/20 flex items-center justify-center">
                <Music className="h-6 w-6 text-amber-400" />
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400">250+</div>
                <div className="text-sm text-stone-400">Concerts annuels</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-rose-600/20 flex items-center justify-center">
                <Users className="h-6 w-6 text-rose-400" />
              </div>
              <div>
                <div className="text-3xl font-bold text-rose-400">15k</div>
                <div className="text-sm text-stone-400">Membres fidèles</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-indigo-600/20 flex items-center justify-center">
                <Award className="h-6 w-6 text-indigo-400" />
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-400">12</div>
                <div className="text-sm text-stone-400">Prix & distinctions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section - Rich Narrative */}
      <section className="py-20 md:py-32 bg-stone-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1541689592655-f5f52825a3b8?w=800&h=1000&fit=crop"
                alt="Marc Dubois dans le bar"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <Quote className="h-12 w-12 text-amber-400 mb-4 opacity-50" />
                <p className="text-xl md:text-2xl font-light italic leading-relaxed mb-4">
                  "J'ai créé le lieu où j'aurais voulu passer chaque soirée de ma vie : 
                  un endroit où la musique n'est pas un spectacle, mais une conversation intime."
                </p>
                <p className="text-amber-400 font-semibold">— Marc Dubois, Fondateur</p>
              </div>
            </div>

            <div className="text-white">
              <div className="inline-flex items-center gap-2 mb-6 text-amber-400 font-medium">
                <div className="h-px w-12 bg-amber-400" />
                L'ORIGINE D'UNE LÉGENDE
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Quand un Saxophoniste
                <span className="block text-amber-400">Réinvente le Jazz Parisien</span>
              </h2>
              
              <div className="space-y-6 text-lg text-stone-300 leading-relaxed">
                <p>
                  <strong className="text-white">1987.</strong> Marc Dubois, saxophoniste accompli, joue dans les clubs les plus prestigieux d'Europe. 
                  Mais il rêve d'autre chose : un lieu où le jazz respirerait librement, loin des conventions et des concerts aseptisés.
                </p>
                
                <p>
                  Deux ans de recherche le mènent à cette <strong className="text-white">cave voûtée du 17ème siècle</strong>, 
                  cachée au cœur du Marais. Les murs de pierre, l'intimité du lieu, l'acoustique naturelle — 
                  c'est le coup de foudre. En 1990, après des mois de rénovation minutieuse, le Jazz Bar ouvre ses portes.
                </p>
                
                <p>
                  <strong className="text-white">39 ans plus tard</strong>, le lieu est devenu une institution. Plus de 
                  <strong className="text-amber-400"> 9 000 concerts</strong> ont été donnés sur cette scène. 
                  Des légendes du jazz y sont passées, des talents y ont été découverts, 
                  des amitiés s'y sont nouées autour de standards immortels et de cocktails mémorables.
                </p>

                <p className="text-stone-400 italic border-l-2 border-amber-500 pl-6">
                  Ce qui fait notre force ? Avoir toujours refusé les compromis. 
                  Chaque concert est soigneusement sélectionné, chaque cocktail pensé, 
                  chaque détail compte pour créer cette magie qui fait revenir nos habitués semaine après semaine.
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                <Link href="/events">
                  <Button className="bg-amber-600 hover:bg-amber-500 text-white">
                    Découvrir nos Concerts
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-32 bg-stone-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6 text-amber-400 font-medium">
              <div className="h-px w-12 bg-amber-400" />
              NOTRE PARCOURS
              <div className="h-px w-12 bg-amber-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              39 Années de Légende
            </h2>
            <p className="text-xl text-stone-400 max-w-2xl mx-auto">
              Les moments clés qui ont forgé l'identité du Jazz Bar
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={item.year} className="relative">
                  <div className="flex gap-8 items-start">
                    {/* Year Badge */}
                    <div className="flex-shrink-0 w-24">
                      <Badge className="bg-amber-600 text-white border-0 text-lg px-4 py-2 font-bold">
                        {item.year}
                      </Badge>
                    </div>

                    {/* Content */}
                    <Card className="flex-1 bg-stone-900 border-stone-800 hover:border-amber-700/50 transition-all group">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                          {item.event}
                        </h3>
                        <p className="text-stone-400 leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Connector line */}
                  {index < timeline.length - 1 && (
                    <div className="absolute left-12 top-16 w-px h-8 bg-gradient-to-b from-amber-600 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values - Philosophy */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-stone-950 to-stone-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6 text-amber-400 font-medium">
              <div className="h-px w-12 bg-amber-400" />
              CE QUI NOUS GUIDE
              <div className="h-px w-12 bg-amber-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Notre ADN
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {values.map((value) => (
              <div key={value.title} className="group relative">
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-stone-800 to-stone-900 border border-stone-700 hover:border-amber-600/50 transition-all duration-300 h-full">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600/10 rounded-full blur-3xl group-hover:bg-amber-600/20 transition-colors" />
                  <div className="relative">
                    <div className="p-4 rounded-2xl bg-amber-600/20 mb-6 w-fit">
                      <value.Icon className="h-8 w-8 text-amber-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                    <p className="text-stone-400 leading-relaxed mb-4">{value.desc}</p>
                    <div className="text-2xl font-bold text-amber-400">{value.stat}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Philosophy Points */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              Notre Engagement Qualité
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {philosophy.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-stone-900/50 border border-stone-800">
                  <CheckCircle2 className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <p className="text-stone-300 leading-relaxed">{item.point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-32 bg-stone-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6 text-amber-400 font-medium">
              <div className="h-px w-12 bg-amber-400" />
              LES ARTISANS DE VOTRE EXPÉRIENCE
              <div className="h-px w-12 bg-amber-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              L'Équipe du Jazz Bar
            </h2>
            <p className="text-xl text-stone-400 max-w-2xl mx-auto">
              Des passionnés qui font vivre ce lieu chaque soir
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="bg-stone-950 border-stone-800 hover:border-amber-700/50 transition-all overflow-hidden group">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  <div className="md:col-span-2 relative h-80 md:h-auto">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 to-transparent md:bg-gradient-to-r" />
                  </div>
                  
                  <CardContent className="md:col-span-3 p-8 flex flex-col justify-center">
                    <Badge className="bg-amber-600/20 text-amber-400 border-amber-600/30 w-fit mb-4 text-xs">
                      {member.role}
                    </Badge>
                    <h3 className="text-2xl font-bold text-white mb-4">{member.name}</h3>
                    <p className="text-stone-300 leading-relaxed mb-6">
                      {member.story}
                    </p>
                    <div className="flex items-start gap-3 border-l-2 border-amber-500 pl-4">
                      <Quote className="h-5 w-5 text-amber-400 flex-shrink-0 mt-1 opacity-50" />
                      <p className="italic text-stone-400 text-sm leading-relaxed">
                        {member.quote}
                      </p>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 md:py-32 bg-stone-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6 text-amber-400 font-medium">
              <div className="h-px w-12 bg-amber-400" />
              RECONNAISSANCE
              <div className="h-px w-12 bg-amber-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Prix & Distinctions
            </h2>
            <p className="text-xl text-stone-400 max-w-2xl mx-auto">
              L'excellence reconnue par les plus grandes institutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {achievements.map((achievement) => (
              <Card key={achievement.year + achievement.title} className="bg-stone-900 border-stone-800 hover:border-amber-700/50 transition-all group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-amber-600/20 flex items-center justify-center group-hover:bg-amber-600/30 transition-colors">
                    <achievement.icon className="h-8 w-8 text-amber-400" />
                  </div>
                  <Badge className="bg-amber-600 text-white border-0 mb-4">
                    {achievement.year}
                  </Badge>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-stone-400 text-sm">
                    {achievement.source}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-16 w-16 mx-auto mb-6 text-amber-400" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Venez Écrire Votre Histoire
          </h2>
          <p className="text-xl text-stone-300 mb-10 max-w-2xl mx-auto">
            Rejoignez notre communauté de passionnés et vivez des soirées jazz inoubliables
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/events">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-500 text-white border-0 shadow-2xl text-lg px-10 py-7">
                <Calendar className="mr-2 h-5 w-5" />
                Découvrir les Concerts
              </Button>
            </Link>
            <Link href="/booking">
              <Button size="lg" variant="outline" className="border-stone-600 text-white hover:bg-white/5 text-lg px-10 py-7">
                <Music className="mr-2 h-5 w-5" />
                Réserver une Table
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
