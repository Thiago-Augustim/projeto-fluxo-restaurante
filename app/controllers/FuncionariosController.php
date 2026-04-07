<?php

function funcionariosIndex(): void
{
    if (!isset($_SESSION['funcionarios'])) {
        $_SESSION['funcionarios'] = require MODELS . 'Funcionarios.php';
    }

    $funcionarios = $_SESSION['funcionarios'];

    require VIEWS . 'FuncionariosView.php';
}

function cadastrarFuncionario(): void
{
    $nome = $_POST['nome'] ?? null;
    $especialidade = $_POST['especialidade'] ?? null;
    $senha = $_POST['senha'] ?? null;

    if (!$nome || !$especialidade || !$senha) {
        $_SESSION['erros'] = ['Preencha todos os campos'];
        header("Location: " . BASE_URL . "?rota=funcionarios");
        exit;
    }

    if (!isset($_SESSION['funcionarios'])) {
        $_SESSION['funcionarios'] = require MODELS . 'Funcionarios.php';
    }

    $funcionarios = $_SESSION['funcionarios'];

    $novoId = count($funcionarios) + 1;

    $funcionarios[] = [
        'id' => $novoId,
        'nome' => $nome,
        'especialidade' => $especialidade,
        'senha' => password_hash($senha, PASSWORD_DEFAULT)
    ];

    $_SESSION['funcionarios'] = $funcionarios;

    header("Location: " . BASE_URL . "?rota=funcionarios");
    exit;
}