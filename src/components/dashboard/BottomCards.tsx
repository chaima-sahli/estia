'use client'

import Link from 'next/link'
import { ArrowRight, Brain, Sparkles } from 'lucide-react'

export default function BottomCards() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '1rem',
      }}
    >
      {/* Vision Board */}
      <div
        className="card"
        style={{
          background: 'linear-gradient(135deg, #C4714F 0%, #9E4E2E 100%)',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '160px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: '1.125rem',
              color: 'white',
              marginBottom: '0.5rem',
            }}
          >
            Vision Board
          </p>
          <Link
            href="/vision-board"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              fontSize: '0.8125rem',
              color: 'rgba(255,255,255,0.85)',
              textDecoration: 'none',
            }}
          >
            View your vision <ArrowRight size={13} />
          </Link>
        </div>
      </div>

      {/* Brain Dump */}
      <div className="card" style={{ minHeight: '160px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <Brain size={16} color="var(--color-warm-gray)" strokeWidth={1.75} />
          <p style={{ fontSize: '0.75rem', fontWeight: 500, color: 'var(--color-warm-gray)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Brain Dump
          </p>
        </div>
        <p
          style={{
            flex: 1,
            fontSize: '0.9375rem',
            fontStyle: 'italic',
            fontFamily: 'var(--font-playfair)',
            color: 'var(--color-warm-gray)',
            lineHeight: 1.6,
          }}
        >
          {`What's on your mind?`}
        </p>
        <Link
          href="/brain-dump"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.375rem',
            fontSize: '0.8125rem',
            color: 'var(--color-terracotta)',
            textDecoration: 'none',
            marginTop: '0.75rem',
          }}
        >
          Dump a thought <ArrowRight size={13} />
        </Link>
      </div>

      {/* AI Companion */}
      <div
        className="card"
        style={{
          minHeight: '160px',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#2C2825',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <Sparkles size={16} color="var(--color-terracotta)" strokeWidth={1.75} />
          <p style={{ fontSize: '0.75rem', fontWeight: 500, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Companion
          </p>
        </div>
        <p
          style={{
            flex: 1,
            fontSize: '0.9375rem',
            color: 'rgba(255,255,255,0.85)',
            lineHeight: 1.6,
          }}
        >
          What do you want to focus on today?
        </p>
        <Link
          href="/companion"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.375rem',
            fontSize: '0.8125rem',
            color: 'var(--color-terracotta)',
            textDecoration: 'none',
            marginTop: '0.75rem',
          }}
        >
          Speak your mind <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  )
}