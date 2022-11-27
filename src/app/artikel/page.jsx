export default function Page() {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-healtick-cream bg-opacity-40">
            <div className="h-full flex basis-1/2 flex-col justify-center items-center">
                <h1 className="text-3xl font-bold">Artikel</h1>
                <p className="text-center">
                    Artikel yang dibuat oleh para dokter-dokter hebat
                </p>
            </div>
            <div className="h-full flex basis-1/2 flex-col justify-self-center items-center my-6">
                <p className="font-semibold">Belum ada artikel</p>
            </div>
        </div>
    )
}
