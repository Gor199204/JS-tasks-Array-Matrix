// chech array length
function checkInputNumber() {
  let num = +prompt("Enter numbers");
  if (isNaN(num) || !Number.isInteger(num) || num > 10) {
    alert("Wrong input number");
    return checkInputNumber();
  }

  return num;
}

const n = checkInputNumber();
const m = checkInputNumber();


// Random number
function randomNumber() {
  let number = Math.trunc(Math.random() * 100);
  if (Math.random () * 10 < 5) {
    return (-number);
  }
  return number;
}

// create matrix 
function matrix(n, m) {
  const arrMatrix = [];
  for (let i = 0; i < n; i++) {
    const arrElement = [];
    for (let j = 0; j < m; j++) {
      arrElement.push(randomNumber());
    }
    arrMatrix.push(arrElement);
  }
  return arrMatrix;
}

const b = (matrix(n, m));
// console.log(b);

// tasks 38 page 120
// let sum = 0;
// let index = 0;

// for (let i = 0; i < b.length; i++) {
//     for( let j = 0; j < b[i].length; j++) {
//         if (b[i][j] > 0) {
//             sum += b[i][j];
//             index ++;
//         }
//     }
// }

// // console.log(sum);
// // console.log(index);
// const positiveMidNumber = sum / index;
// console.log(positiveMidNumber);


// // tasks 39 page 120
// let minElement = 0;

// for (let i = 0; i < b.length; i++) {
//     for( let j = 0; j < b[i].length; j++) {
//         if (b[i][j] < minElement) {
//             minElement = b[i][j];
//         }
//     }
// }

// console.log(minElement);

// // tasks 40 page 121
// function checkNumberPosition() {
//     let num = +prompt("Enter number position");
//     if (isNaN(num) || !Number.isInteger(num) || num >= m) {
//       alert("Wrong input number");
//       return checkNumberPosition();
//     }
  
//     return num;
//   }
  
// const k = checkNumberPosition();

// const c = (matrix(n, m));
// console.log(c);

// for(let i = 0; i < c.length; i++){
//   for(let j = i + 1; j < c.length; j++){
//       if(c[j][k] > c[i][k]){
//           let z = c[j][k];
//           c[j][k] = c[i][k];
//           c[i][k] = z;
//       }
//   }
// }
// console.log(c);

// task 41 page 123

// const s = (matrix(n, m));
// console.log(s);
// for (let i = 0; i < s.length; i++) {
//   for (let j = 1; j < s.length; j++) {
//     if (s[i][j] > min) {
//       min = s[i][j];
//     }
//   }
//   console.log(`min = ${min}`);

// }
