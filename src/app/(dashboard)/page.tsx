'use client'

import { useAuth } from '@/components/providers/AuthProvider'

export default function DashboardPage() {
  const { user, loading } = useAuth()

  return (
    <div>
      <p>Loading: {String(loading)}</p>
      <p>User: {JSON.stringify(user)}</p>
    </div>
  )
}