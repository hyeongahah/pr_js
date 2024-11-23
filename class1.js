class Fruit {
  /* 다른 언어에서 사용하는 접근 제어자가 js는 없지만, 구분 시킬 수는 있다
  private = #, public = 기본값
  #type = fruit;  라고 하면 생성자에서 임의로 값을 바꾸지 못한다. 클래스 내부에서만 호출 가능
  ex> apple.color = 'black' 이 안 됨 */

  type = fruit; // 인스턴스 생성 전에 초기화가 필요할 때에는 constructor 밖에서 입력해야함
  // 클래스 레벨의 static -> 클래스명으로만 호출이 가능
  static FRUIT_COUNT = 5;

  // constructor는 생성자 함수와 같은 역할, new로 객체를 생성한다
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  // static을 붙이면 class 레벨의 메서드 -> 클래스명으로만 호출이 가능. 따라서 this를 참조할 수 없음 (빈 템플릿(class)을 호출하기 때문)
  static makeFruit() {
    return new Fruit('Banana', 'yellow');
  }
  // static이 안 붙으면 인스턴스 레벨의 메서드로서 new를 통해서만 생성이 가능하
  // 생성자 함수와 다르게 클래스에서는 함수를 객체로 넣을 때에는 function이나 this를 붙이면 안 된다 (오류 남)
  intro = () => {
    console.log(`${this.name}의 색깔은 ${this.color}입니다.`);
  };
}

// 생성자
const apple = new Fruit('apple', 'red');
console.log(apple.color);
apple.intro();

// 클래스에서 static을 붙였을 때
const banana = Fruit.makeFruit();
console.log(banana);

// 클래스 레벨에서 초기화 했을 때
console.log(Fruit.FRUIT_COUNT);
