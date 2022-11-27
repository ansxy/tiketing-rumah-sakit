export default function Page() {
    return (
        <>
            <h1>Tambah Spesialis</h1>
            <form>
                <div className="flex flex-col">
                    <label>Nama Spesialis</label>
                    <input className="border"></input>
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
        </>
    )
}
