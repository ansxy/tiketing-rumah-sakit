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
    .post(async (req, res) => {
        // TODO : Put rumah_sakitid to params
        const { nama, klinikId } = req.body
        // const {file} = req.file

        try {
            const createDokter = await prisma.dokter.create({
                data: {
                    nama: nama,
                    klinikid: klinikId,
                    foto: "AAAA",
                },
            })
            return res.status(200).json({
                status: "success",
                data: createDokter,
            })
        } catch (error) {
            return res.status(404).json({ status: error.message })
        }
    })
    .use(uploadMiddleware)
apiRoute.get('/api/user/dokter/all',async(req,res) => {
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
apiRoute.get('/api/user/dokter/:index',async( req,res) => {
    const {index} = req.query
    try {
        const result = await prisma.dokter.findMany({
            where : {
                OR : [
                  {
                    nama : {
                        contains : index,
                        mode: 'insensitive',
                  }  
                },
                {
                    id : {
                        contains : index,
                        mode : 'insensitive',
                    }
                }
                ],
        }
        })
        return res.status(200).json({
            status : 'success',
            data : result
        })
    } catch (error) {
        return res.status(404).json({
            status : error.message,
        })
    }
})
export default apiRoute.handler()
export const config = {
    api: {
        bodyParser: true, // Disallow body parsing, consume as stream
    },
}
