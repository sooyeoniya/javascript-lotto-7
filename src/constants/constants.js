import deepFreeze from '../utils/deepFreeze.js';

export const LOTTO_AMOUNT = Object.freeze({
  MIN: 1_000,
  MAX: 100_000,
});

export const RANDOM_NUM = Object.freeze({
  MIN: 1,
  MAX: 45,
  COUNT: 6,
});

export const WINNING_NUMBERS = Object.freeze({
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  FIVE_BOUNS: 5.5,
  SIX: 6,
});

export const WINNING_AMOUNT = Object.freeze({
  [WINNING_NUMBERS.THREE]: 5_000,
  [WINNING_NUMBERS.FOUR]: 50_000,
  [WINNING_NUMBERS.FIVE]: 1_500_000,
  [WINNING_NUMBERS.FIVE_BOUNS]: 30_000_000,
  [WINNING_NUMBERS.SIX]: 2_000_000_000,
});

export const INPUT_MESSAGES = Object.freeze({
  LOTTO_PURCHASE: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
});

export const STATISTICS_PREFIX = '\n당첨 통계\n---';

export const OUTPUT_MESSAGES = Object.freeze({
  [WINNING_NUMBERS.THREE]: '3개 일치 (5,000원) - ',
  [WINNING_NUMBERS.FOUR]: '4개 일치 (50,000원) - ',
  [WINNING_NUMBERS.FIVE]: '5개 일치 (1,500,000원) - ',
  [WINNING_NUMBERS.FIVE_BOUNS]: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  [WINNING_NUMBERS.SIX]: '6개 일치 (2,000,000,000원) - ',
});

export const ERROR_MESSAGES = deepFreeze({
  LOTTO_PURCHASE: {
    NUMBER: '[ERROR] 로또 구입 금액이 숫자가 아닙니다. 다시 입력해주세요.',
    INTEGER: '[ERROR] 로또 구입 금액이 정수가 아닙니다. 다시 입력해주세요.',
    RANGE: '[ERROR] 로또 구입 금액은 1,000원 이상 100,000원 이하여야 합니다. 다시 입력해주세요.',
    UNIT_OF_THOUSAND: '[ERROR] 로또 구입 금액이 1,000원 단위가 이닙니다. 다시 입력해주세요.',
  },
  WINNING_NUMBERS: {
    NUMBER: '[ERROR] 당첨 번호가 숫자가 아닙니다. 다시 입력해주세요.',
    INTEGER: '[ERROR] 당첨 번호가 정수가 아닙니다. 다시 입력해주세요.',
    COUNT: '[ERROR] 당첨 번호는 6개여야 합니다. 다시 입력해주세요.',
    RANGE: '[ERROR] 당첨 번호는 1 이상 45 이하의 숫자여야 합니다. 다시 입력해주세요.',
    DUPLICATION: '[ERROR] 당첨 번호 중에 중복되는 숫자가 있습니다. 다시 입력해주세요.',
  },
  BONUS_NUMBER: {
    NUMBER: '[ERROR] 보너스 번호가 숫자가 아닙니다. 다시 입력해주세요.',
    INTEGER: '[ERROR] 보너스 번호가 정수가 아닙니다. 다시 입력해주세요.',
    RANGE: '[ERROR] 보너스 번호는 1 이상 45 이하의 숫자여야 합니다. 다시 입력해주세요.',
    DUPLICATION: '[ERROR] 보너스 번호가 로또 당첨 번호와 중복됩니다. 다시 입력해주세요.',
  },
});
