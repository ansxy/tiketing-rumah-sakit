"use client"

import { useState } from "react"

export default function Page({ params }) {
    const [session, setSession] = useState(false)

    return (
        <main className="w-full h-screen flex flex-col justify-center px-16 gap-4">
            <h1 className="text-2xl font-bold">Buat Janji</h1>
            <section className="flex flex-row w-full">
                <aside className="shadow-md flex-col justify-center items-center px-6 py-12 whitespace-nowrap">
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-lg font-semibold">Info Dokter</h2>
                        <div className="w-24 h-24 rounded-full bg-slate-500 my-4"></div>
                        <h3>Nama Dokter</h3>
                        <p>Spesialis</p>
                    </div>
                    <div className="">
                        <h2 className="text-lg font-semibold">
                            Info Rumah Sakit
                        </h2>
                        <div className="w-24 h-24 rounded-full bg-slate-500 my-4"></div>
                        <h3>Nama Rumah Sakit</h3>
                        <p>Alamat</p>
                    </div>
                </aside>
                <div className="w-full">
                    {session ? (
                        <>
                            <button>Tambah Keluarga</button>
                            <form></form>
                        </>
                    ) : (
                        <>
                            <form className="flex flex-col">
                                <div className="flex flex-col">
                                    <label htmlFor="email">E-mail</label>
                                    <input
                                        name="email"
                                        className="border"
                                    ></input>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        name="password"
                                        className="border"
                                    ></input>
                                </div>
                            </form>
                            <h3>Or</h3>
                            <button className="border">
                                Login with Google
                            </button>
                        </>
                    )}
                </div>
            </section>
        </main>
    )
}
