import LottoIssue from '../src/domains/LottoIssue';
import LottoStatistics from '../src/domains/LottoStatistics.js';
import LottoService from '../src/services/LottoService.js';

jest.mock('../src/domains/LottoIssue.js');
jest.mock('../src/domains/LottoStatistics.js');

describe('LottoService 클래스 테스트', () => {
  let lottoIssue, lottoStatistics, lottoService;
  
  beforeEach(() => {
    lottoIssue = new LottoIssue();
    jest.spyOn(lottoIssue, 'getIssuedNumbers').mockReturnValue([
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
    ]);
    lottoStatistics = new LottoStatistics();
    lottoService = new LottoService(lottoIssue, lottoStatistics);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('calculateWinningStatistics 함수 테스트', () => {
    it('사용자가 구매한 로또 번호와 당첨 번호를 비교하여 각 로또 별 당첨 등수를 저장한다.', () => {
      // given
      const winningNumbers = [11, 16, 3, 4, 5, 7];
      const bonusNumber = 6;
      const firstWinningCount = 4; // 첫 번째 로또 4개 일치
      const secondWinningCount = 3; // 두 번째 로또 3개 일치

      // when
      lottoService.calculateWinningStatistics(winningNumbers, bonusNumber);

      // then
      expect(lottoStatistics.setRankCount).toHaveBeenCalledTimes(2); // 로또가 2개 발행되었으므로 2번 호출되었는지 확인
      expect(lottoStatistics.setRankCount).toHaveBeenCalledWith(firstWinningCount);
      expect(lottoStatistics.setRankCount).toHaveBeenCalledWith(secondWinningCount);
    });
  });
});
