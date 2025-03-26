import Link from 'next/link'
import { Button } from '../ui/button'
import { ActiveLink } from '../active-link/active-link'
import { Logo } from '../logo'

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-gray-500/95 backdrop-blur supports-[backdrop-filter]:bg-gray-500/60">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between md:h-24 lg:h-24">
          <Logo />

          <nav className="flex items-center gap-6">
            <ActiveLink href="/">Home</ActiveLink>
            <ActiveLink href="/blog">Blog</ActiveLink>
            <Button variant="secondary" asChild>
              <Link href="/start">Start</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
