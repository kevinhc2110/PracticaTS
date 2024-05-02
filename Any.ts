//Al ser de tipo any toma cualquier tipo de dato

let obj: any = {x:0};

obj.foo();
obj();
obj.bar = 100;
obj = "Hello";
const n: number = obj;