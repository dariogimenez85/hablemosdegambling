import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import SingleEpisode from './pages/SingleEpisode'
import './scss/main.scss'

function App() {

  return (
    <>
      <div className='app-wrapper'>
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/episode/:id" element={<SingleEpisode />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
