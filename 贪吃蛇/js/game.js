void function(){
    var that;//记录游戏对象

function Game(map){
this.food = new Food();
this.snake = new Snake();
this.map = map;
that = this;
}
Game.prototype.start = function(){
    //1.蛇和食物渲染地图
    this.food.render(this.map);
    this.snake.render(this.map);
    //测试move方法
    // this.snake.move();
    // this.snake.render(this.map);
    // this.snake.move();
    // this.snake.render(this.map);
    // this.snake.move();
    // this.snake.render(this.map);
    // this.snake.move();
    // this.snake.render(this.map);
    // this.snake.move();
    // this.snake.render(this.map);
    //2.开始游戏的逻辑
    //2.1 蛇移动
        runSnake();
    //2.2蛇遇到边界
    //2.3 键盘控制蛇移动
    bindKey();
    //2.4 蛇遇到食物处理
    
}
// function bindKey(){
//     // document.onkeydown = function(){}
//     document.addEventListener('keydown',function(e){
//         // console.log(e.keyCode)
//         switch(e.keyCode){
//             case 37:that.snake.go = 'left';
//             break;
//             case 38: that.snake.go = 'top';
//             break;
//             case 39: that.snake.go = 'right';
//             break;
//             case 40: that.snake.go = 'bottom';
//             break;
//         }
//     },false);
// } 
//使用bind优化 bindKey
function bindKey(){
    // document.onkeydown = function(){}
    document.addEventListener('keydown',function(e){
        // console.log(e.keyCode)
        switch(e.keyCode){
            case 37:this.snake.go = 'left';
            break;
            case 38: this.snake.go = 'top';
            break;
            case 39: this.snake.go = 'right';
            break;
            case 40: this.snake.go = 'bottom';
            break;
        }
    }.bind(that),false);
}
//私有函数 蛇移动
// function runSnake(){
//     var timeId = setInterval(function(){
//         //蛇走一步 //定时器中this指向window
//         // this.snake
//         //获取游戏中对象中蛇属性
//         that.snake.move(that.food,that.map);
//         that.snake.render(that.map);
//         //2.2蛇遇到边界
//         //获取蛇头坐标
//         var maxX = that.map.offsetWidth / that.snake.width;
//         var maxY = that.map.offsetHeight / that.snake.height;
//         var headX = that.snake.body[0].x;
//         var headY = that.snake.body[0].y;
//         if(headX < 0 || headX >= maxX){
//             alert('死翘翘啦!')
//             clearInterval(timeId);
//         }
//         if(headY < 0 || headY >= maxY){
//             alert('厉害了!')
//             clearInterval(timeId);
//         }
//     },200);
// }
//使用bind优化runSnake函数
function runSnake(){
    var timeId = setInterval(function(){
        //蛇走一步 //定时器中this指向window
        // this.snake
        //获取游戏中对象中蛇属性
       this.snake.move(this.food,this.map);
        this.snake.render(this.map);
        //2.2蛇遇到边界
        //获取蛇头坐标
        var maxX = this.map.offsetWidth / this.snake.width;
        var maxY = this.map.offsetHeight / this.snake.height;
        var headX = this.snake.body[0].x;
        var headY = this.snake.body[0].y;
        if(headX < 0 || headX >= maxX){
            alert('死翘翘啦!')
            clearInterval(timeId);
        }
        if(headY < 0 || headY >= maxY){
            alert('厉害了!')
            clearInterval(timeId);
        }
    }.bind(that),200);
}

//暴露构造函数给外部
window.Game =Game;
}();
// //测试
// var map = document.getElementById('map');
// var game =new Game(map);
//  game.start();
// void function(){
// function runSnake(){
//     var timeId = setInterval(function(){
//         //让蛇走一格
//     },200);
// }
// }();
