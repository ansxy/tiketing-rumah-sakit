import {createRouter} from 'next-connect'
import prisma from '../../../lib/prisma';
var moment = require('moment');

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
  const {index} = req.query
  // const {email} = req.body
  console.log(req.body)

  try {
    const countJam = await prisma.jam_praktek.findMany({
      where : {
        id : index
      },
      include : {
        _count : {
          select : {tiket : true},
        },
      }
    })
    const createTiket = await prisma.tiket.create({
      data : {
        jam_praktekId : index,
        emailId : email,
        create_time : moment().toDate()
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