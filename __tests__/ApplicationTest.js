import App from '../src/App.js';
import { mockQuestions, mockRandoms, getLogSpy } from '../src/utils/testUtils.js';

const runException = async (input) => {
  // given
  const logSpy = getLogSpy();

  const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
  const INPUT_NUMBERS_TO_END = ['1000', '1,2,3,4,5,6', '7'];

  mockRandoms([RANDOM_NUMBERS_TO_END]);
  mockQuestions([input, ...INPUT_NUMBERS_TO_END]);

  // when
  const app = new App();
  await app.run();

  // then
  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
};

describe('로또 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it.each([
    [
      [
        [8, 21, 23, 41, 42, 43],
        [3, 5, 11, 16, 32, 38],
        [7, 11, 16, 35, 36, 44],
        [1, 8, 11, 31, 41, 42],
        [13, 14, 16, 38, 42, 45],
        [7, 11, 30, 40, 42, 43],
        [2, 13, 22, 32, 38, 45],
        [1, 3, 5, 14, 22, 45],
      ],
      ['8000', '1,2,3,4,5,6', '7'],
      [
        '8개를 구매했습니다.',
        '[8, 21, 23, 41, 42, 43]',
        '[3, 5, 11, 16, 32, 38]',
        '[7, 11, 16, 35, 36, 44]',
        '[1, 8, 11, 31, 41, 42]',
        '[13, 14, 16, 38, 42, 45]',
        '[7, 11, 30, 40, 42, 43]',
        '[2, 13, 22, 32, 38, 45]',
        '[1, 3, 5, 14, 22, 45]',
        '3개 일치 (5,000원) - 1개',
        '4개 일치 (50,000원) - 0개',
        '5개 일치 (1,500,000원) - 0개',
        '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
        '6개 일치 (2,000,000,000원) - 0개',
        '총 수익률은 62.5%입니다.',
      ]
    ],
    [
      [
        [11, 32, 5, 41, 15, 18],
        [12, 29, 37, 20, 22, 10],
        [7, 19, 10, 21, 34, 11],
      ],
      ['3000', '10,11,12,19,20,21', '7'],
      [
        '3개를 구매했습니다.',
        '[11, 32, 5, 41, 15, 18]',
        '[12, 29, 37, 20, 22, 10]',
        '[7, 19, 10, 21, 34, 11]',
        '3개 일치 (5,000원) - 1개',
        '4개 일치 (50,000원) - 1개',
        '5개 일치 (1,500,000원) - 0개',
        '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
        '6개 일치 (2,000,000,000원) - 0개',
        '총 수익률은 1,833.3%입니다.',
      ]
    ]
  ])('기능 테스트', async (mockNumbers, inputs, expectedLogs) => {
    // given
    const logSpy = getLogSpy();

    mockRandoms(mockNumbers);
    mockQuestions(inputs);

    // when
    const app = new App();
    await app.run();

    // then
    const logs = expectedLogs;

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  it.each([
    ['1000j'], ['1000.1'], ['1001'], ['999'], ['1000000'],
  ])('예외 테스트', async (errorInput) => {
    await runException(errorInput);
  });
});
