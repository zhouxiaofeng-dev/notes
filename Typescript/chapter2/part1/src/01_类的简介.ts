//使用class关键字来定义一个类
/**
* 对象包含两个部分：属性和方法
*/
class Person{
/**
 * 直接定义的属性是实例属性，需要通过对象的实例去访问
 * const per = new Person()
 * per.name
 * 
 * 使用static开头的属性是静态属性(类属性)
 * Person.name 
 * 
 * 使用readonly开头的属性是只读无法修改
 */

    //定义实例属性
    name: string = '孙悟空';
    // 在属性前使用static关键字可以定义类属性(静态属性)
    static readonly age: number = 18;

    //定义方法
    sayHello() {
        console.log('hello');
        
    }
    
}

const per = new Person();
console.log(per.name);
per.name = 'tom'
console.log(per.name);
console.log(per.sayHello);


