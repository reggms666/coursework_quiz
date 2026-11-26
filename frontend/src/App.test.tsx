import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from './App'

describe('App', () => {
  it('renders home page by default', () => {
    render(<App />)
    expect(screen.getByText('Главная страница')).toBeInTheDocument()
  })

  it('navigates to quiz page', async () => {
    render(<App />)
    // Кликаем по ссылке "Викторина" в навигации
    await userEvent.click(screen.getByRole('link', { name: /Викторина/i }))
    
    // Проверяем, что открылась страница викторины (заголовок и кнопка)
    expect(screen.getByText('Страница Викторины')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Начать игру/i })).toBeInTheDocument()
  })

  it('navigates to records page', async () => {
    render(<App />)
    // Кликаем по ссылке "Рекорды"
    await userEvent.click(screen.getByRole('link', { name: /Рекорды/i }))
    
    // Проверяем, что открылась страница рекордов
    expect(screen.getByText('Таблица рекордов')).toBeInTheDocument()
    expect(screen.getByText('Здесь будет таблица.')).toBeInTheDocument()
  })

  it('renders 404 page for unknown routes', () => {
    // Устанавливаем несуществующий URL
    window.history.pushState({}, '', '/unknown-route')
    render(<App />)
    
    // Проверяем, что открылась страница 404
    expect(screen.getByText('404 - Страница не найдена')).toBeInTheDocument()
    expect(screen.getByText('На главную')).toBeInTheDocument()
  })

  it('shows question when clicking start button on quiz page', async () => {
    window.history.pushState({}, '', '/quiz')
    render(<App />)
    
    // Кликаем по кнопке из библиотеки
    await userEvent.click(screen.getByRole('button', { name: /Начать игру/i }))
    
    // Проверяем, что появился вопрос
    expect(screen.getByText('Вопрос 1: Столица Франции?')).toBeInTheDocument()
  })
})