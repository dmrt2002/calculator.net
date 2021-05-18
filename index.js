 (function () {
    let screen = document.querySelector(".screen")
    let buttons = document.querySelectorAll(".button");
    let clear = document.querySelector(".btn-clear");
    let equal = document.querySelector(".btn-equal");
    let back = document.querySelector(".btn-back");
    let sin = document.querySelector(".btn-sin");
    let cos = document.querySelector(".btn-cos");
    let tan = document.querySelector(".btn-tan");
    let square = document.querySelector(".btn-square");
    let lan = document.querySelector(".btn-lan");
    let pie = document.querySelector(".btn-pie");


    buttons.forEach(function(button){
        button.addEventListener("click",function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    equal.addEventListener("click",function(e){
        if(screen.value === ""){
            screen.value = "Enter a Value";
        }else{
            let answer =eval(screen.value);
            screen.value = answer;
        }
    })

    clear.addEventListener("click",function(e){
        screen.value = "";
    })

    back.addEventListener("click",function(e){
        screen.value = screen.value.substring(0,screen.value.length -1);
    })

    sin.addEventListener("click",function(e){
        screen.value = screen.value * 0.0174533;
        let answer = Math.sin(screen.value);
        screen.value = answer
    })

    cos.addEventListener("click",function(e){
        screen.value = screen.value * 0.0174533;
        let answer = Math.cos(screen.value);
        screen.value = answer
    })
    tan.addEventListener("click",function(e){
        screen.value = screen.value * 0.0174533;
        let answer = Math.tan(screen.value);
        screen.value = answer
    })
    square.addEventListener("click",function(e){
        let answer = screen.value*screen.value;
        screen.value = answer
    })
    lan.addEventListener("click",function(e){
        let answer = Math.log(screen.value);
        screen.value = answer
    })
    pie.addEventListener("click",function(e){
       if(screen.value === ""){
           screen.value =  3.1415926536 ;
       }else{
           screen.value = screen.value * 3.1415926536
       }
    })

})();
