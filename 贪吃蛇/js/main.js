//生成10个方块,随机生成颜色
//获取容器
// var container = document.getElementById("container");
// var array=[];
// //定义数组 存储创建的方块对象
// for( var i=0;i<10;i++){
// 	var r = Tools.getRandom(0,255);
// 	var g = Tools.getRandom(0,255);
// 	var b = Tools.getRandom(0,255);
// 	var box =new Box(container,{
// 		backgroundColor:'rgb('+ r +' ,' + g +', '+ b +')'

// 	});
// 	//方块对象添加到数组
// 	array.push(box);
// }
// //设置随机位置,开启定时器
// setInterval(randomBox,500);
// //立即执行
// //页面加载完成先设置随机位置
// randomBox();
// function randomBox(){
// 	//随机生成方块坐标
// 	for(var i=0;i<array.length;i++){
// 		var box = array[i];
// 		box.random();
// 	}
// }
	
void function(){
	var map = document.getElementById('map');
	var game =new Game(map);
	 game.start();
}();