export class PedidoVenda {

    /* Atributos */
    private idPedido: number;
    private idCarro: number;
    private idCliente: number;
    private dataPedido: Date;
    private valorPedido: number;

    /**
     * Construtor da classe PedidoVenda
     * @param idPedido - O identificador do pedido
     * @param idCarro - O identificador do carro
     * @param idCliente - O identificador do cliente
     * @param dataPedido - A data do pedido
     * @param valorPedido - O valor total do pedido
     */
    constructor(
        idPedido: number,
        idCarro: number,
        idCliente: number,
        dataPedido: Date,
        valorPedido: number
    ) {
        this.idPedido = idPedido;
        this.idCarro = idCarro;
        this.idCliente = idCliente;
        this.dataPedido = dataPedido;
        this.valorPedido = valorPedido;
    }

    /* Métodos get e set */

    /**
     * Recupera o identificador do pedido
     * @returns {number} o identificador do pedido
     */
    public getIdPedido(): number {
        return this.idPedido;
    }

    /**
     * Define o identificador do pedido
     * @param idPedido - O ID do pedido a ser definido
     */
    public setIdPedido(idPedido: number): void {
        this.idPedido = idPedido;
    }

    /**
     * Recupera o identificador do carro
     * @returns {number} o identificador do carro
     */
    public getIdCarro(): number {
        return this.idCarro;
    }

    /**
     * Define o identificador do carro
     * @param idCarro - O ID do carro a ser definido
     */
    public setIdCarro(idCarro: number): void {
        this.idCarro = idCarro;
    }

    /**
     * Recupera o identificador do cliente
     * @returns {number} o identificador do cliente
     */
    public getIdCliente(): number {
        return this.idCliente;
    }

    /**
     * Define o identificador do cliente
     * @param idCliente - O ID do cliente a ser definido
     */
    public setIdCliente(idCliente: number): void {
        this.idCliente = idCliente;
    }

    /**
     * Recupera a data do pedido
     * @returns {Date} a data do pedido
     */
    public getDataPedido(): Date {
        return this.dataPedido;
    }

    /**
     * Define a data do pedido
     * @param dataPedido - A data do pedido a ser definida
     */
    public setDataPedido(dataPedido: Date): void {
        this.dataPedido = dataPedido;
    }

    /**
     * Recupera o valor do pedido
     * @returns {number} o valor do pedido
     */
    public getValorPedido(): number {
        return this.valorPedido;
    }

    /**
     * Define o valor do pedido
     * @param valorPedido - O valor do pedido a ser definido
     */
    public setValorPedido(valorPedido: number): void {
        this.valorPedido = valorPedido;
    }
}
