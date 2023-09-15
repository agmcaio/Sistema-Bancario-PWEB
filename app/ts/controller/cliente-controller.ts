class ClienteController{
    private inputNome: HTMLInputElement;
    private inputCpf: HTMLInputElement;

    private clientes: Clientes;

    constructor() {
        this.inputNome =
            <HTMLInputElement>document.querySelector("#nome")
        this.inputCpf =
            <HTMLInputElement>document.querySelector("#cpf");
        this.clientes = new Clientes();
    }

    inserir(){
        let novoCliente = new Cliente(this.inputNome.value, this.inputCpf.value);

        this.clientes.inserir(novoCliente);
        this.inserirNoHTML(novoCliente);
        alert("Cliente foi adicionado");
    }

    listar(){
        this.clientes.listar().forEach(
            cliente => {
                this.inserirNoHTML(cliente);
        })
    }

    inserirNoHTML(cliente:Cliente){
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.ToString();

        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                console.log('removendo cliente ' + cliente.ToString());
                this.clientes.remover(cliente._cpf);
                (<Element>event.target).parentElement.remove();
            }
            );


        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}