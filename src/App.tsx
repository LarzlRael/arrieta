import { useState } from 'react'
import './App.css'
/* 
import reactLogo from './assets/react.svg'
import ToolTip from './components/ToolTyp' */
import { Theme } from './components/theme'
import { RouterProvider } from 'react-router-dom'
import { MainRoutes } from './components/router/main'
function App() {
  return (
    <div>
      <Theme>
        <MainRoutes />
      </Theme>
    </div>
  )
}

export default App
