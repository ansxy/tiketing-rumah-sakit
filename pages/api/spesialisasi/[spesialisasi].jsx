import { createRouter } from "next-connect"
import prisma from "../../../lib/prisma"

const apiRoute = createRouter({
    onNoMatch(req, res) {
        res.status(405).json({
            error: `Method '${req.method}' Not Allowed`,
        })
    },
})
    .get(async (req, res) => {
        try {
            const getSpesialis = await prisma.spesialis.findMany()
            return res.status(200).json({
                status: "success",
                data: getSpesialis,
            })
        } catch (error) {
            return res.status(404).json({
                status: error.message,
            })
        }
    })
    .post(async (req, res) => {
        const { nama } = req.body
        try {
            const createSpesialis = await prisma.spesialis.create({
                data: {
                    name: nama,
                },
            })
            return res.status(200).json({
                status: "success",
                data: createSpesialis,
            })
        } catch (error) {
            return res.status(404).json({ status: error.message })
        }
    })

export default apiRoute.handler()
export const config = {
    api: {
        bodyParser: true, // Disallow body parsing, consume as stream
    },
}
