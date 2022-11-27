import { createRouter } from "next-connect"
import prisma from "../../../../lib/prisma"

const apiRoute = createRouter({
    onNoMatch(req, res) {
        res.status(405).json({
            error: `Method '${req.method}' Not Allowed`,
        })
    },
})
    .post(async (req, res) => {
        const { spesiliasasi } = req.body
        const { dokter } = req.query
        try {
            const createSpesialisDokter =
                await prisma.spesialisasi_dokter.create({
                    data: {
                        dokterId: dokter,
                        spesialisasiId: spesialisasi,
                    },
                })
            return res.status(200).json({
                status: "success",
                data: createSpesialisDokter,
            })
        } catch (error) {
            return res.status(404).json({ status: error.message })
        }
    })
    .get(async (req, res) => {
        const { id } = req.query
        try {
            const getDokterBySpesialisId = await prisma.dokter.findMany({
                where: {
                    id: id,
                },
                include: {
                    klinik: true,
                },
            })
            return res.status(200).json(getDokterBySpesialisId)
        } catch (error) {
            res.status(404).json({ status: error.message })
        }
    })
export default apiRoute.handler()
export const config = {
    api: {
        bodyParser: true, // Disallow body parsing, consume as stream
    },
}
