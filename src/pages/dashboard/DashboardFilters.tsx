import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { RotateCcw, Filter, Search } from 'lucide-react'

export function DashboardFilters() {
  return (
    <div className="p-5 border rounded-xl bg-white shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-slate-700 font-medium">
          <Filter className="w-4 h-4" />
          <span>Filters</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 text-slate-500 hover:text-slate-800 font-medium"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Reset
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        <div className="lg:col-span-2 relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <Input placeholder="Search ID or name..." className="pl-9 bg-slate-50 border-slate-200" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="bg-slate-50 border-slate-200 text-slate-600">
            <SelectValue placeholder="All Statuses" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all">
          <SelectTrigger className="bg-slate-50 border-slate-200 text-slate-600">
            <SelectValue placeholder="All Events" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Events</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all">
          <SelectTrigger className="bg-slate-50 border-slate-200 text-slate-600">
            <SelectValue placeholder="All Cost Centres" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Cost Centres</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all">
          <SelectTrigger className="bg-slate-50 border-slate-200 text-slate-600">
            <SelectValue placeholder="All Methods" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Methods</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all">
          <SelectTrigger className="bg-slate-50 border-slate-200 text-slate-600">
            <SelectValue placeholder="All Requesters" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Requesters</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all">
          <SelectTrigger className="bg-slate-50 border-slate-200 text-slate-600">
            <SelectValue placeholder="All Roles" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Roles</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
