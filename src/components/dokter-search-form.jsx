"use client"
import { withRouter } from "next/router"
import { useState } from "react"
import SelectSearch from "react-select-search"
import "react-select-search/style.css"

export default function DokterSearchForm() {
    const [nameSearch, setNameSearch] = useState()
    const [spesialis, setSpesialis] = useState()
    const [rumahsakit, setRumahSakit] = useState()
    const [dataNama, setDataNama] = useState()

    const getSpesialis = ({ query }) => {
        return new Promise((resolve, reject) => {
            fetch("/api/spesialisasi/all")
                .then((res) => res.json())
                .then(({ data }) => {
                    resolve(
                        data.map(({ name, i }) => ({
                            value: name,
                            name: name,
                        })),
                    )
                })
                .catch(reject)
        })
    }

    const getDokter = ({ query }) => {
        return new Promise((resolve, reject) => {
            fetch(`/api/user/dokter/all`)
                .then((res) => res.json())
                .then(({ data }) => {
                    resolve(
                        data.map(({ nama, i }) => ({
                            value: nama,
                            name: nama,
                        })),
                    )
                })
                .catch(reject)
        })
    }

    const getRumahSakit = ({ query }) => {
        return new Promise((resolve, reject) => {
            fetch(`/api/rumahsakit/`)
                .then((res) => res.json())
                .then(({ data }) => {
                    resolve(
                        data.map(({ nama, i }) => ({
                            value: nama,
                            name: nama,
                        })),
                    )
                })
                .catch(reject)
        })
    }

    const handleNameChange = (e) => {
        setDataNama(e)
    }

    const handleSpesialisChange = (e) => {
        setSpesialis(e)
    }

    const handleRumahSakitChange = (e) => {
        setRumahSakit(e)
    }

    return (
        <form className="flex flex-col shadow-lg px-12 py-6 gap-3 ">
            <div className="flex flex-col w-full">
                <label htmlFor="nama-dokter" className="font-medium">
                    Nama Dokter
                </label>
                <SelectSearch
                    search={true}
                    value={dataNama}
                    placeholder="Cari Dokter"
                    getOptions={getDokter}
                    onChange={handleNameChange}
                    styles={{
                        container: {
                            width: "100%",
                            borderColor: "black",
                            color: "white",
                        },
                    }}
                />
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="pilih-spesialis" className="font-medium">
                    Pilih Spesialis
                </label>
                <SelectSearch
                    search={true}
                    value={spesialis}
                    placeholder="Cari Spesialisasi"
                    getOptions={getSpesialis}
                    onChange={handleSpesialisChange}
                />
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="pilih-rumah-sakit" className="font-medium">
                    Pilih Rumah Sakit
                </label>
                <SelectSearch
                    search={true}
                    value={rumahsakit}
                    placeholder="Cari Rumah Sakit"
                    getOptions={getRumahSakit}
                    onChange={handleRumahSakitChange}
                />
            </div>
            <input
                type="submit"
                className="bg-healtick-darkgreen text-white p-4 my-4 rounded-2xl font-semibold"
            />
        </form>
    )
}
