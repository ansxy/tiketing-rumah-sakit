export default function DokterSearchForm() {
    return (
        <form className="flex flex-col shadow-lg px-12 py-6 gap-3">
            <div className="flex flex-col">
                <label htmlFor="nama-dokter" className="font-medium">
                    Nama Dokter
                </label>
                <input
                    name="nama-dokter"
                    className="border rounded-md p-2"
                ></input>
            </div>
            <div className="flex flex-col ">
                <label htmlFor="pilih-spesialis" className="font-medium">
                    Pilih Spesialis
                </label>
                <input
                    name="pilih-spesialis"
                    className="border rounded-md p-2"
                ></input>
            </div>
            <div className="flex flex-col">
                <label htmlFor="pilih-rumah-sakit" className="font-medium">
                    Pilih Rumah Sakit
                </label>
                <input
                    name="pilih-rumah-sakit"
                    className="border rounded-md p-2"
                ></input>
            </div>
            <div className="flex flex-col">
                <label htmlFor="hari" className="font-medium">
                    Pilih Hari
                </label>
                <input
                    name="pilih-gender"
                    className="border rounded-md p-2"
                ></input>
            </div>
            <div className="flex flex-col">
                <label className="font-medium">Pilih Gender Dokter</label>
                <input
                    name="pilih-gender"
                    className="border rounded-md p-2"
                ></input>
            </div>
            <input
                type="submit"
                className="bg-healtick-darkgreen text-white p-4 my-4 rounded-2xl font-semibold"
            />
        </form>
    )
}
