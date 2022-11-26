"use client"

import { useState } from "react"
import { FcGoogle } from "react-icons/fc"

export default function Page({ params }) {
    const [session, setSession] = useState(false)

    return (
        <main className="w-full h-screen flex flex-col justify-center px-16 gap-4">
            <h1 className="text-2xl font-bold">Buat Janji</h1>
            <section className="flex flex-row w-full">
                <aside className="shadow-md justify-center items-center flex flex-col gap-2 px-6 py-12 whitespace-nowrap">
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-lg font-semibold">Info Dokter</h2>
                        <div className="w-24 h-24 rounded-full bg-slate-500 my-4"></div>
                        <h3>Nama Dokter</h3>
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
                <div className="flex w-full px-96">
                    {session ? (
                        <>
                            <button>Tambah Keluarga</button>
                            <form></form>
                        </>
                    ) : (
                        <div className="flex flex-col justify-center items-center w-full">
                            <form className="flex flex-col w-full gap-4">
                                <div className="flex flex-col">
                                    <label htmlFor="email">E-mail</label>
                                    <input
                                        name="email"
                                        type="email"
                                        className="border w-full py-2 px-4 rounded-lg"
                                    ></input>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        name="password"
                                        type="password"
                                        className="border w-full py-2 px-4 rounded-lg"
                                    ></input>
                                </div>
                                <div className="flex justify-center items-center py-3 rounded-lg my-2 bg-healtick-darkgreen text-white">
                                    <input type="submit" />
                                </div>
                            </form>
                            <h3 className="my-2 font-medium">Or</h3>
                            <button className="flex flex-row justify-center items-center text-white bg-blue-400 font-semibold gap-2 rounded-md border px-6 py-3 my-2">
                                <span>
                                    <FcGoogle />
                                </span>
                                Login with Google
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </main>
    )
}
