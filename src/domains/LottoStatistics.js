import { WINNING_NUMBERS, WINNING_AMOUNT } from '../constants/constants.js';

class LottoStatistics {
  /** @type {Map<number, { count: number, amount: number }>} */ #statistics;

  constructor() {
    this.#statistics = new Map([
      [WINNING_NUMBERS.THREE, { count: 0, amount: WINNING_AMOUNT[WINNING_NUMBERS.THREE] }],           // 3개 일치
      [WINNING_NUMBERS.FOUR, { count: 0, amount: WINNING_AMOUNT[WINNING_NUMBERS.FOUR] }],             // 4개 일치
      [WINNING_NUMBERS.FIVE, { count: 0, amount: WINNING_AMOUNT[WINNING_NUMBERS.FIVE] }],             // 5개 일치
      [WINNING_NUMBERS.FIVE_BOUNS, { count: 0, amount: WINNING_AMOUNT[WINNING_NUMBERS.FIVE_BOUNS] }], // 5개 + 보너스 일치
      [WINNING_NUMBERS.SIX, { count: 0, amount: WINNING_AMOUNT[WINNING_NUMBERS.SIX] }],               // 6개 일치
    ]);
  }

  /**
   * 전체 당첨 통계를 반환한다.
   * @returns {Map<number, { count: number, amount: number }>}
   */
  getStatistics() {
    return this.#statistics;
  }

  /**
   * 해당 일치 개수의 당첨 횟수를 1 증가시킨다.
   * @param {number} winningCount 
   */
  setRankCount(winningCount) {
    if (this.#statistics.has(winningCount)) {
      const currentRank = this.#statistics.get(winningCount);
      this.#statistics.set(winningCount, { ...currentRank, count: currentRank.count + 1 });
    }
  }

  /**
   * 총 수익률을 반환한다.
   * @param {number} lottoPurchase 
   * @returns {number}
   */
  getEarningRate(lottoPurchase) {
    const totalEarningAmount = this.#totalEarningAmount();
    return totalEarningAmount / lottoPurchase * 100;
  }

  /**
   * 전체 수익 금액을 반환한다.
   * @returns {number}
   */
  #totalEarningAmount() {
    let total = 0;
    this.#statistics.forEach(({ count, amount }) => total += count * amount);
    return total;
  }
}

export default LottoStatistics;
