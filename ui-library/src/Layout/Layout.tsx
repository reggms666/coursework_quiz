import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <nav style={{ padding: '10px', background: '#eee', marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Главная</Link>
        <Link to="/quiz" style={{ marginRight: '10px' }}>Викторина</Link>
        <Link to="/records">Рекорды</Link>
      </nav>
      <main style={{ padding: '20px' }}>
        {children}
      </main>
    </div>
  )
}