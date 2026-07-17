import { Card } from '@/components/ui/card'
import { ChevronRight } from 'lucide-react'

const stages = [
  {
    name: 'Submitted / Requester',
    count: 1,
    oldest: '11d',
    bg: 'bg-[#fffdf0]',
    border: 'border-yellow-200',
  },
  { name: 'QC Review', count: 1, oldest: '1d', bg: 'bg-[#fff7f0]', border: 'border-orange-200' },
  { name: 'CO Approval', count: 0, oldest: '—', bg: 'bg-[#f5f7ff]', border: 'border-blue-200' },
  {
    name: 'Finance Processing',
    count: 0,
    oldest: '—',
    bg: 'bg-[#faf5ff]',
    border: 'border-purple-200',
  },
  {
    name: 'Processed & Closed',
    count: 0,
    oldest: '—',
    bg: 'bg-[#f0fdf4]',
    border: 'border-green-200',
  },
]

export function DashboardPipeline() {
  return (
    <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3">
      {stages.map((stage, i) => (
        <div key={i} className="flex-1 flex flex-col lg:flex-row items-center gap-3">
          <Card className={`w-full flex-1 p-5 shadow-sm border ${stage.bg} ${stage.border}`}>
            <div className="text-[13px] font-medium text-slate-600 mb-2">{stage.name}</div>
            <div className="flex items-baseline gap-1.5 mb-3">
              <span className="text-3xl font-bold text-slate-800">{stage.count}</span>
              <span className="text-sm font-medium text-slate-500">requests</span>
            </div>
            <div className="text-xs text-slate-400 font-medium">Oldest: {stage.oldest}</div>
          </Card>
          {i < stages.length - 1 && (
            <ChevronRight className="w-5 h-5 text-slate-400 shrink-0 hidden lg:block" />
          )}
        </div>
      ))}
    </div>
  )
}
