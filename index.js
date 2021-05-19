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
    let sqrt = document.querySelector(".btn-root");
    let cube = document.querySelector(".btn-cube");
    let e = document.querySelector(".btn-e");
    let per = document.querySelector(".btn-per");
    let rec = document.querySelector(".btn-rec");
    let fac = document.querySelector(".btn-fact");
    var errName = document.querySelector(".error"); 


    buttons.forEach(function(button){
        button.addEventListener("click",function(e){
            let value = e.target.dataset.num;
            screen.value += value;
            errName.innerHTML += value
        })
    });

    equal.addEventListener("click",function(e){
        if(screen.value === ""){
            errName.innerHTML = "Enter a value"
            setTimeout(function(){
                errName.innerHTML = ""
              },5000);
        }else{
            let answer =eval(screen.value);
            screen.value = answer;
        }
    })

    clear.addEventListener("click",function(e){
        screen.value = "";
        errName.innerHTML = "";
    })

    back.addEventListener("click",function(e){
        screen.value = screen.value.substring(0,screen.value.length -1);
        errName.innerHTML = errName.innerHTML.substring (0, errName.innerHTML.length -1);
    })

    sin.addEventListener("click",function(e){
        errName.innerHTML = "sin " + screen.value
        screen.value *= 0.0174533;
        let answer = Math.sin(screen.value);
        screen.value = answer
    })

    cos.addEventListener("click",function(e){
        errName.innerHTML = "cos " + screen.value
        screen.value *= 0.0174533;
        let answer = Math.cos(screen.value);
        screen.value = answer
    })
    tan.addEventListener("click",function(e){
        errName.innerHTML = "tan " + screen.value
        screen.value = screen.value * 0.0174533;
        let answer = Math.tan(screen.value);
        screen.value = answer
    })
    square.addEventListener("click",function(e){
        errName.innerHTML = screen.value^2
        let answer = screen.value*screen.value;
        screen.value = answer
    })
    lan.addEventListener("click",function(e){
        errName.innerHTML = "log " + screen.value
        let answer = Math.log(screen.value);
        screen.value = answer
    })
    pie.addEventListener("click",function(e){
       if(screen.value === ""){
           screen.value =  3.1415926536 ;
       }else{
           errName.innerHTML = screen.value + " * π"
           screen.value *= 3.1415926536;
       }
    })

    sqrt.addEventListener("click",function(e){
        errName.innerHTML = "√" + screen.value
        let answer = Math.sqrt(screen.value);
        screen.value = answer
    })

    e.addEventListener("click",function(e){
        errName.innerHTML =  + screen.value +"*e"
        screen.value *= 2.7182818285
    })

    per.addEventListener("click",function(e){
        if (screen.value === 0){
            errName.innerHTML = "Enter a Value"
            setTimeout(function(){
                errName.innerHTML = ""
              },5000);
        } else {
            errName.innerHTML = screen.value + "%"
            screen.value *= 0.01
        }
    })

    cube.addEventListener("click",function(e){
        errName.innerHTML = screen.value^3 
        screen.value = screen.value * screen.value * screen.value ;
    })

    rec.addEventListener("click",function(e){
        errName.innerHTML = "1/"+ screen.value
        screen.value = 1/screen.value 
    })

    fac.addEventListener("click",function(e){
        if(screen.value<0){
            errName.innerHTML = "Error"
        }
        else if (screen.value === 0){
            screen.value = "1"
        }
        else {
            let fact = 1;
            for (i = 1; i <= screen.value ; i++){
                fact *= i ;
            }
            screen.value = fact
            errName.innerHTML = screen.value + "!"
        }
    })

})();
