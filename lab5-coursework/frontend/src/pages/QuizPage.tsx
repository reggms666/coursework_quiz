import { useState } from 'react'
import { Button } from 'ui-library'

export const QuizPage = () => {
  const [started, setStarted] = useState(false)

  return (
    <div>
      <h1>Страница Викторины</h1>
      {!started ? (
        <Button onClick={() => setStarted(true)}>Начать игру</Button>
      ) : (
        <div>
          <h2>Вопрос 1: Столица Франции?</h2>
          <Button onClick={() => alert('Выбрано: Париж')}>Париж</Button>
          <Button onClick={() => alert('Выбрано: Лондон')}>Лондон</Button>
        </div>
      )}
    </div>
  )
}