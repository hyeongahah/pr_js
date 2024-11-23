/* 화살표 함수 */
let add = (a, b) => {
  return a + b;
};
console.log(add(1, 2));

let mum = (c, d) => c - d;
console.log(mum(53, 21));

/* 생성자 함수 - 함수명에 대문자로 시작하면 됨 */
function Fruit(name, color) {
  this.name = name;
  this.color = color;
  this.intro = () => {
    console.log(`${this.name}의 색깔은 ${this.color}입니다.`);
  };
  return this; // 생략 가능
}

const apple = new Fruit('apple', 'red');
const banana = new Fruit('banana', 'yellow');
console.log(apple.color);
apple.intro();
