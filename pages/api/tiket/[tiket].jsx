import {createRouter} from 'next-connect'
import prisma from '../../../lib/prisma';

const apiRoute =  createRouter({
    onNoMatch(req,res){
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    }
}).get(async (req,res) => {
  const {tiket} = req.query
  try {
    const countJam = await prisma.jam_praktek.findMany({
      where : {
        id : tiket
      },
      include : {
        _count : {
          select : {tiket : true},
        },
      }
    })
    return res.status(200).json({countJam})
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}).post(async(req,res)=> {
  const {tiket} = req.query
  try {
    const countJam = await prisma.jam_praktek.findMany({
      where : {
        id : tiket
      },
      include : {
        _count : {
          select : {tiket : true},
        },
      }
    })
    const createTiket = await prisma.tiket.create({
      data : {
        jam_praktekId : tiket,
        create_time : "2022-11-25T13:15:30.000Z"
      }  
    })
    return res.status(200).json({
      status : 'success',
      urutan : countJam[0]._count.tiket + 1,
      waktu : createTiket
    })
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
})

export default apiRoute.handler();
export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};