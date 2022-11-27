import AdminSidebar from "../../components/admin-sidebar"

export default function DashboardLayout({ children }) {
    return (
        <section className="flex flex-row w-screen h-screen">
            <AdminSidebar />
            <main className="px-8 py-28">{children}</main>
        </section>
    )
}
