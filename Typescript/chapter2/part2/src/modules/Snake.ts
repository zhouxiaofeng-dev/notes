class Snake{
    //表示蛇头的元素
    head: HTMLElement;
    //获取蛇的身体（包括蛇头）
    bodies: HTMLCollection;
    //获取蛇的容器
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake>div')!;
        this.bodies = this.element!.getElementsByTagName('div')!;
    }

    //获取蛇头的坐标
    get X() {
        return this.head.offsetLeft;
    }
    get Y() {
        return this.head.offsetTop;
    }
    //设置蛇头的坐标
    set X(value: number) {
        if (this.X === value) {
            return;
        }

        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了')
        }

        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            if (value > this.X) {
                //如果新值value大于旧值X  说明向右走，应该继续向左走
                value = this.X - 10;
            } else {
                value = this.X + 10;
            }
        }

        this.moveBody();
        this.head.style.left = value + 'px';
        this.checkHeadBody();
         
    }
    set Y(value: number) {
        if (this.Y === value) {
            return;
        }

        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了')
        }
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            if (value > this.Y) {
                //如果新值value大于旧值X  说明向右走，应该继续向左走
                value = this.Y - 10;
            } else {
                value = this.Y + 10;
            }
        }
        this.moveBody();
        this.head.style.top = value + 'px';
        this.checkHeadBody();
        
    }
    //蛇增加身体的方法
    addBody() {
        //向element增加div
        this.element.insertAdjacentHTML('beforeend', "<div></div>");
    }

    //添加蛇身体移动的方法
    moveBody() {
        //将后面的身体的位置设置为前面的身体的位置
        //遍历获取全部身体
        for (let i = this.bodies.length - 1; i > 0; i--){
            
            //获取前边身体的位置
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

            //将值赋给当前身体上
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }

    checkHeadBody() {
        for (let i = 1; i < this.bodies.length; i++){
            let bd = this.bodies[i] as HTMLElement
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                throw new Error('撞到自己了');
            }
        }
    }
}


export default Snake;