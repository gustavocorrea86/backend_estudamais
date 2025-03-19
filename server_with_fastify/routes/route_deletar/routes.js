import { deletar } from "../../controllers/deletar.js";

async function route_deletar(fastify, options) {
  fastify.get("/deletar/:id/:nameImageDir", deletar);
    
}

export default route_deletar;