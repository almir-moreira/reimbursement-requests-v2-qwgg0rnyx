import { useLocation, Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function NotFound() {
  const location = useLocation()

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname)
  }, [location.pathname])

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-slate-200 max-w-md w-full mx-4">
        <h1 className="text-6xl font-bold font-serif text-primary mb-4">404</h1>
        <p className="text-lg font-medium text-slate-600 mb-8">Oops! Page not found</p>
        <Link
          to="/"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90"
        >
          Return to Dashboard
        </Link>
      </div>
    </div>
  )
}
