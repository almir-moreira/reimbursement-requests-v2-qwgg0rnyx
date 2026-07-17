import { SidebarTrigger } from '@/components/ui/sidebar'
import { LogOut } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { useIsMobile } from '@/hooks/use-mobile'

export function Header() {
  const isMobile = useIsMobile()
  return (
    <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-4 border-b bg-white px-6 shadow-sm">
      <SidebarTrigger className="-ml-2 hover:bg-slate-100" />
      {isMobile && (
        <div className="flex flex-col">
          <span className="text-lg font-serif font-bold text-primary">KAICIID</span>
        </div>
      )}
      <div className="flex-1" />
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-3">
          <Badge
            variant="secondary"
            className="bg-blue-50 text-blue-700 hover:bg-blue-50 px-2 py-0.5 rounded-md"
          >
            Admin
          </Badge>
          <span className="text-sm font-medium text-slate-700">Admin User</span>
        </div>
        <button
          className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors"
          title="Log out"
        >
          <LogOut className="w-5 h-5" />
        </button>
      </div>
    </header>
  )
}
