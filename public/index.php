<?php


define('ROOT', __DIR__ . '/../');
define('VIEWS', ROOT . 'app/Views/');
define('MODELS', ROOT . 'app/models/');
define('BASE_URL', '/projeto-fluxo-restaurante/public/index.php?');
define('CONTROLLERS', ROOT . 'app/controllers/');

require CONTROLLERS . 'MesasController.php';
require CONTROLLERS . 'FuncionariosController.php';

session_start();


$rota = $_GET['rota'] ?? 'mesas';

// match($rota) {
//     'mesas'      => require VIEWS . 'MesasView.php',
//     'pedidos'    => require VIEWS . 'PedidosView.php',
//     'cardapio'   => require VIEWS . 'CardapioView.php',
//     'comandas'   => require VIEWS . 'ComandasView.php',
//     'garcons'    => require VIEWS . 'GarconsView.php',
//     'relatorios' => require VIEWS . 'RelatoriosView.php',
//     default      => require VIEWS . 'MesasView.php',
// };

// Chama A função index do controlador correspondente à rota e carrega a view
match($rota) {
    'mesas' => mesasIndex(),
    'funcionarios' => funcionariosIndex(),
    default => mesasIndex(),
};


