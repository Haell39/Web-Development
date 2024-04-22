// Função para atualizar a hora do relógio de Nova York
function atualizarRelogioNY() {
    let dataHoraNY = new Date().toLocaleString('en-US', {timeZone: 'America/New_York'});
    document.getElementById('relogio-ny').textContent = `Nova York: ${dataHoraNY}`;
}

// Função para atualizar a hora do relógio de Londres
function atualizarRelogioLondon() {
    let dataHoraLondon = new Date().toLocaleString('en-GB', {timeZone: 'Europe/London'});
    document.getElementById('relogio-london').textContent = `Londres: ${dataHoraLondon}`;
}

// Função para atualizar a hora do relógio de Tóquio
function atualizarRelogioTokyo() {
    let dataHoraTokyo = new Date().toLocaleString('ja-JP', {timeZone: 'Asia/Tokyo'});
    document.getElementById('relogio-tokyo').textContent = `Tóquio: ${dataHoraTokyo}`;
}

// Atualiza os relógios a cada segundo
setInterval(() => {
    atualizarRelogioNY();
    atualizarRelogioLondon();
    atualizarRelogioTokyo();
}, 1000);
