// import Fastify from "fastify";
// import fastifyView from "@fastify/view";
// import fastifyMultipart from "@fastify/multipart";
// import handlebars from "handlebars";
// import fastifyPostgres from "@fastify/postgres";
import Database from "../database/database.js";
///let amountQuestions;
//let discipline;
//let schoolYear;

const renderCiencias = async (req, reply, discipline, schoolYear) => {
  try {
    await Database.findAll({
      where: { displice: discipline, schoolYear: schoolYear },
    }).then((result) => {
      result.map((element) => {
        const imageBase64 = element["dataValues"]["image"].toString("base64");
        element["dataValues"]["image"] = imageBase64;
        discipline = element["dataValues"]["displice"];
        schoolYear = element["dataValues"]["schoolYear"];
        //amountQuestions = result.length;
      });

      return reply.render("templates/disciplines", {
        question: result,
        amount: result.length,
        discipline: discipline,
        schoolYear: schoolYear,
      });
    });
  } catch (err) {
    console.log(err);
    return reply.send(err);
  }
};

export const ciencias_1ano = async (req, reply) =>
  renderCiencias(req, reply, "Ciências", "1º Ano");
export const ciencias_2ano = async (req, reply) =>
  renderCiencias(req, reply, "Ciências", "2º Ano");
export const ciencias_3ano = async (req, reply) =>
  renderCiencias(req, reply, "Ciências", "3º Ano");
export const ciencias_4ano = async (req, reply) =>
  renderCiencias(req, reply, "Ciências", "4º Ano");
export const ciencias_5ano = async (req, reply) =>
  renderCiencias(req, reply, "Ciências", "5º Ano");
export const ciencias_6ano = async (req, reply) =>
  renderCiencias(req, reply, "Ciências", "6º Ano");
export const ciencias_7ano = async (req, reply) =>
  renderCiencias(req, reply, "Ciências", "7º Ano");
export const ciencias_8ano = async (req, reply) =>
  renderCiencias(req, reply, "Ciências", "8º Ano");
export const ciencias_9ano = async (req, reply) =>
  renderCiencias(req, reply, "Ciências", "9º Ano");

// export const ciencias_1ano = async (req, reply) => {
//   try {
//     await Database.findAll({
//       where: { displice: "Ciências", schoolYear: "1º Ano" },
//     }).then((result) => {
//       result.map((element) => {
//         const imageBase64 = element["dataValues"]["image"].toString("base64");
//         element["dataValues"]["image"] = imageBase64;
//         discipline = element["dataValues"]["displice"];
//         schoolYear = element["dataValues"]["schoolYear"];
//         amountQuestions = result.length;
//       });

//       return reply.render("templates/disciplines", {
//         question: result,
//         amount: amountQuestions,
//         discipline: discipline,
//         schoolYear: schoolYear,
//       });
//     });
//   } catch (err) {
//     console.log(err);
//     return reply.send(err);
//   }
// };

// export const ciencias_2ano = async (req, reply) => {
//     try {
//       await Database.findAll({
//         where: { displice: "Ciências", schoolYear: "2º Ano" },
//       }).then((result) => {
//         result.map((element) => {
//           const imageBase64 = element["dataValues"]["image"].toString("base64");
//           element["dataValues"]["image"] = imageBase64;
//           discipline = element["dataValues"]["displice"];
//           schoolYear = element["dataValues"]["schoolYear"];
//           amountQuestions = result.length;
//         });

//         return reply.render("templates/disciplines", {
//           question: result,
//           amount: amountQuestions,
//           discipline: discipline,
//           schoolYear: schoolYear,
//         });
//       });
//     } catch (err) {
//       console.log(err);
//       return reply.send(err);
//     }
//   };

//   export const ciencias_3ano = async (req, reply) => {
//     try {
//       await Database.findAll({
//         where: { displice: "Ciências", schoolYear: "3º Ano" },
//       }).then((result) => {
//         result.map((element) => {
//           const imageBase64 = element["dataValues"]["image"].toString("base64");
//           element["dataValues"]["image"] = imageBase64;
//           discipline = element["dataValues"]["displice"];
//           schoolYear = element["dataValues"]["schoolYear"];
//           amountQuestions = result.length;
//         });

//         return reply.render("templates/disciplines", {
//           question: result,
//           amount: amountQuestions,
//           discipline: discipline,
//           schoolYear: schoolYear,
//         });
//       });
//     } catch (err) {
//       console.log(err);
//       return reply.send(err);
//     }
//   };

//   export const ciencias_4ano = async (req, reply) => {
//     try {
//       await Database.findAll({
//         where: { displice: "Ciências", schoolYear: "4º Ano" },
//       }).then((result) => {
//         result.map((element) => {
//           const imageBase64 = element["dataValues"]["image"].toString("base64");
//           element["dataValues"]["image"] = imageBase64;
//           discipline = element["dataValues"]["displice"];
//           schoolYear = element["dataValues"]["schoolYear"];
//           amountQuestions = result.length;
//         });

//         return reply.render("templates/disciplines", {
//           question: result,
//           amount: amountQuestions,
//           discipline: discipline,
//           schoolYear: schoolYear,
//         });
//       });
//     } catch (err) {
//       console.log(err);
//       return reply.send(err);
//     }
//   };

//   export const ciencias_5ano = async (req, reply) => {
//     try {
//       await Database.findAll({
//         where: { displice: "Ciências", schoolYear: "5º Ano" },
//       }).then((result) => {
//         result.map((element) => {
//           const imageBase64 = element["dataValues"]["image"].toString("base64");
//           element["dataValues"]["image"] = imageBase64;
//           discipline = element["dataValues"]["displice"];
//           schoolYear = element["dataValues"]["schoolYear"];
//           amountQuestions = result.length;
//         });

//         return reply.render("templates/disciplines", {
//           question: result,
//           amount: amountQuestions,
//           discipline: discipline,
//           schoolYear: schoolYear,
//         });
//       });
//     } catch (err) {
//       console.log(err);
//       return reply.send(err);
//     }
//   };

//   export const ciencias_6ano = async (req, reply) => {
//     try {
//       await Database.findAll({
//         where: { displice: "Ciências", schoolYear: "6º Ano" },
//       }).then((result) => {
//         result.map((element) => {
//           const imageBase64 = element["dataValues"]["image"].toString("base64");
//           element["dataValues"]["image"] = imageBase64;
//           discipline = element["dataValues"]["displice"];
//           schoolYear = element["dataValues"]["schoolYear"];
//           amountQuestions = result.length;
//         });

//         return reply.render("templates/disciplines", {
//           question: result,
//           amount: amountQuestions,
//           discipline: discipline,
//           schoolYear: schoolYear,
//         });
//       });
//     } catch (err) {
//       console.log(err);
//       return reply.send(err);
//     }
//   };

//   export const ciencias_7ano = async (req, reply) => {
//     try {
//       await Database.findAll({
//         where: { displice: "Ciências", schoolYear: "7º Ano" },
//       }).then((result) => {
//         result.map((element) => {
//           const imageBase64 = element["dataValues"]["image"].toString("base64");
//           element["dataValues"]["image"] = imageBase64;
//           discipline = element["dataValues"]["displice"];
//           schoolYear = element["dataValues"]["schoolYear"];
//           amountQuestions = result.length;
//         });

//         return reply.render("templates/disciplines", {
//           question: result,
//           amount: amountQuestions,
//           discipline: discipline,
//           schoolYear: schoolYear,
//         });
//       });
//     } catch (err) {
//       console.log(err);
//       return reply.send(err);
//     }
//   };

//   export const ciencias_8ano = async (req, reply) => {
//     try {
//       await Database.findAll({
//         where: { displice: "Ciências", schoolYear: "8º Ano" },
//       }).then((result) => {
//         result.map((element) => {
//           const imageBase64 = element["dataValues"]["image"].toString("base64");
//           element["dataValues"]["image"] = imageBase64;
//           discipline = element["dataValues"]["displice"];
//           schoolYear = element["dataValues"]["schoolYear"];
//           amountQuestions = result.length;
//         });

//         return reply.render("templates/disciplines", {
//           question: result,
//           amount: amountQuestions,
//           discipline: discipline,
//           schoolYear: schoolYear,
//         });
//       });
//     } catch (err) {
//       console.log(err);
//       return reply.send(err);
//     }
//   };

//   export const ciencias_9ano = async (req, reply) => {
//     try {
//       await Database.findAll({
//         where: { displice: "Ciências", schoolYear: "9º Ano" },
//       }).then((result) => {
//         result.map((element) => {
//           const imageBase64 = element["dataValues"]["image"].toString("base64");
//           element["dataValues"]["image"] = imageBase64;
//           discipline = element["dataValues"]["displice"];
//           schoolYear = element["dataValues"]["schoolYear"];
//           amountQuestions = result.length;
//         });

//         return reply.render("templates/disciplines", {
//           question: result,
//           amount: amountQuestions,
//           discipline: discipline,
//           schoolYear: schoolYear,
//         });
//       });
//     } catch (err) {
//       console.log(err);
//       return reply.send(err);
//     }
//   };
