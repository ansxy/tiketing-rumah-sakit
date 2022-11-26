export async function FetchDokter({ id }) {
    const res = await fetch(`http://localhost:3000/api/user/dokter/${id}`)

    if (!res.ok) {
        console.log("error getting data")
    }
    if (res.ok) {
        return res.json()
    }
}
