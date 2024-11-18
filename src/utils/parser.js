import { LOTTO_AMOUNT } from '../constants/constants.js';
/**
 * 문자열을 숫자로 반환한다.
 * @param {string} string 
 * @returns {number}
 */
const parseStringToNumber = (string) => {
  return Number(string);
}

/**
 * 문자열을 구분자로 분리하여 숫자 배열로 반환한다.
 * @param {string} array 
 * @returns {Array<number>}
 */
const parseStringToArray = (string) => {
  return string.split(',').map((item) => Number(item.trim()));
}

/**
 * 로또 구입 금액에 따라 발행할 로또 개수를 반환한다.
 * @param {number} amount 
 * @returns {number}
 */
const parseAmountToCount = (amount) => {
  return amount / LOTTO_AMOUNT.MIN;
}

/**
 * 1,000 단위 콤마 및 소수점 한 자리를 포함하여 반환한다.
 * @param {number} number 
 * @returns {number}
 */
const parseDecimalWithCommas = (number) => {
  return number.toLocaleString('ko-KR', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
}

const parser = {
  parseStringToNumber,
  parseStringToArray,
  parseAmountToCount,
  parseDecimalWithCommas,
}

export default parser;
