"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import SelectSearch from "react-select-search";
import 'react-select-search/style.css'

export default function DokterSearchForm() {
    const [nameSearch , setNameSearch] = useState()
    const [spesialis , setSpesialis] = useState()
    const [dataSpesialis,setDataSpesialis] = useState()
    const [dataNama , setDataNama] = useState()

    const getSpesialis = ({query}) => {
        return new Promise((resolve,reject) => {
            fetch('/api/spesialisasi/all').then(res => res.json()).then(({data})=> {
                resolve(data.map(({name,i})=> ({
                    value : name , name : name 
                }) ))
            }).catch(reject)
        })
    }

    const getDokter =  ({query}) => {
        return new Promise((resolve,reject) => {
            fetch(`/api/user/dokter/all`).then(res => res.json()).then(({data})=> {
                resolve(data.map(({nama,i})=> ({
                    value : nama , name : nama 
                }) ))
            }).catch(reject)
        })
    }



    const handleNameChange = (e) => {
        setNameSearch(e)
    }

    const handleSpesialisChange = (e) => {
        setSpesialis(e)
    }

    useEffect(() => {
        const getData = async() => {
            const res = await axios.get(`/api/spesialisasi/${spesialis}`)
            setDataSpesialis(res)
        }
        getData()
    },[spesialis]) 

    useEffect(() => {
        const getData = async() => {
            const res = await axios.get(`/api/user/dokter/${nameSearch}`)
            setDataNama(res)
        }
        getData()
    }, [nameSearch])

    return (
        <form className="flex flex-col shadow-lg px-12 py-6 gap-3">
            <div className="flex flex-col">
                <label htmlFor="nama-dokter" className="font-medium">
                    Nama Dokter
                </label>
                <SelectSearch search={true} value={dataNama} placeholder="Cari Dokter   " getOptions={getDokter} onChange={handleNameChange}/>
            </div>
            <div className="flex flex-col ">
                <label htmlFor="pilih-spesialis" className="font-medium">
                    Pilih Spesialis
                </label>
                <SelectSearch search={true} value={spesialis} placeholder="Cari Spesialisasi" getOptions={getSpesialis} onChange={handleSpesialisChange}/>

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
