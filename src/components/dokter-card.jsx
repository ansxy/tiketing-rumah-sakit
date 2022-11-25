import Link from "next/link"

export default function DokterCard() {
    return (
        <div className="flex flex-col justify-center items-center bg-healtick-cream py-4 rounded-lg">
            <div className="w-24 h-24 rounded-full bg-healtick-darkgreen my-5"></div>
            <h2 className="text-xl font-semibold">Dokter Agus</h2>
            <h3 className="text-md">Kehamilan</h3>
            <h3 className="text-md">Balikpapan</h3>
            <Link
                href="/dokter/janji"
                className="bg-healtick-darkgreen text-white p-4 my-4 rounded-2xl font-semibold"
            >
                Buat Janji
            </Link>
        </div>
    )
}
