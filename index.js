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
    var clearhist = document.querySelector(".btn-clearhistory");
    var Error = document.querySelector(".error1");



    buttons.forEach(function(button){
        button.addEventListener("click",function(e){
            if(screen.value === "/" || screen.value === "+" || screen.value === "-" || screen.value === "*" ){
                Error.innerHTML = "Enter a Value" ;
                setTimeout(function(){
                    Error.innerHTML = ""
                  },3000);
                  errName.innerHTML = ""
              setTimeout(function(){
                errName.innerHTML = ""
              },1000);
              screen.value = ""
            } else {
            let value = e.target.dataset.num;
            screen.value += value;
            errName.innerHTML += value
            }
        })
    });

    equal.addEventListener("click",function(e){
        if(screen.value === ""){
            Error.innerHTML = "Enter a value"
            setTimeout(function(){
                Error.innerHTML = ""
              },3000);
        }else if(errName.innerHTML.includes("sin") || errName.innerHTML.includes("cos") || errName.innerHTML.includes("tan") ||
        errName.innerHTML.includes("^2") || errName.innerHTML.includes("log") || errName.innerHTML.includes("π") || 
        errName.innerHTML.includes("√") || errName.innerHTML.includes("e") || errName.innerHTML.includes("%") || 
        errName.innerHTML.includes("^3") || errName.innerHTML.includes("1/") || errName.innerHTML.includes("1/") ||
        errName.innerHTML.includes("+") || errName.innerHTML.includes("-") || errName.innerHTML.includes("/") || 
        errName.innerHTML.includes("*"))  {
            let answer =eval(screen.value);
            screen.value = answer;
            errName.innerHTML += "=" + answer;
        } else {
            errName.innerHTML += "=" + answer;
        }
    })

    clear.addEventListener("click",function(e){
        if(screen.value === ""){
            errName.innerHTML = ""
        }else {
            errName.innerHTML += '<br/>';
        }
        screen.value = "";
    })

    back.addEventListener("click",function(e){
        screen.value = screen.value.substring(0,screen.value.length -1);
        errName.innerHTML = errName.innerHTML.substring (0, errName.innerHTML.length -1);
    })

    sin.addEventListener("click",function(e){
        if(screen.value === ""){
            Error.innerHTML = "Enter a value"
            setTimeout(function(){
                Error.innerHTML = ""
              },3000);
              errName.innerHTML = ""
              setTimeout(function(){
                errName.innerHTML = ""
              },1000);
        }else if(errName.innerHTML.includes("sin") || errName.innerHTML.includes("cos") || errName.innerHTML.includes("tan") ||
                     errName.innerHTML.includes("^2") || errName.innerHTML.includes("log") || errName.innerHTML.includes("π") || 
                     errName.innerHTML.includes("√") || errName.innerHTML.includes("e") || errName.innerHTML.includes("%") || 
                     errName.innerHTML.includes("^3") || errName.innerHTML.includes("1/") || errName.innerHTML.includes("1/") ||
                     errName.innerHTML.includes("+") || errName.innerHTML.includes("-") || errName.innerHTML.includes("/") || 
                     errName.innerHTML.includes("*"))  {
                         errName.innerHTML = errName.innerHTML.substring (0, errName.innerHTML.length -screen.value.length);
                         errName.innerHTML = errName.innerHTML + "sin " + screen.value

                    }else{
                           errName.innerHTML = "sin" + " " + screen.value
                        }
             screen.value *= 0.0174533;
             let answer = Math.sin(screen.value);
             screen.value = answer
             errName.innerHTML += "= " + answer;
    })

    cos.addEventListener("click",function(e){
        if(screen.value === ""){
            Error.innerHTML = "Enter a value"
            setTimeout(function(){
                Error.innerHTML = ""
              },3000);
              errName.innerHTML = ""
              setTimeout(function(){
                errName.innerHTML = ""
              },1000);
        }else if(errName.innerHTML.includes("sin") || errName.innerHTML.includes("tan") || errName.innerHTML.includes("cos") ||
                     errName.innerHTML.includes("^2") || errName.innerHTML.includes("log") || errName.innerHTML.includes("π") || 
                     errName.innerHTML.includes("√") || errName.innerHTML.includes("e") || errName.innerHTML.includes("%") || 
                     errName.innerHTML.includes("^3") || errName.innerHTML.includes("1/") || errName.innerHTML.includes("1/") || 
                     errName.innerHTML.includes("+") || errName.innerHTML.includes("-") || errName.innerHTML.includes("/") || 
                     errName.innerHTML.includes("*")){
                     errName.innerHTML = errName.innerHTML.substring (0, errName.innerHTML.length -screen.value.length);
                     errName.innerHTML = errName.innerHTML + "cos " + screen.value
        }else{
            errName.innerHTML = "cos" + " " + screen.value
        }
        screen.value *= 0.0174533;
        let answer = Math.cos(screen.value);
        screen.value = answer
        errName.innerHTML += "= " + answer;
    })
    tan.addEventListener("click",function(e){
        if(screen.value === ""){
            Error.innerHTML = "Enter a value"
            setTimeout(function(){
                Error.innerHTML = ""
              },3000);
              errName.innerHTML = ""
              setTimeout(function(){
                errName.innerHTML = ""
              },1000);
        }else if(errName.innerHTML.includes("sin") || errName.innerHTML.includes("cos") || errName.innerHTML.includes("tan") ||
              errName.innerHTML.includes("^2") || errName.innerHTML.includes("log") || errName.innerHTML.includes("π") || 
              errName.innerHTML.includes("√") || errName.innerHTML.includes("e") || errName.innerHTML.includes("%") || 
              errName.innerHTML.includes("^3") || errName.innerHTML.includes("1/") || errName.innerHTML.includes("!") ||
              errName.innerHTML.includes("+") || errName.innerHTML.includes("-") || errName.innerHTML.includes("/") || 
              errName.innerHTML.includes("*")){
              errName.innerHTML = errName.innerHTML.substring (0, errName.innerHTML.length -screen.value.length);
              errName.innerHTML = errName.innerHTML + "tan " + screen.value
        }else{
            errName.innerHTML = "tan" + " " + screen.value
        }
        screen.value = screen.value * 0.0174533;
        let answer = Math.tan(screen.value);
        screen.value = answer
        errName.innerHTML += "= " + answer;
    })
    square.addEventListener("click",function(e){
        if(screen.value === ""){
            Error.innerHTML = "Enter a value"
            setTimeout(function(){
                Error.innerHTML = ""
              },3000);
              errName.innerHTML = ""
              setTimeout(function(){
                errName.innerHTML = ""
              },1000);
        } else if(errName.innerHTML.includes("sin") || errName.innerHTML.includes("cos") || errName.innerHTML.includes("tan") ||
                     errName.innerHTML.includes("^2") || errName.innerHTML.includes("log") || errName.innerHTML.includes("π") || 
                     errName.innerHTML.includes("√") || errName.innerHTML.includes("e") || errName.innerHTML.includes("%") || 
                     errName.innerHTML.includes("^3") || errName.innerHTML.includes("1/") || errName.innerHTML.includes("!") || 
                     errName.innerHTML.includes("+") || errName.innerHTML.includes("-") || errName.innerHTML.includes("/") || 
                     errName.innerHTML.includes("*")){
                     errName.innerHTML = errName.innerHTML.substring (0, errName.innerHTML.length -screen.value.length);
                     errName.innerHTML = errName.innerHTML + screen.value + "^2";
        }else{
            errName.innerHTML = screen.value + "^2" ;
        }
        let answer = screen.value*screen.value;
        screen.value = answer
        errName.innerHTML += "= " + answer;
    })
    lan.addEventListener("click",function(e){
        if(screen.value === ""){
            Error.innerHTML = "Enter a value"
            setTimeout(function(){
                Error.innerHTML = ""
              },3000);
              errName.innerHTML = ""
              setTimeout(function(){
                errName.innerHTML = ""
              },1000);
        }else if(errName.innerHTML.includes("log") || errName.innerHTML.includes("sin") || errName.innerHTML.includes("cos") || errName.innerHTML.includes("tan") ||
                     errName.innerHTML.includes("^2") || errName.innerHTML.includes("π") || errName.innerHTML.includes("log") ||
                     errName.innerHTML.includes("√") || errName.innerHTML.includes("e") || errName.innerHTML.includes("%") || 
                     errName.innerHTML.includes("^3") || errName.innerHTML.includes("1/") || errName.innerHTML.includes("!") ||
                     errName.innerHTML.includes("+") || errName.innerHTML.includes("-") || errName.innerHTML.includes("/") || 
                     errName.innerHTML.includes("*")) {        
                     errName.innerHTML = errName.innerHTML.substring (0, errName.innerHTML.length -screen.value.length);
                     errName.innerHTML = errName.innerHTML +"log " + screen.value
        }else{
            errName.innerHTML = "log " + screen.value
        }
        let answer = Math.log(screen.value);
        screen.value = answer
        errName.innerHTML += "= " + answer;
    })
    pie.addEventListener("click",function(e){
        if(screen.value === ""){
            Error.innerHTML = "Enter a value"
            setTimeout(function(){
                Error.innerHTML = ""
              },3000);
              errName.innerHTML = ""
              setTimeout(function(){
                errName.innerHTML = ""
              },1000);
        } else if(errName.innerHTML.includes("sin") || errName.innerHTML.includes("cos") || errName.innerHTML.includes("tan") ||
                errName.innerHTML.includes("^2") || errName.innerHTML.includes("log") || errName.innerHTML.includes("π") || 
                errName.innerHTML.includes("√") || errName.innerHTML.includes("e") || errName.innerHTML.includes("%") || 
                errName.innerHTML.includes("^3") || errName.innerHTML.includes("1/") || errName.innerHTML.includes("!") ||
                errName.innerHTML.includes("+") || errName.innerHTML.includes("-") || errName.innerHTML.includes("/") || 
                errName.innerHTML.includes("*")){
                errName.innerHTML = errName.innerHTML.substring (0, errName.innerHTML.length -screen.value.length);
                errName.innerHTML = errName.innerHTML + screen.value + " * π"
       }else{
           errName.innerHTML = screen.value + " * π"
       }
       screen.value *= 3.1415926536;
       errName.innerHTML += "= " + screen.value;
    })

    sqrt.addEventListener("click",function(e){
        if(screen.value === ""){
            Error.innerHTML = "Enter a value"
            setTimeout(function(){
                Error.innerHTML = ""
              },3000);
              errName.innerHTML = ""
              setTimeout(function(){
                errName.innerHTML = ""
              },1000);
        }else if(errName.innerHTML.includes("sin") || errName.innerHTML.includes("cos") || errName.innerHTML.includes("tan") ||
                     errName.innerHTML.includes("^2") || errName.innerHTML.includes("log") || errName.innerHTML.includes("π") || 
                     errName.innerHTML.includes("√") || errName.innerHTML.includes("e") || errName.innerHTML.includes("%") || 
                     errName.innerHTML.includes("^3") || errName.innerHTML.includes("1/") || errName.innerHTML.includes("1/") ||
                     errName.innerHTML.includes("+") || errName.innerHTML.includes("-") || errName.innerHTML.includes("/") || 
                     errName.innerHTML.includes("*")){
                     errName.innerHTML = errName.innerHTML.substring (0, errName.innerHTML.length -screen.value.length);
                     errName.innerHTML = errName.innerHTML + "√" + screen.value
        }else{
            errName.innerHTML = "√" + screen.value
        }
        let answer = Math.sqrt(screen.value);
        screen.value = answer
        errName.innerHTML += "= " + answer;
    })

    e.addEventListener("click",function(e){
        if(screen.value === ""){
            Error.innerHTML = "Enter a value"
            setTimeout(function(){
                Error.innerHTML = ""
              },3000);
              errName.innerHTML = ""
              setTimeout(function(){
                errName.innerHTML = ""
              },1000);
        } else if(errName.innerHTML.includes("sin") || errName.innerHTML.includes("cos") || errName.innerHTML.includes("tan") ||
        errName.innerHTML.includes("^2") || errName.innerHTML.includes("log") || errName.innerHTML.includes("π") || 
        errName.innerHTML.includes("√") || errName.innerHTML.includes("e") || errName.innerHTML.includes("%") || 
        errName.innerHTML.includes("^3") || errName.innerHTML.includes("1/") || errName.innerHTML.includes("1/") ||
        errName.innerHTML.includes("+") || errName.innerHTML.includes("-") || errName.innerHTML.includes("/") || 
        errName.innerHTML.includes("*")){
            errName.innerHTML = errName.innerHTML + "e *" + screen.value
        }else{
            errName.innerHTML = "e *" + screen.value
        }
        screen.value *= 2.7182818285
        errName.innerHTML += "= " + screen.value;
    })

    per.addEventListener("click",function(e){
        if(screen.value === ""){
            Error.innerHTML = "Enter a value"
            setTimeout(function(){
                Error.innerHTML = ""
              },3000);
              errName.innerHTML = ""
              setTimeout(function(){
                errName.innerHTML = ""
              },1000);
        } 
      if (errName.innerHTML.includes("sin") || errName.innerHTML.includes("cos") || errName.innerHTML.includes("tan") ||
        errName.innerHTML.includes("^2") || errName.innerHTML.includes("log") || errName.innerHTML.includes("π") || 
        errName.innerHTML.includes("√") || errName.innerHTML.includes("e") || errName.innerHTML.includes("%") || 
        errName.innerHTML.includes("^3") || errName.innerHTML.includes("1/") || errName.innerHTML.includes("1/") ||
        errName.innerHTML.includes("+") || errName.innerHTML.includes("-") || errName.innerHTML.includes("/") || 
        errName.innerHTML.includes("*")){
            errName.innerHTML = errName.innerHTML.substring (0, errName.innerHTML.length -screen.value.length);
        } else {
            errName.innerHTML = screen.value + "%"
            screen.value *= 0.01
            errName.innerHTML += "= " + screen.value;
        }
    })

    cube.addEventListener("click",function(e){
        if(screen.value === ""){
            Error.innerHTML = "Enter a value"
            setTimeout(function(){
                Error.innerHTML = ""
              },3000);
              errName.innerHTML = ""
              setTimeout(function(){
                errName.innerHTML = ""
              },1000);
        } else if(errName.innerHTML.includes("sin") || errName.innerHTML.includes("cos") || errName.innerHTML.includes("tan") ||
        errName.innerHTML.includes("^2") || errName.innerHTML.includes("log") || errName.innerHTML.includes("π") || 
        errName.innerHTML.includes("√") || errName.innerHTML.includes("e") || errName.innerHTML.includes("%") || 
        errName.innerHTML.includes("^3") || errName.innerHTML.includes("1/") || errName.innerHTML.includes("1/") ||
        errName.innerHTML.includes("+") || errName.innerHTML.includes("-") || errName.innerHTML.includes("/") || 
        errName.innerHTML.includes("*")){
            errName.innerHTML = errName.innerHTML.substring (0, errName.innerHTML.length -screen.value.length);
            errName.innerHTML = errName.innerHTML + screen.value^3 
        }else{
            errName.innerHTML = screen.value^3 
        }
        screen.value = screen.value * screen.value * screen.value ;
        errName.innerHTML += "= " + screen.value;
    })

    rec.addEventListener("click",function(e){
        if(screen.value === ""){
            Error.innerHTML = "Enter a value"
            setTimeout(function(){
                Error.innerHTML = ""
              },3000);
              errName.innerHTML = ""
              setTimeout(function(){
                errName.innerHTML = ""
              },1000);
        }else if(errName.innerHTML.includes("sin") || errName.innerHTML.includes("cos") || errName.innerHTML.includes("tan") ||
        errName.innerHTML.includes("^2") || errName.innerHTML.includes("log") || errName.innerHTML.includes("π") || 
        errName.innerHTML.includes("√") || errName.innerHTML.includes("e") || errName.innerHTML.includes("%") || 
        errName.innerHTML.includes("^3") || errName.innerHTML.includes("1/") || errName.innerHTML.includes("1/") ||
        errName.innerHTML.includes("+") || errName.innerHTML.includes("-") || errName.innerHTML.includes("/") || 
        errName.innerHTML.includes("*")){
            errName.innerHTML = errName.innerHTML.substring (0, errName.innerHTML.length -screen.value.length);
            errName.innerHTML = errName.innerHTML + "1/" + screen.value
        }else{
            errName.innerHTML = "1/"+ screen.value
        }
        screen.value = 1/screen.value 
        errName.innerHTML += "= " + screen.value;
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
            if(errName.innerHTML.includes("sin") || errName.innerHTML.includes("cos") || errName.innerHTML.includes("tan") ||
            errName.innerHTML.includes("^2") || errName.innerHTML.includes("log") || errName.innerHTML.includes("π") || 
            errName.innerHTML.includes("√") || errName.innerHTML.includes("e") || errName.innerHTML.includes("%") || 
            errName.innerHTML.includes("^3") || errName.innerHTML.includes("1/") || errName.innerHTML.includes("1/") ||
            errName.innerHTML.includes("+") || errName.innerHTML.includes("-") || errName.innerHTML.includes("/") || 
            errName.innerHTML.includes("*")){
                errName.innerHTML = errName.innerHTML.substring (0, errName.innerHTML.length -screen.value.length);
                errName.innerHTML = errName.innerHTML + screen.value + "!"
            }else{
                errName.innerHTML = screen.value + "!"
            }
            screen.value = fact
            errName.innerHTML += "= " + screen.value;
        }
    })

    clearhist.addEventListener("click",function (e){
      errName.innerHTML = "";
    })

})();
