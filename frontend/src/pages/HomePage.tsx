import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div>
      <h1>Главная страница</h1>
      <p>Добро пожаловать в курсовую работу "Викторина"!</p>
      <Link to="/quiz">Перейти к викторине</Link>
    </div>
  )
}