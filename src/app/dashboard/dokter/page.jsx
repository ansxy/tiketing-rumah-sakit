export default function DokterForm() {
    return (
        <>
            <h1 className="text-xl font-bold">Tambah Dokter</h1>
            <form>
                <div className="flex flex-col">
                    <label>Nama Dokter</label>
                    <input className="border"></input>
                </div>
                <div className="flex flex-col">
                    <label>Jadwal</label>
                    <input type="date" className="border"></input>
                </div>
                <div className="flex flex-col">
                    <label>Foto Dokter</label>
                    <input type="file" className="border"></input>
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
        </>
    )
}
