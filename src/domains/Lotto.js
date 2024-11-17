import validateWinningNumbers from '../validations/validateWinningNumbers.js';

/**
 * 과제에서 미리 주어진 LottoTest의 테스트 케이스에 맞춰 Lotto 클래스에 유효성 검사를 진행하도록 함
 */
class Lotto {
  /** @type {Array<number>} */ #winningNumbers;

  constructor(winningNumbers) {
    validateWinningNumbers(winningNumbers);
    this.#winningNumbers = winningNumbers;
  }

  /**
   * 로또 당첨 번호를 반환한다.
   * @returns {Array<number>}
   */
  getWinningNumbers() {
    return this.#winningNumbers;
  }
}

export default Lotto;
