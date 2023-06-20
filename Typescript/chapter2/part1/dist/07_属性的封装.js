"use strict";
(function () {
    //定义一个表示人的类
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        // getName() {
        //     return this._name
        // }
        // setName(name:string) {
        //     this._name = name
        // }
        // getAge() {
        //     return this._age
        // }
        // setAge(age:number) {
        //     this._age = age
        // }
        // TS中设置getter的方法
        get name() {
            return this._name;
        }
        get age() {
            return this._age;
        }
        set name(name) {
            this._name = name;
        }
        set age(age) {
            this._age = age;
        }
    }
    const per = new Person("www", 18);
    /**
     * 属性被任意修改容易造成不安全
     */
    per.name = 'waw';
    per.age = 16;
    console.log(per);
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    class C {
        //可以直接将属性定义在构造函数中
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.name = name;
            this.age = age;
        }
    }
})();
