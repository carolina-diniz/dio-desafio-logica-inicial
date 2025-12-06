function getRankingByScore(score) {
  const rankings = {
    Ferro: 10,
    Bronze: 20,
    Prata: 50,
    Ouro: 80,
    Diamante: 90,
    Lendário: 100,
    Imortal: Infinity,
  };

  for (const rank in rankings) {
    if (score <= rankings[rank]) {
      return rank;
    }
  }
}

function getScore(wins, losses) {
  return wins - losses;
}

const user = {
  wins: 85,
  losses: 30,
};

user.score = getScore(user.wins, user.losses);
user.ranking = getRankingByScore(user.score);

console.log(
  `O Herói tem um saldo de ${user.score} está no nível de ${user.ranking}`
);
