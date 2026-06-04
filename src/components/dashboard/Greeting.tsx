'use client'

interface GreetingProps {
  name: string
}

export default function Greeting({ name }: GreetingProps) {
  const hour = new Date().getHours()

  const greeting =
    hour < 12 ? 'Good morning' :
    hour < 17 ? 'Good afternoon' :
    'Good evening'

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h1
        style={{
          fontFamily: 'var(--font-playfair)',
          fontSize: '2rem',
          color: 'var(--color-warm-charcoal)',
          marginBottom: '0.25rem',
        }}
      >
        {greeting}, {name.split(' ')[0]} ✦
      </h1>
      <p style={{ fontSize: '0.875rem', color: 'var(--color-warm-gray)' }}>
        {today}
      </p>
    </div>
  )
}