<?php


function mesasIndex(): void
{
    $mesas = require MODELS . 'Mesas.php';
    require VIEWS . 'MesasView.php';

    }
    
