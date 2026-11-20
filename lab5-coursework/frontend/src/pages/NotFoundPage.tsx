import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
  return (
    <div>
      <h1>404 - Страница не найдена</h1>
      <Link to="/">На главную</Link>
    </div>
  )
}