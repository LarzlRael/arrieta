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
      {/* <ToolTip content="que fue gente">
        <button onClick={changeComponent}>que fue gente</button>
      </ToolTip>
      <ToolTip content="Borrar">
        <button onClick={clearComponent}>que fue gente</button>
      </ToolTip>
      {count && count} */}
      <Theme>
        <MainRoutes />
      </Theme>
    </div>
  )
}

export default App
