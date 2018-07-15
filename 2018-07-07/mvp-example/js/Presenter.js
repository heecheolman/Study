import Model from './Model';

class Presenter {
  constructor() {
    this.model = new Model();
  }
  
  reqPlus() {
    this.model.plus();
  }
  reqMinus() {
    this.model.minus();
  }
  
  get resData() {
    return this.model.getData;
  }
}

export default Presenter;