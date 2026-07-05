import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gradient-to-b from-pink-50 to-white'>
      
      <div className='w-full block'>
        <Header />

       
        <main className="min-h-[70vh] px-4 py-6">
          
         
          <div className="text-center text-pink-500 font-semibold text-lg mb-4">
            ✨ TODO Section Coming Here ✨
          </div>

          
          <div className="bg-white shadow-md rounded-xl p-4 border border-pink-100">
            <Outlet />
          </div>

        </main>

        <Footer />
      </div>

    </div>
  ) : null
}

export default App