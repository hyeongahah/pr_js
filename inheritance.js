class Fruit {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  taste() {
    console.log('달다');
  }
}

class Banana extends Fruit {
  // 상속은 extends로 받는다.
  constructor(name, color, size) {
    super(name, color); //매개 변수를 추가하고 싶으면, 부모 생성자를 super()로 받아온 후, 추가한다.
    this.size = size;
  }
  taste() {
    // 부모의 함수(메서드)를 덮어씌우는 것 : overriding
    console.log('닝닝한 맛');
  }
  price() {
    // 그냥 추가하는 것도 가능
    console.log('비싸다');
  }
}

const apple = new Fruit('apple', 'red');
console.log(apple);
apple.taste();

const banana = new Banana(' banana', 'yellow', 'normal');
console.log(banana);
banana.taste();
banana.price();
