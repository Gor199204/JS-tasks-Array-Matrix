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

// // create matrix 
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

// const b = (matrix(n, m));
// // console.log(b);

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

// let min = 0;
// for (let i = 0; i < s.length; i++) {
//   let min = s[0][i]
//   for (let j = 0; j < s[i].length; j++) {
//     if (s[j][i] < min) {
//       min = s[j][i];
//     }
//   }
//   console.log(`min = ${min}`);
// }


// task 42 page 124

// const s = (matrix(n, m));
// console.log(s);
// arrPositive = [];
// for (let i = 0; i < s.length; i++) {
//     let positive = 0
//     for (let j = 0; j < s[i].length; j++) {
//       if (s[i][j] >= 0 && s[i][j] !== (-0)) {
//         positive++;
//       }
//     }
//     arrPositive.push(positive);
//   }

//   console.log(arrPositive);



// // task 43 page 124

// const c = (matrix(n, m));

// // console.log(c);
// let sum = 0 ;

// for (let i = 0; i < c.length; i++) {
//   sum = 0
//   let min = c[i][0];
//   for (let j = 1; j < c[i].length; j++) {
//     if(min >  c[i][j]) {
//       sum += min;
//       sum += c[i][j];
//       min = c[i][j];
//     }
//   }
//   console.log(sum);
// }

// // task 44 page 126

// function matrix(n, m) {
//   const arrRow = [];
//   const arr = [];
//   for (let i = 0; i < n; i++) {
//     arrRow.push(Math.floor(Math.random() * 10));
//   }
//   arr.push(arrRow);
//   for (let i = 1; i < m; i++) {
//     const row = [];
//     for (let j = 0; j < n; j++) {
//       row.push(Math.pow(arrRow[j], i+1))
//     }
//     arr[i] = (row);
//   }

//   return arr;
// }

// const b = matrix(n, m);
// console.log(b);




