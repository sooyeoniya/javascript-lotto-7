import LottoIssue from '../domains/LottoIssue.js';
import LottoStatistics from '../domains/LottoStatistics.js';
import { WINNING_NUMBERS } from '../constants/constants.js';

class LottoService {
  /** @type {LottoIssue} */ #lottoIssue;
  /** @type {LottoStatistics} */ #lottoStatistics;

  constructor(lottoIssue, lottoStatistics) {
    this.#lottoIssue = lottoIssue;
    this.#lottoStatistics = lottoStatistics;
  }

  /**
   * 사용자가 구매한 로또 번호와 당첨 번호를 비교하여 각 로또 별 당첨 등수를 저장한다.
   * @param {Array<number>} winningNumbers 
   * @param {number} bonusNumber 
   */
  calculateWinningStatistics(winningNumbers, bonusNumber) {
    this.#lottoIssue.getIssuedNumbers().map((issuedNumber) => {
      let winningCount = this.#matchWinningNumbersCount(issuedNumber, winningNumbers);
      if (winningCount === WINNING_NUMBERS.FIVE) winningCount = this.#matchBonusNumber(issuedNumber, bonusNumber);
      this.#lottoStatistics.setRankCount(winningCount);
    });
  }

  /**
   * 발행한 로또 번호와 당첨 번호를 비교하여 일치하는 요소의 개수를 반환한다.
   * @param {Array<number>} issuedNumber 
   * @param {Array<number>} winningNumbers 
   * @returns {number}
   */
  #matchWinningNumbersCount(issuedNumber, winningNumbers) {
    const matchArray = issuedNumber.filter((number) => winningNumbers.includes(number));
    return matchArray.length;
  }

  /**
   * 발행한 로또 번호와 보너스 번호가 일치하면 5.5, 일치하지 않으면 5를 반환한다.
   * @param {Array<number>} issuedNumber 
   * @param {number} bonusNumber 
   * @returns {number}
   */
  #matchBonusNumber(issuedNumber, bonusNumber) {
    const isMatch = (number) => number === bonusNumber;
    if (issuedNumber.some(isMatch)) return WINNING_NUMBERS.FIVE_BOUNS;
    return WINNING_NUMBERS.FIVE;
  }
}

export default LottoService;
