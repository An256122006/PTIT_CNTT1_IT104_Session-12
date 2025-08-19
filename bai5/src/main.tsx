import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Format from './Format.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Format />
  </StrictMode>,
)
