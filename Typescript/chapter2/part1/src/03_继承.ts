(function () {
    class Animal{
        name: string;
        age: number 
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;

        }
        sayHello() {
            console.log("jiao");
        }
    }
    
    class Dog extends Animal{
        sayHello() {
            console.log("汪汪汪");
        }
    }
    class Cat extends Animal{
       sayHello() {
            console.log("喵喵喵");
        }
    }
    const dog = new Dog("旺财", 5);
    const cat = new Cat("咪咪", 4);
    dog.sayHello();
    cat.sayHello();
})()