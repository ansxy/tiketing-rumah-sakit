import DokterCard from "../../components/dokter-card"
import DokterSearchForm from "../../components/dokter-search-form"

async function getData() {
    const res = await fetch('http://localhost:3000/api/user/dokter/1');
    
    if(!res.ok){
        console.log("error getting data")
    }
    return res.json()
}

export default async function Page() {
    const data = await getData();
    return (
        <main className="w-full">
            <section className="w-full flex flex-col justify-center items-center py-36 bg-healtick-cream">
                <h1 className="text-2xl font-bold">Cari Dokter</h1>
                <p className="text-lg">
                    Cari kebutuhan kesehatanmu disini dengan cepat
                </p>
            </section>
            <section className="w-full flex flex-row py-16">
                <aside className="flex justify-center items-center basis-1/3">
                    <DokterSearchForm />
                </aside>
                <div className="px-3 grid grid-cols-3 gap-4 basis-2/3">
                    {data.data.map((data) => {
                        return <>
                            <DokterCard data={data}/>
                        </>
                    })}
                </div>
            </section>
        </main>
    )
}
