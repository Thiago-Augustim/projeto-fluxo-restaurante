document.getElementById('listaMesas').addEventListener('click', function (e) {
    const card = e.target.closest('.card-mesa');
    if (!card) return;

    const mesa = JSON.parse(card.dataset.mesa);
    document.getElementById('painel-numero').textContent = 'Mesa ' + mesa.numero;
    renderizarPedidos(mesa.id);
});

function renderizarPedidos(mesaId) {
    const pedidosDaMesa = todosPedidos.filter(p => p.mesa_id == mesaId);
    const lista = document.getElementById('lista-pedidos');

    if (pedidosDaMesa.length === 0) {
        lista.innerHTML = '<p class="text-muted">Nenhum pedido ainda.</p>';
        document.getElementById('total-pedidos').textContent = '0,00';
        return;
    }

    let total = 0;
    let html = '<ul class="list-group">';
    pedidosDaMesa.forEach(p => {
        total += parseFloat(p.preco);
        html += `<li class="list-group-item d-flex justify-content-between">
            <span>${p.item}</span>
            <span>R$ ${parseFloat(p.preco).toFixed(2).replace('.', ',')}</span>
        </li>`;
    });
    html += '</ul>';

    lista.innerHTML = html;
    document.getElementById('total-pedidos').textContent = total.toFixed(2).replace('.', ',');
}