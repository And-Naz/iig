// console.log(1 + 2);

// let i = 0;

// i += 5;

// const condition = true

// if (7 > 0 || !condition) {

// } else if () {

// } else {

// }

// const num = 1;

// switch (num) {
//    case 1:
//    case 2:
//       console.log(1);
//       break;
//    default:
//       console.log(2);
//       break;
// }

// console.log( "1.0" == 1 );
// console.log( 1 === "1");

// console.log( "1.0" != 1 );
// console.log( 1 !== "1");

// const a = (
//    true
//       ? false
//          ? 5
//          : 10
//       : 10
// );

// let i, j, z;
// loop3: for (z = 0; z < 3; z++) {
//    loop1: for (i = 0; i < 3; i++) {
//       loop2: for (j = 0; j < 3; j++) {
//          if (i === 1 && j === 1) {
//             break loop1;
//          }
//          console.log(`i = ${i}, j = ${j}`);
//       }
//    }
// }

// while (condition) {

// }

// do {} while (false)

const obj = { id: 1, name: "John", age: 24 }
console.log(obj);

const arr = [1, "dfgdx", {}];

for (const valod in arr) {
   console.log(arr[valod]);
}

for (const element of arr) {
   console.log(element);
   
}


with({ id: 1 }) {
   console.log(id);
}