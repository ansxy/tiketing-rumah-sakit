import { createRouter } from "next-connect";
import prisma from "../../../../lib/prisma";

const apiRoute = createRouter({
    onNoMatch(req,res) {
        res.status(405).json({
            error : `Method '${req.method}' Not Allowed`
        })
    },
}).get(async (req, res) => {
    const {rumahsakit} = req.query
    try {
        const getAllKlinik = await prisma.klinik.findMany({
            where : {rumah_sakitid : rumahsakit}
        })
        return res.status(200).json({
            status : "success",
            data : getAllKlinik
        })
    } catch (error) {
        return res.status(404).json({
            status : error.message
        })
    }
}).post(async (req,res) => {
    // TODO : Put rumah_sakitid to params
    const {nama,rumah_sakitid} = req.body
    try {
        const createKlinik = await prisma.klinik.create({
            data : {
                nama : nama,
                rumah_sakitid : rumah_sakitid
            }
        })
        return res.status(200).json({
            status : "success",
            data : createKlinik
        })
    } catch (error) {
        return res.status(404).json({ status : error.message})
    }
})

export default apiRoute.handler();
export const config = {
  api: {
    bodyParser: true, // Disallow body parsing, consume as stream
  },
};
