const isEven = num => num % 2 === 0 ? '偶数' : '奇数';
console.log(isEven(2));

const greet = (name = 'Guest') => 'Hello ' + name + '!';
console.log(greet('aaa'));