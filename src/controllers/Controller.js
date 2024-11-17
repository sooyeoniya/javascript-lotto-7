import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import parser from '../utils/parser.js';
import validateLottoPurchase from '../validations/validateLottoPurchase.js';
import validateWinningNumbers from '../validations/validateWinningNumbers.js';
import validateBonusNumber from '../validations/validateBonusNumber.js';

class Controller {
  async start() {
    const parsedLottoPurchase = await this.#validateLottoPurchaseAsync();
    const parsedWinningNumbers = await this.#validateWinningNumbersAsync();
    const parsedBonusNumber = await this.#validateBonusNumbersAsync(parsedWinningNumbers);
    
  }

  async #validateLottoPurchaseAsync() {
    try {
      const lottoPurchase = await InputView.readLottoPurchase();
      const parsedLottoPurchase = parser.parseStringToNumber(lottoPurchase);
      validateLottoPurchase(parsedLottoPurchase);

      return parsedLottoPurchase;
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      return await this.#validateLottoPurchaseAsync();
    }
  }

  async #validateWinningNumbersAsync() {
    try {
      const winningNumbers = await InputView.readWinningNumbers();
      const parsedWinningNumbers = parser.parseStringToArray(winningNumbers);
      validateWinningNumbers(parsedWinningNumbers);

      return parsedWinningNumbers;
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      return await this.#validateWinningNumbersAsync();
    }
  }

  async #validateBonusNumbersAsync(parsedWinningNumbers) {
    try {
      const bonusNumber = await InputView.readBonusNumber();
      const parsedBonusNumber = parser.parseStringToNumber(bonusNumber);
      validateBonusNumber(parsedBonusNumber, parsedWinningNumbers);

      return parsedBonusNumber;
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      return await this.#validateBonusNumbersAsync(parsedWinningNumbers);
    }
  }
}

export default Controller;
