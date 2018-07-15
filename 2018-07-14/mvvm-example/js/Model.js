class Model {
  constructor() {
    // DOM 을 담는 배열
    this.list = [];
    this.data = 0;
  }
  
  addList() {
    // <li></li> 노드생성
    let ele = document.createElement('li');
    // data 주입
    ele.innerHTML = (this.data++).toString();
    // list 배열에 DOM push
    this.list.push(ele);
  }
  
  // DOM 을 담는 배열 return
  getList() {
    return this.list;
  }
}

export default Model;