import Presenter from './Presenter';

class View {
  constructor() {
    // Presenter
    this.presenter = new Presenter();
    
    this.plus = document.getElementById('plus');
    this.minus = document.getElementById('minus');
    
    this.view = document.getElementById('result');
    
    this.plus.addEventListener('click', () => {
      this.presenter.reqPlus();
      this.view.innerHTML = this.presenter.resData;
    });
    this.minus.addEventListener('click', () => {
      this.presenter.reqMinus();
      this.view.innerHTML = this.presenter.resData;
    });
  }
}

export default View;