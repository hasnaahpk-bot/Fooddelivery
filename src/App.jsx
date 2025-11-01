import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import StoreContextProvider from './context/Store.Context'
import Footer from './components/Footer'
import AppDownload from './components/AppDownload'

const App = () => {
  return (
    <StoreContextProvider>
    <div>
      <Navbar/>
      <Home/>
      <AppDownload/>
      <Footer/>
    </div>
    </StoreContextProvider>
  )
}

export default App
