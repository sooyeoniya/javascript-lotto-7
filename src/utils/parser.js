
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

const parser = {
  parseStringToNumber,
  parseStringToArray,

}

export default parser;
