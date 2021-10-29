//鼠标滚动高度 控制导航栏显示

window.onscroll = function () {
    var b = document.getElementsByClassName('logoBox_box')[0];
    if (document.documentElement.scrollTop >= 200) {
        b.style.display = 'block';
    }
    if (document.documentElement.scrollTop == 0) {
        b.style.display = 'none';
    }
}
// 给输入框添加失去焦点事件
var logoBoxMiddleInput = document.getElementsByClassName('logoBox_middle_input')[0];
logoBoxMiddleInput.onblur = function () {
    logoBoxMiddleInput.style.background = 'white';
}


var logoBoxMiddleInput1 = document.getElementById("logoBox_middle_input1");
logoBoxMiddleInput1.onblur = function () {
    logoBoxMiddleInput1.style.background = 'white';
}


var lunboUlLi1 = document.getElementsByClassName('lunbo-ul-li1');
var liUl = document.getElementsByClassName('li-ul');
for (let i = 0; i < lunboUlLi1.length; i++) {
    lunboUlLi1[i].onmouseenter = function () {
        lunboUlLi1[i].style.border = '1px solid #ccc';
        lunboUlLi1[i].style.borderRight = 'none';
        for (let j = 0; j < i; j++) {
            lunboUlLi1[j].style.borderRight = '1px solid #ccc';
        }
        for (let k = i + 1; k < lunboUlLi1.length; k++) {
            lunboUlLi1[k].style.borderRight = '1px solid #ccc';
        }
    }
    
    lunboUlLi1[i].onmouseleave = function () {
        for (let z = 0; z < lunboUlLi1.length; z++) {
            lunboUlLi1[z].style.border = '1px solid transparent';
        }
    }
}


//  jquery 






$(window).on("scroll",moveHead);
function moveHead(){
	// 
	
	if($(window).scrollTop()>=300){
		$("#goTop").css({display:"block"});			
	}else{
		$("#goTop").css({display:"none"});	
	}	
};

// --------------返回顶部--------------
// 给top按键设置点击事件，当点击该元素时，页面慢慢（500ms）回到顶部
$("#goTop").click(function(){	 
	$("body,html").animate({scrollTop:"0"},500,function(){		
		$("#goTop").css({display:"none"});						
	});			
});







