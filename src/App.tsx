import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Episode from './pages/Episode'
import Home from './pages/Home'
import './scss/main.scss'

function App() {

  return (
    <>
      <div className='app-wrapper'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/episode/:id" element={<Episode />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
