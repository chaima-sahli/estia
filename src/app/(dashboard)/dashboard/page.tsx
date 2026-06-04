import { cookies } from 'next/headers'
import { verifyToken } from '@/lib/auth'
import { connectDB } from '@/lib/mongodb'
import User from '@/models/User'
import Greeting from '@/components/dashboard/Greeting'
import TodayFocus from '@/components/dashboard/TodayFocus'
import QuickStats from '@/components/dashboard/QuickStats'
import BottomCards from '@/components/dashboard/BottomCards'

async function getUserName() {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('token')?.value
    if (!token) return 'there'
    const decoded = verifyToken(token) as { id: string }
    await connectDB()
    const user = await User.findById(decoded.id).select('name')
    return user?.name ?? 'there'
  } catch {
    return 'there'
  }
}

export default async function DashboardPage() {
  const name = await getUserName()

  return (
<div style={{ maxWidth: '1100px', width: '100%' }}>
      <Greeting name={name} />
      <TodayFocus />
      <QuickStats />
      <BottomCards />
    </div>
  )
}