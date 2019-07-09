function Box(parent,options){
	//防止空参数
	options = options || {};
	//设置对象属性
	this.backgroundColor = options.backgroundColor || 'red';
	this.width = options.width || '20';
	this.height = options.height || '20';
	this.x = options.x || 0;
	this.y = options.y || 0;
	this.border = options.border || "5";

	//创建对应div
	// var div =document.createElement("div");
	// 定义为Box的一个属性
	this.div =document.createElement("div");
	// parent.appendChild(div);
		parent.appendChild(this.div);
		//将parent变为属性
		this.parent = parent;
	//设置div样式
	this.init();
}
//初始化div(方块)样式
Box.prototype.init=function(){
	var div = this.div;
	div.style.backgroundColor = this.backgroundColor;
	div.style.width = this.width + "px";
	div.style.height = this.height + "px";
	div.style.left = this.x + "px";
	div.style.top = this.y + "px";
	
	//脱离文档流
	div.style.position = 'absolute' 
}

//随机生成方块位置
Box.prototype.random=function(){
	//父容器宽度/方块宽度=能放多少块
	var x = Tools.getRandom(0,this.parent.offsetWidth / this.width -1)*this.width;
	var y = Tools.getRandom(0,this.parent.offsetHeight / this.height -1)*this.height;
	this.div.style.left = x + "px";
	this.div.style.top = y + "px";
	
}