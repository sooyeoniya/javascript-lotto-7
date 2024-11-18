import deepFreeze from '../utils/deepFreeze.js';

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
