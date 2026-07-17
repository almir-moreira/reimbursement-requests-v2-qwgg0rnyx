import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, FileText, BarChart3, Database, Users, Settings } from 'lucide-react'
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar'

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Requests', href: '/requests', icon: FileText },
  { name: 'Reporting', href: '/reporting', icon: BarChart3 },
  { name: 'Master Data', href: '/master-data', icon: Database },
  { name: 'Admin Users', href: '/admin-users', icon: Users },
  { name: 'SMTP Settings', href: '/settings', icon: Settings },
]

export function AppSidebar() {
  const location = useLocation()

  return (
    <Sidebar className="border-r shadow-sm">
      <SidebarHeader className="p-6 pb-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold font-serif text-primary tracking-tight">KAICIID</h1>
          <span className="text-[13px] font-medium text-slate-500 uppercase tracking-wider">
            Reimbursement Requests
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-4 py-2">
        <SidebarMenu className="gap-2">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href
            return (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive}
                  tooltip={item.name}
                  className="py-5 font-medium transition-colors"
                >
                  <Link to={item.href} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}
