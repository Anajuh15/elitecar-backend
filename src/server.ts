import express from "express";
import cors from 'cors';
import {router} from './routes'

//cria o servidor express
const server = express();
//configurar o servidor para aceitar requisições de outros domínios
server.use(cors());
//configurar p servidor para aceitar requisições no formato JSON
server.use(express.json());

//configurando as rotas no servidor
server.use(router);

//exporta o servidor
export { server };