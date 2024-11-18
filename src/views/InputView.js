import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../constants/constants.js';

const readPipe = (promptMessage) => {
  try {
    return Console.readLineAsync(promptMessage);
  } catch (error) {
    throw new Error(error.message);
  }
}

const InputView = {
  async readLottoPurchase() {
    return await readPipe(INPUT_MESSAGES.LOTTO_PURCHASE);
  },

  async readWinningNumbers() {
    return await readPipe(INPUT_MESSAGES.WINNING_NUMBERS);
  },

  async readBonusNumber() {
    return await readPipe(INPUT_MESSAGES.BONUS_NUMBER);
  },
}

export default InputView;
