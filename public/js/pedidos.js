// Clique em card de pedido
document.getElementById('listaPedidos').addEventListener('click', function (e) {
    const card = e.target.closest('.card-pedido');
    if (!card) return;

    document.querySelectorAll('.card-pedido').forEach(c => c.style.outline = 'none');
    card.style.outline = '2px solid var(--buttonsColor)';

    const pedido = JSON.parse(card.dataset.pedido);
    atualizarPainel(pedido);
});

function atualizarPainel(pedido) {
    document.getElementById('painel-titulo').innerHTML = 'PEDIDO<br>#' + pedido.id;
    document.getElementById('painel-mesa').textContent  = String(pedido.mesa_id).padStart(2, '0');
    document.getElementById('input-pedido-id').value    = pedido.id;

    const container = document.getElementById('painel-itens');
    if (!pedido.itens || pedido.itens.length === 0) {
        container.innerHTML = '<p class="text-muted">Sem itens.</p>';
        return;
    }

    let html = '';
    pedido.itens.forEach(item => {
        html += `
        <div class="bg-light border rounded-3 p-2 mb-2">
            <strong>${item.nome}</strong>
            <div class="text-muted" style="font-size:0.85rem;">
                ${item.obs ? item.obs + ' ' : ''}${item.qtd}x
            </div>
        </div>`;
    });
    container.innerHTML = html;
}

// Filtros por status
document.querySelectorAll('.btn-filtro').forEach(btn => {
    btn.addEventListener('click', function () {
        const status = this.dataset.status;
        document.querySelectorAll('.card-pedido').forEach(card => {
            if (status === 'todos' || card.dataset.status === status) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
});