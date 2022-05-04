import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { Entrance } from '../views/Entrance'
import { Histoty } from '../views/History/History'

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Entrance />} />
        <Route path='/history/:plate' element={<Histoty />} />
      </Routes>
    </BrowserRouter>
  )
}
