void function(){

    var position = 'absolute';
    //记录之前创建的蛇
    var elements =[];
function Snake(options){
    options = options || {};
    //蛇节大小
    this.width = options.width || 20;
    this.height = options.height || 20;
    this.borderRadius = options.borderRadius || 5;
    //蛇移动方向
    this.go = options.go || 'right';
    //蛇身体 第一节是蛇头
    this.body = [
        {x:3,y:2,color:'orange'}, 
        {x:2,y:2,color:'green'},
        {x:1,y:2,color:'purple'}
  ]
}
Snake.prototype.render = function(map){
    //删除之前创建的蛇
    remove();


    //渲染每个蛇节到地图上
    // for(var i = 0; i < this.body.length;)    
    for(var i = 0,len = this.body.length;i < len; i++){
        var obj = this.body[i];
        var div = document.createElement('div');
        map.appendChild(div);

        //记录当前蛇
        elements.push(div);

          //设置样式
        div.style.position = position;
        div.style.width = this.width + 'px';
        div.style.height = this.height + 'px';
        div.style.left = obj.x * this.width + 'px';
        div.style.top = obj.y * this.height + 'px';
        div.style.backgroundColor = obj.color;
        div.style.borderRadius = this.borderRadius + 'px';
    }
}

//私有成员 当前自调用函数内部的函数外部访问不了
function remove(){
    for(var i = elements.length-1; i >= 0;i--){
        //删除div
        elements[i].parentNode.removeChild(elements[i]);    
        //删除数组中的元素
        elements.splice(i,1);
    }
}
//控制蛇移动
Snake.prototype.move = function(food,map){
//控制蛇身体 当前蛇节到上一蛇节
    for(var i = this.body.length -1;i>0;i--){
        this.body[i].x = this.body[i - 1].x;
        this.body[i].y = this.body[i - 1].y;
    }
//控制蛇头移动
//判断蛇移动方向 等值判断
var head = this.body[0];
switch(this.go){
    case 'right':
    head.x += 1;
    break;
    case 'left':
    head.x -= 1;
    break;
    case 'top':
    head.y -= 1;
    break;
    case 'bottom':
    head.y += 1;
    break;
}
  //2.4判断蛇头是否和食物坐标重合
var headX = head.x * this.width;
var headY = head.y * this.height;
if(headX === food.x && headY === food.y){
    //蛇增加一节
    //获取蛇最后一节
    var last = this.body[this.body.length-1];
    this.body.push({
        x:last.x,
        y:last.y,
        color:last.color
    });
    //随机在地图上生成食物
    food.render(map);
}
}
//暴露构造函数给外部
window.Snake = Snake;
}();
//测试
// var map = document.getElementById('map');
// var snake = new Snake();
//  snake.render(map);