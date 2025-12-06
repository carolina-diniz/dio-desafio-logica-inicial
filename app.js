const name = "Arqueiro Noturno";
const xp = 5000;
let level = "";

const ranking = {
  Ferro: 1000,
  Bronze: 2000,
  Prata: 5000,
  Ouro: 7000,
  Platina: 8000,
  Ascendente: 9000,
  Imortal: 10000,
  Radiante: Infinity,
};

for (const rank in ranking) {
  if (xp <= ranking[rank]) {
    level = rank;
    break;
  }
}

console.log(`O Herói de **${name}** está no nível de **${level}**`);
