function cardGame(A: number[], B: number[]) {
  let aScore = 0;
  let bScore = 0;
  let lastWinner: string = 'D';

  for (let i = 0; i < 10; i++) {
    if (A[i] > B[i]) {
      aScore += 3;
      lastWinner = 'A';
    } else if (A[i] < B[i]) {
      bScore += 3;
      lastWinner = 'B';
    } else {
      aScore += 1;
      bScore += 1;
    }
  }

  return {
    A: aScore,
    B: bScore,
    result: aScore === bScore ? lastWinner : aScore > bScore ? 'A' : 'B',
  };
}

export default cardGame;