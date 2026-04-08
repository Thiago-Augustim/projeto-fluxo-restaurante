<?php

function pedidosIndex(): void
{
    if (!isset($_SESSION['mesas'])) {
        $_SESSION['mesas'] = require MODELS . 'Mesas.php';
    }
    if (!isset($_SESSION['pedidos'])) {
        $_SESSION['pedidos'] = require MODELS . 'Pedidos.php';
    }

    $mesas   = $_SESSION['mesas'];
    $pedidos = $_SESSION['pedidos'];

    require VIEWS . 'PedidosView.php';
}

function adicionarPedido(): void
{
    $mesa_id = $_POST['mesa_id'] ?? null;
    $item    = $_POST['item']    ?? null;
    $preco   = $_POST['preco']   ?? null;

    if (!$mesa_id || !$item || !$preco) {
        $_SESSION['erros'] = ['Dados inválidos para o pedido.'];
        header('Location: ' . BASE_URL . '?rota=mesas');
        exit();
    }

    if (!isset($_SESSION['pedidos'])) {
        $_SESSION['pedidos'] = [];
    }

    $_SESSION['pedidos'][] = [
        'id'      => count($_SESSION['pedidos']) + 1,
        'mesa_id' => (int) $mesa_id,
        'status'  => 'aguardando',
        'itens'   => [
            ['nome' => $item, 'preco' => (float) $preco, 'qtd' => 1, 'obs' => '']
        ],
    ];

    header('Location: ' . BASE_URL . '?rota=mesas');
    exit();
}

function alterarStatusPedido(): void
{
    $id     = $_POST['id']     ?? null;
    $status = $_POST['status'] ?? null;

    $statusValidos = ['aguardando', 'em_preparo', 'concluido', 'cancelado'];

    if (!$id || !in_array($status, $statusValidos)) {
        $_SESSION['erros'] = ['Status inválido.'];
        header('Location: ' . BASE_URL . '?rota=pedidos');
        exit();
    }

    foreach ($_SESSION['pedidos'] as &$pedido) {
        if ($pedido['id'] == $id) {
            $pedido['status'] = $status;
            break;
        }
    }

    header('Location: ' . BASE_URL . '?rota=pedidos');
    exit();
}