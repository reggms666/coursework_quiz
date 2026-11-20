import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from 'ui-library'
import { HomePage } from './pages/HomePage'
import { QuizPage } from './pages/QuizPage'
import { RecordsPage } from './pages/RecordsPage'
import { NotFoundPage } from './pages/NotFoundPage'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/records" element={<RecordsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App