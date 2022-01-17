function calc(operator){
    var a= document.getElementById("first").value;
    var b= document.getElementById("second").value;
    var output;
    if(operator == "add"){
        output= `Sum is: ${Number(a)+Number(b)}`;
    }
    else if(operator == "sub"){
        output= `Difference is: ${Number(a)-Number(b)}`;
    }
    else if(operator == "mul"){
        output= `Product is: ${Number(a)*Number(b)}`;
    }
    else if(operator == "div"){
        output= `Quotient is: ${Number(a)/Number(b)}`;
    }
    else{
        output= `Remainder is: ${Number(a)%Number(b)}`;
    }
    document.getElementById("output").innerText=output;
}

function clearField(){
    document.getElementById("first").value="";
    document.getElementById("second").value="";
    document.getElementById("output").innerText="";
}
