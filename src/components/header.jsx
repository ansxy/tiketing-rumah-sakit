import Link from "next/link"

const navData = [
    { title: "Beranda", path: "/" },
    { title: "Cari Dokter", path: "/dokter" },
    { title: "Artikel", path: "/artikel" },
]

export default function Header() {
    return (
        <nav className="fixed bg-healtick-green w-full h-1/10 flex flex-row justify-between items-center px-12 py-6 text-white">
            <div className="font-bold text-2xl">Healtick</div>
            <ul className="flex flex-row gap-4 font-medium">
                {navData.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link href={item.path}>{item.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
