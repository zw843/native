// (function(){
//     var position = 'absolute';
//     //第三步  记录上一次创建的食物 未删除做准备
//     var  elements = [];
    
    
//     function Food(options){
//     options = options || {};
//     this.x = options.x || 0;
//     this.y = options.y || 0;
    
//     this.width = options.width || 20;
//     this.height = options.height || 20;
    
//     this.color = options.color || 'red';
//     this.borderRadius = options.borderRadius || '15';
//     }
//     // var position = 'absolute';//所有变量放在顶部方便查找
//     Food.prototype.render = function(map){
//         //删除之前创建的食物
//         remove();
    
//         //第二步 随机设置x和y的值
//         this.x = Tools.getRandom(0,map.offsetWidth/this.width - 1) * this.width;
//         this.y = Tools.getRandom(0,map.offsetHeight/this.height - 1) * this.height;
    
    
//         //动态创建div(食物)
//         var div = document.createElement('div'); 
//         map.appendChild(div); 
    
//         elements.push(div);
//         //设置div样式 //子绝父相
//         div.style.position = position;
//         div.style.left = this.x + 'px';
//         div.style.top = this.y + 'px';
//         div.style.width = this.width  + 'px';
//         div.style.height = this.height + 'px';
//         div.style.backgroundColor = this.color;
//         div.style.borderRadius = this.borderRadius + 'px';
//     }
    
//     function remove(){
//         for(var i = elements.length-1;i>=0;i--){
//             //删除div
//             elements[i].parentNode.removeChild(elements[i]);
//             //删除数组中元素  splice从哪开始删除 删几个
//             elements.splice(i,1);
//         }
//     }


//     // 第四步  window下面所有成员都是公共的
// // 让外部可以访问Food构造函数
// window.Food = Food;
// })()


void function(){
    var position = 'absolute';
    //第三步  记录上一次创建的食物 为删除做准备
    var  elements = [];
    
    
    function Food(options){
    options = options || {};
    this.x = options.x || 0;
    this.y = options.y || 0;
    
    this.width = options.width || 20;
    this.height = options.height || 20;
    
    this.color = options.color || 'red';
    this.borderRadius = options.borderRadius || '15';
    }
    // var position = 'absolute';//所有变量放在顶部方便查找
    Food.prototype.render = function(map){
        //删除之前创建的食物
        remove();
    
        //第二步 随机设置x和y的值
        this.x = Tools.getRandom(0,map.offsetWidth/this.width - 1) * this.width;
        this.y = Tools.getRandom(0,map.offsetHeight/this.height - 1) * this.height;
    
    
        //动态创建div(食物)
        var div = document.createElement('div'); 
        map.appendChild(div); 
    
        elements.push(div);
        //设置div样式 //子绝父相
        div.style.position = position;
        div.style.left = this.x + 'px';
        div.style.top = this.y + 'px';
        div.style.width = this.width  + 'px';
        div.style.height = this.height + 'px';
        div.style.backgroundColor = this.color;
        div.style.borderRadius = this.borderRadius + 'px';
    }
    
    function remove(){
        for(var i = elements.length-1;i>=0;i--){
            //删除div
            elements[i].parentNode.removeChild(elements[i]);
            //删除数组中元素  splice从哪开始删除 删几个
            elements.splice(i,1);
        }
    }


    // 第四步  window下面所有成员都是公共的
// 让外部可以访问Food构造函数
window.Food = Food;
}();

//测试
var map = document.getElementById('map');
var food = new Food();//window可以省略
food.render(map);
// void function(){
//      //记录上一次食物
//      var ele = [];
//     function Food(options){
//         Food.prototype.render = function(map){
//         //食物对应元素记录到数组中
//         ele.push(div);
//                 }
//             }
// }();
// void function(){
// var position = 'absolute';
// }();
