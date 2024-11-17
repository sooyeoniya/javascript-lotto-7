import Controller from './controllers/Controller.js';

class App {
  async run() {
    new Controller().start();
  }
}

export default App;
