import { BsCheck2Circle } from "react-icons/bs"

export default function TiketModal({ value, setValue }) {
    const modal = value
    const setModal = setValue

    return (
        <div className="absolute flex justify-center items-center top-0 left-0 w-screen h-screen z-10 bg-slate-500 bg-opacity-80 shadow-md">
            <div className="flex flex-col justify-center items-center bg-white px-12 py-20 gap-2 rounded-lg">
                <BsCheck2Circle className="w-24 h-24" />
                <h1 className="text-2xl font-bold">Tiket Terbuat</h1>
                <button
                    onClick={() => {
                        setModal(!modal)
                    }}
                    className="bg-blue-500 w-full px-2 py-3 rounded-md text-white font-semibold"
                >
                    Kembali
                </button>
            </div>
        </div>
    )
}
