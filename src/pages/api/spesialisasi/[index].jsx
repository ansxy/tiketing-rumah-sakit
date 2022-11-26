import { createRouter } from "next-connect"
import prisma from "../../../lib/prisma"

const apiRoute = createRouter({
    onNoMatch(req, res) {
        res.status(405).json({
            error: `Method '${req.method}' Not Allowed`,
        })
    },
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

apiRoute.get('/api/spesialisasi/all',async (req,res) => {
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

apiRoute.get('/api/spesialisasi/:index', async (req,res) => {
    const {index} = req.query
    try {
        const result = await prisma.spesialis.findMany({
            where : {
                name : {
                    contains : index,
                    mode : 'insensitive'
                }
            }
        })
        return res.status(200).json({
            status : 'success',
            data : result
        })
    } catch (err) {
        return res.status(500).json({
            status : err.message
        })
    }
})
export default apiRoute.handler()
export const config = {
    api: {
        bodyParser: true, // Disallow body parsing, consume as stream
    },
}
