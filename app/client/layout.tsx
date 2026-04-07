"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import {
  LayoutDashboard,
  CreditCard,
  ShoppingBag,
  User,
  Settings,
  Menu,
  Music2,
  LogOut,
  ArrowLeft,
  Crown,
} from 'lucide-react'

const routes = [
  { label: 'Dashboard',        icon: LayoutDashboard, href: '/client/dashboard' },
  { label: 'Carte de fidélité', icon: CreditCard,      href: '/client/loyalty'   },
  { label: 'Mes commandes',    icon: ShoppingBag,     href: '/client/orders'    },
  { label: 'Mon profil',       icon: User,            href: '/client/profile'   },
  { label: 'Paramètres',       icon: Settings,        href: '/client/settings'  },
]

function SidebarNav({ pathname }: { pathname: string }) {
  return (
    <nav className="space-y-1 px-3 py-4">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all',
            pathname === route.href
              ? 'bg-amber-600 text-white shadow-md shadow-amber-900/30'
              : 'text-stone-400 hover:text-amber-400 hover:bg-stone-800/60'
          )}
        >
          <route.icon className="h-4 w-4 shrink-0" />
          {route.label}
        </Link>
      ))}
    </nav>
  )
}

function SidebarShell({ pathname }: { pathname: string }) {
  return (
    <div className="flex flex-col h-full bg-stone-950">
      {/* Logo */}
      <div className="flex h-16 items-center border-b border-stone-800 px-6 shrink-0">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-amber-400 hover:text-amber-300 transition-colors">
          <Music2 className="h-5 w-5" />
          <span>Jazz Bar</span>
        </Link>
      </div>

      {/* User info */}
      <div className="border-b border-stone-800 px-4 py-4 shrink-0">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Avatar className="h-10 w-10 ring-2 ring-amber-600/40">
              <AvatarFallback className="bg-amber-700 text-white font-bold text-sm">MD</AvatarFallback>
            </Avatar>
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <p className="font-semibold text-white text-sm truncate">Marie Dubois</p>
              <Badge className="bg-amber-600/20 text-amber-400 border-amber-600/30 text-[10px] px-1.5 py-0 h-4">
                <Crown className="h-2.5 w-2.5 mr-0.5" />
                VIP
              </Badge>
            </div>
            <p className="text-xs text-stone-500 truncate">marie@email.com</p>
          </div>
        </div>
      </div>

      <ScrollArea className="flex-1">
        <SidebarNav pathname={pathname} />
      </ScrollArea>

      <div className="border-t border-stone-800 p-4 space-y-1 shrink-0">
        <Link href="/">
          <Button variant="ghost" className="w-full justify-start text-stone-400 hover:text-amber-400 hover:bg-stone-800/60">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour au site
          </Button>
        </Link>
        <Button variant="ghost" className="w-full justify-start text-stone-500 hover:text-rose-400 hover:bg-stone-800/60">
          <LogOut className="mr-2 h-4 w-4" />
          Déconnexion
        </Button>
      </div>
    </div>
  )
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="flex h-screen">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:w-60 md:flex-col border-r border-stone-800 shrink-0">
        <SidebarShell pathname={pathname} />
      </aside>

      {/* Main */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Mobile header */}
        <header className="flex h-16 items-center gap-4 border-b border-stone-800 bg-stone-950 px-4 md:hidden shrink-0">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-stone-400 hover:text-white">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-60 p-0 border-stone-800">
              <SidebarShell pathname={pathname} />
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2 font-bold text-amber-400">
            <Music2 className="h-4 w-4" />
            <span>Jazz Bar</span>
          </Link>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto bg-stone-50 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
