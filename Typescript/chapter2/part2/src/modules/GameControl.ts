import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";



//游戏控制器，控制其他所有类
class GameControl{
    //定义三个属性
    //蛇
    snake: Snake;
    //食物
    food: Food;
    //记分牌
    scorepanel: ScorePanel;
    //创建一个属性来存储蛇的移动方向
    direction: string = '';
    //创建一个属性用来记录游戏是否结束
    isLive = true;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorepanel = new ScorePanel();

        this.init();
    }
    //游戏的初始化方法，调用后游戏即开始
    init() {
        //绑定键盘按下的事件
        document.addEventListener('keydown', this.keydownHander.bind(this))
        //调用run方法使蛇移动
        this.run();
    }

    //创建键盘按下的响应函数
    keydownHander(event:KeyboardEvent) {
        this.direction = event.key;
    }

    //创建一个控制蛇移动的方法
    run() {
        
        //获取蛇现在坐标
        let X = this.snake.X;
        let Y = this.snake.Y;
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                X += 10;
                break;
        }
        
        //检查蛇是否吃到食物
        this.checkEat(X,Y)

        //捕获设置X和Y时有没有抛出错误，有就提示信息
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch(e:any) {
            alert(e.message);
            this.isLive = false
        }


        //开启定时调用
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorepanel.level-1)*30);
    }

    //定义一个方法，用来检查蛇是否吃到食物
    checkEat(X: number, Y: number) {
        if (X == this.food.X && Y == this.food.Y) {
            this.food.change();
            this.scorepanel.addScore();
            this.snake.addBody();
        }
    }

}

export default GameControl