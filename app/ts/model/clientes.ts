class Clientes{
    private clientes: Array<Cliente>;

    constructor(){
        this.clientes = new Array<Cliente>();
    }

    inserir(cliente:Cliente){
        this.clientes.push(cliente);
    }

    remover(cpf:string){
        const clienteRemovido = this.pesquisar(cpf);

        if(clienteRemovido){
            const idx = this.clientes.indexOf(clienteRemovido);
            if(idx > -1){
                this.clientes.splice(idx,1)
            }
        }
    }

    listar():Array<Cliente>{
        return this.clientes;
    }

    pesquisar(cpf : string) : Cliente{
        return this.clientes.find(
            cliente => cliente._cpf == cpf
        );
    }
}