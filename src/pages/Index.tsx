import { DashboardHeader } from './dashboard/DashboardHeader'
import { DashboardFilters } from './dashboard/DashboardFilters'
import { DashboardCards } from './dashboard/DashboardCards'
import { DashboardPipeline } from './dashboard/DashboardPipeline'
import { DelayAlertsTable } from './dashboard/DelayAlertsTable'
import { DashboardCharts } from './dashboard/DashboardCharts'
import { RequestDetailsTable } from './dashboard/RequestDetailsTable'

export default function Index() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-8 pb-12">
      <DashboardHeader />
      <DashboardFilters />
      <DashboardCards />
      <DashboardPipeline />
      <DelayAlertsTable />
      <DashboardCharts />
      <RequestDetailsTable />
    </div>
  )
}
