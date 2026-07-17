import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { AlertTriangle, ExternalLink } from 'lucide-react'

const alerts = [
  {
    id: '2026-0054',
    req: 'Kiosk User',
    event: 'Workshop Addis',
    stage: 'Rejected',
    wait: '11d 4h',
  },
  { id: '2026-0053', req: 'Dorna Khan', event: 'Workshop Addis', stage: 'Unknown', wait: '11d 5h' },
  { id: '2026-0052', req: 'Dorna Khan', event: 'Workshop Addis', stage: 'Unknown', wait: '14d' },
  { id: '2026-0050', req: 'Dorna Khan', event: 'Workshop Addis', stage: 'Unknown', wait: '60d 5h' },
]

export function DelayAlertsTable() {
  return (
    <Card className="border-orange-200 shadow-sm overflow-hidden">
      <CardHeader className="bg-orange-50/50 border-b border-orange-100 py-3.5 px-6">
        <CardTitle className="text-sm font-semibold text-orange-700 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4" />
          Delay Alerts — Requests Pending &gt; 48 Hours (5)
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-[150px] pl-6">Request ID</TableHead>
              <TableHead>Requester</TableHead>
              <TableHead>Event</TableHead>
              <TableHead>Current Stage</TableHead>
              <TableHead className="text-right">Waiting</TableHead>
              <TableHead className="text-right pr-6">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {alerts.map((a) => (
              <TableRow key={a.id}>
                <TableCell className="font-medium text-slate-700 pl-6">{a.id}</TableCell>
                <TableCell className="text-slate-600">{a.req}</TableCell>
                <TableCell className="text-slate-600">{a.event}</TableCell>
                <TableCell className="text-slate-600">{a.stage}</TableCell>
                <TableCell className="text-right text-orange-600 font-semibold">{a.wait}</TableCell>
                <TableCell className="text-right pr-6">
                  <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-primary transition-colors">
                    <ExternalLink className="w-4 h-4" /> Open
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
