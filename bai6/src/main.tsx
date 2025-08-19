import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AdminIndex from './AdminIndex.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AdminIndex />
  </StrictMode>,
)
