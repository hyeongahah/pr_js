class Fruit {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    // this.intro = `${this.name}의 색깔은 ${this.color}입니다`;
  }
  // 읽을 때 호출
  get intros() {
    return `${this.name}의 색깔은 ${this.color}입니다`;
  }
  // 할당할 때 호출
  set size(val) {
    console.log(val);
  }
}
// 생성자가 한번 만들어 진 후에는 일부 property를 업데이트 해도 연관된 다른 속성에 영향을 주지 않는다.
const apple = new Fruit('apple', 'red');
console.log(apple.intros);
apple.color = 'black';
// 업데이트를 연동하려면 속성이 아닌 함수로 입력해야하고, 함수를 호출할 시, 속성처럼 호출하기 위해서는 get(접근자)이라는 단어를 붙여준다.
console.log(apple.intros);
apple.size = 'small'; // set으로 할당함
