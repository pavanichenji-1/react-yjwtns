export const additionOfNumbersMethodicalWay = (s1, s2) => {
  console.log('in additionOfNumbersMethodicalWay');
  console.clear();
  let finalArray = [];
  s1 = s1
    .split('')
    .reverse()
    .join('');
  s2 = s2
    .split('')
    .reverse()
    .join('');
  const largerString = Math.max(s1.length, s2.length);
  let carryOn = 0;
  for (let x = 0; x < largerString; x++) {
    let addition = carryOn + Number(s1[x] ?? 0) + Number(s2[x] ?? 0);
    carryOn = (addition - (addition % 10)) / 10;
    console.log('addtion ', addition ?? 0, (addition ?? 0) % 10);
    finalArray.push(
      x === largerString - 1 ? addition ?? 0 : (addition ?? 0) % 10
    );
  }
  const returnVal = finalArray.reverse().join('');
  console.log(returnVal);
  return returnVal;
};
export const additionOfNumbersLibWay = (string1, string2) => {
  console.log('in additionOfNumbersLibWay');
  return Number(string1 ?? 0) + Number(string2 ?? 0);
};
