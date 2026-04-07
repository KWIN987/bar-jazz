'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Music2, Users, Calendar, Menu } from 'lucide-react'

export default function Navigation() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/events', label: 'Événements' },
    { href: '/menu', label: 'Menu' },
    { href: '/about', label: 'À propos' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="border-b border-amber-900/40 bg-stone-950 text-white sticky top-0 z-50 backdrop-blur-sm bg-stone-950/95">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-amber-400 hover:text-amber-300 transition-colors">
            <Music2 className="h-6 w-6" />
            <span>Jazz Bar</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-stone-300 transition-colors hover:text-amber-400"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            <Link href="/booking">
              <Button size="sm" variant="outline" className="border-amber-600 text-amber-400 hover:bg-amber-600 hover:text-white bg-transparent">
                <Calendar className="h-4 w-4 mr-2" />
                Réserver
              </Button>
            </Link>
            <Link href="/client/dashboard">
              <Button variant="ghost" size="sm" className="text-stone-300 hover:text-amber-400 hover:bg-stone-800">
                <Users className="h-4 w-4 mr-2" />
                Espace Client
              </Button>
            </Link>
            <Link href="/admin/dashboard">
              <Button size="sm" className="bg-amber-600 hover:bg-amber-500 text-white border-0">
                Admin
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="flex md:hidden items-center gap-2">
            <Link href="/booking">
              <Button size="sm" variant="ghost" className="text-amber-400 hover:text-amber-300">
                <Calendar className="h-5 w-5" />
              </Button>
            </Link>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="text-white hover:text-amber-400">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-stone-950 border-stone-800 text-white w-72">
                <div className="flex flex-col gap-6 mt-8">
                  <Link href="/" className="flex items-center gap-2 font-bold text-xl text-amber-400">
                    <Music2 className="h-6 w-6" />
                    <span>Jazz Bar</span>
                  </Link>
                  
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="text-base font-medium text-stone-300 hover:text-amber-400 transition-colors py-2"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>

                  <div className="border-t border-stone-800 pt-4 mt-2 flex flex-col gap-3">
                    <Link href="/client/dashboard" onClick={() => setOpen(false)}>
                      <Button variant="outline" className="w-full border-stone-700 text-stone-300 hover:bg-stone-800 hover:text-white">
                        <Users className="h-4 w-4 mr-2" />
                        Espace Client
                      </Button>
                    </Link>
                    <Link href="/admin/dashboard" onClick={() => setOpen(false)}>
                      <Button className="w-full bg-amber-600 hover:bg-amber-500 text-white border-0">
                        Admin
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
