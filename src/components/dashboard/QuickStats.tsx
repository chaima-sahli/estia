'use client'

import { Target, Leaf, Zap } from 'lucide-react'
import Link from 'next/link'

export default function QuickStats() {
  const stats = [
    {
      icon: Target,
      label: 'Active Goals',
      value: '0',
      sub: 'Start your first goal',
      href: '/goals',
      color: 'var(--color-terracotta)',
      bg: '#FDF0EB',
    },
    {
      icon: Leaf,
      label: 'Habit Streak',
      value: '0',
      sub: 'Build your first habit',
      href: '/habits',
      color: 'var(--color-sage)',
      bg: '#F0F5EF',
    },
    {
      icon: Zap,
      label: 'Focus Hours',
      value: '0h',
      sub: 'This week',
      href: '/time-blocks',
      color: '#C4A24F',
      bg: '#FBF7EB',
    },
  ]

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem',
        marginBottom: '1.5rem',
      }}
    >
      {stats.map(stat => {
        const Icon = stat.icon
        return (
          <Link
            key={stat.label}
            href={stat.href}
            style={{ textDecoration: 'none' }}
          >
            <div
              className="card"
              style={{ cursor: 'pointer', transition: 'transform 0.15s' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: stat.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '0.75rem',
                }}
              >
                <Icon size={18} color={stat.color} strokeWidth={1.75} />
              </div>
              <p
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 500,
                  fontFamily: 'var(--font-playfair)',
                  color: 'var(--color-warm-charcoal)',
                  marginBottom: '0.125rem',
                }}
              >
                {stat.value}
              </p>
              <p style={{ fontSize: '0.75rem', color: 'var(--color-warm-gray)', marginBottom: '0.125rem' }}>
                {stat.label}
              </p>
              <p style={{ fontSize: '0.6875rem', color: 'var(--color-warm-gray)' }}>
                {stat.sub}
              </p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}