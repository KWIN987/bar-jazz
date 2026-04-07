"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
  LayoutDashboard,
  Calendar,
  Utensils,
  Users,
  BarChart3,
  Settings,
  Menu,
  Music2,
  ArrowLeft,
} from 'lucide-react'

const routes = [
  { label: 'Dashboard',     icon: LayoutDashboard, href: '/admin/dashboard' },
  { label: 'Événements',    icon: Calendar,        href: '/admin/events'    },
  { label: 'Menu',          icon: Utensils,        href: '/admin/menu'      },
  { label: 'Utilisateurs',  icon: Users,           href: '/admin/users'     },
  { label: 'Statistiques',  icon: BarChart3,       href: '/admin/stats'     },
  { label: 'Paramètres',    icon: Settings,        href: '/admin/settings'  },
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
      <div className="flex h-16 items-center border-b border-stone-800 px-6 shrink-0">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-amber-400 hover:text-amber-300 transition-colors">
          <Music2 className="h-5 w-5" />
          <span>Jazz Admin</span>
        </Link>
      </div>
      <ScrollArea className="flex-1">
        <SidebarNav pathname={pathname} />
      </ScrollArea>
      <div className="border-t border-stone-800 p-4 shrink-0">
        <Link href="/">
          <Button variant="ghost" className="w-full justify-start text-stone-400 hover:text-amber-400 hover:bg-stone-800/60">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour au site
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
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
            <span>Jazz Admin</span>
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
