import { ERROR_MESSAGES } from '../constants/constants.js';

const validateNumber = (lottoPurchase) => {
  if (isNaN(lottoPurchase)) {
    throw new Error(ERROR_MESSAGES.LOTTO_PURCHASE.NUMBER);
  }
}

const validateInteger = (lottoPurchase) => {
  if (!Number.isInteger(lottoPurchase)) {
    throw new Error(ERROR_MESSAGES.LOTTO_PURCHASE.INTEGER);
  }
}

const validateRange = (lottoPurchase) => {
  if (lottoPurchase < 1_000 || lottoPurchase > 100_000) {
    throw new Error(ERROR_MESSAGES.LOTTO_PURCHASE.RANGE);
  }
}

const validateUnitOfThousand = (lottoPurchase) => {
  if (lottoPurchase % 1_000 !== 0) {
    throw new Error(ERROR_MESSAGES.LOTTO_PURCHASE.UNIT_OF_THOUSAND);
  }
}

/**
 * 로또 구입 금액 유효성 검증
 * @param {number} lottoPurchase 
 */
const validateLottoPurchase = (lottoPurchase) => {
  validateNumber(lottoPurchase);
  validateInteger(lottoPurchase);
  validateRange(lottoPurchase);
  validateUnitOfThousand(lottoPurchase);
}

export default validateLottoPurchase;
