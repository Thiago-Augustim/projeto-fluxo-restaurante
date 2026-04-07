<?php
$titulo     = 'Pedidos';
$paginaAtiva = 'pedidos';
include VIEWS . 'partials/header.php';
?>

<body class="vh-100 d-flex flex-column">

<?php include VIEWS . 'partials/nav.php'; ?>

<div class="row gx-0 vh-100 d-flex">

    <!-- LISTA DE MESAS -->
    <div class="col-9">
        <div class="d-flex flex-column mb-3">

            <div class="d-flex justify-content-between align-items-center bg-cinzaClaro mx-4 my-3 rounded-4 flex-wrap gap-3 p-3">
                <ul class="d-flex mb-0 gap-5 align-items-center flex-wrap list-unstyled ps-2">
                    <li style="color: var(--mesaLivreColorLegenda)">● Mesa Livre</li>
                    <li style="color: var(--mesaOcupadaColorLegenda)">● Ocupado</li>
                    <li style="color: var(--mesaReservadaColorLegenda)">● Reservado</li>
                </ul>
            </div>

            <div class="p-3 rounded bg-cinzaClaro me-4 ms-4 flex-grow-1 rounded-4">
                <div class="row g-3" id="listaMesas">
                    <?php foreach ($mesas as $mesa): ?>
                        <div class="col-6 col-sm-4 col-md-3 col-lg-3">
                            <div class="card text-center p-3 rounded card-mesa"
                                style="background-color: var(--mesa<?= ucfirst($mesa['status']) ?>Color);"
                                data-mesa='<?= htmlspecialchars(json_encode($mesa), ENT_QUOTES) ?>'>
                                <strong>Mesa <?= $mesa['numero'] ?></strong>
                                <span>Cadeiras: <?= $mesa['cadeiras'] ?></span>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>

        </div>
    </div>

    <!-- PAINEL DIREITO -->
    <div class="col-3 flex-grow-1">
        <div class="d-flex flex-column mt-3">

            <div class="p-4 bg-cinzaClaro rounded-4 me-4 ms-4 mb-3">
                <div class="d-flex justify-content-center align-items-center mb-3 pt-3 pb-3">
                    <h4 id="painel-numero">--</h4>
                </div>
            </div>

            <div class="p-3 bg-cinzaClaro rounded-4 me-4 ms-4 flex-grow-1">
                <h5>Pedidos da Mesa</h5>
                <div id="lista-pedidos">
                    <p class="text-muted">Selecione uma mesa para ver os pedidos</p>
                </div>
                <hr>
                <p class="mb-0"><strong>Total: R$ <span id="total-pedidos">0,00</span></strong></p>
            </div>

        </div>
    </div>

</div>

<script>
    const todosPedidos = <?= json_encode(array_values($pedidos)) ?>;
</script>

<?php include VIEWS . 'partials/footer.php'; ?>