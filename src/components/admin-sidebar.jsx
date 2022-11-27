import Link from "next/link"

const adminSidebarData = [
    { title: "Dashboard", path: "/dashboard" },
    { title: "Tambah Rumah Sakit", path: "/dashboard/rumahsakit" },
    { title: "Tambah Spesialis", path: "/dashboard/spesialis" },
    { title: "Tambah Dokter", path: "/dashboard/dokter" },
]

export default function AdminSidebar() {
    return (
        <nav className="flex flex-col justify-center items-center">
            <div className="flex flex-col items-center bg-healtick-cream gap-4 py-12">
                <div className="rounded-full w-24 h-24 bg-slate-500"></div>
                <div className="flex flex-col px-12">
                    <h1 className="text-xl font-semibold">Admin</h1>
                    {adminSidebarData.map((data, index) => {
                        return (
                            <Link key={index} href={data.path} className="py-1">
                                {data.title}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </nav>
    )
}
