"use strict";
class Dog {
    //构造函数 对象创建时调用
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    bark() {
        console.log(this.name);
    }
}
const dog = new Dog("小白", 18);
const dog1 = new Dog("小黑", 17);
console.log(dog);
console.log(dog1);
dog1.bark();
