class Cliente{
    private nome: string;
    private cpf: string; 
    private conta: Conta;
    
    constructor(nome:string, cpf:string){
        this.nome = nome;
        this.cpf = cpf;
    }

    get _nome() {
        return this.nome;
    }

    set _nome(nome:string) {
        this.nome = nome;
    }

    get _cpf(){
        return this.cpf;
    }

    set _cpf(cpf:string){
        this.cpf = cpf;
    }

    get _conta():Conta{
        return this.conta;
    }

    set _conta(conta:Conta){
        this.conta = conta;
    }

    ToString() : string {
        let string = `CPF: ${this._cpf} - Nome: ${this._nome}`;
        return string;
    }
}