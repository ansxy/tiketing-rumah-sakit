import Link from "next/link"

export default function Page() {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-healtick-cream bg-opacity-40">
            <div className="h-full flex basis-1/2 flex-col justify-end items-center">
                <h1 className="text-3xl font-bold my-2">
                    Selamat Datang di Healtick
                </h1>
                <p className="text-center">
                    Healtick adalah sebuah Platform Digital untuk memesan sebuah
                    <br></br>
                    reservasi antrian pada Rumah Sakit yang anda ingin kunjungi
                </p>
            </div>
            <div className="h-full flex basis-1/2 flex-col justify-self-center items-center my-6">
                <Link
                    href="/dokter"
                    className="px-6 py-3 bg-healtick-green rounded-lg text-white font-semibold"
                >
                    Antri Sekarang
                </Link>
            </div>
        </div>
    )
}
