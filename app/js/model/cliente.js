class Cliente {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
    get _nome() {
        return this.nome;
    }
    set _nome(nome) {
        this.nome = nome;
    }
    get _cpf() {
        return this.cpf;
    }
    set _cpf(cpf) {
        this.cpf = cpf;
    }
    get _conta() {
        return this.conta;
    }
    set _conta(conta) {
        this.conta = conta;
    }
    ToString() {
        let string = `CPF: ${this._cpf} - Nome: ${this._nome}`;
        return string;
    }
}
