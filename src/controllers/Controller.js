import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import parser from '../utils/parser.js';
import validateLottoPurchase from '../validations/validateLottoPurchase.js';
import validateWinningNumbers from '../validations/validateWinningNumbers.js';
import validateBonusNumber from '../validations/validateBonusNumber.js';

class Controller {
  async start() {
    const lottoPurchase = await this.#validateLottoPurchaseAsync();
    const winningNumbers = await this.#validateWinningNumbersAsync();
    const bonusNumber = await this.#validateBonusNumbersAsync();
    
  }

  async #validateLottoPurchaseAsync() {
    try {
      const lottoPurchase = await InputView.readLottoPurchase();
      validateLottoPurchase(lottoPurchase);

      return lottoPurchase;
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

  async #validateBonusNumbersAsync() {
    try {
      const bonusNumber = await InputView.readBonusNumber();
      validateBonusNumber(bonusNumber);

      return bonusNumber;
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      return await this.#validateWinningNumbersAsync();
    }
  }
}

export default Controller;
