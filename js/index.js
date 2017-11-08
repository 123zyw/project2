 /*
	首页js
	@autor zhangyw
	@date20170910

*/
window.onload=function(){
//给第一个选项卡绑定事件
var one_tab=document.getElementsByClassName("tab_text")[0];
//获取所有第一个选项卡要展示的ul
var imgsUls=document.getElementsByClassName("imgs")[0].children;
var lis=one_tab.children;
for(var i=0;i<lis.length;i++){
	lis[i].onclick=(function(num){
		return function(){
			//清除掉所有li current属性
			Array.prototype.slice.call(lis,0).forEach(function(item){
				item.removeAttribute("class");
			});
			//给当前li绑定class属性
			this.setAttribute("class","current");
			//根据当前点击选项卡匹配需要显示的ul列表
			Array.prototype.slice.call(imgsUls,0).forEach(function(item){
				item.removeAttribute("class");
			});
			imgsUls[num].setAttribute("class","current");
		}
	})(i);
}
//给一下选项卡绑定事件
	Array.prototype.slice.call(document.getElementsByClassName("tabUl0"),0).forEach(function(item,index){
		var tab_lis=item.children;
		if(index==0){
			//此时遍历的为机构招募模块，选中当前模块两个要显示的ul进行匹配
			var two_uls=document.getElementsByClassName("center-top")[0].children;
		}else{
			var two_uls=document.getElementsByClassName("center-bottom")[0].children;
			
		}
		for(var i=0;i<tab_lis.length;i++){
			tab_lis[i].onclick=(function(num){
				return function(){
					Array.prototype.slice.call(tab_lis,0).forEach(function(item){
						item.removeAttribute("class");
					});
					this.setAttribute("class","current");

					//清除所有隐藏的ul样式current
					for(var i=1;i<two_uls.length;i++){
						two_uls[i].className="tabUl1";
					}

					//给当前ul进行显示
					
					two_uls[num+1].className="tabUl1 current";
					
					
				}
			})(i);
		}
	});

	/*切换页面选项卡 footer*/

	var changePageUl=document.getElementsByClassName("changePageUl")[0];
	//console.log(changePageUl.children);
	changePageUl.onclick=function(event){
		if(event.target.nodeName=="IMG"){
			//将所有选项卡样式清除
			Array.prototype.slice.call(changePageUl.children,0).forEach(function(item){
			for(var i=0;i<item.children.length;i++){
				var othersSrc=item.children[i].getAttribute("src").replace("_1","");
					item.children[i].setAttribute("src",othersSrc);
				}
			});
			//给当前选项卡添加样式
			var src=event.target.getAttribute("src");
			src=src.slice(0,-4)+"_1.png";		
			event.target.setAttribute("src",src);
		}
	}


}
