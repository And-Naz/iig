const decrement = (count) => {
   console.log(count);
   if (count === 0) {
      return
   }
   const newCount = count - 1;
   decrement(newCount)
}


// let count = 1000;

// (function () {
//    console.log(count);
//    if (count === 0) {
//       return
//    }
//    count--;
//    arguments.callee()
// }) ()


function printThisDeclaration() {
   console.log(this);
}

const printThisArrow = () => {
   console.log(this);
}

const obj1 = {
   name: "obj1",
   method: printThisDeclaration
}

const obj2 = {
   name: "obj2",
   method: printThisArrow
}

const execute = (tmp) => {
   if (typeof tmp === "function") {
      tmp()
   }
}


execute(() => console.log(1));

execute(() => console.log(2));

execute({});

execute();

execute(1);