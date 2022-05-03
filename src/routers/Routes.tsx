import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { Entrance } from '../views/Entrance'

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Entrance />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
