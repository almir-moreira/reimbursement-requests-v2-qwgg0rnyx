import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import Layout from './components/Layout'

import Index from './pages/Index'
import Requests from './pages/Requests'
import Reporting from './pages/Reporting'
import MasterData from './pages/MasterData'
import AdminUsers from './pages/AdminUsers'
import Settings from './pages/Settings'
import NotFound from './pages/NotFound'

const App = () => (
  <BrowserRouter>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/reporting" element={<Reporting />} />
          <Route path="/master-data" element={<MasterData />} />
          <Route path="/admin-users" element={<AdminUsers />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </BrowserRouter>
)

export default App
