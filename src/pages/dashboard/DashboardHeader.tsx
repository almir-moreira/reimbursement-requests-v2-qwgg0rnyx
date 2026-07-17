import { Alert, AlertDescription } from '@/components/ui/alert'
import { RefreshCw } from 'lucide-react'

export function DashboardHeader() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-4xl font-bold font-serif text-primary">Dashboard</h1>
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <span>Last updated: Jul 17, 2026 15:02</span>
          <button className="p-1.5 hover:bg-slate-100 rounded-md transition-colors">
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>
      <Alert className="bg-[#f0f7ff] border-blue-100 text-blue-800 shadow-sm py-4">
        <AlertDescription className="text-sm font-medium">
          Welcome back, Admin User. Here is an overview of the platform's reimbursement workflow.
        </AlertDescription>
      </Alert>
    </div>
  )
}
