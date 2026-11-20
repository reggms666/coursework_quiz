import { type ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} style={{ padding: '8px 16px', cursor: 'pointer' }}>
      {children}
    </button>
  )
}