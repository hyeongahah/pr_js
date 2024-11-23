/* 축약하기 */
const a = 0;
const b = 1;
// const coo = { a: a, b: b };
const coo = { a, b };
console.log(coo);

function obj(name, age) {
  // return { name: name, age: age };
  return { name, age };
}

/** 메서드 활용 */
const apple = {
  name: 'apple',
  color: function () {
    console.log(`${this.name}의 색깔은 red입니다.`); // 객체 안에서 자기 자신의 속성에 접근할 때 this를 사용
  },
};
apple.color();
