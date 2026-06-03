import { cookies } from 'next/headers'
import { verifyToken } from '@/lib/auth'
import { connectDB } from '@/lib/mongodb'
import User from '@/models/User'
import Sidebar from '@/components/dashboard/Sidebar'

async function getUser() {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('token')?.value
    if (!token) return null

    const decoded = verifyToken(token) as { id: string }
    await connectDB()
    const user = await User.findById(decoded.id).select('-password')
    if (!user) return null

    return {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
    }
  } catch {
    return null
  }
}

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getUser()

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar user={user} />
      <main
        style={{
          marginLeft: '220px',
          flex: 1,
          padding: '2rem',
          minHeight: '100vh',
          backgroundColor: 'var(--color-cream)',
        }}
      >
        {children}
      </main>
    </div>
  )
}