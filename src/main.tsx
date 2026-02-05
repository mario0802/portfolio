import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/index.ts'
import { ActiveSectionProvider } from '@/context/ActiveSection.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ActiveSectionProvider>
      <RouterProvider router={router} />
    </ActiveSectionProvider>
  </StrictMode>,
)
