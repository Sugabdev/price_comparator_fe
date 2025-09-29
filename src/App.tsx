import { Routes, Route } from 'react-router'
import { Home } from './routes/Home'
import { Products } from './routes/Products'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

export function App () {
  return (
    <section className='grid grid-rows-[auto_1fr_auto] min-h-[100dvh] text-gray-800'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
      </Routes>
      <Footer />
    </section>
  )
}
