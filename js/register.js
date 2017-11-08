window.onload=function(){
	var check01=document.getElementById("checkbox");
	var img=document.getElementById("img");
	var form=document.getElementsByTagName("form")[0];
	img.setAttribute("src","images/duigou.png");
	check01.onclick=function(){
        if(img.src){
			img.removeAttribute("src");
        }else{
			img.setAttribute("src","./images/duigou.png");	 
	    }
   }
    var pTel=/^\d{11}$/;
	/*声明匹配初始密码*/
	var pPassword=/^[a-zA-Z]\w{5,17}$/;
	registerBtn.onclick=function(event){
		var inputs=document.getElementsByTagName('input');
		inputs=Array.prototype.slice.call(inputs,0);
		/*判断手机号码是否输入正确*/
		if(pTel.test(inputs[0].value)){
			//输入正确,继续判断验证码
			if(inputs[1].value){
				//验证码输入成功
				if(pPassword.test(inputs[2].value)){
					//匹配确认密码输入框
					if(inputs[3].value==inputs[2].value){
							//获取span，阅读协议之后才可注册
							if(checkbox.innerHTML){
								//全部验证通过，提交表单
								form.submit();

							}else{
								alert("您还没有同意用户使用协议，无法进行注册");
							}


					}else{
					inputs[3].parentNode.style.borderColor="red";

					}
				}else{
					inputs[2].parentNode.style.borderColor="red";
				}
			}else{
				//请获取验证码
				inputs[1].parentNode.style.borderColor="red";
				alert("请点击获取验证码按钮");
			}
		}else{
			//输入错误
			inputs[0].parentNode.style.borderColor="red";

		}
		
	}
	
	var getMa=document.getElementById("getMa");
	var inputs=document.getElementsByTagName('input');
	getMa.onclick=function(){
		var arr0=[0,1,2,3,4,5,6,7,8,9];
		var arr1=[0,1,2,3,4,5,6,7,8,9];
		var arr2=[0,1,2,3,4,5,6,7,8,9];
		var arr3=[0,1,2,3,4,5,6,7,8,9];
		var random0=Math.floor(Math.random()*10);
		var random1=Math.floor(Math.random()*10);
		var random2=Math.floor(Math.random()*10);
		var random3=Math.floor(Math.random()*10);
		
		var value=arr0[random0].toString()+arr1[random1]+arr2[random2]+arr3[random3];
		inputs[1].value=value;
	}
}



