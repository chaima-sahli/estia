'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()


  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Something went wrong')
        return
      }

      router.push('/dashboard')
      router.refresh()
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md px-6">

      {/* Logo */}
      <div className="text-center mb-10">
        <h1
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '2.5rem',
            color: 'var(--color-terracotta)',
            marginBottom: '0.25rem',
          }}
        >
          Estia
        </h1>
        <p style={{ color: 'var(--color-warm-gray)', fontSize: '0.875rem' }}>
          Your personal sanctuary awaits
        </p>
      </div>

      {/* Card */}
      <div className="card">

        <h2
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '1.5rem',
            marginBottom: '0.5rem',
            color: 'var(--color-warm-charcoal)',
          }}
        >
          Create your account
        </h2>
        <p style={{ color: 'var(--color-warm-gray)', fontSize: '0.875rem', marginBottom: '1.75rem' }}>
          Begin your journey with Estia
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              style={{
                display: 'block',
                fontSize: '0.8125rem',
                fontWeight: 500,
                color: 'var(--color-warm-charcoal)',
                marginBottom: '0.5rem',
              }}
            >
              Full name
            </label>
            <input
              id="name"
              type="text"
              className="input"
              placeholder="Chaima Sahli"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              style={{
                display: 'block',
                fontSize: '0.8125rem',
                fontWeight: 500,
                color: 'var(--color-warm-charcoal)',
                marginBottom: '0.5rem',
              }}
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="input"
              placeholder="you@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              style={{
                display: 'block',
                fontSize: '0.8125rem',
                fontWeight: 500,
                color: 'var(--color-warm-charcoal)',
                marginBottom: '0.5rem',
              }}
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="input"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <p style={{ fontSize: '0.75rem', color: 'var(--color-warm-gray)', marginTop: '0.375rem' }}>
              At least 6 characters
            </p>
          </div>

          {/* Error */}
          {error && (
            <p style={{
              fontSize: '0.8125rem',
              color: 'var(--color-terracotta-dark)',
              backgroundColor: '#FDF0EB',
              padding: '0.75rem 1rem',
              borderRadius: '12px',
            }}>
              {error}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="btn-primary"
            disabled={loading}
            style={{ marginTop: '0.5rem', width: '100%', opacity: loading ? 0.7 : 1 }}
          >
            {loading ? 'Creating your sanctuary...' : 'Get started'}
          </button>

        </form>

        {/* Divider */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          margin: '1.5rem 0',
        }}>
          <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--color-warm-border)' }} />
          <span style={{ fontSize: '0.75rem', color: 'var(--color-warm-gray)' }}>or</span>
          <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--color-warm-border)' }} />
        </div>

        {/* Login link */}
        <p style={{ textAlign: 'center', fontSize: '0.875rem', color: 'var(--color-warm-gray)' }}>
          Already have an account?{' '}
          <Link
            href="/login"
            style={{ color: 'var(--color-terracotta)', fontWeight: 500, textDecoration: 'none' }}
          >
            Sign in
          </Link>
        </p>

      </div>

      {/* Footer quote */}
      <p style={{
        textAlign: 'center',
        marginTop: '2rem',
        fontSize: '0.8125rem',
        color: 'var(--color-warm-gray)',
        fontStyle: 'italic',
        fontFamily: 'var(--font-playfair)',
      }}>
        A goal without a plan is just a wish.
      </p>

    </div>
  )
}