export async function FetchDokters() {
    const res = await fetch("/api/user/dokter/")

    if (!res.ok) {
        console.log("error getting data")
    }
    if (res.ok) {
        return res.json()
    }
}
