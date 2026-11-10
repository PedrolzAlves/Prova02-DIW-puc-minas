listarNaRoca().then(peoes => {
    const roca = document.getElementById("roca");
    peoes.forEach(peao => {
        roca.innerHTML += `
            <span class="d-flex align-items-center gap-2 rounded-pill pe-3 border border-2 border-danger" style="background-color: #f5e6c4;">
                <img src="${peao.foto}" alt="${peao.nome}" width="40" height="40" class="rounded-circle object-fit-cover">
                <strong>${peao.nome}</strong>
            </span>`;
    });
});
