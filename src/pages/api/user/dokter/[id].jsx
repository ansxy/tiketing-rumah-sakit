import multer from "multer"
import { createRouter } from "next-connect"
import prisma from "../../../../lib/prisma"

const upload = multer({
    storage: multer.diskStorage({
        destination: "./public/image",
        filename: (req, file, cb) => cb(null, file.originalname),
    }),
})

const uploadMiddleware = upload.single("file")

const apiRoute = createRouter({
    onNoMatch(req, res) {
        res.status(405).json({
            error: `Method '${req.method}' Not Allowed`,
        })
    },
}).get(async (req, res) => {
    const { id } = req.query

    try {
        const getDokter = await prisma.dokter.findUnique({
            where: { id: id },
            include: {
                klinik: {
                    include: {
                        rumah_sakit: {
                            select: {
                                nama: true,
                            },
                        },
                    },
                },
            },
        })
        return res.status(200).json({
            status: "success",
            data: getDokter,
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
