//------------------header-top
window.onload=function heade() {
	var _topone = document.getElementById("top-one");
	var _bottom=document.getElementById("bottom");
	var _toplogin = document.getElementById("top-login");
	var _one=document.getElementById("one");
	_topone.onmouseover = function() {
		_toplogin.style.display = "block";
		_bottom.style.display="none";
		_one.style.height = "36px";
		_one.style.borderBottom="none";
		_topone.onmouseout = function() {
			_toplogin.style.display = "none";
			_bottom.style.display="block";
				_one.style.height = "35px";
		_one.style.borderBottom="none";
		}
	}
	}
	//--------------------------adress------------
	$(function(){
		$("#give").mouseover(function(){
			$("#adress").css("display","block");
			$("#arrive").css({
				"height":"21px",
				"border-bottom":"none "
			});
			
		})
		$("#give").mouseout(function(){
			$("#adress").css("display","none");
			$("#arrive").css({
				"height":"19px",
				"border-bottom":" solid 1px #d7d8da"
			});
		})
	})
$(function(){
var _content="";
 for(var i=65;i<90;i++ ){
 _content+="<li><a href=#"+String.fromCharCode(i)+">"+String.fromCharCode(i)+"</a></li>";

   $("#nav-ul").html(_content)
 }
})
	//--------------------
$(function(){
		$("#wei").mouseover(function(){
			$("#xinlang").css("display","block");	
		})
		$("#wei").mouseout(function(){
			$("#xinlang").css("display","none");
		})
		$("#xin").mouseover(function(){
			$("#weixin").css("display","block");	
		})
		$("#xin").mouseout(function(){
			$("#weixin").css("display","none");
			
		})
	})
//====================================search=======================
$(function(){
$("#text").mousedown(function(){
  $("#history").css("display","block")   })
$("#text").mouseout(function(){
  $("#history").css("display","none")   })
$("#history").mouseover(function(){
  $("#history").css("display","block")   })
$("#history").mouseout(function(){
  $("#history").css("display","none")   })
})
//=
$(function() {
				function fx(js) {
					var _content="";
					_box = document.getElementById("result");
					console.log(js);
					for(var i = 0; i < js["result"].length; i++) {
						_content+="<div>"+js["result"][i][0]+"</div>" ;
						_box.innerHTML=_content;

					}
				}
				$("#text").on("input", function() {
					$("#result").css("display","block");
					var _url = "https://suggest.taobao.com/sug?code=utf-8&q=" + $(this).val() + "&callback=?"

					$.getJSON(_url, fx);
					if($(this).val()==""){
						_box.innerHTML="";
						$("#result").css("display","none");
					}
				})
			$("#result").mouseover(function(){
          	$("#result").css("display","block");
          })
          $("#result").mouseout(function(){
          	$("#result").css("display","none");
          })
			})
//-----------------------------------hint-------------------
$(function(){
	var _url="../json/hint.json";
	$.getJSON(_url,function(date){
		console.log(date);
	})
})
