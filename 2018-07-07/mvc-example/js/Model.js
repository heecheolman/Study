class Model {
  constructor() {
    this.data = 0;
  }
  
  plus() {
    this.data++;
  }
  
  minus() {
    this.data--;
  }
  
  get getData() {
    return this.data;
  }
}

export default Model;