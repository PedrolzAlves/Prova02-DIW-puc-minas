listarNaRoca().then(peoes => {
    const cards = document.getElementById("cards");
    peoes.forEach(peao => {
        cards.innerHTML += `
            <div class="col">
                <div class="card h-100 text-center border-0 shadow position-relative" style="background-color: #f5e6c4;">
                    <span class="badge bg-danger w-100">Na roça</span>
                    <img src="${peao.foto}" alt="${peao.nome}" class="card-img-top object-fit-cover" style="height: 300px;">
                    <div class="card-body">
                        <h5 class="card-title fw-bold">${peao.nome}</h5>
                        <button class="btn btn-danger w-100" onclick="votar(${peao.id}, '${peao.nome}')">Votar para eliminar</button>
                    </div>
                </div>
            </div>`;
    });
});

listarForaDaRoca().then(peoes => {
    const outros = document.getElementById("other-peoes");
    peoes.forEach(peao => {
        outros.innerHTML += `
            <div class="col">
                <div class="card text-center border-0 shadow" style="background-color: #f5e6c4;">
                    <img src="${peao.foto}" alt="${peao.nome}" class="card-img-top object-fit-cover" style="height: 120px;">
                    <div class="card-body p-2">
                        <h6 class="card-title fw-bold mb-0">${peao.nome}</h6>
                    </div>
                </div>
            </div>`;
    });
});

function votar(id, nome) {
    registrarVoto(id)
        .then(() => listarVotos())
        .then(votos => {
            document.getElementById("alerta-voto").innerHTML = `
                <div class="alert alert-success alert-dismissible">
                    Voto registrado para eliminar ${nome}! Você já votou ${votos.length} ${votos.length === 1 ? "vez" : "vezes"}.
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                </div>`;
        });
}
