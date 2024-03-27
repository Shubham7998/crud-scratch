import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../Components/Layout'
import Home from '../Components/Home'
import Property from '../Components/Property'
import Showlist from '../Components/Showlist'

export default function PageRoutes() {
  return (
    <>
        <Routes>
            <Route element={<Layout/>} >
                <Route path='/' element={<Home />}/>
                <Route path='/property' element={<Property />}/>
                <Route path='/showlist' element={<Showlist />}/>

            </Route>
        </Routes>
    </>
  )
}
