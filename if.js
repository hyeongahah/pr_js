// 조건이 맞다면 바로 건너뛰는 continue와 그대로 멈추는 break가 있다

for (let i = 0; i < 5; i++) {
  if (i == 3) {
    // continue;
    break;
    console.log('stop');
  }
  console.log(i);
}
