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
})
    .get(async (req, res) => {
        try {
            const getAllDokter = await prisma.dokter.findMany({
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
                data: getAllDokter,
            })
        } catch (error) {
            return res.status(404).json({
                status: error.message,
            })
        }
    })
    .post(async (req, res) => {
        // TODO : Put rumah_sakitid to params
        const { nama, klinikId } = req.body
        try {
            const createKlinik = await prisma.klinik.create({
                data: {
                    nama: nama,
                    rumah_sakitid: rumah_sakitid,
                },
            })
            return res.status(200).json({
                status: "success",
                data: createKlinik,
            })
        } catch (error) {
            return res.status(404).json({ status: error.message })
        }
    })
    .use(uploadMiddleware)

export default apiRoute.handler()
export const config = {
    api: {
        bodyParser: true, // Disallow body parsing, consume as stream
    },
}
