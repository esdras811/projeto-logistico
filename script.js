/**
 * FUNÇÃO: buscarRastreio
 * Simula a busca de uma carga num banco de dados fictício.
 */
function buscarRastreio() {
    const cod = document.getElementById('trackingInput').value.toUpperCase();
    const tela = document.getElementById('resultadoRastreio');

    if (cod === "") {
        tela.innerHTML = "❌ Digite um código válido.";
        return;
    }

    // Feedback visual de "carregando"
    tela.innerHTML = "⏳ Consultando satélite...";
    tela.style.color = "#e31e24";

    // Simula atraso de rede de 1.2 segundos
    setTimeout(() => {
        if (cod.length < 4) {
            tela.innerHTML = "⚠️ Código não encontrado em nossa base.";
        } else {
            tela.innerHTML = `✅ CARGA LOCALIZADA! <br> Status: Em rota para entrega <br> Última atualização: Minas Gerais`;
            tela.style.color = "#003366";
        }
    }, 1200);
}

/**
 * INTERAÇÃO: Fechar Banner de Carnaval
 */
const banner = document.getElementById('carnavalBanner');
if (banner) {
    banner.addEventListener('click', () => {
        banner.style.transition = "0.5s";
        banner.style.opacity = "0";
        setTimeout(() => banner.style.display = 'none', 500);
    });
}

/**
 * INTERAÇÃO: Menu Hambúrguer (Simulação)
 */
const menuBtn = document.querySelector('.menu-icon');
menuBtn.addEventListener('click', () => {
    alert("O menu seria aberto aqui em uma versão com mais páginas!");
});