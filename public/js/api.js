function listarNaRoca() {
    return fetch("/participantes?naRoca=true").then(resposta => resposta.json());
}


function listarForaDaRoca() {
    return fetch("/participantes?naRoca=false").then(resposta => resposta.json());
}

function listarVotos() {
    return fetch("/votos").then(resposta => resposta.json());
}

function registrarVoto(participanteId) {
    return fetch("/votos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ participanteId: participanteId, data: new Date().toISOString() })
    }).then(resposta => resposta.json());
}

function zerarVotos() {
    return listarVotos().then(votos =>
        Promise.all(votos.map(voto => fetch("/votos/" + voto.id, { method: "DELETE" })))
    );
}
