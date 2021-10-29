
$(".lunbo-ul-li1").each(function (i) {
    $(".lunbo-ul-li1").eq(i).mouseenter(function () {
        $(".sss").eq(i).animate({
            marginLeft: "5px"
        }, 300)
        $('.lunbo-jt').eq(i).css("display", "block")
    })
})

$(".lunbo-ul-li1").each(function (i) {
    $(".lunbo-ul-li1").eq(i).mouseleave(function () {
        $(".sss").eq(i).animate({
            marginLeft: "0px"
        }, 300)
    })
})




$(".louceng1-right-small img,.louceng1-right-big img").mouseenter(function () {
    $(this).animate({
        marginLeft: "5px",
    }, 500);
})

$(".louceng1-right-small img,.louceng1-right-big img").mouseleave(function () {
    $(this).animate({
        marginLeft: "0px",
    }, 500);

})


$(".louceng1-miu-img").mouseenter(function () {
    $(this).animate({
        marginLeft: "5px",
    }, 500);

})
$(".louceng1-miu-img").mouseleave(function () {
    $(this).animate({
        marginLeft: "0",
    }, 500);

})

$(".louceng1-miu-bottom-img").mouseenter(function () {
    $(this).animate({
        marginLeft: "5px",
    });
})

$(".louceng1-miu-bottom-img").mouseleave(function () {
    $(this).animate({
        marginLeft: "0px",
    });

})

// 遍历每一个li 
$(".left-ul-li").each(function (i) {
    //鼠标移入
    $(".left-ul-li").eq(i).mouseenter(function () {
        f1(i);
    });
    //鼠标移出
    $(".left-ul-li").eq(i).mouseleave(function () {
        $(".left-ul-span").eq(i).css({
            display: "none"
        })
        f1(index);
    })
})

// 鼠标滚动的时候  记录的是每个页面的 offset
var index = 0;
$(window).scroll(function () {
    if ($(window).scrollTop() >= 600) {
        $(".left-ul").css({ display: "block" });
        $(".jinkou").each(function (i) {
            //定义 是 每一个进口的 offset 
            var offse = $(this).offset().top;
            var scro = $(window).scrollTop();
            if (offse - scro < 200 && offse >= scro) {
                index = i;
                $(".left-ul-span").css({
                    display: "none"
                })
                f1(index);
            }
        })

    } else {
        $(".left-ul").css({ display: "none" });
    }

})

//  点击 每一个li 记录索引 
$(".left-ul-li").click(function (i) {
        index= $(this).index();
        var offs =$(".jinkou").eq(index).offset().top;  // 定义offset 固定不变的 
        $("body,html").animate({
            scrollTop : offs,       
        })
        f1(index);
})
// span 设置的样式
function f1(i) {
    $(".left-ul-span").eq(i).css({
        display: "block",
        fontWeight: "800",
        color: "white"
        ,
        background: "#008842",
    })
}


// js
















