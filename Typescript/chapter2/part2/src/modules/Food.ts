

//定义食物类
class Food{
    //定义一个属性表示食物对应的元素
    element: HTMLElement;

    constructor() {

        //获取页面中的food元素，并赋值给element元素。最后的！表示不可能为空
        this.element = document.getElementById('food')!;
    }

    //定义一个获取食物X轴坐标的方法
    get X() {
        return this.element.offsetLeft;
    }

    //定义一个获取食物Y轴坐标的方法
    get Y() {
        return this.element.offsetTop;
    }

    //修改食物位置
    change() {

        //生成随机位置
        //食物的位置最小是0 最大是290
        //蛇移动一个是10 所以食物的坐标必须的整10
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}

export default Food
