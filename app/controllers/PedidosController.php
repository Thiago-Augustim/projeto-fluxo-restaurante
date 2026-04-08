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
            'item'    => $item,
            'preco'   => (float) $preco,
        ];

        header('Location: ' . BASE_URL . '?rota=mesas');
        exit();
    }