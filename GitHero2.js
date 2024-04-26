function rankCalculator(wins, defeats) {
    if (wins - defeats >= 0) return wins - defeats;
    return 0;
}

let saldoVitorias = rankCalculator(100, 5);

function heroRank(wins) {
    if (wins <= 10) return "Ferro";
    else if (wins <= 20) return "Bronze";
    else if (wins <= 50) return "Prata";
    else if (wins <= 80) return "Ouro";
    else if (wins <= 90) return "Diamante";
    else if (wins <= 100) return "Lendário";
    else if (wins > 100) return "Imortal";
}

console.log(`O Herói com saldo de ${saldoVitorias} está no nível ${heroRank(saldoVitorias)}`);
