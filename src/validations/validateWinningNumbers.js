import { ERROR_MESSAGES } from '../constants/constants.js';

const validateNumber = (winningNumbers) => {
  const isNumber = (number) => isNaN(number);
  if (winningNumbers.some(isNumber)) {
    throw new Error(ERROR_MESSAGES.WINNING_NUMBERS.NUMBER);
  }
}

const validateInteger = (winningNumbers) => {
  const isInteger = (number) => !Number.isInteger(number);
  if (winningNumbers.some(isInteger)) {
    throw new Error(ERROR_MESSAGES.WINNING_NUMBERS.INTEGER);
  }
}

const validateCount = (winningNumbers) => {
  if (winningNumbers.length !== 6) {
    throw new Error(ERROR_MESSAGES.WINNING_NUMBERS.COUNT);
  }
}

const validateRange = (winningNumbers) => {
  const isRangeValid = (number) => number < 1 || number > 45;
  if (winningNumbers.some(isRangeValid)) {
    throw new Error(ERROR_MESSAGES.WINNING_NUMBERS.RANGE);
  }
}

const validateDuplication = (winningNumbers) => {
  const winningNumbersSet = new Set(winningNumbers);
  if (winningNumbers.length !== winningNumbersSet.size) {
    throw new Error(ERROR_MESSAGES.WINNING_NUMBERS.DUPLICATION);
  }
}

/**
 * 로또 당첨 번호 유효성 검증
 * @param {Array<number>} winningNumbers 
 */
const validateWinningNumbers = (winningNumbers) => {
  validateNumber(winningNumbers);
  validateInteger(winningNumbers);
  validateCount(winningNumbers);
  validateRange(winningNumbers);
  validateDuplication(winningNumbers);
}

export default validateWinningNumbers;
