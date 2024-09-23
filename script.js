function calcularDiferenca() {
    const dataInicial = new Date(document.getElementById('dataInicial').value);
    const dataFinal = new Date(document.getElementById('dataFinal').value);

    if (!dataInicial || !dataFinal || dataInicial > dataFinal) {
        document.getElementById('resultado').textContent = 'Por favor, insira datas válidas.';
        return;
    }

    let anos = dataFinal.getFullYear() - dataInicial.getFullYear();
    let meses = dataFinal.getMonth() - dataInicial.getMonth();
    let dias = dataFinal.getDate() - dataInicial.getDate();

    if (dias < 0) {
        meses--;
        dias += new Date(dataFinal.getFullYear(), dataFinal.getMonth(), 0).getDate();
    }

    if (meses < 0) {
        anos--;
        meses += 12;
    }

    document.getElementById('resultado').textContent = `Resultado da diferença entre as duas datas é: ${anos} ano(s), ${meses} mês(es) e ${dias} dia(s).`;
}

function limparCampos() {
    document.getElementById('dataInicial').value = '';
    document.getElementById('dataFinal').value = '';
    document.getElementById('resultado').textContent = '';
}
