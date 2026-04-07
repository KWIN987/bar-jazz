import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Home, Music2, Calendar, Menu, AlertCircle } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-950 via-amber-950 to-stone-900 flex items-center justify-center px-4 py-12">
      <div className="container mx-auto max-w-2xl">
        <Card className="border-amber-800/50 bg-stone-900/80 backdrop-blur-sm text-white shadow-2xl">
          <CardHeader className="text-center pb-8 pt-12">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-600/30 blur-2xl rounded-full" />
                <div className="relative p-6 rounded-full bg-amber-900/40 border-2 border-amber-600/50">
                  <Music2 className="h-20 w-20 text-amber-400" strokeWidth={1.5} />
                </div>
              </div>
            </div>
            <CardTitle className="text-7xl font-bold text-amber-400 mb-4">404</CardTitle>
            <CardDescription className="text-2xl text-stone-300">
              Oups ! Cette page n'existe pas
            </CardDescription>
          </CardHeader>
          
          <CardContent className="text-center pb-8">
            <div className="bg-amber-900/30 border border-amber-700/50 rounded-lg p-4 mb-8">
              <div className="flex items-start gap-3 text-left">
                <AlertCircle className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-stone-300 text-sm">
                  La page que vous recherchez semble avoir disparu dans les notes de jazz. 
                  Elle a peut-être été déplacée, supprimée ou n'a jamais existé.
                </p>
              </div>
            </div>

            <p className="text-stone-400 mb-8">
              Mais ne vous inquiétez pas, nous avons plein d'autres bonnes choses à vous proposer !
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <Link href="/" className="group">
                <div className="p-4 rounded-lg bg-stone-800/50 border border-stone-700 hover:border-amber-600/50 hover:bg-stone-800 transition-all text-center">
                  <Home className="h-6 w-6 text-amber-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-medium text-stone-300">Accueil</p>
                </div>
              </Link>

              <Link href="/events" className="group">
                <div className="p-4 rounded-lg bg-stone-800/50 border border-stone-700 hover:border-amber-600/50 hover:bg-stone-800 transition-all text-center">
                  <Calendar className="h-6 w-6 text-amber-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-medium text-stone-300">Événements</p>
                </div>
              </Link>

              <Link href="/menu" className="group">
                <div className="p-4 rounded-lg bg-stone-800/50 border border-stone-700 hover:border-amber-600/50 hover:bg-stone-800 transition-all text-center">
                  <Menu className="h-6 w-6 text-amber-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-medium text-stone-300">Menu</p>
                </div>
              </Link>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col sm:flex-row gap-3 justify-center pb-12">
            <Link href="/">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-500 text-white border-0 w-full sm:w-auto">
                <Home className="mr-2 h-5 w-5" />
                Retour à l'Accueil
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-stone-600 text-stone-300 hover:bg-stone-800 hover:text-white bg-transparent w-full sm:w-auto">
                Contactez-nous
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <div className="text-center mt-8">
          <p className="text-stone-500 text-sm">
            Besoin d'aide ? Contactez-nous au <strong className="text-amber-400">01 23 45 67 89</strong>
          </p>
        </div>
      </div>
    </div>
  )
}
