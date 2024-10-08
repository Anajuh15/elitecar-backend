/**
 * Classe que representa o cliente
 */
export class Cliente {
    static listarClientes() {
        throw new Error('Method not implemented.');
    }

    /* Atributos */
    /* Identificador do Cliente */
    private idCliente: number = 0;
    /* Nome do cliente */
    private nome: string;
    /* CPF do cliente */
    private cpf: string;
    /* Telefone do cliente */
    private telefone: string;

    /**
     * Construtor da classe Cliente
     * @param nome nome do cliente
     * @param cpf cpf do cliente
     * @param telefone telefone do cliente
     */ 
    constructor(
        nome: string,
        cpf: string,
        telefone: string
    ) {
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
    }

    /* Métodos get e set */
    /**
     * Recupera o identificador do cliente
     * @returns o identificador do cliente
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
     * Retorna o nome do cliente
     * @returns {string} nome do cliente
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define o nome do cliente
     * @param nome - O nome do cliente a ser definido
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }

    /**
     * Recupera o CPF do cliente
     * @returns {string} o CPF do cliente
     */
    public getCpf(): string {
        return this.cpf;
    }

    /**
     * Define o CPF do cliente
     * @param cpf - O CPF do cliente a ser definido
     */
    public setCpf(cpf: string): void {
        this.cpf = cpf;
    }

    /**
     * Recupera o telefone do cliente
     * @returns {string} o telefone do cliente
     */
    public getTelefone(): string {
        return this.telefone;
    }

    /**
     * Define o telefone do cliente
     * @param telefone - O telefone do cliente a ser definido
     */
    public setTelefone(telefone: string): void {
        this.telefone = telefone;
    }
}


