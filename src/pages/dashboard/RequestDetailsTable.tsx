import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { ListChecks, Search } from 'lucide-react'

const requests = [
  {
    id: '2026-0055',
    req: 'Kiosk User',
    event: 'Fellows 10th anniversary',
    cc: '—',
    status: 'PENDING_QC',
    stage: 'Quality Control Review',
    amount: '—',
    wait: '1d 3h',
  },
  {
    id: '2026-0054',
    req: 'Kiosk User',
    event: 'Workshop Addis',
    cc: 'CC-01',
    status: 'REJECTED_BY_CO',
    stage: 'Rejected',
    amount: '—',
    wait: '11d',
  },
  {
    id: '2026-0053',
    req: 'Dorna Khan',
    event: 'Workshop Addis',
    cc: 'CC-01',
    status: 'COMPLETED',
    stage: 'Unknown',
    amount: '—',
    wait: '11d 2h',
  },
]

export function RequestDetailsTable() {
  return (
    <Card className="shadow-sm border-slate-200">
      <CardHeader className="py-4 px-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white">
        <CardTitle className="text-sm font-semibold text-slate-700 flex items-center gap-2">
          <ListChecks className="w-4 h-4 text-primary" />
          Request Details
        </CardTitle>
        <div className="relative max-w-sm w-full">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <Input
            type="search"
            placeholder="Search requests..."
            className="pl-9 bg-slate-50/50 border-slate-200 h-9"
          />
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-[120px] pl-6">Request ID</TableHead>
              <TableHead>Requester</TableHead>
              <TableHead>Event</TableHead>
              <TableHead>Cost Center</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Stage</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-right pr-6">Waiting</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {requests.map((r) => (
              <TableRow key={r.id}>
                <TableCell className="font-medium text-slate-700 pl-6">{r.id}</TableCell>
                <TableCell className="text-slate-600">{r.req}</TableCell>
                <TableCell className="text-slate-600">{r.event}</TableCell>
                <TableCell className="text-slate-600">{r.cc}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className="font-mono text-[10px] bg-slate-50 border-slate-200 text-slate-600 tracking-wider"
                  >
                    {r.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-slate-600">{r.stage}</TableCell>
                <TableCell className="text-right text-slate-400">{r.amount}</TableCell>
                <TableCell className="text-right text-slate-500 pr-6">{r.wait}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
