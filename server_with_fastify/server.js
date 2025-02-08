import Fastify from "fastify";
import fastifyView from "@fastify/view";
import fastifyPostgres from "@fastify/postgres";
import fastifyFormbody from "@fastify/formbody";
import handlebars from "handlebars";
import fastifyMultipart from "@fastify/multipart";
import multer from "fastify-multer";
import fs from "fs";
import "dotenv/config";
import Database from "./database/database.js";
import path from 'path';
import jsdom from 'jsdom';
import { mapValueFieldNames } from "sequelize/lib/utils";
import { and, where } from "sequelize";
const { JSDOM } = jsdom;
const upload = multer({ dest: "images/"});
let imageUpdate;
let imageBufferUpdated;
let nameImageDirUpdated;
let nameImageDir;
let elementarySchoolUpdated;
let schoolYearUpdated;
let displiceUpdated;
let subjetcUpdated;
let questionUpdated;
let answerUpdated;
let alternativeAUpdated;
let alternativeBUpdated;
let alternativeCUpdated;
let alternativeDUpdated;

const fastify = Fastify({
  logger: false,
});
fastify.register(fastifyMultipart);

fastify.register(fastifyView, {
  engine: { handlebars: handlebars },
  viewExt: "handlebars",
  propertyName: "render",
});

fastify.register(fastifyPostgres, {
  connectionString: process.env.URL,
});

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./images");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname);
//     console.log(file.fieldname)
//   },
// });

// const upload = multer({ storage: storage });

// JSDOM.fromFile('templates/editar.handlebars', { runScripts: 'dangerously', resources: 'usable' }).then((dom)=>{
//   const { document } = dom.window
//   const demo = document.querySelector('#btn');
//   const file = document.querySelector('#file')
//   const image = document.querySelector('#imageQuestion');
//   const demo2 = document.querySelector('#demo2').textContent = 'ola';
  
//   console.log(file.files[0]);
//   image.src = URL.createObjectURL();
//   image.src = `data:image/jpeg;base64,${imageUpdate!= undefined? imageUpdate : result.image}`;
// })

fastify.register(fastifyFormbody);


fastify.get("/questoes", async (req, reply) => {
  try {
    await Database.findAll().then((result) => {
      return reply.send(result);
    });
  } catch (err) {
    console.log(err);
    return reply.send(err);
  }
});

fastify.get("/", async (req, reply)=>{
  try {
    let nameImage = [];
   await Database.findAll().then((result) => {
      result.map((element) => {
        const imageBase64 = element["dataValues"]["image"].toString("base64");
        element["dataValues"]["image"] = imageBase64;
        nameImage.push(element['dataValues']['nameImageDir']);
      });
      console.log(result.length);
    return reply.render("templates/home", { question: result, length: result.length });
    });
    console.log('nameImage', nameImage)
    fs.readdir('./images', {withFileTypes: true}, (err, files)=>{
      files.map((el)=>{
        if(nameImage.includes(el.name)){
          console.log('existe', el.name)
        }else{
          fs.unlinkSync('./images/' + el.name);
        }
      })
    })
    
  } catch (err) {
    console.log(err);
    return reply.send(err);
  }
});

// ===========================   ROTAS MATEMÁTICA ========================

fastify.get("/matematica/1ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Matemática', schoolYear: '1º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});

fastify.get("/matematica/2ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Matemática', schoolYear: '2º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});

fastify.get("/matematica/3ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Matemática', schoolYear: '3º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});
fastify.get("/matematica/4ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Matemática', schoolYear: '4º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});

fastify.get("/matematica/5ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Matemática', schoolYear: '5º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});

fastify.get("/matematica/6ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Matemática', schoolYear: '6º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});

fastify.get("/matematica/7ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Matemática', schoolYear: '7º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});

fastify.get("/matematica/8ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Matemática', schoolYear: '8º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});

fastify.get("/matematica/9ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Matemática', schoolYear: '9º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});

// ROTA APP
fastify.get("/questoes/matematica", async (req, reply) => {
  try{
    await Database.findAll({where: { displice: 'Matemática'}}).then((result) => {
       return reply.send(result);
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});


// =========================== ROTAS CIÊNCIAS ===============================

fastify.get("/ciencias/1ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Ciências da Natureza', schoolYear: '1º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});

fastify.get("/ciencias/2ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Ciências da Natureza', schoolYear: '2º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});

fastify.get("/ciencias/3ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Ciências da Natureza', schoolYear: '3º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});

fastify.get("/ciencias/4ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Ciências da Natureza', schoolYear: '4º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});

fastify.get("/ciencias/5ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Ciências da Natureza', schoolYear: '5º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});
fastify.get("/ciencias/6ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Ciências da Natureza', schoolYear: '6º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});
fastify.get("/ciencias/7ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Ciências da Natureza', schoolYear: '7º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});
fastify.get("/ciencias/8ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Ciências da Natureza', schoolYear: '8º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});
fastify.get("/ciencias/9ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Ciências da Natureza', schoolYear: '9º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});

// ROTA APP
fastify.get("/questoes/ciencias", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Ciências da Natureza'}}).then((result) => {
       return reply.send(result);
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});

// =========================== ROTAS PORTUGUÊS ===============================
fastify.get("/portugues/1ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Português', schoolYear: '1º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});
fastify.get("/portugues/2ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Português', schoolYear: '2º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});
fastify.get("/portugues/3ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Português', schoolYear: '3º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});
fastify.get("/portugues/4ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Português', schoolYear: '4º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});
fastify.get("/portugues/5ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Português', schoolYear: '5º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});
fastify.get("/portugues/6ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Português', schoolYear: '6º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});
fastify.get("/portugues/7ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Português', schoolYear: '7º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});
fastify.get("/portugues/8ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Português', schoolYear: '8º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});
fastify.get("/portugues/9ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Português', schoolYear: '9º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});
fastify.get("/questoes/portugues", async (req, reply) => {
  try{
    await Database.findAll({where: { displice: 'Postuguês'}}).then((result) => {
       return reply.send(result);
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});

// ============================== ROTAS GEOGRAFIA ===============================

fastify.get("/geografia/1ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Geografia', schoolYear: '1º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});
fastify.get("/geografia/2ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Geografia', schoolYear: '2º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});
fastify.get("/geografia/3ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Geografia', schoolYear: '3º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});
fastify.get("/geografia/4ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Geografia', schoolYear: '4º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});
fastify.get("/geografia/5ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Geografia', schoolYear: '5º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});
fastify.get("/geografia/6ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Geografia', schoolYear: '6º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});
fastify.get("/geografia/7ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Geografia', schoolYear: '7º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});
fastify.get("/geografia/8ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Geografia', schoolYear: '8º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});

fastify.get("/geografia/9ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Geografia', schoolYear: '9º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});
fastify.get("/questoes/geografia", async (req, reply) => {
  try{
    await Database.findAll({where: { displice: 'Geografia'}}).then((result) => {
       return reply.send(result);
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});

// ============================== ROTAS HISTÓRIA ===============================
fastify.get("/historia/1ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'História', schoolYear: '1º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});
fastify.get("/historia/2ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'História', schoolYear: '2º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});
fastify.get("/historia/3ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'História', schoolYear: '3º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});
fastify.get("/historia/4ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'História', schoolYear: '4º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});
fastify.get("/historia/5ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'História', schoolYear: '5º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});
fastify.get("/historia/6ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'História', schoolYear: '6º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});
fastify.get("/historia/7ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'História', schoolYear: '7º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});
fastify.get("/historia/8ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'História', schoolYear: '8º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});
fastify.get("/historia/9ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'História', schoolYear: '9º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});

// ROTA APP
fastify.get("/questoes/historia", async (req, reply) => {
  try{
    await Database.findAll({where: { displice: 'História'}}).then((result) => {
       return reply.send(result);
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});


// =============================== ROTAS ARTES ===================================

fastify.get("/artes/1ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Artes', schoolYear: '1º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});

fastify.get("/artes/2ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Artes', schoolYear: '2º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});

fastify.get("/artes/3ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Artes', schoolYear: '3º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});

fastify.get("/artes/4ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Artes', schoolYear: '4º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});

fastify.get("/artes/5ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Artes', schoolYear: '5º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});

fastify.get("/artes/6ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Artes', schoolYear: '6º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});

fastify.get("/artes/7ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Artes', schoolYear: '7º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});

fastify.get("/artes/8ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Artes', schoolYear: '8º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});
fastify.get("/artes/9ano", async (req, reply) => {
  try{
    await Database.findAll({where: {displice: 'Artes', schoolYear: '9º Ano'}}).then((result) => {
       result.map((element)=>{
         const imageBase64 = element["dataValues"]["image"].toString("base64");
         element["dataValues"]["image"] = imageBase64;

       })
       return reply.render('templates/disciplines', {question: result});
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});

fastify.get("/questoes/artes", async (req, reply) => {
  try{
    await Database.findAll({where: { displice: 'Artes'}}).then((result) => {
       return reply.send(result);
    });
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});

// =============================== ROTAS INICIALES ===============================
fastify.get("/registrar", async (req, reply) => {
  return await reply.render("templates/cadastrar");
});

fastify.post("/cadastrar",{ preHandler: upload.single("image") }, async function (req, reply) {
    let image;
    if (req.file.filename == undefined) {
      req.body.image = 'sem imagem';
      image = req.body.image;
    } else {
      image = fs.readFileSync("./images/" + req.file.filename);
    }

    try {
      await Database.create({
        elementarySchool: req.body.elementarySchool,
        schoolYear: req.body.schoolYear,
        displice: req.body.displice,
        subject: req.body.subject,
        question: req.body.question,
        image: image,
        nameImageDir: req.file.filename,
        answer: req.body.answer,
        alternativeA: req.body.altA,
        alternativeB: req.body.altB,
        alternativeC: req.body.altC,
        alternativeD: req.body.altD,
      });
      console.log("Cadastrado com sucesso");
      return reply.redirect("/");
    } catch (err) {
      console.log(err);
      return reply.send(err);
    }
  }
);

fastify.post("/editar/upload-image/update/:id", { preHandler: upload.single("imageUpdate") }, async (req, reply)=> {
  try{
    imageBufferUpdated = fs.readFileSync("./images/" + req.file.filename);
    const imageBase64 = imageBufferUpdated.toString('base64');
    imageUpdate = imageBase64;

    nameImageDirUpdated = req.file.filename;
  
    reply.redirect(`/editar-questao/${req.params.id}`)
  }catch(err){
    console.log(err);
    return reply.send(err);
  }
});

fastify.post("/editar",{ preHandler: upload.single("image") },async (req, reply) => {
    try {
      const result = await Database.findByPk(req.body.id);
      const imageBuffer = result["dataValues"]["image"];
      const nameImageDir = result["dataValues"]["nameImageDir"];
      let image;
      let nameImageUpdated;
      if (req.file.filename == undefined && imageUpdate != undefined) {
        image = imageBufferUpdated;
        nameImageUpdated = nameImageDirUpdated;

        fs.readdir('./images', {withFileTypes: true},(err, files)=>{
          for(var file of files){
            if( file.name == nameImageDir){
              fs.rename("./images/" + file.name, "./images/" + nameImageDirUpdated, (err) => {
                if (err) {
                  console.log("Erro ao deletar imagem no diretório:", err);
                  console.log('Image Atualizada!')
                }
              });
            }
          }
        });
        fs.readFileSync("./images/" + nameImageDirUpdated);
      } else {
        //if (req.file.filename == undefined && imageUpdate == undefined) 
        req.body.image = imageBuffer;
        image = req.body.image;
        nameImageUpdated = nameImageDir;
      }
      Database.update({
          elementarySchool: req.body.elementarySchool,
          schoolYear: req.body.schoolYear,
          displice: req.body.displice,
          subject: req.body.subject,
          question: req.body.question,
          image: image,
          nameImageDir: nameImageUpdated,
          answer: req.body.answer,
          alternativeA: req.body.altA,
          alternativeB: req.body.altB,
          alternativeC: req.body.altC,
          alternativeD: req.body.altD},
        { where: { id: req.body.id } });
      reply.redirect("/");
    } catch (err) {
      console.log(err);
      return reply.send(err);
    } 
  }
);

fastify.get("/deletar/:id/:nameImageDir",{ preHandler: upload.single("image") },
  (req, reply) => {
    console.log(req.params.nameImageDir)
    try {
      if(req.params.nameImageDir != ''){
        fs.unlinkSync("./images/" + req.params.nameImageDir, (err) => {
          if (err) {
            console.log("Erro ao deletar imagem no diretório:", err);
          }
        });
        Database.destroy({ where: { id: req.params.id } });
        console.log("Deletado do DB com sucesso!");
        reply.redirect("/");
      }else{
        Database.destroy({ where: { id: req.params.id } });
        console.log("Questão sem imagem deletada do DB com sucesso!");
        reply.redirect("/");
      }
    } catch (err) {
      console.log(err);
      return reply.send(err);
    }
  }
);

fastify.get("/editar-questao/:id",{ preHandler: upload.single("image") },(req, reply) => {
    try {
     //console.log('req.body.question', req.body.question);
      Database.findByPk(req.params.id).then((result) => {
        nameImageDir = result['dataValues']['nameImageDir'];
        console.log('nameImageDir', nameImageDir);
        const imageBase64 = result["dataValues"]["image"].toString("base64");
        result["dataValues"]["image"] = imageBase64;
        questionUpdated = result['dataValues']['question'];
        reply.render("templates/editar", {
          id: result.id,
          elementarySchool: elementarySchoolUpdated != undefined ? elementarySchoolUpdated : result.elementarySchool,
          schoolYear: schoolYearUpdated != undefined ? schoolYearUpdated : result.schoolYear,
          displice: displiceUpdated != undefined ? displiceUpdated : result.displice,
          subject: subjetcUpdated != undefined ? subjetcUpdated : result.subject,
          question: result.question,
          image: imageUpdate != undefined ? `data:image/jpeg;base64,${imageUpdate}` : `data:image/jpeg;base64,${result.image}`,
          nameImageDir: nameImageDirUpdated != undefined ? nameImageDirUpdated : result.nameImageDir,
          answer: answerUpdated != undefined ? answerUpdated : result.answer,
          alternativeA: alternativeAUpdated != undefined ? alternativeAUpdated : result.alternativeA,
          alternativeB: alternativeBUpdated != undefined ? alternativeBUpdated : result.alternativeB,
          alternativeC: alternativeCUpdated != undefined ? alternativeCUpdated : result.alternativeC,
          alternativeD: alternativeDUpdated != undefined ? alternativeDUpdated : result.alternativeD,
        });
        
      });
      // fs.unlinkSync("./images/" + req.file.filename, (err) => {
      //   if (err) {
      //     console.log("Erro ao deletar imagem no diretório:", err);
      //   }
      // });
    } catch (err) {
      console.log(err);
      return reply.send(err);
    }
  }
);

fastify.listen(
  {
    port: 8080,
    host: "0.0.0.0", // Use this if you want to expose the server publicly
  },
  (err) => {
    if (err) throw err;
    console.log(`server listening on ${fastify.server.address().port}`);
  }
);
