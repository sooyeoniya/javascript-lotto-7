import parser from '../utils/parser.js';
import { Random } from '@woowacourse/mission-utils';
import { RANDOM_NUM } from '../constants/constants.js';

class LottoIssue {
  /** @type {Array<Array<number>>} */ #issuedNumbers = [];

  /**
   * 랜덤으로 발행된 로또 번호들을 반환한다.
   * @returns {Array<Array<number>>}
   */
  getIssuedNumbers() {
    return this.#issuedNumbers;
  }

  /**
   * 로또 구입 금액에 따라 그 개수만큼 로또를 발행하여 #issuedNumbers에 저장한다.
   * @param {number} lottoPurchase 
   */
  issueLotto(lottoPurchase) {
    const issueCount = parser.parseAmountToCount(lottoPurchase);
    for (let count = 0; count < issueCount; count++) {
      const issuedNumber = Random.pickUniqueNumbersInRange(RANDOM_NUM.MIN, RANDOM_NUM.MAX, RANDOM_NUM.COUNT);
      this.#issuedNumbers.push(issuedNumber);
    }
  }
}

export default LottoIssue;
