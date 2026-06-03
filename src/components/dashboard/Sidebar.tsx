'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  Home,
  Target,
  Leaf,
  Clock,
  Brain,
  Image,
  Sparkles,
  Settings,
  LogOut,
} from 'lucide-react'
import { useAuth } from '@/components/providers/AuthProvider'

const navItems = [
  { href: '/dashboard', icon: Home, label: 'Home' },
  { href: '/goals', icon: Target, label: 'Goals' },
  { href: '/habits', icon: Leaf, label: 'Habits' },
  { href: '/time-blocks', icon: Clock, label: 'Time Blocks' },
  { href: '/brain-dump', icon: Brain, label: 'Brain Dump' },
  { href: '/vision-board', icon: Image, label: 'Vision Board' },
  { href: '/companion', icon: Sparkles, label: 'Companion' },
]

export default function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const { user } = useAuth()

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/login')
    router.refresh()
  }

  return (
    <aside
      style={{
        width: '220px',
        minHeight: '100vh',
        backgroundColor: 'var(--color-warm-white)',
        borderRight: '1px solid var(--color-warm-border)',
        display: 'flex',
        flexDirection: 'column',
        padding: '1.5rem 0',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: 50,
      }}
    >
      {/* Logo */}
      <div style={{ padding: '0 1.25rem', marginBottom: '2rem' }}>
        <h1
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '1.75rem',
            color: 'var(--color-terracotta)',
            lineHeight: 1,
            marginBottom: '0.125rem',
          }}
        >
          Estia
        </h1>
        <p style={{ fontSize: '0.6875rem', color: 'var(--color-warm-gray)' }}>
          Personal OS
        </p>
      </div>

      {/* Nav items */}
      <nav
        style={{
          flex: 1,
          padding: '0 0.75rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.125rem',
        }}
      >
        {navItems.map(item => {
          const isActive = pathname === item.href
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.625rem 0.875rem',
                borderRadius: '12px',
                fontSize: '0.875rem',
                fontWeight: isActive ? 500 : 400,
                color: isActive ? 'var(--color-terracotta)' : 'var(--color-warm-gray)',
                backgroundColor: isActive ? '#FDF0EB' : 'transparent',
                textDecoration: 'none',
                transition: 'all 0.15s',
              }}
              onMouseEnter={e => {
                if (!isActive) {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-cream)'
                  ;(e.currentTarget as HTMLElement).style.color = 'var(--color-warm-charcoal)'
                }
              }}
              onMouseLeave={e => {
                if (!isActive) {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'
                  ;(e.currentTarget as HTMLElement).style.color = 'var(--color-warm-gray)'
                }
              }}
            >
              <Icon size={16} strokeWidth={1.75} />
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Bottom section */}
      <div
        style={{
          padding: '0 0.75rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.125rem',
        }}
      >
        <Link
          href="/settings"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.625rem 0.875rem',
            borderRadius: '12px',
            fontSize: '0.875rem',
            color: 'var(--color-warm-gray)',
            textDecoration: 'none',
          }}
        >
          <Settings size={16} strokeWidth={1.75} />
          Settings
        </Link>

        <div
          style={{
            height: '1px',
            backgroundColor: 'var(--color-warm-border)',
            margin: '0.5rem 0.875rem',
          }}
        />

        {/* Profile + logout */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.625rem 0.875rem',
            borderRadius: '12px',
          }}
        >
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: '#FDF0EB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.8125rem',
              fontWeight: 500,
              color: 'var(--color-terracotta)',
              flexShrink: 0,
            }}
          >
            C
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
          <p
            style={{
              fontSize: '0.8125rem',
              fontWeight: 500,
              color: 'var(--color-warm-charcoal)',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {user?.name ?? '...'}
          </p>
          <button
            onClick={handleLogout}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.75rem',
              color: 'var(--color-warm-gray)',
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
            }}
          >
            <LogOut size={11} strokeWidth={1.75} />
            Sign out
          </button>
        </div>
        </div>
      </div>
    </aside>
  )
}