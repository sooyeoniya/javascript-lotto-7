import { Console } from '@woowacourse/mission-utils';
import parser from '../utils/parser.js';

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
    Console.print('\n당첨 통계\n---');
    Console.print(`3개 일치 (5,000원) - ${statistics.get(3).count}개`);
    Console.print(`4개 일치 (50,000원) - ${statistics.get(4).count}개`);
    Console.print(`5개 일치 (1,500,000원) - ${statistics.get(5).count}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${statistics.get(5.5).count}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${statistics.get(6).count}개)`);
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
