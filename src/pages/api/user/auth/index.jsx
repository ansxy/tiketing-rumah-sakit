import { createRouter } from "next-connect";
import prisma from "../../../../lib/prisma";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const maxAgeSession = 3 * 24 * 60 * 60;
const createWebToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_KEY, {
    expiresIn: maxAgeSession,
  });
};

const apiRoute = createRouter({
    onNoMatch(req,res) {
        return res.status(405).json({
            error : `Method ${req.method} not Allowed`
        })
    }
}).get(async (req,res) => {
    const {email , password} = req.body
    try{
        const verifiyLogin = await prisma.pasien.findFirst({
            where : {
                email : email
            },
        });
        if(!verifiyLogin) {
            throw new Error ("Invalid Email Or Password")
        } const validate = await bcrypt.compare(password,verifiyLogin.password) 
        if(!validate) {
            throw new Error ("Invalid Email Or Password")
        }else{
            const token = createWebToken(verifiyLogin.id)
            res.cookie("jwt",token, {
                httpOnly:true,
                maxAge: maxAgeSession * 1000
            })
            return res.status(200).json({
                status : "success",
            })
        }
    } catch(e){
        return res.status(500).json({
            error : e.message
        })
    }
}).post(async(req,res) => {
    const {nama,email,password} = req.body;
    try{
        const verifiyEmail = await prisma.pasien.findFirst({
            where : {
                email : email,
            }
        })
        if(verifiyEmail) {
            return res.status(409).json({
                status : "Email Already Exists",
            })
        }else {
            const pasien = await prisma.pasien.create({
                data : {
                    nama : nama,
                    email : email,
                    password : bcrypt.hashSync(password,10)
                }
            })
            return res.status(200).json({
                status : "Success",
                data : pasien
            })
        }
    } catch(error) {
        return res.status(500).json({status : error.message})
    }
});


export default apiRoute.handler();
export const config = {
  api: {
    bodyParser: true, // Disallow body parsing, consume as stream
  },
};