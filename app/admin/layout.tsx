import { DashboardSidebar } from "@/components/admin/DashboardSidebar";
export default function AdminLayout({children}:{children:React.ReactNode}){return <div className="admin-shell"><DashboardSidebar/><div className="admin-main">{children}</div></div>}
