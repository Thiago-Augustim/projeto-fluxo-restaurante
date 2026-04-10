// Script mesas
let mesaSelecionada = [
    { id: null, numero: null, cadeiras: null, status: null },
]

// Adiciona evento de clique a cada card de mesa
document.getElementById('listaMesas').addEventListener('click', function (e) {
    const card = e.target.closest('.card-mesa');
    if (!card) return;

    const mesa = JSON.parse(card.dataset.mesa);
    console.log('Mesa selecionada:', mesa);
    selecionarMesa(mesa);
});

// Função para atualizar o painel lateral com os detalhes da mesa selecionada
function selecionarMesa(mesa) {
    document.getElementById('painel-numero').textContent = 'Mesa ' + mesa.numero;
    document.getElementById('painel-cadeiras').textContent = mesa.cadeiras;
    document.getElementById('painel-status').value = mesa.status;


    console.log('Atualizando painel lateral com a mesa:', mesa);
    mesaSelecionada = mesa;

    document.querySelectorAll('.input-mesa-id').forEach(input => {
        input.value = mesa.id;
    });
    document.getElementById('input-mesa-id-pedido').value = mesa.id;
    document.getElementById('input-mesa-status-pedido').value = mesa.status;

}

// Adiciona evento de clique a cada item do dropdown de status
document.querySelectorAll('.status-mesa').forEach(item => {
    item.addEventListener('click', function (event) {
        event.preventDefault();




        // Atualiza o texto do botão de status no painel lateral
        atualizarCorMesa(mesaSelecionada, novoStatus);

    });
});

/*function atualizarCorMesa(mesa, novoStatus) {
    const card = [...document.querySelectorAll('.card-mesa')]
        .find(c => JSON.parse(c.dataset.mesa).numero === mesa.numero);

    if (card) {
        card.style.backgroundColor = `var(--mesa${novoStatus}Color)`;
        mesa.status = ucfirst(novoStatus);
        card.dataset.mesa = JSON.stringify(mesa);
    }
}*/


/*function cadastrarMesa() {
    const numero = document.getElementById('numero').value;
    const cadeiras = document.getElementById('cadeiras').value;
    const status = ucfirst(document.getElementById('status').value);

    adicionarCardMesa({ numero, cadeiras, status });

    bootstrap.Modal.getInstance(document.getElementById('modalMesa')).hide();
}*/

function adicionarCardMesa(mesa) {
    const col = document.createElement('div');
    col.className = 'col-6 col-sm-4 col-md-3 col-lg-3';
    col.innerHTML = `
        <div class="card text-center p-3 rounded card-mesa"
            style="background-color: var(--mesa${ucfirst(mesa.status)}Color);"
            data-mesa='${JSON.stringify(mesa)}'>
            <strong>Mesa ${mesa.numero}</strong>
            <span>Cadeiras: ${mesa.cadeiras}</span>
        </div>
    `;
    document.getElementById('listaMesas').appendChild(col);
}

function ucfirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}




document.addEventListener("DOMContentLoaded", function () {

    const modalElement = document.getElementById('modalCardapio');
    const btnAdicionar = document.getElementById('btn-adicionar-pedido');

    // 1. Cria o modal
    let modalCardapio = null;
    if (modalElement && typeof bootstrap !== 'undefined') {
        modalCardapio = new bootstrap.Modal(modalElement);
    }


    btnAdicionar.addEventListener('click', function (e) {
        e.preventDefault(); // Impede comportamentos estranhos do botão

        const inputMesaId = document.getElementById('input-mesa-id-pedido');
        const inputMesaStatus = document.getElementById('input-mesa-status-pedido');

        //VALIDAÇÕES
        if (inputMesaId.value === "") {
            exibirErro("Por favor, selecione ou informe o número da mesa!");
            return;
        }

        if (inputMesaStatus.value === 'livre' || inputMesaStatus.value === 'reservada') {
            exibirErro("A mesa deve estar ocupada para fazer um pedido!");
            return;
        }

        //SINCRONIZAÇÃO
        // const inputsNoModal = document.querySelectorAll('.input-mesa-selecionada');
        // inputsNoModal.forEach(input => {
        //     input.value = inputMesaId.value;
        // });

        //ABERTURA DO MODAL
        if (modalCardapio) {
            modalCardapio.show();
        }

    });

});



function exibirErro(mensagem) {
    const container = document.getElementById('container-erros');

    const htmlErro = `<div class="toast-container position-fixed top-0 end-0 p-3">
        <div class="toast show" role="alert">
            <div class="toast-header bg-danger text-white">
                <strong class="me-auto">Erro</strong>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast"></button>
            </div>
            <div class="toast-body">              
                    <p class="mb-1">${mensagem}</p>
            </div>
        </div>
    </div>`

    container.innerHTML = htmlErro;

}