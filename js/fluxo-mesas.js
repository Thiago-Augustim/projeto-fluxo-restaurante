const mesas = [
    { id: 1,  nome: "Mesa 1",  cadeiras: 5,  status: "livre" },
    { id: 2,  nome: "Mesa 2",  cadeiras: 5,  status: "reservado" },
    { id: 3,  nome: "Mesa 3",  cadeiras: 5,  status: "livre" },
    { id: 4,  nome: "Mesa 4",  cadeiras: 5,  status: "reservado" },
    { id: 5,  nome: "Mesa 5",  cadeiras: 10, status: "livre" },
    { id: 6,  nome: "Mesa 6",  cadeiras: 5,  status: "livre" },
    { id: 7,  nome: "Mesa 7",  cadeiras: 5,  status: "ocupado" },
    { id: 8,  nome: "Mesa 8",  cadeiras: 5,  status: "ocupado" },
    { id: 9,  nome: "Mesa 9",  cadeiras: 5,  status: "livre" },
    { id: 10, nome: "Mesa 10", cadeiras: 5,  status: "livre" },
    { id: 11, nome: "Mesa 11", cadeiras: 5,  status: "livre" },
    { id: 12, nome: "Mesa 12", cadeiras: 5,  status: "reservado" },
    { id: 13, nome: "Mesa 13", cadeiras: 5,  status: "ocupado" },
    { id: 14, nome: "Mesa 14", cadeiras: 5,  status: "livre" },
  ];

  let mesaSelecionadaId = null;

  function renderMesas() {
    const grid = document.getElementById("gridMesas");
    grid.innerHTML = "";
    mesas.forEach(m => {
      const isSel = m.id === mesaSelecionadaId;
      const col = document.createElement("div");
      col.className = "col-6 col-md-4 col-xl-3";
      col.innerHTML = `
        <div class="card-mesa ${m.status}${isSel ? ' selecionado' : ''}" onclick="selecionarMesa(${m.id})">
          <div>${m.nome}</div>
          <div class="text-muted" style="font-size:0.8rem;font-weight:400">Cadeiras: ${m.cadeiras}</div>
        </div>`;
      grid.appendChild(col);
    });
  }

  function selecionarMesa(id) {
    mesaSelecionadaId = id;
    const mesa = mesas.find(m => m.id === id);
    document.getElementById("nomeMesaSelecionada").textContent = mesa.nome.toUpperCase();
    document.getElementById("qtdLugares").value = mesa.cadeiras;
    document.getElementById("statusMesa").value = mesa.status;
    renderMesas();
  }

  function novaMesa() {
    const novoId = mesas.length + 1;
    mesas.push({ id: novoId, nome: `Mesa ${novoId}`, cadeiras: 4, status: "livre" });
    renderMesas();
  }

  function adicionarPedido() {
    if (!mesaSelecionadaId) { alert("Selecione uma mesa primeiro."); return; }
    const mesa = mesas.find(m => m.id === mesaSelecionadaId);
    const qtd = document.getElementById("qtdLugares").value;
    const st  = document.getElementById("statusMesa").value;
    if (qtd) mesa.cadeiras = parseInt(qtd);
    if (st)  mesa.status   = st;
    renderMesas();
    alert(`Pedido registrado para ${mesa.nome}!`);
  }

  function setAtivo(el) {
    document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("ativo"));
    el.classList.add("ativo");
  }

  renderMesas();