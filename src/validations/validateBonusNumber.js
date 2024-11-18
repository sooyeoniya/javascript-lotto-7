import { ERROR_MESSAGES } from '../constants/constants.js';

const validateNumber = (bonusNumber) => {
  if (isNaN(bonusNumber)) {
    throw new Error(ERROR_MESSAGES.BONUS_NUMBER.NUMBER);
  }
}

const validateInteger = (bonusNumber) => {
  if (!Number.isInteger(bonusNumber)) {
    throw new Error(ERROR_MESSAGES.BONUS_NUMBER.INTEGER);
  }
}

const validateRange = (bonusNumber) => {
  if (bonusNumber < 1 || bonusNumber > 45) {
    throw new Error(ERROR_MESSAGES.BONUS_NUMBER.RANGE);
  }
}

const validateDuplication = (bonusNumber, winningNumbers) => {
  const isDuplicate = (number) => number === bonusNumber;
  if (winningNumbers.some(isDuplicate)) {
    throw new Error(ERROR_MESSAGES.BONUS_NUMBER.DUPLICATION);
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
