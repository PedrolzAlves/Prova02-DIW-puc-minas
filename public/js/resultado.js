function mostrarResultado() {
    Promise.all([listarNaRoca(), listarVotos()]).then(([peoes, votos]) => {
        const lista = document.getElementById("placar");
        const vazio = document.getElementById("sem-votos");
        const total = document.getElementById("total");
        lista.innerHTML = "";
        total.textContent = votos.length;

        const botaoZerar = document.getElementById("btn-zerar");

        if (votos.length === 0) {
            vazio.classList.remove("d-none");
            botaoZerar.classList.add("d-none");
            return;
        }
        vazio.classList.add("d-none");
        botaoZerar.classList.remove("d-none");

        // conta os votos de cada peão e calcula o percentual
        const resultado = peoes.map(peao => {
            const qtd = votos.filter(voto => voto.participanteId === peao.id).length;
            return { nome: peao.nome, foto: peao.foto, votos: qtd, percentual: (qtd / votos.length) * 100 };
        });

        // do mais votado para o menos votado
        resultado.sort((a, b) => b.votos - a.votos);

        resultado.forEach(item => {
            lista.innerHTML += `
                <div class="card border-0 shadow mb-3" style="background-color: #f5e6c4;">
                    <div class="card-body d-flex align-items-center gap-3">
                        <img src="${item.foto}" alt="${item.nome}" width="80" height="60" class="rounded object-fit-cover">
                        <div class="flex-grow-1">
                            <div class="d-flex justify-content-between">
                                <strong>${item.nome}</strong>
                            </div>
                            <div class="progress mt-2">
                                <div class="progress-bar bg-danger" style="width: ${item.percentual}%"></div>
                            </div>
                            <div class="mb-2">
                                <span>${item.percentual.toFixed(1)}% (${item.votos}votos)</span>
                            </div>
                        </div>
                    </div>
                </div>`;
        });
    });
}

function zerar() {
    zerarVotos().then(() => mostrarResultado());
}

mostrarResultado();
