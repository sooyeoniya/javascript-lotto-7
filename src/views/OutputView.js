import { Console } from '@woowacourse/mission-utils';
import parser from '../utils/parser.js';
import { STATISTICS_PREFIX, OUTPUT_MESSAGES, WINNING_NUMBERS } from '../constants/constants.js';

const OutputView = {
  /**
   * 사용자가 발행한 로또 번호를 출력한다.
   * @param {Array<number>} lottoNumbers 
   */
  printIssuedLottoNumbers(issuedNumbers) {
    Console.print(`\n${issuedNumbers.length}개를 구매했습니다.`);

    issuedNumbers.forEach((issuedNumber) => {
      Console.print(`[${issuedNumber.join(', ')}]`);
    });
  },

  /**
   * 각 로또 당첨 등수 별 당첨 개수를 출력한다.
   * @param {Map<number, { count: number, amount: number }>} statistics 
   */
  printWinningStatistics(statistics) {
    Console.print(STATISTICS_PREFIX);
    Console.print(`${OUTPUT_MESSAGES[WINNING_NUMBERS.THREE]}${statistics.get(WINNING_NUMBERS.THREE).count}개`);
    Console.print(`${OUTPUT_MESSAGES[WINNING_NUMBERS.FOUR]}${statistics.get(WINNING_NUMBERS.FOUR).count}개`);
    Console.print(`${OUTPUT_MESSAGES[WINNING_NUMBERS.FIVE]}${statistics.get(WINNING_NUMBERS.FIVE).count}개`);
    Console.print(`${OUTPUT_MESSAGES[WINNING_NUMBERS.FIVE_BOUNS]}${statistics.get(WINNING_NUMBERS.FIVE_BOUNS).count}개`);
    Console.print(`${OUTPUT_MESSAGES[WINNING_NUMBERS.SIX]}${statistics.get(WINNING_NUMBERS.SIX).count}개)`);
  },

  /**
   * 총 수익률을 출력한다.
   * @param {number} earningRate 
   */
  printEarningRate(earningRate) {
    Console.print(`총 수익률은 ${parser.parseDecimalWithCommas(earningRate)}%입니다.`);
  },

  /**
   * 에러 메시지를 출력한다.
   * @param {string} errorMessage 
   */
  printErrorMessage(errorMessage) {
    Console.print(errorMessage);
  },
}

export default OutputView;
