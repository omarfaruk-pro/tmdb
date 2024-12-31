
import { Route, Routes } from 'react-router-dom'
import Headers from './components/Header'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Footer from './components/Footer'
import SingleMovie from './pages/SingleMovie'

function App() {

  return (
    <>

     <Headers/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/movie/:movieId' element={<SingleMovie/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
