import { createRouter } from "next-connect"
import prisma from "../../../lib/prisma"

const apiRoute = createRouter({
    onNoMatch(req, res) {
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` })
    },
})
    .get(async (req, res) => {
        try {
            const getAllRumahSakit = await prisma.rumah_sakit.findMany({
                include: {
                    klinik: true,
                },
            })
            return res.status(200).json({
                status: "success",
                data: getAllRumahSakit,
            })
        } catch (error) {
            return res.status(404).json({ status: error.status })
        }
    })
    .post(async (req, res) => {
        const { nama, alamat, pinpoint, nomor_telepon } = req.body
        try {
            const createRumahSakit = await prisma.rumah_sakit.create({
                data: {
                    nama: nama,
                    alamat: alamat,
                    pinpoint: pinpoint,
                    nomor_telepon: nomor_telepon,
                    logo: "AAAA",
                },
            })
            return res.status(200).json({
                status: "success",
                data: createRumahSakit,
            })
        } catch (error) {
            return res.status(500).json({ status: error.message })
        }
    })

export default apiRoute.handler()
export const config = {
    api: {
        bodyParser: true, // Disallow body parsing, consume as stream
    },
}
