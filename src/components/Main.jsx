import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/home/Home'
import { ChooseBike } from '../pages/ChooseBike'
import { About } from '../pages/About'
import { Bikes } from '../pages/Bikes'

export function Main () {
  return (
    <main className='bg-slate-50 min-h-screen'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='choose-bike' element={<ChooseBike />} />
        <Route path='about-us' element={<About />} />
        <Route path='all-bikes' element={<Bikes />} />
      </Routes>
    </main>
  )
}
