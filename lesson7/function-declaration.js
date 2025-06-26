
function sum(arg1, arg2) {
   console.log(arguments);
   console.log(sum.length);
   
   return arg1 + arg2;
}

// console.log(typeof sum);

// console.log(sum);

// console.dir(sum);

// console.log(sum.length);

// console.log(sum(1, 2, null, undefined, "just"));

// function sum2() {
//    let retVal = 0;
//    for (let i = 0; i < arguments.length; i++) {
//       retVal += arguments[i];
//    }
//    return retVal
// }

function fn(param1) {
   param1 += 1;
   console.log(param1);
}

function fn2(param) {
   param.id = 1;
}

const a = 1;
let b = "second";
var c = {};

//#region tmp

console.log({
   a, b, c
});

// fn(a);
// fn(b);
// fn(c);


// fn2(a);
// fn2(b);
// fn2(c);

console.log({
   a, b, c
});

//#endregion

function fn3() {
   b = "miban";
   c = function () {}
   const a = 5;
}
// debugger
fn3()