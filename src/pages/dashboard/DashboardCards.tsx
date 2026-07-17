import { Card, CardContent } from '@/components/ui/card'
import { FileText, User, Eye, ShieldCheck, DollarSign, CheckCircle2, XCircle } from 'lucide-react'

const metrics = [
  { label: 'Total Requests', value: '6', icon: FileText, color: 'text-blue-500' },
  { label: 'Pending Requester Action', value: '1', icon: User, color: 'text-amber-500' },
  { label: 'Pending QC Review', value: '1', icon: Eye, color: 'text-orange-500' },
  { label: 'Pending CO Approval', value: '0', icon: ShieldCheck, color: 'text-indigo-500' },
  { label: 'Pending Finance Processing', value: '0', icon: DollarSign, color: 'text-purple-500' },
  { label: 'Processed & Closed', value: '0', icon: CheckCircle2, color: 'text-emerald-500' },
  { label: 'Rejected / Returned', value: '1', icon: XCircle, color: 'text-red-500' },
]

export function DashboardCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
      {metrics.map((m, i) => (
        <Card key={i} className="shadow-sm border-slate-200 overflow-hidden">
          <CardContent className="p-5 flex flex-col justify-between h-full bg-white">
            <div className="flex items-start justify-between mb-4">
              <span className="text-xs font-medium text-slate-500 leading-snug max-w-[80%]">
                {m.label}
              </span>
              <m.icon className={`w-4 h-4 shrink-0 ${m.color}`} />
            </div>
            <span className="text-3xl font-bold text-slate-800">{m.value}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
