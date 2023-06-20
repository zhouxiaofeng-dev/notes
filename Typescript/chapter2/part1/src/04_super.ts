(function () {
    class Animal{
        name: string;
        constructor(name: string) {
            this.name = name;
        }
        sayHello() {
            console.log(this.name);
            
        }
    }
    class Dog extends Animal{
        age: number;
        constructor(name:string,age:number) {
            super(name);
            this.age = age;
        }
        sayHello(): void {
            //在类的方法中 super就表示当前类的父类
            super.sayHello();
            console.log("汪汪汪");
            
        }
    }
    const dog = new Dog('旺财', 18);
    console.log(dog);
    
    dog.sayHello();
})();