<?php
// TODO: substituir pelo banco depois
$tipo = $_COOKIE['tipo'] ?? 'garcom';

$permissoes = [
    'admin'  => ['mesas', 'pedidos', 'comandas', 'garcons', 'relatorios', 'funcionarios'],
    'garcom' => ['pedidos', 'comandas'],
    'cozinha'=> ['comandas', 'relatorios'],
];

$permitidas = $permissoes[$tipo];
?>

<ul class="nav nav-underline d-flex justify-content-start p-2 bg-cinzaEscuro ">
    <?php if (in_array('mesas', $permitidas)): ?>
    <li class="nav-item ms-5">
        <a class="nav-link <?php echo $paginaAtiva === 'mesas' ? 'active' : '' ?>" href="#" onclick="location.replace('mesas.view.php');return false;">Mesas</a>
    </li>
    <?php endif; ?>
    <?php if (in_array('pedidos', $permitidas)): ?>
    <li class="nav-item ms-5">
        <a class="nav-link <?php echo $paginaAtiva === 'pedidos' ? 'active' : '' ?>" href="#" onclick="location.replace('pedidos.view.php');return false;">Pedidos</a>
    </li>
    <?php endif; ?>
    <?php if (in_array('comandas', $permitidas)): ?>
    <li class="nav-item ms-5">
        <a class="nav-link <?php echo $paginaAtiva === 'comandas' ? 'active' : '' ?>" href="#" onclick="location.replace('comandas.view.php');return false;">Comandas</a>
    </li>
    <?php endif; ?>
    <?php if (in_array('garcons', $permitidas)): ?>
    <li class="nav-item ms-5">
        <a class="nav-link <?php echo $paginaAtiva === 'garcons' ? 'active' : '' ?>" href="#" onclick="location.replace('garcons.view.php');return false;">Garçons</a>
    </li>
    <?php endif; ?>
    <?php if (in_array('relatorios', $permitidas)): ?>
    <li class="nav-item ms-5">
        <a class="nav-link <?php echo $paginaAtiva === 'relatorios' ? 'active' : '' ?>" href="#" onclick="location.replace('relatorios.view.php');return false;">Relatórios</a>
    </li>
    <?php endif; ?>
</ul>

<?php if (!in_array($paginaAtiva, $permitidas)): ?>
    <div class="alert alert-danger m-4">Você não tem permissão para acessar esta página.</div>
<?php endif; ?>