/**
 * Created by mytream on 17/4/7.
 */

// Arrow functions
let checkName = ()=>{
  console.log('ok1sss22222');
};

[1,2,3].map(n => n + 1);

//
(async function() {
  await loadStory();
  console.log("Yey, story successfully loaded!");
}());

// classes
class Foo {
  set bar(name) {
    throw new Error("foo!");
  }
}

class Bar extends Foo {
  bar() {
    // will throw an error when this method is defined
  }
}

// do expression
let a = do {
  if(x > 10) {
    'big';
  } else {
    'small';
  }
};
// is equivalent to:
let a = x > 10 ? 'big' : 'small';