function calcularConsumo() {
    const potencia = document.getElementById('equipamento').value;
    let horas = document.getElementById('horas').value;

    // Converter horas para número
    horas = parseFloat(horas);

    // Verificar se a potência ou as horas são inválidas ou se as horas estão acima do limite
    if (potencia == 0 || horas <= 0 || horas > 24) {
        document.getElementById('resultado').innerHTML = "Insira um valor de no máximo ate 24h";
        return;
    }

    const consumoDiario = (potencia * horas) / 1000;
    const consumoMensal = consumoDiario * 30;

    document.getElementById('resultado').innerHTML = `
        Consumo Diário: ${consumoDiario.toFixed(2)} kWh<br>
        Consumo Mensal: ${consumoMensal.toFixed(2)} kWh`;
}
