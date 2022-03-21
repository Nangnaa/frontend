$(function(){

    var current = 0; //현재 보이는 이미지의 인덱스 0부터
    $("#btns > li ").click(function(){ //3
        var i =$(this).index();
        // console.log(i);

        move(i); //해당되는 버튼의 버호를 매개변수로 보냄
    });

    //자동실행
    //setInterval(실행문, 시간)
    timer(); //함수호출
    function timer(){
        setInterval(function(){
            var n = current + 1; //1 2 3
            if(n == 4 ){
                n= 0;
            }
            move(n)
        },3000)
    }



//애니메이션 함수
function move(n){ //1
    if(current == n) return; //2

    
    var currentEl = $("#view ul li").eq(current); //0 1 2 3 
    var nextEl = $("#view ul li").eq(n);

    currentEl.css({left:"0%"}).animate({left:"-100%"});
    nextEl.css({left:"100%"}).animate({left:"0%"});
    current = n; //2 -> 현재 보이는 이미지 대상

    }
}); 