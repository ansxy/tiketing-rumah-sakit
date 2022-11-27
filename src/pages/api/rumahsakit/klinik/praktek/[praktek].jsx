import { createRouter } from "next-connect"
import prisma from "../../../../../lib/prisma"

const apiRoute = createRouter({
    onNoMatch(req, res) {
        res.status(405).json({
            error: `Method '${req.method}' Not Allowed`,
        })
    },
})
    .post(async (req, res) => {
        const { hari } = req.body
        const { praktek } = req.query
        try {
            const createHariPraktek = await prisma.dokter_hari_praktek.create({
                data: {
                    dokterid: praktek,
                    hari: hari,
                },
            })
            return res.status(200).json({
                status: "success",
                data: createHariPraktek,
            })
        } catch (error) {
            return res.status(404).json({ status: error.message })
        }
    })
    .get(async (req, res) => {
        const {praktek} = req.query
        try {
            const getHariPraktekDokter =
                await prisma.dokter_hari_praktek.findMany({
                    where : {
                        id : praktek 
                    },
                    include: {
                        jam_praktek: true,
                    },
                })
            return res.status(200).json(getHariPraktekDokter)
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
