import Sidebar from '@/components/dashboard/Sidebar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
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