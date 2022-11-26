export async function FetchDokter({ id }) {
    const res = await fetch(`/api/user/dokter/${id}`)

    if (!res.ok) {
        console.log("error getting data")
    }
    if (res.ok) {
        return res.json()
    }
}
