var fruits = ['peach','papayya','tomato','lemon'];
fruits.pop('watermelon');
var removedfruits = fruits.slice(0,1);
var somefruits = ['gauva','grapes','dates'];
var morefruits = fruits.concat(somefruits);
fruits.splice(1,3);
fruits.shift('litchi');
fruits.unshift('mango');
console.log(fruits);