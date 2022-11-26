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

    return <main className="w-full">Detail Dokter</main>
}
