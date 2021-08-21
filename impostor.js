let palheta = document.documentElement.style;

function mudarCorPersonagem() {
    let escolha_cor = document.getElementById("Tabela").value;
    if (escolha_cor === "verde") {
        palheta.setProperty("--cor", "#117F2D");
        palheta.setProperty("--corSombra", "#0A4D2E");
    } else if (escolha_cor === "vermelho") {
        palheta.setProperty("--cor", "#c51111");
        palheta.setProperty("--corSombra", "#7a0838");
    } else if (escolha_cor === "branco") {
        palheta.setProperty("--cor", "#D6E0F0");
        palheta.setProperty("--corSombra", "#8394BF");
    } else if (escolha_cor === "preto") {
        palheta.setProperty("--cor", "#3f474e");
        palheta.setProperty("--corSombra", "#1e1f26");
    } else if (escolha_cor === "ciano") {
        alert("Ciano was an Impostor. Ciano has been ejected")
    } else if (escolha_cor === "amarelo") {
        palheta.setProperty("--cor", "#f5f557");
        palheta.setProperty("--corSombra", "#c28722");
    } else if (escolha_cor === "azul") {
        palheta.setProperty("--cor", "#132ed1");
        palheta.setProperty("--corSombra", "#09158e");
    } else if (escolha_cor === "rosa") {
        palheta.setProperty("--cor", "#ed54ba");
        palheta.setProperty("--corSombra", "#ab2bad");
    }else if (escolha_cor === "laranja") {
        palheta.setProperty("--cor", "#ef7d0d");
        palheta.setProperty("--corSombra", "#b33e15");
    }else if (escolha_cor === "marrom") {
        palheta.setProperty("--cor", "#71491e");
        palheta.setProperty("--corSombra", "#5e2615");
    }else if (escolha_cor === "cinza") {
        palheta.setProperty("--cor", "#3f474e");
        palheta.setProperty("--corSombra", "#1e1f26");
    }else if (escolha_cor === "verde_claro") {
        palheta.setProperty("--cor", "#50ef39");
        palheta.setProperty("--corSombra", "#15a742");
    };   
}