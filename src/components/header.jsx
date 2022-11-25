import Link from "next/link"

const navData = [
    { title: "Beranda", path: "/" },
    { title: "Cari Dokter", path: "/dokter" },
    { title: "Artikel", path: "/artikel" },
]

export default function Header() {
    return (
        <nav>
            <ul>
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
