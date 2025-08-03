const Result = document.querySelector(".result");
const Button = document.querySelectorAll(".button");
let exp = "";
function Update(res){
    Result.textContent = res;
    exp = res;
}
function cal(exp) {
    console.log(exp);
    let i=0;
    while(i<exp.length){
        if(exp[i] == "+" || exp[i] == "-" || exp[i] == "x" || exp[i] =="/"){
            let num1 = exp.slice(0,i);
            let num2 = exp.slice(i+1);
            num1=parseFloat(num1);
            num2=parseFloat(num2);
            if (exp[i] === "/" && num2 === 0) {
               alert("Error: Division by zero");
               exp="";
               Update(exp);
               return;
            }
            if(exp[i] === "x"){
                let res=num1*num2;
                Update(res);
                return;
            }
            console.log(num1);
            console.log(exp[i]);
            console.log(num2);
            let res = eval(`${num1} ${exp[i]} ${num2}`);
            Update(res);
            return;
        }
        i++;
    }
}
Button.forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.textContent;
    if(button.innerHTML!="="){
        exp += value;
    }
    if(value=="C"){
        exp="";
        Result.textContent = "";
    }
    else if (value == "=") {
      cal(exp);
    } else if (value != "+" && value != "x" && value != "/" && value != "-") {
      Result.textContent += value;
    } else {
      Result.textContent = "";
    }
  });
});
