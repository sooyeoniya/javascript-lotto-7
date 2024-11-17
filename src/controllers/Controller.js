import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class Controller {
  async start() {
    const lottoPurchase = await InputView.readLottoPurchase();
    const winningNumber = await InputView.readWinningNumber();
    const bonusNumber = await InputView.readBonusNumber();

    
  }

}

export default Controller;
