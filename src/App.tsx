import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SingleEpisode from './pages/SingleEpisode'
import './scss/main.scss'

function App() {

  return (
    <>
      <div className='app-wrapper'>
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
