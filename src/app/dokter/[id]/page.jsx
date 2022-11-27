import Image from "next/image"

import { FetchDokter } from "../../../lib/fetch-dokter"
import { FetchDokters } from "../../../lib/fetch-dokters"

async function generateStaticParams() {
    const datas = await FetchDokters()

    return datas.map((data) => ({
        id: data.id,
    }))
}

export default async function Page({ params }) {
    const { id } = params
    const data = await FetchDokter({ id })

    return (
        <section className="h-screen py-36">
            <div className="flex flex-row">
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
                <div className="flex flex-col">
                    <h2>Nama Dokter</h2>
                    <h3>Spesialis</h3>
                    <h3>Rumah Sakit</h3>
                </div>
            </div>
        </section>
    )
}
