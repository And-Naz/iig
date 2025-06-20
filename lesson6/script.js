var a = 1;
let b = 2;
const c = 3;
// const d = 5;

// if (true) {
//    console.log(d);
//    var d = 4;
// }


switch (1) {
   case 1:
      const d = 6;
      break;
   default:
      {
         const d = 7;
      }
      break;
}

{
   var d = 10;
   // const d = 10;
   console.log(d);
   
}

console.log({ a, b, c, d });