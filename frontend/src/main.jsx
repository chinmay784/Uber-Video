import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import ContextUser from './context/ContextUser.jsx'
import CapatainContext from './context/CapatainContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CapatainContext>
      <ContextUser>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ContextUser>
    </CapatainContext>

  </StrictMode>,
)
