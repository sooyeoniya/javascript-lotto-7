import LottoIssue from '../src/domains/LottoIssue.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { mockRandoms } from '../src/utils/testUtils.js';

describe('LottoIssue 클래스 테스트', () => {
  let lottoIssue;

  beforeEach(() => {
    lottoIssue = new LottoIssue();
  });

  describe('issueLotto와 getIssuedNumbers 함수 테스트', () => {
    it('로또 구입 금액에 따라 로또 번호를 발행하고 반환한다.', () => {
      // given
      const lottoPurchase = 3_000;
      const mockNumbers = [
        [8, 21, 23, 41, 42, 43],
        [3, 5, 11, 16, 32, 38],
        [7, 11, 16, 35, 36, 44],
      ];
      mockRandoms(mockNumbers);

      // when
      lottoIssue.issueLotto(lottoPurchase);

      // then
      expect(lottoIssue.getIssuedNumbers()).toEqual(mockNumbers);
      expect(MissionUtils.Random.pickUniqueNumbersInRange).toHaveBeenCalledTimes(3); // 3번 호출
    });
  });
});
