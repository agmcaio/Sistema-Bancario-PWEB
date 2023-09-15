class ClienteController {
    constructor() {
        this.inputNome =
            document.querySelector("#nome");
        this.inputCpf =
            document.querySelector("#cpf");
        this.clientes = new Clientes();
    }
    inserir() {
        let novoCliente = new Cliente(this.inputNome.value, this.inputCpf.value);
        this.clientes.inserir(novoCliente);
        this.inserirNoHTML(novoCliente);
        alert("Cliente foi adicionado");
    }
    listar() {
        this.clientes.listar().forEach(cliente => {
            this.inserirNoHTML(cliente);
        });
    }
    inserirNoHTML(cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.ToString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click', (event) => {
            console.log('removendo cliente ' + cliente.ToString());
            this.clientes.remover(cliente._cpf);
            event.target.parentElement.remove();
        });
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
