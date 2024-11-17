import { Console } from '@woowacourse/mission-utils';

const readPipe = (promptMessage) => {
  try {
    return Console.readLineAsync(promptMessage);
  } catch (error) {
    throw new Error(error.message);
  }
}

const InputView = {
  async readLottoPurchase() {
    return await readPipe('구입금액을 입력해 주세요.\n');
  },

  async readWinningNumber() {
    return await readPipe('당첨 번호를 입력해 주세요.\n');
  },

  async readBonusNumber() {
    return await readPipe('보너스 번호를 입력해 주세요.\n');
  },
}

export default InputView;
