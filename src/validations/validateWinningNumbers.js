const validateNumber = (winningNumbers) => {
  const isNumber = (number) => isNaN(number);
  if (winningNumbers.some(isNumber)) {
    throw new Error('[ERROR] 당첨 번호가 숫자가 아닙니다. 다시 입력해주세요.');
  }
}

const validateInteger = (winningNumbers) => {
  const isInteger = (number) => !Number.isInteger(number);
  if (winningNumbers.some(isInteger)) {
    throw new Error('[ERROR] 당첨 번호가 정수가 아닙니다. 다시 입력해주세요.');
  }
}

const validateCount = (winningNumbers) => {
  if (winningNumbers.length !== 6) {
    throw new Error('[ERROR] 당첨 번호는 6개여야 합니다. 다시 입력해주세요.');
  }
}

const validateRange = (winningNumbers) => {
  const isRangeValid = (number) => number < 1 || number > 45;
  if (winningNumbers.some(isRangeValid)) {
    throw new Error('[ERROR] 당첨 번호는 1 이상 45 이하의 숫자여야 합니다. 다시 입력해주세요.');
  }
}

const validateDuplication = (winningNumbers) => {
  const winningNumbersSet = new Set(winningNumbers);
  if (winningNumbers.length !== winningNumbersSet.size) {
    throw new Error('[ERROR] 당첨 번호 중에 중복되는 숫자가 있습니다. 다시 입력해주세요.');
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
