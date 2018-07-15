class View {
  constructor() {
    this.view = document.getElementById('result');
  }
  
  render(data) {
    this.view.innerHTML = data;
  }
}

export default View;