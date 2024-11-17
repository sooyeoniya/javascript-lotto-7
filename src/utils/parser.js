
/**
 * 문자열을 구분자로 분리하여 숫자 배열로 반환한다.
 * @param {string} array 
 * @returns {Array<number>}
 */
const parseStringToArray = (string) => {
  return string.split(',').map((item) => Number(item.trim()));
}

const parser = {
  parseStringToArray,

}

export default parser;
