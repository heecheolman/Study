import Model from './Model';

class ViewModel {
  constructor() {
    this.model = new Model();
    this.button = document.getElementById('addList');
    this.listBox = document.getElementById('listBox');
    // 1. view 에서 요청
    // 2. viewModel 은 model 에 데이터 요청
    // 3. model 에서 데이터를 응답
    // 4. view 는 viewModel 에 대해 데이터 갱신
    this.button.addEventListener('click', () => {
      let listArray;
      this.model.addList();
      listArray = this.model.getList();
      for(const item in listArray) {
        this.listBox.appendChild(listArray[item]);
      }
    });
  }
}

export default ViewModel;