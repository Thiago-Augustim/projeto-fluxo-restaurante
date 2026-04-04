<?php

function funcionariosIndex(): void
{
    $funcionarios = require MODELS . 'Funcionarios.php';
    require VIEWS . 'FuncionariosView.php';
}

/*
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $nome = $_POST['nome'] ?? null;
    $especialidade = $_POST['especialidade'] ?? null;

    if ($nome && $especialidade) {

        $funcionarios = $_SESSION['funcionarios'];

        $novoId = count($funcionarios) + 1;

        $funcionarios[] = [
            'id' => $novoId,
            'nome' => $nome,
            'especialidade' => $especialidade
        ];

        $_SESSION['funcionarios'] = $funcionarios;
    }

    // evita duplicar ao dar F5
    header("Location: GarconsView.php");
    exit;
}

$funcionarios = $_SESSION['funcionarios'];*/