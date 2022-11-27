import Link from "next/link"
import Image from "next/image"

export default function DokterCard({ data }) {
    return (
        <div
            key={data.id}
            className="flex flex-col justify-center items-center bg-healtick-cream py-4 rounded-lg"
        >
            <Link href={`/dokter/${data.id}`}>
                <div className="w-24 h-24 rounded-full bg-slate-500 my-4 ">
                    <Image
                        src="/image/dokter.jpg"
                        width={0}
                        height={0}
                        sizes={100}
                        alt="Foto Dokter"
                        className="w-full h-full object-cover rounded-full"
                    ></Image>
                </div>
            </Link>
            <h2 className="text-xl font-semibold">{data.nama}</h2>
            <h3 className="text-md">{data.klinik.nama}</h3>
            <h3 className="text-md">{data.klinik.rumah_sakit.nama}</h3>
            <Link
                href={`/dokter/${data.id}/janji/`}
                className="bg-healtick-darkgreen text-white p-4 my-4 rounded-2xl font-semibold"
            >
                Buat Janji
            </Link>
        </div>
    )
}
