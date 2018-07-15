import Model from './Model';
import View from './View';

class Controller {
  constructor() {
    // model
    this.model = new Model();
    // view
    this.view = new View();
  
    // controller
    this.plus = document.getElementById('plus');
    this.minus = document.getElementById('minus');
    
    // add event
    this.plus.addEventListener('click', () => {
      this.model.plus();
      this.view.render(this.model.getData);
    });
    this.minus.addEventListener('click', () => {
      this.model.minus();
      this.view.render(this.model.getData);
    });
  }
}

export default Controller;