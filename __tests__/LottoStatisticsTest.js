import LottoStatistics from '../src/domains/LottoStatistics.js';

describe('LottoStatistics 클래스 테스트', () => {
  let lottoStatistics;

  beforeEach(() => {
    lottoStatistics = new LottoStatistics();
  });

  describe('setRankCount와 getStatistics 함수 테스트', () => {
    it('해당 일치 개수의 당첨 횟수를 1 증가하고 전체 당첨 통계를 반환한다.', () => {
      // given
      const winningCount = 3; // 현재 로또 번호가 당첨 번호와 3개 일치하는 경우

      // when
      lottoStatistics.setRankCount(winningCount);
      const statistics = lottoStatistics.getStatistics();

      // then
      expect(statistics).toEqual(
        new Map([
          [3, { count: 1, amount: 5_000 }], // 1개 증가
          [4, { count: 0, amount: 50_000 }],
          [5, { count: 0, amount: 1_500_000 }],
          [5.5, { count: 0, amount: 30_000_000 }],
          [6, { count: 0, amount: 2_000_000_000 }],
        ])
      );
    });    
  });

  describe('getEarningRate 함수 테스트', () => {
    it('총 수익률을 계산하여 반환한다.', () => {
      // given
      const lottoPurchase = 1_000; // 로또 구입 금액 1,000원
      const firstWinningCount = 3; // 3개 일치
      const secondWinningCount = 4; // 4개 일치

      // when
      lottoStatistics.setRankCount(firstWinningCount);
      lottoStatistics.setRankCount(secondWinningCount);
      const earningRate = lottoStatistics.getEarningRate(lottoPurchase);

      // then
      expect(earningRate).toBe((1 * 5_000 + 1 * 50_000) / 1_000 * 100);
    });
  });
});
