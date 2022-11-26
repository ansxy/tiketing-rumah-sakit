export async function FetchDokters() {
    const res = await fetch(`http://localhost:3000/api/user/dokter/`)

    if (!res.ok) {
        console.log("error getting data")
    }
    if (res.ok) {
        return res.json()
    }
}
