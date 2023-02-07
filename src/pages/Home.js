import React from 'react'
import Navbar from '../Navbar'
import IndexContent from '../IndexContent'
import Footer from '../Footer'
import { Route, Routes } from 'react-router-dom'
import North from './North'
import South from './South'
import Center from './Center'
import Hermon from './Hermon'


function Home() {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<IndexContent />}></Route>
          <Route path='/North' element={<North />}></Route>
          <Route path='/South' element={<South />}></Route>
          <Route path='/Center' element={<Center />}></Route>
          <Route path='/Hermon' element={<Hermon />}></Route>
        </Routes>
        <Footer />
    </div>

  )
}

export default Home