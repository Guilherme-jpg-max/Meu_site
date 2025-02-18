let cartinhaAberta = false;

function abrirCartinha() {
  const envelope = document.getElementById('envelope');
  envelope.classList.add('open');
  cartinhaAberta = true;
}

function fecharCartinha() {
  const envelope = document.getElementById('envelope');
  envelope.classList.remove('open');
  cartinhaAberta = false;
}


function toggleCartinha() {
  if (cartinhaAberta) {
    fecharCartinha();
  } else {
    abrirCartinha();
  }
}

function calcularTempo() {
  const dataConhecimento = new Date('2022-12-02T16:00:00');
  const agora = new Date();
  const diferenca = agora - dataConhecimento;
  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
  return {
    dias,
    horas: horas.toString().padStart(2, '0'),
    minutos: minutos.toString().padStart(2, '0'),
    segundos: segundos.toString().padStart(2, '0')
  };
}
function atualizarTempo() {
  const tempoElement = document.getElementById('tempo');
  setInterval(function() {
    const tempo = calcularTempo();
    tempoElement.innerHTML = `${tempo.dias} dias, ${tempo.horas} horas, ${tempo.minutos} minutos, ${tempo.segundos} segundos`;
  }, 1000);
}
document.addEventListener("DOMContentLoaded", function() {
  atualizarTempo();
});
