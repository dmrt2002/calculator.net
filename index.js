(function () {

  //declaring variables

let screen = document.querySelector(".screen")
let buttons = document.querySelectorAll(".button");
let clear = document.querySelector(".btn-clear");
let equal = document.querySelector(".btn-equal");
let back = document.querySelector(".btn-back");
let sin = document.querySelector(".btn-sin");
let cos = document.querySelector(".btn-cos");
let tan = document.querySelector(".btn-tan");
let square = document.querySelector(".btn-square");         
let log = document.querySelector(".btn-log");
let pie = document.querySelector(".btn-pie");
let sqrt = document.querySelector(".btn-root");
let cube = document.querySelector(".btn-cube");
let e = document.querySelector(".btn-e");
let per = document.querySelector(".btn-per");
let rec = document.querySelector(".btn-rec");
let fac = document.querySelector(".btn-fact");
let History = document.querySelector(".History");
let clearhist = document.querySelector(".btn-clearhistory");
let Error = document.querySelector(".ErrorMessage");
let hist = document.querySelector(".HistText");
let isin = document.querySelector(".btn-sin-i");
let icos = document.querySelector(".btn-cos-i");
let itan = document.querySelector(".btn-tan-i");
let power = document.querySelector(".btn-p");

//function for displaying the values on the screen and history div

buttons.forEach(function(button){
button.addEventListener("click",function(e){
    if(screen.value === "/" || screen.value === "+" || screen.value === "-" || screen.value === "*" ){
        Error.innerHTML = "Enter a Value" ;
        setTimeout(function(){
            Error.innerHTML = ""
          },3000);
      setTimeout(function(){
        History.innerHTML = ""
      },1000);
      screen.value = ""
    } else {
      let value = e.target.dataset.num;
      screen.value += value;
      History.innerHTML += value
    }
})
});

equal.addEventListener("click",function(e){
if(screen.value === ""){
    Error.innerHTML = "Enter a value"
    setTimeout(function(){
        Error.innerHTML = ""
      },3000);   
                   // checking whether there is already previous operations done
                   // if true displaying the current operation below the previous operation 
                   // if not display the current operation
                   // if condition is same for every operation

}else if(History.innerHTML.includes("sin") || History.innerHTML.includes("cos") || History.innerHTML.includes("tan") ||
History.innerHTML.includes("log") || History.innerHTML.includes("π") || History.innerHTML.includes("^3") ||
History.innerHTML.includes("√") || History.innerHTML.includes("e") || History.innerHTML.includes("%") || 
History.innerHTML.includes("1/") || History.innerHTML.includes("1/") ||  History.innerHTML.includes("^2") ||
History.innerHTML.includes("+") || History.innerHTML.includes("-") || History.innerHTML.includes("/") || 
History.innerHTML.includes("*"))  {
    let answer =eval(screen.value);
    screen.value = answer;
    History.innerHTML += "=" + answer;

    /*if the screen contains the symbol ^ if yes then extracting the string in the variable values
       converting the the array into an array containing  */

} else if (screen.value.includes("^")){                           
            var values = screen.value.match(/[-+]?[0-9]*\.?[0-9]+/g)
            console.log(values);
           x = values[0]
           y = values[1]
           let answer = Math.pow(x,y)
           screen.value = answer
             if(History.innerHTML.includes("sin") || History.innerHTML.includes("cos") || History.innerHTML.includes("tan") ||
                 History.innerHTML.includes("^2") || History.innerHTML.includes("log") || History.innerHTML.includes("π") || 
                 History.innerHTML.includes("√") || History.innerHTML.includes("e") || History.innerHTML.includes("%") || 
                 History.innerHTML.includes("^3") || History.innerHTML.includes("1/") || History.innerHTML.includes("1/") ||
                 History.innerHTML.includes("+") || History.innerHTML.includes("-") || History.innerHTML.includes("/") || 
                 History.innerHTML.includes("*") || History.innerHTML.includes("^"))  {
                 
                  History.innerHTML = History.innerHTML.substring (0, History.innerHTML.length -screen.value.length);
                  History.innerHTML +=  '<br>'+ x + "^" + y + "=" + answer
                    } else {
                        History.innerHTML = x + "^" + y + "=" + answer
                       }
            } 
})

// clearing the  history div if the screen value is null else going to the new line for new operation
// clearing the screen

clear.addEventListener("click",function(e){ 
if (History.innerHTML.includes("=")){
    History.innerHTML += '<br/>';
} else {
    History.innerHTML = "";
}
screen.value = "";
var values = "";
})

// deleting the previous digit in both screen and history div

back.addEventListener("click",function(e){
screen.value = screen.value.substring(0,screen.value.length -1);
History.innerHTML = History.innerHTML.substring (0, History.innerHTML.length -1);
})

// executing sin of the value displayed in screen if not giving a error and setting the screen value to null

sin.addEventListener("click",function(e){
if(screen.value === ""){
    Error.innerHTML = "Enter a value"
    setTimeout(function(){
        Error.innerHTML = ""
      },3000);
      History.innerHTML = ""
      setTimeout(function(){
        History.innerHTML = ""
      },1000);
}else if(History.innerHTML.includes("sin") || History.innerHTML.includes("cos") || History.innerHTML.includes("tan") ||
             History.innerHTML.includes("^2") || History.innerHTML.includes("log") || History.innerHTML.includes("π") || 
             History.innerHTML.includes("√") || History.innerHTML.includes("e") || History.innerHTML.includes("%") || 
             History.innerHTML.includes("^3") || History.innerHTML.includes("1/") || History.innerHTML.includes("1/") ||
             History.innerHTML.includes("+") || History.innerHTML.includes("-") || History.innerHTML.includes("/") || 
             History.innerHTML.includes("*") || History.innerHTML.includes("^"))  {
                History.innerHTML = History.innerHTML.substring (0, History.innerHTML.length -screen.value.length);
                History.innerHTML = History.innerHTML + "sin " + screen.value

            }else{
                 History.innerHTML = "sin" + " " + screen.value
                }
     screen.value *= 0.0174533;
     let answer = Math.sin(screen.value);
     screen.value = answer
     History.innerHTML += "= " + answer;
})

// executing cos of the value displayed in screen if not giving a error and setting the screen value to null

cos.addEventListener("click",function(e){
if(screen.value === ""){
    Error.innerHTML = "Enter a value"
    setTimeout(function(){
        Error.innerHTML = ""
      },3000);
      History.innerHTML = ""
      setTimeout(function(){
        History.innerHTML = ""
      },1000);
}else if(History.innerHTML.includes("sin") || History.innerHTML.includes("cos") || History.innerHTML.includes("tan") ||
         History.innerHTML.includes("^2") || History.innerHTML.includes("log") || History.innerHTML.includes("π") || 
         History.innerHTML.includes("√") || History.innerHTML.includes("e") || History.innerHTML.includes("%") || 
         History.innerHTML.includes("^3") || History.innerHTML.includes("1/") || History.innerHTML.includes("1/") ||
         History.innerHTML.includes("+") || History.innerHTML.includes("-") || History.innerHTML.includes("/") || 
         History.innerHTML.includes("*") || History.innerHTML.includes("^"))  {
             History.innerHTML = History.innerHTML.substring (0, History.innerHTML.length -screen.value.length);
             History.innerHTML = History.innerHTML + "cos " + screen.value
}else{
    History.innerHTML = "cos" + " " + screen.value
}
screen.value *= 0.0174533;
let answer = Math.cos(screen.value);
screen.value = answer
History.innerHTML += "= " + answer;
})
     
// executing tan of the value displayed in screen if not giving a error and setting the screen value to null

tan.addEventListener("click",function(e){
if(screen.value === ""){
    Error.innerHTML = "Enter a value"
    setTimeout(function(){
        Error.innerHTML = ""
      },3000);
      History.innerHTML = ""
      setTimeout(function(){
        History.innerHTML = ""
      },1000);
}else if(History.innerHTML.includes("sin") || History.innerHTML.includes("cos") || History.innerHTML.includes("tan") ||
          History.innerHTML.includes("^2") || History.innerHTML.includes("log") || History.innerHTML.includes("π") || 
          History.innerHTML.includes("√") || History.innerHTML.includes("e") || History.innerHTML.includes("%") || 
          History.innerHTML.includes("^3") || History.innerHTML.includes("1/") || History.innerHTML.includes("1/") ||
          History.innerHTML.includes("+") || History.innerHTML.includes("-") || History.innerHTML.includes("/") || 
          History.innerHTML.includes("*") || History.innerHTML.includes("^"))  {
             History.innerHTML = History.innerHTML.substring (0, History.innerHTML.length -screen.value.length);
             History.innerHTML = History.innerHTML + "tan " + screen.value
}else{
    History.innerHTML = "tan" + " " + screen.value
}
screen.value = screen.value * 0.0174533;
let answer = Math.tan(screen.value);
screen.value = answer
History.innerHTML += "= " + answer;
})

// executing square of the value displayed in screen if not giving a error and setting the screen value to null

square.addEventListener("click",function(e){
if(screen.value === ""){
    Error.innerHTML = "Enter a value"
    setTimeout(function(){
        Error.innerHTML = ""
      },3000);
      History.innerHTML = ""
      setTimeout(function(){
        History.innerHTML = ""
        screen.value = ""
      },1000);
} else if(History.innerHTML.includes("sin") || History.innerHTML.includes("cos") || History.innerHTML.includes("tan") ||
           History.innerHTML.includes("^2") || History.innerHTML.includes("log") || History.innerHTML.includes("π") || 
           History.innerHTML.includes("√") || History.innerHTML.includes("e") || History.innerHTML.includes("%") || 
           History.innerHTML.includes("^3") || History.innerHTML.includes("1/") || History.innerHTML.includes("1/") ||
           History.innerHTML.includes("+") || History.innerHTML.includes("-") || History.innerHTML.includes("/") || 
           History.innerHTML.includes("*") || History.innerHTML.includes("^"))  {
                History.innerHTML = History.innerHTML.substring (0, History.innerHTML.length -screen.value.length);
                History.innerHTML = History.innerHTML + screen.value + "^2";
}else{
    History.innerHTML = screen.value + "^2" ;
}
let answer = screen.value*screen.value;
screen.value = answer
History.innerHTML += "= " + answer;
})

// executing log of the value displayed in screen if not giving a error and setting the screen value to null

log.addEventListener("click",function(e){
if(screen.value === ""){
    Error.innerHTML = "Enter a value"
    setTimeout(function(){
        Error.innerHTML = ""
      },3000);
      History.innerHTML = ""
      setTimeout(function(){
        History.innerHTML = ""
        screen.value = ""
      },1000);     
}else if(History.innerHTML.includes("sin") || History.innerHTML.includes("cos") || History.innerHTML.includes("tan") ||
          History.innerHTML.includes("^2") || History.innerHTML.includes("log") || History.innerHTML.includes("π") || 
          History.innerHTML.includes("√") || History.innerHTML.includes("e") || History.innerHTML.includes("%") || 
          History.innerHTML.includes("^3") || History.innerHTML.includes("1/") || History.innerHTML.includes("1/") ||
          History.innerHTML.includes("+") || History.innerHTML.includes("-") || History.innerHTML.includes("/") || 
          History.innerHTML.includes("*") || History.innerHTML.includes("^"))  {        
                History.innerHTML = History.innerHTML.substring (0, History.innerHTML.length -screen.value.length);
                History.innerHTML = History.innerHTML +"log " + screen.value
}else{
    History.innerHTML = "log " + screen.value
}
let answer = Math.log(screen.value);
screen.value = answer
History.innerHTML += "= " + answer;
})

// executing multiplication of pie with value displayed in screen if not giving a error and setting the screen value to value of pie

pie.addEventListener("click",function(e){
if(screen.value === ""){
    Error.innerHTML = "Enter a value"
    setTimeout(function(){
       History.innerHTML = "3.1415926536"
        screen.value = "3.1415926536"
      },3000);
      History.innerHTML= ""
      setTimeout(function(){
        History.innerHTML = ""
      },1000);
} else if(History.innerHTML.includes("sin") || History.innerHTML.includes("cos") || History.innerHTML.includes("tan") ||
           History.innerHTML.includes("^2") || History.innerHTML.includes("log") || History.innerHTML.includes("π") || 
           History.innerHTML.includes("√") || History.innerHTML.includes("e") || History.innerHTML.includes("%") || 
           History.innerHTML.includes("^3") || History.innerHTML.includes("1/") || History.innerHTML.includes("1/") ||
           History.innerHTML.includes("+") || History.innerHTML.includes("-") || History.innerHTML.includes("/") || 
           History.innerHTML.includes("*") || History.innerHTML.includes("^"))  {
              History.innerHTML = History.innerHTML.substring (0, History.innerHTML.length -screen.value.length);
              History.innerHTML += screen.value + " * π"
}else{
History.innerHTML = screen.value + " * π"
}
screen.value *= 3.1415926536;
History.innerHTML += "= " + screen.value;
})

// executing square root of the value displayed in screen if not giving a error and setting the screen value to null

sqrt.addEventListener("click",function(e){
if(screen.value === ""){
    Error.innerHTML = "Enter a value"
    setTimeout(function(){
        Error.innerHTML = ""
      },3000);
      History.innerHTML = ""
      setTimeout(function(){
        History.innerHTML = ""
        screen.value = ""
      },1000);
}else if(History.innerHTML.includes("sin") || History.innerHTML.includes("cos") || History.innerHTML.includes("tan") ||
           History.innerHTML.includes("^2") || History.innerHTML.includes("log") || History.innerHTML.includes("π") || 
           History.innerHTML.includes("√") || History.innerHTML.includes("e") || History.innerHTML.includes("%") || 
           History.innerHTML.includes("^3") || History.innerHTML.includes("1/") || History.innerHTML.includes("1/") ||
           History.innerHTML.includes("+") || History.innerHTML.includes("-") || History.innerHTML.includes("/") || 
           History.innerHTML.includes("*") || History.innerHTML.includes("^"))  {
                History.innerHTML= History.innerHTML.substring (0, History.innerHTML.length -screen.value.length);
                History.innerHTML= History.innerHTML + "√" + screen.value
}else{
    History.innerHTML = "√" + screen.value
}
let answer = Math.sqrt(screen.value);
screen.value = answer
History.innerHTML += "= " + answer;
})

// executing multiplication of e with value displayed in screen if not giving a error and setting the screen value to null

e.addEventListener("click",function(e){
if(screen.value === ""){
    Error.innerHTML = "Enter a value"
    setTimeout(function(){
        Error.innerHTML = ""
      },3000);
      History.innerHTML = ""
      setTimeout(function(){
        History.innerHTML = ""
        screen.value = ""
      },1000);
} else if(History.innerHTML.includes("sin") || History.innerHTML.includes("cos") || History.innerHTML.includes("tan") ||
           History.innerHTML.includes("^2") || History.innerHTML.includes("log") || History.innerHTML.includes("π") || 
           History.innerHTML.includes("√") || History.innerHTML.includes("e") || History.innerHTML.includes("%") || 
           History.innerHTML.includes("^3") || History.innerHTML.includes("1/") || History.innerHTML.includes("1/") ||
           History.innerHTML.includes("+") || History.innerHTML.includes("-") || History.innerHTML.includes("/") || 
           History.innerHTML.includes("*") || History.innerHTML.includes("^"))  {
              History.innerHTML = History.innerHTML  + " *e"
}else{
    History.innerHTML =  screen.value + " *e"
}
screen.value *= 2.7182818285
History.innerHTML += "= " + screen.value;
})

// executing percentage of the value displayed in screen if not giving a error and setting the screen value to null

per.addEventListener("click",function(e){
if(screen.value === ""){
    Error.innerHTML = "Enter a value"
    setTimeout(function(){
        Error.innerHTML = ""
      },3000);
      History.innerHTML = ""
      setTimeout(function(){
        History.innerHTML = ""
      },1000);
} else if(History.innerHTML.includes("sin") || History.innerHTML.includes("cos") || History.innerHTML.includes("tan") ||
            History.innerHTML.includes("^2") || History.innerHTML.includes("log") || History.innerHTML.includes("π") || 
            History.innerHTML.includes("√") || History.innerHTML.includes("e") || History.innerHTML.includes("%") || 
            History.innerHTML.includes("^3") || History.innerHTML.includes("1/") || History.innerHTML.includes("1/") ||
            History.innerHTML.includes("+") || History.innerHTML.includes("-") || History.innerHTML.includes("/") || 
            History.innerHTML.includes("*") || History.innerHTML.includes("^"))  {
                History.innerHTML = History.innerHTML.substring (0, History.innerHTML.length -screen.value.length);
                History.innerHTML = History.innerHTML + screen.value + "%"
                screen.value *= 0.01
                History.innerHTML += "=" +  + screen.value;

} else {
   screen.value *= 0.01
   History.innerHTML += "%" + "= " + screen.value;
}

})

// executing cube of the value displayed in screen if not giving a error and setting the screen value to null

cube.addEventListener("click",function(e){
if(screen.value === ""){
    Error.innerHTML = "Enter a value"
    setTimeout(function(){
        Error.innerHTML = ""
      },3000);
      History.innerHTML = ""
      setTimeout(function(){
        History.innerHTML= ""
      },1000);
} else if(History.innerHTML.includes("sin") || History.innerHTML.includes("cos") || History.innerHTML.includes("tan") ||
          History.innerHTML.includes("^2") || History.innerHTML.includes("log") || History.innerHTML.includes("π") || 
          History.innerHTML.includes("√") || History.innerHTML.includes("e") || History.innerHTML.includes("%") || 
          History.innerHTML.includes("^3") || History.innerHTML.includes("1/") || History.innerHTML.includes("1/") ||
          History.innerHTML.includes("+") || History.innerHTML.includes("-") || History.innerHTML.includes("/") || 
          History.innerHTML.includes("*") || History.innerHTML.includes("^"))  {
               History.innerHTML = History.innerHTML.substring (0, History.innerHTML.length -screen.value.length);
               History.innerHTML += screen.value + "^3"
}else{
    History.innerHTML = screen.value + "^3" 
}
let answer = screen.value*screen.value*screen.value ;
screen.value = answer
History.innerHTML += "= " + answer;
})

// executing reciprocol of the value displayed in screen if not giving a error and setting the screen value to null

rec.addEventListener("click",function(e){
if(screen.value === ""){
    Error.innerHTML = "Enter a value"
    setTimeout(function(){
        Error.innerHTML = ""
      },3000);
      History.innerHTML = ""
      setTimeout(function(){
        History.innerHTML = ""
        screen.value = ""
      },1000);
}else if(History.innerHTML.includes("sin") || History.innerHTML.includes("cos") || History.innerHTML.includes("tan") ||
          History.innerHTML.includes("^2") || History.innerHTML.includes("log") || History.innerHTML.includes("π") || 
          History.innerHTML.includes("√") || History.innerHTML.includes("e") || History.innerHTML.includes("%") || 
          History.innerHTML.includes("^3") || History.innerHTML.includes("1/") || History.innerHTML.includes("1/") ||
          History.innerHTML.includes("+") || History.innerHTML.includes("-") || History.innerHTML.includes("/") || 
          History.innerHTML.includes("*") || History.innerHTML.includes("^"))  {
              History.innerHTML = History.innerHTML.substring (0, History.innerHTML.length -screen.value.length);
              History.innerHTML +="1/" + screen.value
}else{
    History.innerHTML = "1/"+ screen.value
}
screen.value = 1/screen.value 
History.innerHTML += "= " + screen.value;
})

// executing factorial of the value displayed in screen if not giving a error and setting the screen value to null

fac.addEventListener("click",function(e){
if(screen.value<0){
    error.innerHTML = "Error"
}
else if (screen.value === 0){
    screen.value = "1"
}
else {
    let fact = 1;
    for (i = 1; i <= screen.value ; i++){
        fact *= i ;
    } 
 if(History.innerHTML.includes("sin") || History.innerHTML.includes("cos") || History.innerHTML.includes("tan") ||
    History.innerHTML.includes("^2") || History.innerHTML.includes("log") || History.innerHTML.includes("π") || 
    History.innerHTML.includes("√") || History.innerHTML.includes("e") || History.innerHTML.includes("%") || 
    History.innerHTML.includes("^3") || History.innerHTML.includes("1/") || History.innerHTML.includes("1/") ||
    History.innerHTML.includes("+") || History.innerHTML.includes("-") || History.innerHTML.includes("/") || 
    History.innerHTML.includes("*") || History.innerHTML.includes("^"))  {
        History.innerHTML = History.innerHTML.substring (0, History.innerHTML.length -screen.value.length);
        History.innerHTML = History.innerHTML + screen.value + "!"
        screen.value = fact ;
        History.innerHTML += "= " + screen.value;
    }else{
        History.innerHTML = screen.value + "!"
        screen.value = fact
        History.innerHTML += "= " + screen.value;
    }
}
})

// clearing the history and the screen value 

clearhist.addEventListener("click",function (e){
History.innerHTML = "";
screen.value = "";
})

power.addEventListener("click",function(e){
if(screen.value === ""){
    Error.innerHTML = "Enter a apropriate value"
    setTimeout(function(){
        Error.innerHTML = ""
      },3000);
      History.innerHTML = ""
      setTimeout(function(){
        History.innerHTML = ""
        screen.value = ""
      },1000);
} else {
    screen.value = screen.value + "^";
    History.innerHTML += "^";
}

})

/*executing inverse of sine of the value displayed in screen if not giving a error and setting the screen value to null
for finding arcsine first need to convert the answer which is given in radians to degrees by multiplying by 57.2958*/

isin.addEventListener("click",function(e){
if(screen.value === ""){
    Error.innerHTML = "Enter a value"
    setTimeout(function(){
        Error.innerHTML = ""
      },3000);
      History.innerHTML = ""
      setTimeout(function(){
        History.innerHTML = ""
      },1000);
}else if(History.innerHTML.includes("sin") || History.innerHTML.includes("cos") || History.innerHTML.includes("tan") ||
             History.innerHTML.includes("^2") || History.innerHTML.includes("log") || History.innerHTML.includes("π") || 
             History.innerHTML.includes("√") || History.innerHTML.includes("e") || History.innerHTML.includes("%") || 
             History.innerHTML.includes("^3") || History.innerHTML.includes("1/") || History.innerHTML.includes("1/") ||
             History.innerHTML.includes("+") || History.innerHTML.includes("-") || History.innerHTML.includes("/") || 
             History.innerHTML.includes("*") || History.innerHTML.includes("^"))  {
                History.innerHTML = History.innerHTML.substring (0, History.innerHTML.length -screen.value.length);
                History.innerHTML = History.innerHTML + "asin" + screen.value

            }else{
                 History.innerHTML = "asin" + " " + screen.value
                }
     let answer = Math.asin(screen.value);
     screen.value = answer*57.2958
     History.innerHTML += "= " + screen.value;
     
})

/*executing inverse of cosine of the value displayed in screen if not giving a error and setting the screen value to null
for finding arccosine first need to convert the answer which is given in radians to degrees by multiplying by 57.2958*/

icos.addEventListener("click",function(e){
if(screen.value === ""){
    Error.innerHTML = "Enter a value"
    setTimeout(function(){
        Error.innerHTML = ""
      },3000);
      History.innerHTML = ""
      setTimeout(function(){
        History.innerHTML = ""
      },1000);
}else if(History.innerHTML.includes("sin") || History.innerHTML.includes("cos") || History.innerHTML.includes("tan") ||
             History.innerHTML.includes("^2") || History.innerHTML.includes("log") || History.innerHTML.includes("π") || 
             History.innerHTML.includes("√") || History.innerHTML.includes("e") || History.innerHTML.includes("%") || 
             History.innerHTML.includes("^3") || History.innerHTML.includes("1/") || History.innerHTML.includes("1/") ||
             History.innerHTML.includes("+") || History.innerHTML.includes("-") || History.innerHTML.includes("/") || 
             History.innerHTML.includes("*") || History.innerHTML.includes("^"))  {
                History.innerHTML = History.innerHTML.substring (0, History.innerHTML.length -screen.value.length);
                History.innerHTML = History.innerHTML + "acos" + screen.value

            }else{
                 History.innerHTML = "acos" + " " + screen.value
                }
     let answer = Math.acos(screen.value);
     screen.value = answer*57.2958
     History.innerHTML += "= " + screen.value;
})

/*executing inverse of tangent of the value displayed in screen if not giving a error and setting the screen value to null
for finding arctangent first need to convert the answer which is given in radians to degrees by multiplying by 57.2958*/

itan.addEventListener("click",function(e){
if(screen.value === ""){
    Error.innerHTML = "Enter a value"
    setTimeout(function(){
        Error.innerHTML = ""
      },3000);
      History.innerHTML = ""
      setTimeout(function(){
        History.innerHTML = ""
      },1000);
}else if(History.innerHTML.includes("sin") || History.innerHTML.includes("cos") || History.innerHTML.includes("tan") ||
             History.innerHTML.includes("^2") || History.innerHTML.includes("log") || History.innerHTML.includes("π") || 
             History.innerHTML.includes("√") || History.innerHTML.includes("e") || History.innerHTML.includes("%") || 
             History.innerHTML.includes("^3") || History.innerHTML.includes("1/") || History.innerHTML.includes("1/") ||
             History.innerHTML.includes("+") || History.innerHTML.includes("-") || History.innerHTML.includes("/") || 
             History.innerHTML.includes("*") || History.innerHTML.includes("^"))  {
                History.innerHTML = History.innerHTML.substring (0, History.innerHTML.length -screen.value.length);
                History.innerHTML = History.innerHTML + "atan" + screen.value

            }else{
                 History.innerHTML = "atan" + " " + screen.value
                }
     let answer = Math.atan(screen.value);
     screen.value = answer * 57.2958
     History.innerHTML += "= " + screen.value;
})

})();




