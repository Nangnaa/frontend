
$(document).ready(function () {
    $(".sub").hide();

    $("#menu > ul > li").hover(
        function () {
            $(this).find(".sub").stop().show().css({ opacity: "1" }).animate({ opacity: "1" }, 1000);
        },
        function () {
            $(this).find(".sub").stop().css({ opacity: "1" }).animate({ opacity: "0" }, 1000);
        }
    );
});

$(function(){

    var current = 0; 
    $(".center_btn > li ").click(function(){
        var i = $(this).index();
        move(i); 
    });

    timer(); 
    function timer(){
        setInterval(function(){
            var n = current + 1; 
            if(n == 3 ){
                n= 0;
            }
            move(n)
        },3000)
    }



function move(n){
    if(current == n) return; 

    var currentEl = $(".cecter_view ul li").eq(current);
    var nextEl = $(".cecter_view ul li").eq(n);

    currentEl.css({left:"0%"}).animate({left:"-100%"});
    nextEl.css({left:"100%"}).animate({left:"0%"});
    current = n; 

    }

});


