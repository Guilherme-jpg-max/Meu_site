let cartinhaAberta = false;

function toggleCartinha() {
  const envelope = document.getElementById('envelope');
  cartinhaAberta = !cartinhaAberta;
  envelope.classList.toggle('open', cartinhaAberta);
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
  if (!tempoElement) return;

  setInterval(() => {
    const tempo = calcularTempo();
    tempoElement.innerHTML = `${tempo.dias} dias, ${tempo.horas} horas, ${tempo.minutos} minutos, ${tempo.segundos} segundos`;
  }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
  const starBackground = document.querySelector('.star-background');
  if (starBackground) {
    const numStars = 200;
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 2}s`;
      starBackground.appendChild(star);
    }
  }

  const fotos = document.querySelectorAll('.foto');
  fotos.forEach(foto => {
    foto.addEventListener('click', function() {

      if (this.classList.contains('ativo')) {
        this.classList.remove('ativo');
      } else {
        fotos.forEach(f => f.classList.remove('ativo'));
        this.classList.add('ativo');
      }
    });
  });

  atualizarTempo();
});
