import { createRouter } from "next-connect"
import prisma from "../../../../lib/prisma"

const apiRoute = createRouter({
    onNoMatch(req, res) {
        res.status(405).json({
            error: `Method '${req.method}' Not Allowed`,
        })
    },
}).get(async (req, res) => {
    const { id } = req.query

    try {
        const getKlinik = await prisma.klinik.findUnique({
            where: { id: id },
        })
        return res.status(200).json({
            status: "success",
            data: getKlinik,
        })
    } catch (error) {
        return res.status(404).json({
            status: error.message,
        })
    }
})

export default apiRoute.handler()
export const config = {
    api: {
        bodyParser: true, // Disallow body parsing, consume as stream
    },
}
