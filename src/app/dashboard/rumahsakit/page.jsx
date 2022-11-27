export default function RumahSakitForm() {
    return (
        <>
            <h1 className="text-xl font-bold">Tambah Rumah Sakit</h1>
            <form>
                <div className="flex flex-col">
                    <label>Nama Rumah Sakit</label>
                    <input className="border"></input>
                </div>
                <div className="flex flex-col">
                    <label>Alamat</label>
                    <input className="border"></input>
                </div>
                <div className="flex flex-col">
                    <label>No. Telpon</label>
                    <input className="border"></input>
                </div>
                <div className="flex flex-col">
                    <label>Foto Rumah Sakit</label>
                    <input className="border"></input>
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
        </>
    )
}
