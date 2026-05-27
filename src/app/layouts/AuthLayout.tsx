import type { ReactNode } from 'react'
import { Header } from '@/core/components/header/Header'

interface AuthLayoutProps {
  children: ReactNode
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <div>
        <Header />
        <main className="mx-auto max-w-5xl px-8 py-10 md:py-12">
          {children}
        </main>
      </div>
    </div>
  )
}
