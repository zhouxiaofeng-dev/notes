(function () {
    //定义一个表示人的类
    class Person{
        //TS可以在属性前添加修饰符
        /**
         * public 修饰的属性可以在任意位置被访问(包括子类)
         * private 私有属性，私有属性只能在类内部进行访问
         *      通过在类中添加方法使得私有属性可以被外部访问
         * protected 受保护的属性 只能在当前类和子类中被访问
         */
        private _name: string;
        private _age: number
        constructor(name:string,age:number) {
            this._name = name;
            this._age = age
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
            return this._age
        }
        set name(name:string) {
            this._name = name
        }
        set age(age: number) {
            this._age = age
        }
    }
    const per = new Person("www", 18)

    /**
     * 属性被任意修改容易造成不安全
     */
    per.name = 'waw';
    per.age = 16
    console.log(per);
    

    class A{
        protected num: number;
        constructor(num: number) {
            this.num = num
        }
    }
    class B extends A{
        test() {
            console.log(this.num);
            
        }
    }
    class C{
        //可以直接将属性定义在构造函数中
        constructor(public name: string, public age: number) {
            this.name = name;
            this.age = age;
        }
    }
    
})()