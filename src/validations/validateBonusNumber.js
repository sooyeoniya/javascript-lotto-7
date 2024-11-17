const validateNumber = (bonusNumber) => {
  if (isNaN(bonusNumber)) {
    throw new Error('[ERROR] 보너스 번호가 숫자가 아닙니다. 다시 입력해주세요.');
  }
}

const validateInteger = (bonusNumber) => {
  if (!Number.isInteger(bonusNumber)) {
    throw new Error('[ERROR] 보너스 번호가 정수가 아닙니다. 다시 입력해주세요.');
  }
}

const validateRange = (bonusNumber) => {
  if (bonusNumber < 1 || bonusNumber > 45) {
    throw new Error('[ERROR] 보너스 번호는 1 이상 45 이하의 숫자여야 합니다. 다시 입력해주세요.');
  }
}

const validateDuplication = (bonusNumber, winningNumbers) => {
  const isDuplicate = (number) => number === bonusNumber;
  if (winningNumbers.some(isDuplicate)) {
    throw new Error('[ERROR] 보너스 번호가 로또 당첨 번호와 중복됩니다. 다시 입력해주세요.');
  }
}

/**
 * 보너스 번호 유효성 검증
 * @param {number} bonusNumber 
 */
const validateBonusNumber = (bonusNumber, winningNumbers) => {
  validateNumber(bonusNumber);
  validateInteger(bonusNumber);
  validateRange(bonusNumber);
  validateDuplication(bonusNumber, winningNumbers);
}

export default validateBonusNumber;
