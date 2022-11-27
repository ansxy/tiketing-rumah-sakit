"use client"
import axios from "axios"
import { useState, useEffect } from "react"
import { FcGoogle } from "react-icons/fc"
import { signIn, useSession } from "next-auth/react"
import { usePathname } from "next/navigation"
import { FetchDokter } from "../../../../lib/fetch-dokter"

export default function Page() {
    const id = usePathname().split("/")[2]

    const { sessionData: session, status } = useSession()
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    })
    const [dokterData, setDokterData] = useState({})

    useEffect(() => {
        async function getDokterData() {
            const { data } = await FetchDokter({ id })
            setDokterData(data)
        }

        getDokterData()
    }, [id])

    const handleGoogleLoging = (e) => {
        e.preventDefault()
        signIn("google")
    }

    const handleChange = (e) => {
        e.preventDefault()
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("/api/user/auth/registrasi", loginData)
            return res
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <h1 className="text-2xl font-bold">Buat Janji</h1>
            <section className="flex flex-row w-full">
                <aside className="shadow-md justify-center items-center flex flex-col gap-2 px-6 py-12 whitespace-nowrap">
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-lg font-semibold">Info Dokter</h2>
                        <div className="w-24 h-24 rounded-full bg-slate-500 my-4"></div>
                        <h3>{dokterData.nama}</h3>
                        <p>Spesialis</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-lg font-semibold">
                            Info Rumah Sakit
                        </h2>
                        <div className="w-24 h-24 rounded-full bg-slate-500 my-4"></div>
                        <h3>Nama Rumah Sakit</h3>
                        <p>Alamat</p>
                    </div>
                </aside>
                <div className="flex w-full px-72">
                    {session ? (
                        <div className="flex flex-col justify-center items-center w-full shadow-lg">
                            <div className="flex flex-col w-full px-12 pt-8 pb-4 rounded-md">
                                <div className="flex flex-row justify-between text-lg font-semibold my-2">
                                    <button>Tambah Keluarga</button>
                                    <button>Ganti Pasien</button>
                                </div>
                                <h2 className="font-medium">Pasien :</h2>
                                <div className="flex flex-row mt-2 px-4 py-6 items-center gap-6 border border-healtick-green rounded-lg">
                                    <div className="w-24 h-24 rounded-full bg-slate-500"></div>
                                    <div className="flex flex-col">
                                        <h3 className="font-semibold">
                                            Nama Pasien
                                        </h3>
                                        <p className="font-medium">
                                            <span>(Umur Pasien)</span> Tanggal
                                            Lahir
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <form className="flex flex-col gap-2 w-2/3">
                                <div className="flex flex-col gap-1">
                                    <label>Tanggal Janji</label>
                                    <input
                                        type="date"
                                        className="border p-2 rounded-md"
                                    />
                                </div>
                                <div className="flex flex-row gap-2">
                                    <input type="checkbox" />
                                    <label>Saya menggunakan BPJS</label>
                                </div>
                                <div className="w-full flex flex-row gap-4">
                                    <button className="basis-1/2 bg-red-500 text-white mb-4 rounded-md py-2">
                                        Cancel
                                    </button>
                                    <input
                                        type="submit"
                                        className="basis-1/2 bg-healtick-green text-white mb-4 rounded-md py-2"
                                    />
                                </div>
                            </form>
                        </div>
                    ) : (
                        <div className="flex flex-col justify-center items-center w-full">
                            <form
                                className="flex flex-col w-full gap-4"
                                onSubmit={handleSubmit}
                                method="GET"
                            >
                                <div className="flex flex-col">
                                    <label htmlFor="email">E-mail</label>
                                    <input
                                        name="email"
                                        type="email"
                                        onChange={handleChange}
                                        className="border w-full py-2 px-4 rounded-lg"
                                    ></input>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        name="password"
                                        type="password"
                                        onChange={handleChange}
                                        className="border w-full py-2 px-4 rounded-lg"
                                    ></input>
                                </div>
                                <div className="flex justify-center items-center py-3 rounded-lg my-2 bg-healtick-darkgreen text-white">
                                    <input type="submit" />
                                </div>
                            </form>
                            <h3 className="my-2 font-medium">Or</h3>
                            <button
                                className="flex flex-row justify-center items-center text-white bg-blue-400 font-semibold gap-2 rounded-md border px-6 py-3 my-2"
                                onClick={handleGoogleLoging}
                            >
                                <span>
                                    <FcGoogle />
                                </span>
                                Login with Google
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}
