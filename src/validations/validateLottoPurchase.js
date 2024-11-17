const validateNumber = (lottoPurchase) => {
  if (isNaN(lottoPurchase)) {
    throw new Error('[ERROR] 로또 구입 금액이 숫자가 아닙니다. 다시 입력해주세요.');
  }
}

const validateInteger = (lottoPurchase) => {
  if (!Number.isInteger(lottoPurchase)) {
    throw new Error('[ERROR] 로또 구입 금액이 정수가 아닙니다. 다시 입력해주세요.');
  }
}

const validateRange = (lottoPurchase) => {
  if (lottoPurchase < 1_000 || lottoPurchase > 100_000) {
    throw new Error('[ERROR] 로또 구입 금액은 1,000원 이상 100,000원 이하여야 합니다. 다시 입력해주세요');
  }
}

const validateUnitOfThousand = (lottoPurchase) => {
  if (lottoPurchase % 1_000 !== 0) {
    throw new Error('[ERROR] 로또 구입 금액이 1,000원 단위가 이닙니다. 다시 입력해주세요.');
  }
}

const validateLottoPurchase = (lottoPurchase) => {
  validateNumber(lottoPurchase);
  validateInteger(lottoPurchase);
  validateRange(lottoPurchase);
  validateUnitOfThousand(lottoPurchase);
}

export default validateLottoPurchase;
