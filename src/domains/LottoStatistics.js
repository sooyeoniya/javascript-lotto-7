

class LottoStatistics {
  /** @type {Map<number, number>} */ #winningStatistics;

  constructor() {
    this.#winningStatistics = new Map([
      [3, { count: 0, amount: 5_000 }],           // 3개 일치
      [4, { count: 0, amount: 50_000 }],          // 4개 일치
      [5, { count: 0, amount: 1_500_000 }],       // 5개 일치
      [5.5, { count: 0, amount: 30_000_000 }],    // 5개 + 보너스 일치
      [6, { count: 0, amount: 2_000_000_000 }],   // 6개 일치
    ]);
  }

  
}

export default LottoStatistics;
