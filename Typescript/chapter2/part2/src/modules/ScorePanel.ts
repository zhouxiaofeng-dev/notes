
//定义记分牌
class ScorePanel{

    score = 0;
    level = 1;

    //设置变量限制等级
    maxLevel: number;
    //设置变量限制多少分时升级
    upScore: number;

    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    constructor(maxLevel:number = 10,upScore:number = 10) {
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    //设置一个加分的方法
    addScore() {
        //使分数自增
        this.scoreEle.innerHTML = ++this.score + '';
        if (this.score % this.upScore === 0) {
            this.levelUp();
        }
    }

    //设置一个提升等级的方法
    levelUp() {
        if (this.level < this.maxLevel) {
            //使等级自增
            this.levelEle.innerHTML = ++this.level + '';
        }  
    }
}

export default ScorePanel