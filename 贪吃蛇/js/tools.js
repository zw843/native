void function(){
	var Tools={
		getRandom:function(min,max){
		return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
		}
	}
	//暴露Tools给window
	window.Tools = Tools;	 
}();