import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Clock, XCircle } from 'lucide-react'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

const agingData = [
  { name: '0-1 day', count: 1 },
  { name: '2-3 days', count: 0 },
  { name: '4-7 days', count: 0 },
  { name: '8-14 days', count: 0 },
  { name: '15+ days', count: 5 },
]

const rejectionData = [{ name: 'Rejected', count: 1 }]

export function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 gap-6">
      <Card className="shadow-sm border-slate-200">
        <CardHeader className="py-5 px-6 border-b border-slate-100">
          <CardTitle className="text-sm font-semibold text-slate-700 flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-500" />
            Aging Distribution
          </CardTitle>
        </CardHeader>
        <CardContent className="h-72 p-6 pt-8">
          <ChartContainer
            config={{ count: { label: 'Requests', color: 'hsl(var(--primary))' } }}
            className="h-full w-full"
          >
            <BarChart data={agingData} margin={{ top: 0, right: 0, bottom: 0, left: -25 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#64748b' }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#64748b' }}
                tickCount={5}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar
                dataKey="count"
                fill="var(--color-count)"
                radius={[4, 4, 0, 0]}
                maxBarSize={60}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="shadow-sm border-slate-200">
        <CardHeader className="py-5 px-6 border-b border-slate-100 flex flex-row items-center justify-between">
          <CardTitle className="text-sm font-semibold text-slate-700 flex items-center gap-2">
            <XCircle className="w-4 h-4 text-red-500" />
            Rejection Overview
          </CardTitle>
          <div className="px-2.5 py-1 bg-red-50 text-red-600 text-xs font-bold rounded-full">
            1 Rejected
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="h-32 mb-6">
            <ChartContainer
              config={{ count: { label: 'Rejected', color: 'hsl(var(--destructive))' } }}
              className="h-full w-full"
            >
              <BarChart
                data={rejectionData}
                layout="vertical"
                margin={{ top: 0, right: 0, bottom: -10, left: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                <XAxis
                  type="number"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#64748b' }}
                  tickCount={5}
                />
                <YAxis
                  dataKey="name"
                  type="category"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#64748b' }}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="count" fill="var(--color-count)" radius={[0, 4, 4, 0]} barSize={80} />
              </BarChart>
            </ChartContainer>
          </div>
          <div className="p-4 bg-red-50/50 border border-red-100 rounded-xl text-sm">
            <div className="flex items-center justify-between mb-1.5">
              <div className="font-semibold text-slate-800">
                2026-0054
                <span className="text-red-700 text-[11px] ml-2 bg-red-100 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                  Rejected
                </span>
              </div>
              <div className="text-slate-500 text-xs font-medium">Kiosk User</div>
            </div>
            <div className="text-red-600/80 font-medium">please provide more information</div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
