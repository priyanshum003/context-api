import './App.css'
import { LanguageProvider } from './contexts/LanguageContext'
import LanguageSelector from './components/LanguageSelector'
import HomePage from './components/HomePage'

function App() {

  return (
    <>
      <LanguageProvider>
      <div className="App">
                <LanguageSelector />
                <HomePage />
            </div>
      </LanguageProvider>
    </>
  )
}

export default App
