let nome = "Pedro"
let XP= 7000

    if (XP <= 1000) {
        console.log("O herói de Nome " + nome + " está no nível de Ferro");
    } else if (XP >= 1001 && XP <= 2000) {
        console.log("O herói de Nome " + nome + " está no nível de Bronze");
    } else if (XP >= 2001 && XP <= 5000) {
        console.log("O herói de Nome " + nome + " está no nível de Prata");
    } else if (XP >= 5001 && XP <= 7000) {
        console.log("O herói de Nome " + nome + " está no nível de Ouro");
    } else if (XP >= 7001 && XP <= 8000) {
        console.log("O herói de Nome " + nome + " está no nível de Platina");
    } else if (XP >= 8001 && XP <= 9000) {
        console.log("O herói de Nome " + nome + " está no nível de Ascendente");
    } else if (XP >= 9001 && XP <= 10000) {
        console.log("O herói de Nome " + nome + " está no nível de Imortal");
    } else if (XP >= 10001) {
        console.log("O herói de Nome " + nome + " está de nível de Radiante");
    } else {
        console.log("O herói não possui exp invalido");
    }

/*
Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante*/