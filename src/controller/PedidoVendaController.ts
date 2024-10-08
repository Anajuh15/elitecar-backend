import { Request, Response } from 'express';
import { PedidoVenda } from "../model/PedidoVenda";

class PedidoVendaController {
    static async todos(req: Request, res: Response) {
        try {
            const listaDePedidosVenda = await PedidoVenda.listarPedidosVenda();
            res.status(200).json(listaDePedidosVenda);
        } catch (error) {
            console.log(`Erro ao acessar método herdado: ${error}`);
            res.status(400).json("Erro ao recuperar as informações dos pedidos de venda.");
        }
    }
}

export default PedidoVendaController;
