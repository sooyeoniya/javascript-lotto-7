import { ERROR_MESSAGES, LOTTO_AMOUNT } from '../constants/constants.js';

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
  if (lottoPurchase < LOTTO_AMOUNT.MIN || lottoPurchase > LOTTO_AMOUNT.MAX) {
    throw new Error(ERROR_MESSAGES.LOTTO_PURCHASE.RANGE);
  }
}

const validateUnitOfThousand = (lottoPurchase) => {
  if (lottoPurchase % LOTTO_AMOUNT.MIN !== 0) {
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
